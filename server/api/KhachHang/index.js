
const pool = require('../../pgconnect')
var fs = require('fs')
var func = require('../../assets/func')
var encode_decode = require("../../assets/encode_decode")
var randomstring = require("randomstring");
var libs = require("../../libs")
function getRandomInt(max) {
    return Math.floor(Math.random() * max).toString();
  }
  
module.exports = function(app) {

    app.post("/DSKhachHang/ThemKhachHang" , async (req,res)=>{
        try {
            const {token} = req.body
            fs.readFile('TenShop.txt', 'utf8', async (err, data)=>{
                const {ten_kh,dia_chi,so_dt,cmnd,ngay_sinh,email} = req.body 
                // console.log({ten_kh,dia_chi,so_dt,cmnd,ngay_sinh,email})   
                if(err) throw res.json({
                    status:0,
                    message:'Hết phiên thao tác người dùng',
                    data:[]
                })
                const checkToken = await pool.query(`select token_te from token where token_te = N'${token.split("*")[0]}'`)
                
                if(token.split("*")[1] === data && checkToken.rowCount > 0){

                    const {ten_kh,dia_chi,so_dt,cmnd,ngay_sinh,email} = req.body 
                    // console.log({ten_kh,dia_chi,so_dt,cmnd,ngay_sinh,email})   
                    // //console.log(data)
                    const checkUser = await pool.query(`
                        select * from khachhang where ten_kh = N'${ten_kh}'
                    `)

                    if(checkUser.rowCount > 0){
                        res.json({
                            status:0,
                            message:"Dữ liệu đã tồn tại",
                            data: []
                        })
                    }else{
                        const newQuery = await pool.query(`
                        insert into khachhang(ten_kh,dia_chi,so_dt,email,cmnd,ngay_sinh,password)
                        values(N'${ten_kh}',N'${dia_chi}',N'${so_dt}',N'${email}',N'${cmnd}','${ngay_sinh} 00:00:00',N'${so_dt}')
                        `)
                        
                        if(newQuery.rowCount > 0){
                            const newData = await pool.query(`
                            select * from khachhang where ten_kh = N'${ten_kh}'
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
            console.log(error)
            res.json({
                status:0,
                message:'Hết phiên thao tác người dùng',
                data:[]
            })
        }
    })

    app.put("/DSKhachHang/SuaKhachHang" , async (req,res)=>{
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
                    const {ten_kh,dia_chi,so_dt,cmnd,ngay_sinh,email,id_kh,password,ti_gia_tinh,tien_theo_can,tien_theo_khoi} = req.body
                    // console.log({ten_kh,dia_chi,so_dt,cmnd,ngay_sinh,email,id_kh})
                    const checkUser = await pool.query(`
                        select * from khachhang where id_kh = ${id_kh}
                    `)
                    
                    if(checkUser.rowCount === 0){
                        res.json({
                            status:0,
                            message:"Lỗi phiên thao tác người dùng",
                            data: []
                        })
                    }else{
                        const newQuery = await pool.query(`
                        update khachhang set ten_kh = N'${ten_kh}',
                        dia_chi = N'${dia_chi}', so_dt = N'${so_dt}',
                        email = N'${email}',cmnd = N'${cmnd}',
                        ti_gia_tinh = ${ti_gia_tinh}, tien_theo_can= ${tien_theo_can},tien_theo_khoi=${tien_theo_khoi},
                        password = N'${password}',
                        ngay_sinh = '${ngay_sinh} 00:00:00'
                        where id_kh = ${id_kh}                        
                        `)
                        if(newQuery.rowCount > 0){
                            const newData = await pool.query(`
                            select * from khachhang where id_kh = ${id_kh}
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

    app.delete("/DSKhachHang/XoaKhachHang" , async (req,res)=>{
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

                    const {id_kh,ten_kh,mat_khau,ngay,ten_khach,loai_tk,vi_tien,email} = req.body    
                    const checkUser = await pool.query(`
                        select * from khachhang where id_kh = ${id_kh}
                    `)

                    if(checkUser.rowCount === 0){
                        res.json({
                            status:0,
                            message:"Lỗi phiên thao tác người dùng",
                            data: []
                        })
                    }else{
                        const newQuery = await pool.query(`
                            DELETE from khachhang where id_kh = ${id_kh}
                        `)
                        
                        if(newQuery.rowCount > 0){
                            res.json({
                                status:1,
                                message:'Thành công!',
                                data: id_kh
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

    app.post('/DSKhachHang/:page' , async (req,res)=>{
        try {
            const {token,id_kh} = req.body
            
            fs.readFile('TenShop.txt', 'utf8', async (err, data)=>{
                if(err) throw res.json({
                    status:0,
                    message:'Hết phiên thao tác người dùng',
                    data:[]
                })
 
                const checkToken = await pool.query(`select token_te from token where token_te = N'${token.split("*")[0]}'`)
                //console.log(data)
                if(token.split("*")[1] === data && checkToken.rowCount > 0){

                    const {page} = req.params
                    ////  console.log(id_kh)
                    const newQuery = await pool.query(`
                    select * from khachhang 
                    WHERE TRUE 
                    ${id_kh === undefined || id_kh === '' || id_kh === null ? "" : ` and id_kh = ${id_kh}`}
                    LIMIT 10 OFFSET ${page === 1 ? 0 : parseInt(page - 1)*10}`)
                    res.json({
                        status:1,
                        message:'Thành công!',
                        data: encode_decode.EncodeJson(newQuery.rows)
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

    

    app.get(`/TotalPageKhachHang` , async(req,res)=>{
        try {
            const newQuery = await pool.query(`
                select count(*) from khachhang
            `)

            res.json({
                status: newQuery.rowCount > 0 ? 1 : 0,
                data : Math.ceil(parseInt(newQuery.rows[0].count) /10),
                message :  newQuery.rowCount > 0 ? "Thành công!" : "Thất bại!"
            })
        } catch (error) {
            
        }
    })



    app.post(`/DLLocKhachHang` , async(req,res)=>{
        try {
            const {tu_ngay,den_ngay,tim_theo_ten,tim_theo_ma,tim_theo_van,so_dt} = req.body


            // console.log({tu_ngay,den_ngay,tim_theo_ten,tim_theo_ma,tim_theo_van,so_dt})
            const newQuery = await pool.query(`
            select * from khachhang
            where true
            ${tim_theo_ten === "" ? "" : ` and LOWER(convertTVkdau(khachhang.ten_kh)) LIKE LOWER(convertTVkdau(N'%${tim_theo_ten}%'))`}  
            ${so_dt === "" ? "" : ` and so_dt like N'%${so_dt}%'`}  
            
            `)
            res.json({
                status : newQuery.rowCount > 0 ? 1 : 0,
                data: newQuery.rowCount > 0 ? encode_decode.EncodeJson(newQuery.rows) : []
           })
        } catch (error) {
            console.log(error)
        }
    })
    
    
    // #region Khách Hàng
    app.post('/DangKyKhachHang' , async(req,res)=>{
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

                    const {ten_kh,dia_chi,email,so_dt,password} = req.body
                    // console.log({ten_kh,dia_chi,email,so_dt,password})
                    const data = []
                    data.push({ten_kh,dia_chi,email,so_dt,password})
                    const checkData = await pool.query(`
                        select * from khachhang where so_dt = N'${so_dt}'
                    `)
                //     console.log(`
                //     select * from khachhang where so_dt = N'${so_dt}'
                // `)
                    if(checkData.rowCount > 0){
                        res.json({
                            status:0,
                            message:'Người dùng đã có trên hệ thống!',
                            // data: newQuery.rows
                        })
                    }else{
                    //     console.log(`
                    //     insert into khachhang(
                    //         ten_kh,dia_chi,email,so_dt,thanh_toan,tien_theo_can,tien_theo_khoi,gio_hang,password,ti_gia_tinh,data
                    //     )
                    //     values(
                    //         N'${ten_kh}',N'${dia_chi}',N'${email}',N'${so_dt}',0,30000,1500000,N'[]',N'${password}',3750,N'${JSON.stringify(data)}'
                    //     )
                    // `)
                        const newQuery = await pool.query(`
                        insert into khachhang(
                            ten_kh,dia_chi,email,so_dt,thanh_toan,tien_theo_can,tien_theo_khoi,gio_hang,password,ti_gia_tinh,data
                        )
                        values(
                            N'${ten_kh}',N'${dia_chi}',N'${email}',N'${so_dt}',0,30000,1500000,N'[]',N'${password}',3750,N'${JSON.stringify(data)}'
                        )
                    `)
                    res.json({
                        status:1,
                        message:'Thành công!',
                        data: newQuery.rows
                    })
                    }
             

                }else{
                    console.log(error)
                    res.json({
                        status:0,
                        message:'Hết phiên thao tác người dùng',
                        data:[]
                    })
                }
            });
        } catch (error) {
            console.log(error)
            res.json({
                status:0,
                message:'Hết phiên thao tác người dùng',
                data:[]
            })
        }
    })


    app.post('/DangNhapKhach', async (req,res)=>{
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

                    const {TaiKhoan,MatKhau} = req.body

                    const newQuery = await pool.query(`
                        select * from khachhang where 
                        so_dt = N'${TaiKhoan}' and password = N'${MatKhau}'
                    `)

                    if(newQuery.rowCount > 0){
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



    app.post('/QuenMatKhauTK'  , async (req,res)=>{
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
                        select * from khachhang
                        where so_dt = N'${TaiKhoan}'
                    `)
                    const MatKhau = randomstring.generate(15)
                    // var _matkhau = encode_decode.EncodeString(TaiKhoan,MatKhau)
                  
                    const updateUser = await pool.query(`
                    update khachhang
                    set password = N'${MatKhau}'
                    where so_dt = N'${TaiKhoan}'`)
                    var subject = `[Hệ thống ${data.split('_')[0]}] Mật khẩu khôi phục tài khoản`
                    var text = `Tài khoản khôi phục của bạn\nTài khoản: ${newQuery.rows.map(x=>x.so_dt).toString()}\n Mật khẩu: ${MatKhau}`
                    
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




    // #endregion
}



