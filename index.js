function valid(event)
{
   let formval=document.getElementById('form');
   let name=formval.elements['name'].value;
   let username=formval.elements['username'].value;
   let password=formval.elements['password'].value;
   let cpassword=formval.elements['cpassword'].value;
   console.log(username);
   name=name.trim();
  
   if(name=='')
   {
    alert("Name cannot be blank")
   
   }
   else if (name.charAt(0) !== name.charAt(0).toUpperCase()) {
    alert("The first letter of the name should be capitalized");
   }

   if(username=='')
   {
    alert("Username connot be blank")
   }
   else if(username.length < 7)
   {
    alert("Username too short")
   }

   if(password=='')
   {
    alert("Password connot be blank")
   }
   else if(password.length < 7)
   {
    alert("Password too short")
   }
   else
   {
      let hasCapital = /[A-Z]/.test(password);

      let hasSpecialSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

      if (!hasCapital) {
         alert("The Password should contain at least one capital letter");
      } else if (!hasSpecialSymbol) {
         alert("The Password should contain at least one special symbol");
      }
   }

   if(cpassword!== password)
   {
      alert("Password not correct")
   }
}