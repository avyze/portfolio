const dynamicText = document.querySelector(".typing");
const cursor = document.querySelector(".cursor");
const words = ["Frontend Designer", "Backend Developer", "Flutter Developer"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentText = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentText;

    if (!isDeleting && charIndex < currentWord.length) {
        // Typing characters
        charIndex++;
        setTimeout(typeEffect, 65);
    } else if (isDeleting && charIndex > 0) {
        // Deleting characters
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        // Pause and switch to the next word
        isDeleting = !isDeleting;

        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length; // Move to the next word
        }

        setTimeout(typeEffect, 1200); // Pause before switching
    }
};

typeEffect();

document.addEventListener("DOMContentLoaded", () => {
    const codeContent = document.getElementById("code-content");
    const codeText = `
{
  "name": "Patryk Lickowski",
  "role": "Web Developer",
  "skills": [
    "JavaScript",
    "Python",
    "HTML",
    "CSS",
    "Django",
    "Flutter"
  ],
  "about_me": {
    "description": "I am an aspiring web developer with a passion for 
    creating innovative solutions with creative interfaces",
    "education": "A-Level Computer Science",
    "location": "West Sussex, UK"
  },
  "contact": {
    "email": "patryk.lickowski2711@gmail.com",
    "github": "https://github.com/avyze"
  }
}
`;

    let index = 0;
    const cursor = document.createElement("span");
    cursor.className = "cursor"; // Cursor class to style it
    cursor.textContent = ""; // The cursor itself
    codeContent.appendChild(cursor); // Initially append the cursor at the end

    function typeCode() {
        if (index < codeText.length) {
            // Add the current character to the text
            codeContent.textContent = codeText.substring(0, index + 1);
            index++;

            // Re-append the cursor to ensure it's at the end of the text
            codeContent.appendChild(cursor);

            setTimeout(typeCode, 35); // Adjust speed of typing
        } else {
            // Start the blinking effect after typing is complete
            cursor.classList.add("blinking");
        }
    }

    // Start the typing animation
    typeCode();
});

document.addEventListener("DOMContentLoaded", function () {
    particlesJS("particles-js", {
        particles: {
            number: { value: 20, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 1 },
            size: { value: 3 },
            move: { enable: true, speed: 2 },
        },
        retina_detect: true,
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach((item) => {
        item.addEventListener("click", () => {
            // Toggle a modal or expand the grid tile for detailed view
            alert(`You clicked on ${item.dataset.info}`);
        });
    });
});
