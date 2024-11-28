const dynamicText = document.querySelector("h1 span");
const words = ["Frontend Designer", "Backend Developer", "Flutter Developer"]

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false

const typeEffect = () => {
    const currentWord = words[wordIndex]
    const currentChar = currentWord.substring(0, charIndex)
    dynamicText.textContent = currentChar;

    if(!isDeleting && charIndex < currentWord.length){
        charIndex++;
        setTimeout(typeEffect, 65);
    } else if(isDeleting && charIndex > 0){
        charIndex--;
        setTimeout(typeEffect, 65);
    }else{
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect()

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
    "location": "Bognor Regis, West Sussex, UK"
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

            setTimeout(typeCode, 25); // Adjust speed of typing
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