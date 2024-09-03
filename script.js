
let hamburger = document.querySelector('.hamburger');
let navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
}

// Dropdown menu
function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    var arrow = document.getElementById("arrow");

    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
        arrow.classList.remove("arrow-up"); // Point arrow down
    } else {
        dropdown.style.display = "block";
        arrow.classList.add("arrow-up"); // Point arrow up
    }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.closest('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var arrow = document.getElementById("arrow");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
                arrow.classList.remove("arrow-up"); // Reset to down arrow
            }
        }
    }
}

// Brand slider
document.addEventListener("DOMContentLoaded", function () {
    const brandActive = document.querySelector('.brand-active');
    let translateX = 0;
    const interval = 1500; // 1.5 seconds for each slide
    let slideTimer;

    function slide() {
        const firstBrand = brandActive.querySelector('.single-brand');
        const firstBrandWidth = firstBrand.offsetWidth + 20; // Include the gap between images

        translateX -= firstBrandWidth;
        brandActive.style.transition = 'transform 0.5s ease-in-out';
        brandActive.style.transform = `translateX(${translateX}px)`;

        slideTimer = setTimeout(() => {
            brandActive.appendChild(firstBrand); // Move the first image to the end
            translateX += firstBrandWidth; // Adjust translateX to prevent a jump
            brandActive.style.transition = 'none';
            brandActive.style.transform = `translateX(${translateX}px)`;

            // Re-enable the transition and set the next slide
            setTimeout(() => {
                brandActive.style.transition = 'transform 0.5s ease-in-out';
                slideTimer = setTimeout(slide, interval);
            }, 50);
        }, 500);
    }

    slideTimer = setTimeout(slide, interval);

    // Pause the sliding on hover
    brandActive.addEventListener('mouseover', function () {
        clearTimeout(slideTimer);
    });

    // Resume the sliding on mouseout
    brandActive.addEventListener('mouseout', function () {
        slideTimer = setTimeout(slide, interval);
    });
});

// testimonial-slider
const wrapper = document.querySelector(".testimonial-wrapper");
const testimonials = document.querySelectorAll(".single-testimonial");
let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100; // Slide to the current testimonial
    wrapper.style.transform = `translateX(${offset}%)`;
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateCarousel();
}

// Autoplay interval
setInterval(nextTestimonial, 5000); // Change slide every 5 seconds

updateCarousel(); // Initialize the position