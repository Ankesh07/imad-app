
var counter=document.getElementById('counter');

counter=0;
counter.onclick=function(){
    var count=document.getElementById('count');
    counter=counter+1;
    count.innerHTML=counter.toString();
};