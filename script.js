function validateForm(){

    let name  = document.getElementById('name').value
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

     // Regular Expression : It is used to match some pattern

   let regExName = new RegExp(/^\d/)
   let regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

   if (name === "") {
     alert("Name field cannot be empty");
     return false;
   } else if (email === "") {
     alert("Email field cannot be empty");
     return false;
   } else if (phone === "") {
     alert("Phone field cannot be empty");
     return false;
   } else if (regExName.test(name)) {
     alert("Name field cannot contain digit!");
     return false;
   } else if (phone.length != 10) {
     alert("Phone number is Invalid");
     return false;
   } else if (!regExEmail.test(email)) {
     alert("Email is Invalid");
     return false;
   }
   else{
    alert("Form Submitted Successfully!")
    return true;
   }

}