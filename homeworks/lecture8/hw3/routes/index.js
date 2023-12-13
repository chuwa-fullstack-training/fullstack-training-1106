var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/about", (req, res) => {
  res.render('about');
})

router.get("/home", (req, res) => {
  const query = req.query;
  const queryString = JSON.stringify(query) === "{}" ? "" : JSON.stringify(query);
  console.log(queryString);

  res.render('home', {content: queryString});
})

router.post("/create-post", (req, res) => {
  const query = req.body;
  const queryString = JSON.stringify(query) === "{}" ? "" : JSON.stringify(query);
  console.log(queryString);

  res.redirect(`/home?${queryString}`);
})



module.exports = router;
