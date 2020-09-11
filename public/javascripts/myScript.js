
// login form Validation
function loginValidation(form) {

    // regular expression for email
    var email_reg = /\S+@\S+\.\S+/;

    if(email_reg.test(form.email.value) == false)
    {
        alert("Please Enter a Valid Email!");
        return false;
    }
    else if (form.password.value < 8) 
    {
        alert("Password should contain atleast 8 characters");
        return false
    }

}


// Registration Form Validation
function registerValidation(form) {

  // regular expression for email
  var email_reg = /\S+@\S+\.\S+/;

  if(email_reg.test(form.email.value) == false)
  {
      alert("Please Enter a Valid Email!");
      return false;
  }
  else if (form.password.value < 8) 
  {
      alert("Password should contain atleast 8 characters");
      return false
  }  
  else if (form.password.value != form.confirmPassword.value) 
  {
      alert("Password and Confirm Password Does Not Match");
      return false
  }  
}


// New Task Form Validation
function taskValidation(form) {
    
    if(form.name.value == '')
    {
        alert("Please Enter a Valid Task Name");
        return false;
    }
    else if (form.date.value == '') 
    {
        alert("Please Choose A Date");
        return false
    }  
    else if (form.desc.value == '') 
    {
        alert("Please Add the Description");
        return false
    }  
  }