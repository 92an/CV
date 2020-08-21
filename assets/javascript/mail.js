function sendMail(contactForm){
    emailjs.send("gmail", "cv_contact", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "request_type": contactForm.request_type.value,
        "projectsummary": contactForm.projectsummary.value
    })
    .then (function(response){
        console.log("SUCCESS", response);
    },
    function(error){
        console.log("FAILED", error);
    });
return false;}