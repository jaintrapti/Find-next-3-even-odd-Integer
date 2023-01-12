 function hello(){
     document.getElementById('res').innerHTML=""
     let a=document.getElementById('val').value;
    
 
 if(a<0){
 document.getElementById('res').innerHTML="enter a positive number"
 }else if(a%2==0){
   document.getElementById('res').innerHTML=`Next three even Integer are ${parseInt(a)+2} and ${parseInt(a)+4} and ${parseInt(a)+6} ` 
 }else if(a%2!=0){
     document.getElementById('res').innerHTML=`Next three odd Integer are ${parseInt(a)+2} and ${parseInt(a)+4} and ${parseInt(a)+6} ` 
 }  
 }



