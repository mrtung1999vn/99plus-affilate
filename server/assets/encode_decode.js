var Encodr = require('encodr');

var _3DES = require('nod3des');

const MSGPACK = new Encodr("msgpack")
var crypto = require('crypto-js');

let data = [
    {maSV:'NV0001',ten:'設定'}
]
const EncodeJson = (_data)=>{
    return _3DES.encrypt('SharedKey',MSGPACK.encode(_data).toString('hex'))
                        // Key      , Value
} // return String

// var MaHoa = EncodeJson(data)
// console.log(MaHoa)
const DecodeJson = (_data)=>{
    return MSGPACK.decode(Buffer.from(_3DES.decrypt('SharedKey',_data),'hex')) 
                                                    // Key     ,Value
}// return Json

const EncodeString = (key,data)=>{
    return _3DES.encrypt(key,data)
}

const DecodeString = (key,data)=>{
    return _3DES.decrypt(key,data)
}

const EncodeString_AES = (key,data)=>{
    return crypto.AES.encrypt(data,key)
}

const DecodeString_AES = (key,data)=>{
    return crypto.AES.decrypt(data,key).toString(crypto.enc.Utf8)
}

// console.log(EncodeString('admin','admin123'))
module.exports = {
    EncodeJson,DecodeJson,
    EncodeString,DecodeString,EncodeString_AES,DecodeString_AES
}