
var button=document.getElementById('counter');

button.onclick=function () {
    
//Create a request Object
 var request= new XMLHttpRequest();
 
//Capture the response and store it to variable
 request.onreadystatechange=function (){
     if(request.readystate===XMLHttpRequest.DONE){
         if(request.status===200){
             var counter=request.responseText;
             var span=document.getElementById('count');
              span.innerHTML=counter.toString();
         }
     }
     
 };
//Make a request
 request.open('GET','http://ankeshnayak07jan.imad.hasura-app.io/counter',true);
 request.send(null);
};