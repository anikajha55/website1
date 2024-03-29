var typed = new Typed('#element', {
    strings: ['Student.', 'Learner.', 'Artist.', 'Performer.', 'Video Editor.'],
    typeSpeed: 50,
    loop: true, // Add this option to loop the animation
});
document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contactForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Display confirmation popup
        if (confirm("Are you sure you want to send this message?")) {
            // If user confirms, submit the form
            form.submit();
        } else {
            // If user cancels, do nothing
            return false;
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Add smooth scrolling to all links
    var navLinks = document.querySelectorAll("nav ul li a");
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            var targetId = this.getAttribute("href").substring(1); // Get the target section id
            var targetSection = document.getElementById(targetId); // Get the target section
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" }); // Scroll to the target section smoothly
        });
    }
});
