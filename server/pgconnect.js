/** @format */

const Pool = require("pg").Pool;


// const pool = new Pool({
//   user: "autopart_crawling",
//   host: "crawler.lab.detomo.co.jp",
//   database: "autopart_crawling",
//   password: "slkdfjowieur2u893045",
//   port: 5432,
// });

const pool = new Pool({
  user: "order0phi",
  host: "103.82.20.44",
  database: "order0phi_v1",
  password: "TUng0936563013*",
  port: 5432,
});

module.exports = pool;


// TIME OUT
//#region 
/*

[{"title":"23","price":"23","web":"23","note":"24","qty":"24","image":"24","status":false},{"title":"TESST 2","price":"23","web":"23","note":"24","qty":"24","image":"24","status":false},{"title":"华为跑步手机臂包男女运动手机臂套苹果手机臂带健身手腕包手臂包","price":"17.80","web":"https://detail.1688.com/offer/649741256471.html?spm=a260k.dacugeneral.home2019rec.2.6633436c6v3ZNx&resourceId=850343&udsPoolId=1026341&scm=1007.21237.114566.0&pvid=729312e6-7a72-43c5-863e-bd880e1a6301&tpp_trace=21362b2b16282141933102063e871d","note":"蓝色;蓝色","qty":1,"image":"https://cbu01.alicdn.com/img/ibank/O1CN01A9fgyG230tyKVza1A_!!4134307194-0-cib.jpg","status":false},{"title":"华为跑步手机臂包男女运动手机臂套苹果手机臂带健身手腕包手臂包","price":"17.80","web":"https://detail.1688.com/offer/649741256471.html?spm=a260k.dacugeneral.home2019rec.2.6633436c6v3ZNx&resourceId=850343&udsPoolId=1026341&scm=1007.21237.114566.0&pvid=729312e6-7a72-43c5-863e-bd880e1a6301&tpp_trace=21362b2b16282141933102063e871d","note":"酒红色;酒红色","qty":1,"image":"https://cbu01.alicdn.com/img/ibank/O1CN01cWDzWc230tyGe3ibG_!!4134307194-0-cib.jpg","status":false},{"title":"华为跑步手机臂包男女运动手机臂套苹果手机臂带健身手腕包手臂包","price":"17.80","web":"https://detail.1688.com/offer/649741256471.html?spm=a260k.dacugeneral.home2019rec.2.6633436c6v3ZNx&resourceId=850343&udsPoolId=1026341&scm=1007.21237.114566.0&pvid=729312e6-7a72-43c5-863e-bd880e1a6301&tpp_trace=21362b2b16282141933102063e871d","note":"酒红色;酒红色","qty":1,"image":"https://cbu01.alicdn.com/img/ibank/O1CN01cWDzWc230tyGe3ibG_!!4134307194-0-cib.jpg","status":false},{"title":"华为跑步手机臂包男女运动手机臂套苹果手机臂带健身手腕包手臂包","price":"17.80","web":"https://detail.1688.com/offer/649741256471.html?spm=a260k.dacugeneral.home2019rec.2.6633436c6v3ZNx&resourceId=850343&udsPoolId=1026341&scm=1007.21237.114566.0&pvid=729312e6-7a72-43c5-863e-bd880e1a6301&tpp_trace=21362b2b16282141933102063e871d","note":"浅灰色;浅灰色","qty":1,"image":"https://cbu01.alicdn.com/img/ibank/O1CN01Xqct73230tyJExq5j_!!4134307194-0-cib.jpg","status":false},{"title":"Nike耐克官方NIKE SPORTSWEAR CLUB FRENCH TERRY 男子短裤CZ9931","price":249,"web":"https://detail.tmall.com/item.htm?spm=a221t.1710954.goodlist.72.7804287aUzoMNI&id=639376817364&skuId=4591139441971","note":"XL;010黑/黑/(黑);","qty":1,"image":"//img.alicdn.com/imgextra/i3/890482188/O1CN012Z2Z8s1S29GYyr23a_!!890482188.jpg_150x150q90.jpg","status":false},{"title":"Nike耐克官方NIKE SPORTSWEAR CLUB FRENCH TERRY 男子短裤CZ9931","price":249,"web":"https://detail.tmall.com/item.htm?spm=a221t.1710954.goodlist.72.7804287aUzoMNI&id=639376817364&skuId=4591139441964","note":"2XL;100白/黑/(白);","qty":1,"image":"//img.alicdn.com/imgextra/i3/890482188/O1CN01yhNfRg1S29GcZ219S_!!890482188.jpg_150x150q90.jpg","status":false},{"title":"【预定包邮】WM红蓝异端高达三型1/100MG有色改件非GK不带本体","price":10,"web":"https://item.taobao.com/item.htm?spm=a2141.241046-global.feeds.d_13_0.41ca6f11kawPr5&country=GLOBAL&pvid=9928769f-19cb-44a4-8045-af5314113638&id=630111632201&scm=1007.35313.223891.0&utLogMap=%7B%22card_subtype%22%3A%22auction%22%2C%22up_pvid%22%3A%2255d071a9-f681-4fd6-8317-006be548ee0a%22%2C%22x_object_type%22%3A%22item%22%2C%22matrix_score%22%3A0.0%2C%22x_extend%22%3A%22matchtype%3Arhot%23adCtr%3A0.0%23e1%3A0.0%23e0%3A0.0%23e3%3A0.0%23e2%3A0.0%23a1%3A0.0%23e5%3A0.0%23a0%3A0.0%23e4%3A0.0%23a3%3A0.0%23a2%3A0.0%23a5%3A0.0%23a4%3A0.0%23b0%3A0.0%23b1%3A0.0%23a7%3A0.0%23a6%3A0.0%23a9%3A0.0%23a8%3A0.0%23c6%3Arhot-be%23c7%3Arhot%5Cu001Dbe%23f7%3Arhot%23f8%3Arhot%23itm_assets_dis_p%3A10.0%23isNovel0%23oriMatchType%3Arhot%23sts%3A0%23NewauctionLevel%3A%23deepRecallRankScore%3A0.0198%23matchTypeList%3Arhot%23mind_similar_score%3A0.0%23triggerKeys%3Arhot_trigger_list*80000001060%24%23lts%3A10%23final__score__%3A0.0198%23NewauctionSource%3A%23BoostStage%3A%23rtcis%3A0.95%23gcvr%3A0.0%23lsrs%3A0.0%23triggerQ%3A0.0%23ltrscore%3A0.0%23ecpm%3A0.0%23exp_type%3Aexp1%23benefit%3A%23mega_id%3A28%23virtual_cate%3A51%23cat%3A203509%23wp%3AF%23sl%3AT%22%2C%22x_monitor_info%22%3A%22rhot-be%23%2380000001060%230.033400%230.022939%2310.0%230.307901%230%23be%230%23%231.000000%231.000000%23904014873%22%2C%22miniapp_score%22%3A0.0%2C%22hybrid_score%22%3A0.013927727363653181%2C%22sessionid%22%3A%2290968901-970c-4770-a5a9-dde4f96fdc7f%22%2C%22card_type%22%3A%22auction%22%2C%22tpp_buckets%22%3A%22%22%2C%22x_ts%22%3A1628217267614%2C%22miniapphc_score%22%3A0.0%2C%22pvid%22%3A%229928769f-19cb-44a4-8045-af5314113638%22%2C%22x_item_ids%22%3A630111632201%2C%22auction_score%22%3A0.3079010844230652%2C%22x_sytab%22%3A-1%2C%22x_object_id%22%3A630111632201%7D","note":"红异端定金！全款175！年后出货;","qty":1000,"image":"https%3A//gd3.alicdn.com/imgextra/i2/904014873/O1CN01q1Dact1lrsezi0ZSq_!!904014873.jpg_150x150.jpg","status":false},{"title":"【预定包邮】WM红蓝异端高达三型1/100MG有色改件非GK不带本体","price":10,"web":"https://item.taobao.com/item.htm?spm=a2141.241046-global.feeds.d_13_0.41ca6f11kawPr5&country=GLOBAL&pvid=9928769f-19cb-44a4-8045-af5314113638&id=630111632201&scm=1007.35313.223891.0&utLogMap=%7B%22card_subtype%22%3A%22auction%22%2C%22up_pvid%22%3A%2255d071a9-f681-4fd6-8317-006be548ee0a%22%2C%22x_object_type%22%3A%22item%22%2C%22matrix_score%22%3A0.0%2C%22x_extend%22%3A%22matchtype%3Arhot%23adCtr%3A0.0%23e1%3A0.0%23e0%3A0.0%23e3%3A0.0%23e2%3A0.0%23a1%3A0.0%23e5%3A0.0%23a0%3A0.0%23e4%3A0.0%23a3%3A0.0%23a2%3A0.0%23a5%3A0.0%23a4%3A0.0%23b0%3A0.0%23b1%3A0.0%23a7%3A0.0%23a6%3A0.0%23a9%3A0.0%23a8%3A0.0%23c6%3Arhot-be%23c7%3Arhot%5Cu001Dbe%23f7%3Arhot%23f8%3Arhot%23itm_assets_dis_p%3A10.0%23isNovel0%23oriMatchType%3Arhot%23sts%3A0%23NewauctionLevel%3A%23deepRecallRankScore%3A0.0198%23matchTypeList%3Arhot%23mind_similar_score%3A0.0%23triggerKeys%3Arhot_trigger_list*80000001060%24%23lts%3A10%23final__score__%3A0.0198%23NewauctionSource%3A%23BoostStage%3A%23rtcis%3A0.95%23gcvr%3A0.0%23lsrs%3A0.0%23triggerQ%3A0.0%23ltrscore%3A0.0%23ecpm%3A0.0%23exp_type%3Aexp1%23benefit%3A%23mega_id%3A28%23virtual_cate%3A51%23cat%3A203509%23wp%3AF%23sl%3AT%22%2C%22x_monitor_info%22%3A%22rhot-be%23%2380000001060%230.033400%230.022939%2310.0%230.307901%230%23be%230%23%231.000000%231.000000%23904014873%22%2C%22miniapp_score%22%3A0.0%2C%22hybrid_score%22%3A0.013927727363653181%2C%22sessionid%22%3A%2290968901-970c-4770-a5a9-dde4f96fdc7f%22%2C%22card_type%22%3A%22auction%22%2C%22tpp_buckets%22%3A%22%22%2C%22x_ts%22%3A1628217267614%2C%22miniapphc_score%22%3A0.0%2C%22pvid%22%3A%229928769f-19cb-44a4-8045-af5314113638%22%2C%22x_item_ids%22%3A630111632201%2C%22auction_score%22%3A0.3079010844230652%2C%22x_sytab%22%3A-1%2C%22x_object_id%22%3A630111632201%7D","note":"蓝异端定金！全款175！年后出货;","qty":1,"image":"https://gd4.alicdn.com/imgextra/i2/904014873/O1CN01RsZhZx1lrsezhyQS0_!!904014873.jpg_150x150.jpg","status":false},{"title":"【预定包邮】WM红蓝异端高达三型1/100MG有色改件非GK不带本体","price":10,"web":"https://item.taobao.com/item.htm?spm=a2141.241046-global.feeds.d_13_0.41ca6f11kawPr5&country=GLOBAL&pvid=9928769f-19cb-44a4-8045-af5314113638&id=630111632201&scm=1007.35313.223891.0&utLogMap=%7B%22card_subtype%22%3A%22auction%22%2C%22up_pvid%22%3A%2255d071a9-f681-4fd6-8317-006be548ee0a%22%2C%22x_object_type%22%3A%22item%22%2C%22matrix_score%22%3A0.0%2C%22x_extend%22%3A%22matchtype%3Arhot%23adCtr%3A0.0%23e1%3A0.0%23e0%3A0.0%23e3%3A0.0%23e2%3A0.0%23a1%3A0.0%23e5%3A0.0%23a0%3A0.0%23e4%3A0.0%23a3%3A0.0%23a2%3A0.0%23a5%3A0.0%23a4%3A0.0%23b0%3A0.0%23b1%3A0.0%23a7%3A0.0%23a6%3A0.0%23a9%3A0.0%23a8%3A0.0%23c6%3Arhot-be%23c7%3Arhot%5Cu001Dbe%23f7%3Arhot%23f8%3Arhot%23itm_assets_dis_p%3A10.0%23isNovel0%23oriMatchType%3Arhot%23sts%3A0%23NewauctionLevel%3A%23deepRecallRankScore%3A0.0198%23matchTypeList%3Arhot%23mind_similar_score%3A0.0%23triggerKeys%3Arhot_trigger_list*80000001060%24%23lts%3A10%23final__score__%3A0.0198%23NewauctionSource%3A%23BoostStage%3A%23rtcis%3A0.95%23gcvr%3A0.0%23lsrs%3A0.0%23triggerQ%3A0.0%23ltrscore%3A0.0%23ecpm%3A0.0%23exp_type%3Aexp1%23benefit%3A%23mega_id%3A28%23virtual_cate%3A51%23cat%3A203509%23wp%3AF%23sl%3AT%22%2C%22x_monitor_info%22%3A%22rhot-be%23%2380000001060%230.033400%230.022939%2310.0%230.307901%230%23be%230%23%231.000000%231.000000%23904014873%22%2C%22miniapp_score%22%3A0.0%2C%22hybrid_score%22%3A0.013927727363653181%2C%22sessionid%22%3A%2290968901-970c-4770-a5a9-dde4f96fdc7f%22%2C%22card_type%22%3A%22auction%22%2C%22tpp_buckets%22%3A%22%22%2C%22x_ts%22%3A1628217267614%2C%22miniapphc_score%22%3A0.0%2C%22pvid%22%3A%229928769f-19cb-44a4-8045-af5314113638%22%2C%22x_item_ids%22%3A630111632201%2C%22auction_score%22%3A0.3079010844230652%2C%22x_sytab%22%3A-1%2C%22x_object_id%22%3A630111632201%7D","note":"红异端定金！全款175！年后出货;","qty":1,"image":"https://gd3.alicdn.com/imgextra/i2/904014873/O1CN01q1Dact1lrsezi0ZSq_!!904014873.jpg_150x150.jpg","status":false},{"title":"TheNorthFace北面海外国际进口线男式夹克外套户外防水透气|52ZX","price":1168,"web":"https://detail.tmall.hk/hk/item.htm?spm=a1z10.1-b-s.w20278650-23438761776.5.1e221d6eAxrkwU&id=637287862993&scene=taobao_shop&skuId=4569911741065","note":"XL;JK3/黑色;","qty":1,"image":"//img.alicdn.com/imgextra/i1/2207509733783/O1CN01eb1nGU1doeydrexNW_!!2207509733783.png_150x150q90.jpg","status":false},{"title":"2021新款Ankommling学院风图案儿童书包 原创卡通双肩小学生书包","price":"130.00","web":"https://detail.1688.com/offer/645352059231.html?spm=a260k.dacugeneral.home2019rec.2.6633436cQAuTT7&resourceId=850343&udsPoolId=1026341&scm=1007.21237.114566.0&pvid=211d6895-8b5a-411b-b984-964407d377df&tpp_trace=212cbe6516282175043026189ecffd","note":"宝石绿;宝石绿","qty":2,"image":"https://cbu01.alicdn.com/img/ibank/O1CN01pGNrNP1oHBp8iUlcn_!!946635199-0-cib.jpg","status":false},{"title":"2021新款Ankommling学院风图案儿童书包 原创卡通双肩小学生书包","price":"130.00","web":"https://detail.1688.com/offer/645352059231.html?spm=a260k.dacugeneral.home2019rec.2.6633436cQAuTT7&resourceId=850343&udsPoolId=1026341&scm=1007.21237.114566.0&pvid=211d6895-8b5a-411b-b984-964407d377df&tpp_trace=212cbe6516282175043026189ecffd","note":"哆啦A梦粉;哆啦A梦粉","qty":2,"image":"https://cbu01.alicdn.com/img/ibank/O1CN01IZ3TOx1oHBpEjD3b1_!!946635199-0-cib.jpg","status":false},{"title":"2021新款Ankommling学院风图案儿童书包 原创卡通双肩小学生书包","price":"130.00","web":"https://detail.1688.com/offer/645352059231.html?spm=a260k.dacugeneral.home2019rec.2.6633436cQAuTT7&resourceId=850343&udsPoolId=1026341&scm=1007.21237.114566.0&pvid=211d6895-8b5a-411b-b984-964407d377df&tpp_trace=212cbe6516282175043026189ecffd","note":"哆啦A梦蓝;哆啦A梦蓝","qty":2,"image":"https://cbu01.alicdn.com/img/ibank/O1CN01styAeq1oHBpCjhpln_!!946635199-0-cib.jpg","status":false},{"title":"2021新款Ankommling学院风图案儿童书包 原创卡通双肩小学生书包","price":"130.00","web":"https://detail.1688.com/offer/645352059231.html?spm=a260k.dacugeneral.home2019rec.2.6633436cQAuTT7&resourceId=850343&udsPoolId=1026341&scm=1007.21237.114566.0&pvid=211d6895-8b5a-411b-b984-964407d377df&tpp_trace=212cbe6516282175043026189ecffd","note":"贵族棕;贵族棕","qty":2,"image":"https://cbu01.alicdn.com/img/ibank/O1CN01jGci0y1oHBpBFOotk_!!946635199-0-cib.jpg","status":false},{"title":"2021新款Ankommling学院风图案儿童书包 原创卡通双肩小学生书包","price":"130.00","web":"https://detail.1688.com/offer/645352059231.html?spm=a260k.dacugeneral.home2019rec.2.6633436cQAuTT7&resourceId=850343&udsPoolId=1026341&scm=1007.21237.114566.0&pvid=211d6895-8b5a-411b-b984-964407d377df&tpp_trace=212cbe6516282175043026189ecffd","note":"海绵宝宝;海绵宝宝","qty":2,"image":"https://cbu01.alicdn.com/img/ibank/O1CN01E0XkXx1oHBpBFP9hV_!!946635199-0-cib.jpg","status":false}]
*/
//#endregion