const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    // Initialize VanillaTilt for tilt effect
    VanillaTilt.init(box, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
        scale: 1.05
    });

    // Add mousemove event to create light effect
    box.addEventListener("mousemove", function (e) {
        const { width, height, left, top } = box.getBoundingClientRect();
        const xPos = e.clientX - left; // X position of the mouse inside the box
        const yPos = e.clientY - top;  // Y position of the mouse inside the box

        // Calculate percentage positions
        const xPercent = (xPos / width) * 100;
        const yPercent = (yPos / height) * 100;

        // Update the background position to follow the mouse
        box.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(255, 255, 255, 0.6) 10%, transparent 80%)`;
    });

    // Reset the light effect when the mouse leaves the box
    box.addEventListener("mouseleave", function () {
        box.style.background = ""; // Remove the light effect
    });
});



let title = document.querySelector('.hero-up');
let nam = "Get All Farm Produce Fresh On Farm Market";
let index = 1;

const typeWriter = () => {
    let new_title = nam.slice(0, index);
    title.innerText = new_title;

    index++;

    if (index > nam.length) {
        index = 1;
    }

    setTimeout(() => typeWriter(), 100);
}

typeWriter();


document.addEventListener("DOMContentLoaded", function () {
    // Create the glowing cursor element
    const glowCursor = document.createElement('div');
    glowCursor.classList.add('cursor-glow');
    document.body.appendChild(glowCursor);

    // Track mouse movement
    document.addEventListener('mousemove', function (e) {
        glowCursor.style.left = `${e.pageX - 25}px`; // Adjust for cursor center
        glowCursor.style.top = `${e.pageY - 25}px`;
    });

    // Add smooth effect when hovering over container
    const containers = document.querySelectorAll('.page2 .page-cover .container');
    containers.forEach(container => {
        container.addEventListener('mouseover', function () {
            glowCursor.style.transform = 'scale(2)'; // Increase size on hover
        });
        container.addEventListener('mouseout', function () {
            glowCursor.style.transform = 'scale(1)'; // Reset size when not hovering
        });
    });
});
