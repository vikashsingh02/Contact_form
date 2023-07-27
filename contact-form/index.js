function sendMail(){
    var parmas = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        Phoneno: document.getElementById("phoneno").value,
        address: document.getElementById("address").value,
        Message: document.getElementById("message").value
    };
    const serviceID ="service_jiitnmd";
const templetId ="template_6yhoins"
emailjs.send(serviceID,templetId,parmas)
.then(
    res =>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("phoneno").value="";
        document.getElementById("address").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("messege sent succesfully")
    }
)
.catch((err)=> console.log(err));

// <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
// <script type="text/javascript"
// src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
// </script>
// <script src="index.js"></script>
//   <script type="text/javascript">
//    (function(){
//    emailjs.init("rnNP_SIL4XvvTBRLX");
//   })();
// </script> -->

}
