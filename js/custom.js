
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
		});

// wow
// $(function() {
//     new WOW().init();

//     // Modify each phrase to add a line break after each word
//     const phrases = ["BACKEND DEVELOPER", "FRONTEND DEVELOPER", "PYTHON DEVELOPER", "DATA SCIENTIST"];
//     const lineBreakPhrases = phrases.map(phrase => phrase.split(" ").join("<br>"));
    
//     // Initialize the text rotator with modified phrases
//     $(".rotate").textrotator({
//         words: lineBreakPhrases, // Pass modified phrases to textrotator
//         animation: "flip", // Or any animation type supported by textrotator
//         speed: 2000 // Adjust speed if needed
//     });
// });

$(function() {
    new WOW().init();

    const phrases = [
        "BACKEND DEVELOPER", 
        "FRONTEND DEVELOPER", 
        "PYTHON DEVELOPER", 
        "DATA SCIENTIST"
    ];

    let index = 0;

    function rotateText() {
        // Fade out the current text
        $(".rotate").fadeOut(500, function() {
            // Update text after fade-out
            const phraseWithBreaks = phrases[index].split(" ").join("<br>");
            $(this).html(phraseWithBreaks).fadeIn(500); // Fade in new text

            // Move to the next phrase
            index = (index + 1) % phrases.length;
        });
    }

    // Call rotateText initially and then every 2 seconds
    rotateText();
    setInterval(rotateText, 2000);
});

// Select all sections and navigation boxes
const sections = document.querySelectorAll('.section1');
const navBoxes = document.querySelectorAll('.nav-box');

// Function to update active section
function updateActiveSection() {
    let currentSectionIndex = 0;
    
    // Find which section is currently in view
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        // If section is in viewport (accounting for header height)
        if (rect.top <= 100 && rect.bottom >= 100) {
            currentSectionIndex = index;
        }
    });

    // Update navigation boxes
    navBoxes.forEach((box, index) => {
        if (index === currentSectionIndex) {
            box.classList.add('active');
        } else {
            box.classList.remove('active');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', updateActiveSection);

// Initial check for active section
updateActiveSection();

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

