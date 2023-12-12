function sendMail(){
    var params = {
        name: document.getElementById("fname").value ,
        email: document.getElementById("email").value,
        message: document.getElementById("msg").value,
    };


const serviceID ="service_dtmb69f";
const templateID ="template_nlxhw27";

emailjs
.send(serviceID,templateID,params)
.then((res) => {
        document.getElementById("fname").value ="";
        document.getElementById("email").value ="";
        document.getElementById("msg").value ="";
        console.log(res);
        alert("your message sent successfully");
   })
   .catch((err) => console.log(err));
}