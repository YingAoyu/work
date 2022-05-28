function validateform(){  
var name=document.myform.name.value;  
var num=document.myform.num.value;
  var email=document.myform.email.value;
var message=document.myform.message.value;

 
  if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;  
}
  else if(num.length<11){  
  alert("PhoneNumber must be at least 11 characters long.");
  return false;  
  }
  
else if(email==null || email==""){  
  alert("email can't be blank");  
  return false;
 }
else if(message==null || message==""){  alert("message can't be blank");  
  return false;  
  }
  if (isNaN(num)){
   alert("Enter Numeric value only");
  return false;
}else{
  return true;
  }
}