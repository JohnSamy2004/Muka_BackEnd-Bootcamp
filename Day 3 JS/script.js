// Check if JavaScript is working
console.log("JavaScript is working!");

// 1. Change the content of the "About Me" section when the button is clicked
const aboutMeButton = document.getElementById('aboutme-btn');
const aboutMeText = document.getElementById('aboutme-text');

aboutMeButton.addEventListener('click', () => {
    aboutMeText.innerText = "Here's a fun fact about me!"; // Update text on button click
});

// 2. Smooth scrolling when clicking on navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href').substring(1); // Remove the #
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target element
    });
});

// 3. Highlight the active link in the navigation bar when scrolling
window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 50; // Scroll position
    navLinks.forEach(link => {
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        // Add active class to the link if its section is in view
        if (targetElement.offsetTop <= scrollPos && targetElement.offsetTop + targetElement.offsetHeight > scrollPos) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// 4. Validate the contact form before submission
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    
    // Check that fields are not empty
    if (name === '' || email === '') {
        event.preventDefault(); // Prevent form submission
        alert('All fields are required!'); // Error message
    } else {
        alert('Thank you for your message!'); // Success message
    }
});

// 5. Toggle light/dark mode
const toggleButton = document.getElementById('toggle-mode'); // Get the toggle button by ID

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); // Toggle dark mode class
    // Save user preference in localStorage
    const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', mode);
});

// Restore user preference on page load
window.addEventListener('load', () => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark') {
        document.body.classList.add('dark-mode'); // Apply dark mode if it was saved
    }
});

// 6. Add modal window for project previews
const projectLinks = document.querySelectorAll('#projects h3');
const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = `
    <div class="modal-content">
        <span class="close-btn">&times;</span>
        <p>More project details here...</p>
    </div>
`;
document.body.appendChild(modal);

projectLinks.forEach(project => {
    project.addEventListener('click', () => {
        modal.style.display = 'block'; // Show modal when project is clicked
    });
});

// Close modal when close button is clicked
modal.querySelector('.close-btn').addEventListener('click', () => {
    modal.style.display = 'none'; // Hide modal
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none'; // Hide modal when clicking outside
    }
});

// 7. Add interactive skill bars
const skillBars = document.querySelectorAll('.skill-level');

window.addEventListener('load', () => {
    skillBars.forEach((bar) => {
        const level = bar.getAttribute('data-level');
        bar.style.width = `${level}%`; // Animate skill bar width
    });
});

// 8. Add scroll-to-top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerText = 'Scroll to Top';
scrollTopBtn.id = 'scroll-top';
document.body.appendChild(scrollTopBtn); // Add button to the page

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smoothly scroll to the top
});

// Show the button when scrolling down
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopBtn.style.display = 'block'; // Show button
    } else {
        scrollTopBtn.style.display = 'none'; // Hide button
    }
});
