var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
    title:'Article One!Ankesh Kumar',
    heading:'Article One',
    date:'3 April,2018',
    content: ` <p>
                      This is my first HTML page.This is my first HTML page.This is my first HTML page.This is my first HTML page.This is my first HTML page.This is my first HTML page.This is my first HTML page.This is my first HTML page.This is my first HTML page.This is my first HTML page.This is my first HTML page.This is my first HTML page.
                  </p>
                  
                   <p>
                      This is my first HTML page.This is my first HTML page.This is my first HTML page.This is my first HTML page.This is my first HTML page.This is my first HTML page.This is my first HTML page.This is my first HTML page.This is my first HTML page.This is my first HTML page.This is my first HTML page.This is my first HTML page.
                  </p>
                  <p>
                      This is my first HTML page.This is my first HTML page.This is my first HTML page.This is my first HTML page.This is my first HTML page.This is my first HTML page.This is my first HTML page.This is my first HTML page.This is my first HTML page.This is my first HTML page.This is my first HTML page.This is my first HTML page.
                  </p>`
},
    'article-two':{
    title:'Article Two!Ankesh Kumar',
    heading:'Article Two',
    date:'6 April,2018',
    content: `<div><p>This is an HTML page</p><p>This is an HTML page</p><p>This is an HTML page</p><p>This is an HTML page</p>
                <p>This is an HTML page</p><p>This is an HTML page</p><p>This is an HTML page</p><p>This is an HTML page</p>
                <p>This is an HTML page</p><p>This is an HTML page</p><p>This is an HTML page</p></div>`},
    'article-three':{
    title:'Article Three!Ankesh Kumar',
    heading:'Article Three',
    date:'24 Sep,2018',
    content: `<div><p>This is an HTML page</p><p>This is an HTML page</p><p>This is an HTML page</p><p>This is an HTML page</p>
                <p>This is an HTML page</p><p>This is an HTML page</p><p>This is an HTML page</p><p>This is an HTML page</p>
                <p>This is an HTML page</p><p>This is an HTML page</p><p>This is an HTML page</p></div>`}
};
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmlTemplate=`<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width-device-scale, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
 <body>
     <div class="container">
             <div>
                 <a href="/">Home</a>
             </div>
             <hr/>
             <h1>${heading}</h1>
             <div>
                ${date}
             </div>
              <div>
                 ${content}
              </div>
              <div class="footer">
                <input type="submit" id="submit" value="ClickMe"/>
              </div>
    </div>
 </body>
    
</html>`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
 var names=[];
app.get('/submit-name',function(req,res){
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});


app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});
 

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});