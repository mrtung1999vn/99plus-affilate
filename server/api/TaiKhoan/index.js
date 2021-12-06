
const pool = require('../../pgconnect')
var fs = require('fs')
var func = require('../../assets/func')
var encode_decode = require("../../assets/encode_decode")
var libs = require("../../libs")
var randomstring = require("randomstring");

function getRandomInt(max) {
    return Math.floor(Math.random() * max).toString();
  }
  
module.exports = function(app) {

    // CRUD Tài khoản (Thêm, sửa, xóa, tìm kiếm)
    // app.post('/DSTaiKhoan' , async (req,res)=>{
    //     try {
    //         const {token} = req.body
            
    //         fs.readFile('TenShop.txt', 'utf8', async (err, data)=>{
    //             if(err) throw res.json({
    //                 status:0,
    //                 message:'Hết phiên thao tác người dùng',
    //                 data:[]
    //             })
    //             const checkToken = await pool.query(`select token_te from token where token_te = N'${token.split("*")[0]}'`)
    //             // //console.log(data)
    //             if(token.split("*")[1] === data && checkToken.rowCount > 0){
    //                 //console.log(data)
    //                 const newQuery = await pool.query("select * from tai_khoan")
    //                 res.json({
    //                     status:1,
    //                     message:'Thành công!',
    //                     data: newQuery.rows
    //                 })

    //             }else{
    //                 res.json({
    //                     status:0,
    //                     message:'Hết phiên thao tác người dùng',
    //                     data:[]
    //                 })
    //             }
    //         });
    //     } catch (error) {
    //         res.json({
    //             status:0,
    //             message:'Hết phiên thao tác người dùng',
    //             data:[]
    //         })
    //     }
    // })

    app.post("/DSTaiKhoan/ThemTaiKhoan" , async (req,res)=>{
        try {
            const {token} = req.body
            console.log(token)
            fs.readFile('TenShop.txt', 'utf8', async (err, data)=>{
                if(err) throw res.json({
                    status:0,
                    message:'Hết phiên thao tác người dùng',
                    data:[]
                })
                const checkToken = await pool.query(`select token_te from token where token_te = N'${token.split("*")[0]}'`)
                //console.log(data)
                if(token.split("*")[1] === data && checkToken.rowCount > 0){

                    const {tai_khoan,mat_khau,ten_nguoi_dung,loai_tk,email,trangthai} = req.body    
                    const checkUser = await pool.query(`
                        select * from tai_khoan where tai_khoan = N'${tai_khoan}'
                    `)

                    if(checkUser.rowCount > 0){
                        res.json({
                            status:0,
                            message:"Dữ liệu đã tồn tại",
                            data: []
                        })
                    }else{
                        const newQuery = await pool.query(`
                            insert into tai_khoan(tai_khoan,mat_khau,ngay,trangthai,ten_nguoi_dung,loai_tk,vi_tien,email)
                            values(N'${tai_khoan}',N'${encode_decode.EncodeString(tai_khoan,mat_khau)}','${func.date_csdl}',${trangthai},N'${ten_nguoi_dung}',N'${loai_tk}',0,N'${email}')
                        `)
                        
                        if(newQuery.rowCount > 0){
                            const newData = await pool.query(`
                            select * from tai_khoan where tai_khoan = N'${tai_khoan}'
                            `)
                            res.json({
                                status:1,
                                message:'Thành công!',
                                data:  newData.rows
                            })
                        }else{
                            res.json({
                                status:0,
                                message:'Lỗi phiên thao tác người dùng',
                                data:[]
                            })
                        }
                    }
                }else{
                    res.json({
                        status:0,
                        message:'Hết phiên thao tác người dùng',
                        data:[]
                    })
                }
            });
        } catch (error) {
            res.json({
                status:0,
                message:'Hết phiên thao tác người dùng',
                data:[]
            })
        }
    })

    app.put("/DSTaikhoan/SuaTaiKhoan" , async (req,res)=>{
        try {
            const {token} = req.body
            
            fs.readFile('TenShop.txt', 'utf8', async (err, data)=>{
                if(err) throw res.json({
                    status:0,
                    message:'Hết phiên thao tác người dùng',
                    data:[]
                })
                const checkToken = await pool.query(`select token_te from token where token_te = N'${token.split("*")[0]}'`)
                //console.log(data)
                if(token.split("*")[1] === data && checkToken.rowCount > 0){

                    const {id_tk,tai_khoan,mat_khau,ngay,ten_nguoi_dung,loai_tk,vi_tien,email,trangthai} = req.body    
                    const checkUser = await pool.query(`
                        select * from tai_khoan where id_tk = ${id_tk}
                    `)

                    if(checkUser.rowCount === 0){
                        res.json({
                            status:0,
                            message:"Lỗi phiên thao tác người dùng",
                            data: []
                        })
                    }else{
                        const newQuery = await pool.query(`
                            UPDATE tai_khoan set ten_nguoi_dung=N'${ten_nguoi_dung}',
                            mat_khau=N'${encode_decode.EncodeString(tai_khoan,mat_khau)}'
                            ,loai_tk=N'${loai_tk}',email=N'${email}',
                            trangthai=${trangthai},tai_khoan=N'${tai_khoan}'
                            Where id_tk = ${id_tk}
                        `)
                        
                        if(newQuery.rowCount > 0){
                            const newData = await pool.query(`
                            select * from tai_khoan where id_tk = ${id_tk}
                            `)
                            res.json({
                                status:1,
                                message:'Thành công!',
                                data: newData.rows
                            })
                        }else{
                            res.json({
                                status:0,
                                message:'Lỗi phiên thao tác người dùng',
                                data:[]
                            })
                        }
                    }
                }else{
                    res.json({
                        status:0,
                        message:'Hết phiên thao tác người dùng',
                        data:[]
                    })
                }
            });
        } catch (error) {
            res.json({
                status:0,
                message:'Hết phiên thao tác người dùng',
                data:[]
            })
        }
    })

    app.delete("/DSTaikhoan/XoaTaiKhoan" , async (req,res)=>{
        try {
            const {token,tai_khoan} = req.body
            console.log(token,tai_khoan)
            fs.readFile('TenShop.txt', 'utf8', async (err, data)=>{
                if(err) throw res.json({
                    status:0,
                    message:'Hết phiên thao tác người dùng',
                    data:[]
                })
                const checkToken = await pool.query(`select token_te from token where token_te = N'${token.split("*")[0]}'`)
                //console.log(data)
                if(token.split("*")[1] === data && checkToken.rowCount > 0){

                    const {tai_khoan,mat_khau,ngay,ten_nguoi_dung,loai_tk,vi_tien,email} = req.body    
                    const checkUser = await pool.query(`
                        select * from tai_khoan where tai_khoan = N'${tai_khoan}'
                    `)

                    if(checkUser.rowCount === 0){
                        res.json({
                            status:0,
                            message:"Lỗi phiên thao tác người dùng",
                            data: []
                        })
                    }else{
                        const newQuery = await pool.query(`
                            DELETE FROM tai_khoan where tai_khoan= N'${tai_khoan}'
                        `)
                        
                        if(newQuery.rowCount > 0){
                            res.json({
                                status:1,
                                message:'Thành công!',
                                data: tai_khoan
                            })
                        }else{
                            res.json({
                                status:0,
                                message:'Lỗi phiên thao tác người dùng',
                                data:[]
                            })
                        }
                    }
                }else{
                    res.json({
                        status:0,
                        message:'Hết phiên thao tác người dùng',
                        data:[]
                    })
                }
            });
        } catch (error) {
            res.json({
                status:0,
                message:'Hết phiên thao tác người dùng',
                data:[]
            })
        }
    })


    // Xử lý đăng nhập
    app.post('/DangNhap' , async (req,res)=>{
        try {
            
            const {token} = req.body
            fs.readFile('TenShop.txt', 'utf8', async (err, data)=>{
                if(err) throw res.json({
                    status:0,
                    message:'Hết phiên thao tác người dùng',
                    data:[]
                })
                const checkToken = await pool.query(`select token_te from token where token_te = N'${token.split("*")[0]}'`)
                
                if(token.split("*")[1] === data && checkToken.rowCount > 0){
                    const {TaiKhoan,MatKhau} = req.body
                    console.log(TaiKhoan,MatKhau)
                    const newQuery = await pool.query(`
                        select * from tai_khoan
                        where tai_khoan = N'${TaiKhoan}' and mat_khau = N'${encode_decode.EncodeString(
                            TaiKhoan,MatKhau
                        )}'
                    `)
                            
                    const OTP = getRandomInt(10000)

                    var subject = `[Hệ thống ${data.split('_')[0]}] Mã OTP đăng nhập`
                    var text = `Mã OTP đăng nhập người dùng\n\n\nOTP: ${OTP}`
                    console.log(newQuery.rows.map(x=>x.email).toString())
                    libs.SendMailGoogle(newQuery.rows.map(x=>x.email).toString(),subject,text)
                    res.json({
                        status: newQuery.rowCount > 0 ? 1 : 0 ,
                        OTP: encode_decode.EncodeString_AES("0366262072",OTP).toString(),
                        message:  newQuery.rowCount > 0 ? 'Thành công!' : 'Đăng nhập thất bại!',
                        data: newQuery.rows
                    })

                }else{
                    res.json({
                        status:0,
                        message:'Hết phiên thao tác người dùng',
                        data:[]
                    })
                }
            });
        } catch (error) {
            res.json({
                status:0,
                message:'Hết phiên thao tác người dùng',
                data:[]
            })
        }
    })
    

    // Xử lý quên mật khẩu

    app.post('/QuenMatKhau'  , async (req,res)=>{
        try {
            const {token} = req.body
            
            fs.readFile('TenShop.txt', 'utf8', async (err, data)=>{
                if(err) throw res.json({
                    status:0,
                    message:'Hết phiên thao tác người dùng',
                    data:[]
                })
                const checkToken = await pool.query(`select token_te from token where token_te = N'${token.split("*")[0]}'`)
                // //console.log(data)
                if(token.split("*")[1] === data && checkToken.rowCount > 0){
                    const {TaiKhoan} = req.body
                    const newQuery = await pool.query(`
                        select * from tai_khoan
                        where tai_khoan = N'${TaiKhoan}'
                    `)
                    const MatKhau = randomstring.generate(15)
                    var _matkhau = encode_decode.EncodeString(TaiKhoan,MatKhau)
                    console.log(_matkhau)
                    const updateUser = await pool.query(`
                    update tai_khoan
                    set mat_khau = N'${_matkhau}'
                    where tai_khoan = N'${TaiKhoan}'`)
                    var subject = `[Hệ thống ${data.split('_')[0]}] Mật khẩu khôi phục tài khoản`
                    var text = `Tài khoản khôi phục của bạn\nTài khoản: ${newQuery.rows.map(x=>x.tai_khoan).toString()}\n Mật khẩu: ${MatKhau}`
                    
                    libs.SendMailGoogle(newQuery.rows.map(x=>x.email).toString(),subject,text)

                    res.json({
                        status: newQuery.rowCount > 0 ? 1 : 0,
                        message:newQuery.rowCount > 0 ? 'Thành công!' : 'Dữ liệu không có trong hệ thống!',
                        data: newQuery.rowCount > 0 ? newQuery.rows: []
                    })

                }else{
                    res.json({
                        status:0,
                        message:'Hết phiên thao tác người dùng',
                        data:[]
                    })
                }
            });
        } catch (error) {
            res.json({
                status:0,
                message:'Hết phiên thao tác người dùng',
                data:[]
            })
        }
    })




    app.post('/DSTaiKhoan/:page' , async(req,res)=>{
        try {
            const {token} = req.body
            
            fs.readFile('TenShop.txt', 'utf8', async (err, data)=>{
                if(err) throw res.json({
                    status:0,
                    message:'Hết phiên thao tác người dùng',
                    data:[]
                })
                const checkToken = await pool.query(`select token_te from token where token_te = N'${token.split("*")[0]}'`)
                // //console.log(data)
                if(token.split("*")[1] === data && checkToken.rowCount > 0){
                    // //console.log(data)
                    const {page} = req.params
                    const newQuery = await pool.query(`select * from tai_khoan LIMIT 10 OFFSET ${page === 1 ? 0 : parseInt(page - 1)*10}`)
                    res.json({
                        status:1,
                        message:'Thành công!',
                        data: 
                        encode_decode.EncodeJson(newQuery.rows)
                        
                    })

                }else{
                    res.json({
                        status:0,
                        message:'Hết phiên thao tác người dùng',
                        data:[]
                    })
                }
            });
        } catch (error) {
            res.json({
                status:0,
                message:'Hết phiên thao tác người dùng',
                data:[]
            })
        }
    })

    app.get(`/TotalPageTaiKhoan` , async(req,res)=>{
        try {
            const newQuery = await pool.query(`
                select count(*) from tai_khoan
            `)

            res.json({
                status: newQuery.rowCount > 0 ? 1 : 0,
                data : Math.ceil(parseInt(newQuery.rows[0].count) /10),
                message :  newQuery.rowCount > 0 ? "Thành công!" : "Thất bại!"
            })
        } catch (error) {
            
        }
    })



    app.get('/CapNhapHeThong' , async(req,res)=>{
        try{
            const tien_thanh_toan  =  await pool.query(`
            select khachhang.id_kh,khachhang.ten_kh,sum(tien_nap) as thanh_toan from nap_tien,khachhang
            where nap_tien.id_kh = khachhang.id_kh
            group by khachhang.id_kh,khachhang.ten_kh
            `)
            if(tien_thanh_toan.rowCount > 0){
                tien_thanh_toan.rows.map(async (x)=>{
                    const newQuery = await pool.query(`
                        update khachhang set thanh_toan = ${x.thanh_toan}
                        where id_kh = ${x.id_kh}
                    `)
                })
            }
            // create view thong_ke_tien_nghiep_vu as
            // select don_hang.ma_don,don_hang.van_don,khachhang.ten_kh,don_hang.ngay,khachhang.id_kh,
            // SUM(tong_tien)"tong_tien",
            // SUM(phi_noi_dia+phi_dich_vu+phu_phi)"chi_phi",
            // SUM(
            // so_khoi*tien_can+so_khoi*tien_khoi
            // )"tien_can_khoi"
            // from don_hang,khachhang
            // where don_hang.id_kh = khachhang.id_kh
            // and don_hang.trangthai != N'Shop huỷ'
            // GROUP BY khachhang.ten_kh,don_hang.ngay, don_hang.ma_don,don_hang.van_don,khachhang.id_kh
            // ORDER BY don_hang.ngay DESC
	
            const tien_nghiep_vu = await pool.query(`
            select id_kh,ten_kh, sum(tong_tien) as tong_tien,
            sum(chi_phi) as chi_phi,sum(tien_can_khoi) as tien_can_khoi from thong_ke_tien_nghiep_vu
            group by id_kh,ten_kh
            `)
            if(tien_nghiep_vu.rowCount > 0){
                tien_nghiep_vu.rows.map(async (x)=>{
                    const newQuery = await pool.query(`
                        update khachhang set tien_can_khoi = ${x.tien_can_khoi},
                        chi_phi = ${x.chi_phi},
                        phi_hang = ${x.tong_tien}
                        where id_kh = ${x.id_kh}
                    `)
                })
            }
            res.json({
                status:1,
                data: []
            })
        }catch(error){
            res.json({
                status:0,
                data: []
            })
        }
    })





    // app.get(`/CapNhapTienDon/:id_don`,async(req,res)=>{
    //     try {
    //         const {id_don}  = req.params
    //         const checkDonCT = await pool.query(`
    //             select * from don_hang_ct
    //             where id_don = ${id_don}
    //         `)
    //         if(checkDonCT.rowCount > 0){
    //             const CapNhapDonHang = await pool.query(`
    //             UPDATE don_hang set tong_tien = (
    //                 select sum(qty*price)*(select ti_gia_tinh from khachhang where id_kh = (select id_kh from don_hang where id_don = ${id_don})) 
    //                 from don_hang_ct
    //                 where id_don = ${id_don}
    //             )
    //             where id_don = ${id_don}
    //             `)
    //         }else{

    //         }
    //     } catch (error) {
            
    //     }
    // })


}


