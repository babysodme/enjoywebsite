var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '悦咖啡' });
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