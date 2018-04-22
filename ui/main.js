console.log('Loaded!');
var element=document.getElementById('main');
var ele=document.getElementById('main');
element.onclick=function(){
    element.innerHTML='Rit@nku';
};

var img=document.getElementById('img');
   var marginLeft;
function moveRight(){
  marginLeft=marginLeft+3;
 img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
  var interval=setInterval(moveRight,50);  
};
