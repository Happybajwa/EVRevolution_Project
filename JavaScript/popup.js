//getting document from page
const open = document.getElementById("popbtn");
const close = document.getElementById("close");
const popup = document.getElementById("modal");
const subscribe_email = document.getElementById("emailsubscribe");


open.addEventListener('click', checksubscribe)
//functoion to check user email is given or not
function checksubscribe()
{
    if(subscribe_email.value === "")
    {
        let message = document.getElementById("subscribe-message")
        message.innerHTML = "Please Enter your email"
        message.className = "subscribe-message show"

    }else
    {
            popup.classList.add("show")
            close.addEventListener("click", () => {
            popup.classList.remove("show")
            let message = document.getElementById("subscribe-message")
            message.innerHTML = ""
            message.className = "subscribe-message"
            subscribe_email.value = "";
 });
    }
}

//cheking inputs so that if they are empty pop-up wont open and an error message will be thrown
const btn = document.getElementById("send-request");
btn.addEventListener('click', checkInputs2) 

function checkInputs2()
{
    const firstname = document.getElementById("firstName");
    const lastname = document.getElementById("lastName");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");

   const firstnamevalue =  firstname.value.trim();
   const lastnamevalue = lastname.value.trim();
   const emailvalue = email.value.trim();
   const subjectvalue = subject.value.trim();
   const phonevalue = phone.value.trim();
   const messagevalue = message.value;


   if(firstnamevalue === '' || lastnamevalue === '' || emailvalue === ''|| phonevalue === ''|| subjectvalue === '' || messagevalue === '')
   {
        var m = document.getElementById("btnmsg");
        m.innerHTML = "Please fill all the required information."
        m.className = "senderror show"
   }else
   {

    const send = document.getElementById("send-request");
    const close_popup = document.getElementById("close-request");
    const popup_request= document.getElementById("modal-request");
    
    send.addEventListener("click", () => {
        popup_request.classList.add("show")
    });
    
    close_popup.addEventListener("click", () => {
        popup_request.classList.remove("show")
        
            firstname.value = "";
            lastname.value = "";
            email.value = "";
            subject.value = "";
            phone.value = "";
            message.value = "";
            location.reload()
    });
   }
}




