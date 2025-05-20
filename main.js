// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality would go here
    // For future implementation
    
    // Image gallery functionality for listing detail page
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image');
    
    if (thumbnails && mainImage) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // In a real implementation, this would swap the main image
                // For now, just change the background color to simulate
                mainImage.style.backgroundColor = getRandomColor();
            });
        });
    }
    
    // Simple form validation for contact form
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            if (!name.value || !email.value || !message.value) {
                e.preventDefault();
                alert('Please fill in all required fields');
            }
        });
    }
    
    // Function to generate random colors (for demo purposes)
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    // Initialize all image placeholders with random colors
    const placeholders = document.querySelectorAll('[class$="-image"], .owner-avatar, .reviewer-avatar, .member-photo, .thumbnail');
    placeholders.forEach(el => {
        el.style.backgroundColor = getRandomColor();
    });
});