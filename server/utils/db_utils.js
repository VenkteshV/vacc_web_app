const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

/*

CREATE DATABASE oosipodudb;

CREATE TABLE pledgers(
    reg_no SERIAL,
    reg_time TIMESTAMP not null,
    name varchar(120)  not null,
    pin_code char(6) not null,
    phone_no char(10) UNIQUE not null,
    PRIMARY KEY(reg_no)
);


CREATE TABLE excuses(
    excuse_id SERIAL,
    excuse_text VARCHAR(500)
);

*/
module.exports.getRegisterCount = async function () {
    try {
        
        console.log("getting register count from db");
        const res =  await pool.query('SELECT count(*) from pledgers');
        const theCount = parseInt(res.rows[0]['count'], 10);
        console.log(theCount);
        return theCount;
    } catch (error) {
        console.log(error);
        return -1
        
    }

};

module.exports.getRecentRegisterPeople = async function() {
    try {
        
        console.log("getting recent register people from db");
        const res =  await pool.query('SELECT name,reg_time from pledgers order by reg_no DESC limit 2 ');
        // const theCount = parseInt(res.rows[0]['count'], 10);
        console.log(res.rows);
        return [
            {
                "name": res.rows[0]["name"],
                "timestamp" : res.rows[0]["reg_time"],
            },
            {
                "name": res.rows[1]["name"],
                "timestamp" : res.rows[1]["reg_time"]
            }
        ];
    } catch (error) {
        console.log(error);
        //todo better error
        return  [
            {
                "name": "John Doe",
                "timestamp" : 0
            },
            {
                "name": "Jane Doe",
                "timestamp" : 0
            }
        ];
        
    }
}

module.exports.putRegister = async function (name, phone_no, pin_code) {
    /*
    INSERT INTO pledgers (reg_time, name, age_group, phone_no)
    VALUES (current_timestamp, 'john wick', 3, 9999999999);
    */

    // form submit action into db
    console.log("insert register into db");
    try {
        const theQuery = "INSERT INTO pledgers (reg_time, name, phone_no, pin_code) \
            VALUES(current_timestamp, $1, $2, $3)";
        const theValues = [name, phone_no, pin_code];
        const res = await pool.query(theQuery, theValues);
        
        return {
            "result": true,
            "msg" : "pledge successfully submitted"
        };
    } catch (error) {
        return {
            "result": false,
            "msg" : "pledge submit failed"
        };
    }
}

module.exports.putExcuse = async function(excuse) {
    /*
    INSERT INTO excuses (excuse_text)
    VALUES ('a very long excuse');
    */
   console.log("insert excuse into db");
   try {
       //todo validate excuse text, 
       // - istext, is not null
       const res = await pool.query('INSERT INTO excuses (excuse_text) VALUES($1)', [excuse]);

        return {
            "result": true,
            "msg" : "excuse successfully submitted"
        };

   } catch (error) {
       console.log(error);
    return {
        "result": false,
        "msg" : "excuse submit failed"
    };
       
   }
}



/// some unused scripts
// age groups 
// 0 - 0-17
// 1 - 18-24
// 2 - 25-34
// 3 - 35-44
// 4 - Above 45

// create table age_groups(
//     id int primary key not null,
//     val_text varchar(10) not null
// );

// insert into age_groups (id, val_text)
// values (0, '0-17'),
//     (1, '18-24'),
//     (2, '25-34'),
//     (3, '35-44'),
//     (4, 'Above 45');

