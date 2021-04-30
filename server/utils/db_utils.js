const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'oosipodudb',
  password: 'password',
  port: 5432,
})

/*

age groups 
0 - 0-17
1 - 18-24
2 - 25-34
3 - 35-44
4 - Above 45

create table age_groups(
    id int primary key not null,
    val_text varchar(10) not null
);

insert into age_groups (id, val_text)
values (0, '0-17'),
    (1, '18-24'),
    (2, '25-34'),
    (3, '35-44'),
    (4, 'Above 45');


CREATE TABLE pledgers(
    reg_no SERIAL,
    reg_time TIMESTAMP not null,
    name varchar(120)  not null,
    age_group int,
    phone_no char(10) UNIQUE,
    PRIMARY KEY(reg_no),
    CONSTRAINT fk_age_groups
        FOREIGN KEY(age_group)
            REFERENCES age_groups(id)
);


create table excuse(
    excuse_id int primary key not null,
    excuse_text char(128)
)

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

module.exports.putRegister = function () {
    /*
    INSERT INTO pledgers (reg_time, name, age_group, phone_no)
    VALUES (current_timestamp, 'john wick', 3, 9999999999);
    */
   
    // form submit action into db
    console.log("insert register into db");
}

module.exports.putExcuse = function() {
    console.log("insert excuse into db");
}