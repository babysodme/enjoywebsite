var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  title: '悦咖啡官网', 
  content:'悦咖啡在北京的第5家店、悦咖啡（天安门店）以“市集”的概念在800平米的营业区域中搭建了花园、书房、浴室、健身房等不同场景表达“Anytime Anywhere Enjoy Your Coffee”的理念。',
  joinus:'悦咖啡始于2013年、创建于北京。悦咖啡意为“取悦自己、享受当下”。无论高兴还是失落，都要学会取悦自己，让生活潇潇洒洒，享受生活给予的每时每刻。这是一家快速发展的本土咖啡连锁品牌，如果你也热爱咖啡，欢迎加入这个团队深耕发展，一起向美好的未来进军。'
});
});
/* GET 门店 page. */
router.get('/shop', function(req, res, next) {
  res.render('shop') ;
});
/* GET 关于我们 page. */
router.get('/aboutus', function(req, res, next) {
    res.render('aboutus');
  });
/* GET 产品 page. */
  router.get('/product', function(req, res, next) {
    res.render('product');
  });
/* GET 联系我们 page. */
  router.get('/contactus', function(req, res, next) {
    res.render('contactus');
  });

  /* GET 联系我们 page. */
  router.get('/join', function(req, res, next) {
    res.render('join');
  });



module.exports = router;