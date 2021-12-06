
const pool = require('../../pgconnect')
const express = require('express')
var fs = require("fs")
var jwt = require('jsonwebtoken');
var encode_decode = require("../../assets/encode_decode")

var privateKey = fs.readFileSync(__dirname+'/private.key');

module.exports = function(app) {
 
    app.get('/Token/:key' , async(req,res)=>{
        try {
            const {key} = req.params

            
            if(key === "0366262072"){
                const newQuery = await pool.query(`SELECT * from token`)
                var token_access =  encode_decode.EncodeString_AES("0366262072", newQuery.rows[0].token_te).toString()

                // console.log(encode_decode.EncodeString_AES("0366262072", newQuery.rows[0].token_te).toString())

                res.json({
                    status:1,
                    message:"Thành công",
                    data:  token_access
                })
            }else{
                res.json({
                    status:0,
                    message:'Hết phiên thao tác người dùng',
                    data: []
                })
            }
        } catch (error) {
            // console.log(error)
            res.json({
                status:0,
                message:'Hết phiên thao tác người dùng',
                data:[]
            })
        }
    })
  
    app.put(`/ThayDoiHinhAnh/:id_don` , async(req,res)=>{
        try{
            const {id_don} = req.params
            const {url} = req.body
            // console.log(id_don,url)
            const newQuery = await pool.query(`
                update don_hang set image = N'${url}'
                where id_don = ${id_don}
            `)
            res.json({
                status: newQuery.rowCount >= 0 ? 1 : 0,
                
            })
        }catch(error){

        }
    })
}








