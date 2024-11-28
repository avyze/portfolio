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