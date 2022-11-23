document.querySelector('.header__moon').onclick = function() {
  document.querySelector('body').classList.toggle('is-black');
}

document.querySelector('.header__mob-menu').onclick = function() {
  document.querySelector('.header-menu').classList.toggle('is-active');
}

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_ei7lotu";
  const templateID = "template_1vjc0el";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}

sendMail()