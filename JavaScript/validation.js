const form = document.getElementById("form");
const firstname = document.getElementById("firstName");
const lastname = document.getElementById("lastName");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});
function checkInputs()
{
    //get the value from the inputs
   const firstnamevalue =  firstname.value.trim();
   const lastnamevalue = lastname.value.trim();
   const emailvalue = email.value.trim();
   const subjectvalue = subject.value.trim();
   const phonevalue = phone.value.trim();
   const messagevalue = message.value;

   if(firstnamevalue === '')
   {
       //show error
       //add error class
       setErrorfor(firstname, 'First Name cannnot be blank');
   }else{
       //add success class
       setSucessfor(firstname);
   }
   if(lastnamevalue === '')
   {
       setErrorfor(lastname, 'Last Name cannnot be blank');
   }else{
       setSucessfor(lastname);
   }
   if(emailvalue === '')
   {
       setErrorfor(email, 'Email cannnot be blank');
   }else{
       setSucessfor(email);
   }
   if(phonevalue === '')
   {
       setErrorfor(phone, 'Phone cannnot be blank');
   }else{
       setSucessfor(phone);
   }
   if(subjectvalue === '')
   {
       setErrorfor(subject, 'Subject cannnot be blank');
   }else{
       setSucessfor(subject);
   }
   if(messagevalue === '')
   {
       setErrorfor(message, 'Message cannnot be blank');
   }else{
       setSucessfor(message);
   }
}

function setErrorfor(input, message)
{
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector("small");

    small.innerText = message;
    //error class
    formcontrol.className = "input-group error";
}
function setSucessfor(input)
{
    const formcontrol = input.parentElement;
    formcontrol.className = "input-group success";
}

function validate(obj, message)
{
    if(obj.value == "")
    {
        setErrorfor(obj,message);
    }
    else
    {
        setSucessfor(obj);
    }
}