
var button=document.getElementById('counter');
counter=0;
button.onclick=function(){
    var span=document.getElementById('count');
    counter=counter+1;
    span.innerHTML=counter.toString();
};