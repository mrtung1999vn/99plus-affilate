/** @format */

const pool = require("../../pgconnect");
var fs = require("fs");
var func = require("../../assets/func");
var encode_decode = require("../../assets/encode_decode");
const { timeNow, timeNowDB } = require("../../assets/TimeLibary");
var randomstring = require("randomstring");


module.exports = function(app){
    app.get('/test' ,async(req,res)=>{
        try{
            console.log("host",req.headers.host);
            res.json({
                status: 1,
                data: [],
            })
        }catch(error){
            console.log( error )
        }
    })
}