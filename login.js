const mysql =require('mysql');

const Connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Harish@2375',
    database:'hire_smart'
});
Conncetion.connect(function(error)
{
    if(error)
    {
        throw error;
    }else{
        console.log('MySQL Database is connceted sucessfully ');
    }
});