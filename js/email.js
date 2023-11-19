function  sendMail(){
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value ,
        subject: document.getElementById("subject").value ,
        message: document.getElementById("message").value ,
    };

const serviceID = "service_1pkukgq";
const templateID = "template_zoxbql7";

emailjs
.send(serviceID, templateID, params)
.then((res) => {
    document.getElementById("name").valuse = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Your message sent successfully");
})
    .catch((err) => console.log(err));
}