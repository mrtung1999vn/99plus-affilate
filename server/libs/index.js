var randomstring = require("randomstring");
const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const pool = require('../pgconnect')
// phamthanhtung15693@gmail.com

const smtpTransport  = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hethong3000@gmail.com',
      pass: 'TUng0936563013*',
    }
  });
  const SendMailGoogle = (email,subject,text)=>{
      try {
        const mailOptions = {
            from: 'hethong3000@gmail.com',
            to: email,
            subject: subject,
            text: text,
        };
         
        smtpTransport.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
        });
        return 1
      } catch (error) {
        return 0
      }
  }



  const CapNhapDonHang = async (id_don)=>{
    const checkDonCT = await pool.query(`
        select * from don_hang_ct
        where id_don = ${id_don}
    `)
    if(checkDonCT.rowCount > 0){
        const CapNhapDonHang = await pool.query(`
        UPDATE don_hang set tong_tien = (
            select sum(qty*price)*(select ti_gia_tinh from khachhang where id_kh = (select id_kh from don_hang where id_don = ${id_don})) 
            from don_hang_ct
            where id_don = ${id_don}
        )
        where id_don = ${id_don}
        `)
    }else{

    }
  }
  module.exports = {
      SendMailGoogle,CapNhapDonHang
  }