const express = require('express')
const router = express.Router()
const mysql = require('mysql2');

const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'knacx_test'
});

dbConnection.connect()

// question2
router.get('/', (req, res)=>{
    res.render('index')
})


// question1
// create
router.post('/cCovid19', (req, res)=>{

    const {fname, lname, tel, addr, note}  = req.body
    const created_at = new Date(Date.now());

    if(!fname || !lname || !tel || !addr){  
        res.send({message:"Insert failed."})
    }else{
        dbConnection.query('INSERT INTO tbl_register_covid(fname, lname, tel, addr, note, created_at) VALUE(?,?,?,?,?,?)', [fname, lname, tel, addr, note, created_at], (error, results) =>{     
            if(error){ console.log(error) }       
            res.send({message:"Insert Success."})
        }) 
    }
        
})

// read
router.get('/rCovid19', (req, res)=>{

    dbConnection.query('SELECT * FROM tbl_register_covid', (error, results) =>{  
        if(error){ console.log(error) }          
        let message = results.length === 0? "ไม่มีข้อมูล":"มีข้อมูลในระบบ"
        res.send({message:message, data:results})
    })   

})

// read/id
router.get('/rCovid19/:id', (req, res)=>{

    let id = req.params.id
    if(!id){  
        res.send({message:"Cannot read."})
    }else{
        dbConnection.query('SELECT * FROM tbl_register_covid WHERE id=?', [id],  (error, results) =>{
            if(error){ console.log(error) }            
            let message = results.length === 0? "ไม่มีข้อมูล":"มีข้อมูลในระบบ"
            res.send({message:message, data:results})
        })  
    }
    
})



// update
router.put('/uCovid19', (req, res)=>{

    const {id, fname, lname, tel, addr, note}  = req.body

    if(!id || !fname || !lname || !tel || !addr){  
        res.send({message:"Update failed."})
    }else{
        dbConnection.query('UPDATE tbl_register_covid SET fname=?, lname=?, tel=?, addr=?, note=? WHERE id=?',[fname, lname, tel, addr, note, id], (error, results) =>{ 
            if(error){ console.log(error) }         
            res.send({message:"Update Success."})
        })   
    }

})


// delete
router.delete('/dCovid19/:id', (req, res)=>{

    let id = req.params.id
    if(!id){  
        res.send({message:"DELETE failed."})
    }else{
        dbConnection.query('DELETE FROM tbl_register_covid WHERE id=?', [id], (error, results) =>{          
            res.send({message:"DELETE Success."})
        }) 
    }  

})

module.exports = router