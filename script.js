const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 60);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};
<!-- Custom JavaScript for Validation -->
<script>
    // Sign In form validation
    const signInForm = document.getElementById('signInForm');
    signInForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('signin-email').value;
        const password = document.getElementById('signin-password').value;

        if (email && password) {
            alert('Sign In successful!');
            signInForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Sign Up form validation
    const signUpForm = document.getElementById('signUpForm');
    signUpForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;

        if (!name || !email || !password || !confirmPassword) {
            alert('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        alert('Sign Up successful!');
        signUpForm.reset();
    });
</script>