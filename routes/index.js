var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index'});
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {

  /* Data from my project to be sent to the project view. */
  const title = `All My Projects`;
  
  const DataProject1 = `
    <h3>HTML and CSS Final project</h3>
    <p>Tools used: CSS, HTML and JS</p>
    <img src="/images/Project1.png" alt="Project1" class="ProjectsImg">
  `;
const DataProject2 = `
     <h3>Using Javascript and Json</h3>
      <p>Javascript, json, css and html</p>
      <p>Getting weather from cities in canada</p>
      <img src="/images/Project2.png" alt="Project2" class="ProjectsImg">
     `;

  const DataProject3 = `
    <h3>ASP.Net massage appointment app</h3>        
      <p>tools: ASP.NET, azure, SQL</p>
      <img src="/images/Project3.png" alt="Project3" class="ProjectsImg">
    `;

  const DataProject4 = `
    <h3>Java SCrip OrderForm</h3>        
      <p>tools: HTML,CSS and javascript</p>
      <img src="/images/Project4.png" alt="Project3" class="ProjectsImg">
    `;

  res.render('projects', { DataProject1,DataProject2,DataProject3,title,DataProject4 });
});


/* GET Contact page. */
router.get('/Contact', function(req, res, next) {
  res.render('Contact', { title: 'Contact Me' });
});

module.exports = router;
