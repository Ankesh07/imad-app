
var counter=document.getElementById('counter');
var count=document.getElementById('count');
counter=0;
counter.onclick=function(){
    counter=counter+1;
    count.innerHTML=counter.toString();
};