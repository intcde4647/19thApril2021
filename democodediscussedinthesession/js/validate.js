function validate()
{
    
   var status=false;
   var name=document.getElementById("username").value;
   var result=document.getElementById("result");
   if(name=="")
   {
       result.innerHTML="It cannot be left blank";
    
   }
   else
   {
    result.innerHTML="The name is "+name;
     
   }
   return status;
    
}