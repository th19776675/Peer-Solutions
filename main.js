// Email Sender
const emailBtn = document.querySelector(".email-btn")
const emailField = document.querySelector("#email-field")

const sendEmail = (content) => {
  window.location.href = "mailto:hello@peerdigital.co?subject=Enquiry&body=" + content;
}

emailBtn.addEventListener("click", function(){
  sendEmail(emailField.value);
  emailField.value = "";
  })