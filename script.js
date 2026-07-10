// Active Navigation Link

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".navbar ul li a");

navLinks.forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});

// Welcome Message

window.addEventListener("load", function () {

    console.log("Welcome to Satyam Kumar's Portfolio");

});

// Resume Download Message

// const resumeButton = document.querySelector(".resume-btn");

// if (resumeButton) {

//     resumeButton.addEventListener("click", function () {

//         alert("Your resume download will start shortly.");

//     });

// }

// Contact Form Validation

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        if (!contactForm.checkValidity()) {

            // Browser ki default warning dikhayega
            return;

        }

        e.preventDefault();

        alert("Message sent successfully!");

        contactForm.reset();

    });

}