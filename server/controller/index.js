// //#region API
// const APIExtension = require("../api/APIExtension");
// const DonHang = require("../api/DonHang");
// const GioHang = require("../api/GioHang");
// const KhachHang = require("../api/KhachHang");
// const NapTien = require("../api/NapTien");
// const NganhHang = require("../api/NganhHang")
// const TaiKhoan = require("../api/TaiKhoan");
// const ThongKe = require("../api/ThongKe");
// const Token = require("../api/Token");
// const ThongBao = require("../api/ThongBao");
// const _ThongBao = require("../socket/ThongBao");
// const GioHangSocket = require("../socket/GioHangSocket");

const users = require("../api-affilate/users")


//#region ENDAPI

//#region SOCKET IO

//#endregion
function Controller(app,io){
    users(app)    
    // quản trị, khách hàng 
    // Token(app);TaiKhoan(app);
    // NganhHang(app);KhachHang(app)
    // DonHang(app);ThongKe(app);NapTien(app);
    // ThongBao(app);
    // GioHang(app);APIExtension(app)

    // _ThongBao(io);GioHangSocket(io)


    // Web

    // 
}

module.exports = {
    Controller
}