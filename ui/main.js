
var button=document.getElementById('counter');

button.onclick=function () {
    
//Create a request Object
 var request= new XMLHttpRequest();
 
//Capture the response and store it to variable
 request.onreadystatechange=function (){
     if(request.readyState===XMLHttpRequest.DONE){
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

//Submit a Name

var submit=document.getElementById('submitBtn');
submit.onclick=function(){
//Makes a request to the server and sends name
 var request= new XMLHttpRequest();
//Capture a list of name and renden it on list
 request.onreadystatechange=function(){
   if(request.readyState===XMLHttpRequest.DONE){
       if(request.status===200){
          var names=request.responseText;
          names=JSON.parse(names);
          var list='';
          for(var i=0;i<names.length;i++){
           list+='<li>'+names[i]+'</li>';
      } 
       
       var ul=document.getElementById('nameList');
        ul.innerHTML=list;
   } } };

var nameInput=document.getElementById('name');
         var name=nameInput.value;
request.open('GET','http://ankeshnayak07jan.imad.hasura-app.io/submit-name?name='+name,true);

};
 