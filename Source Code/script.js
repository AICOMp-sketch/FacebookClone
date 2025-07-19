
        document.addEventListener('DOMContentLoaded', function() {
            const loginForm = document.querySelector('.login-form');
            const signupForm = document.querySelector('.signup-form');
            const showSignupBtn = document.getElementById('showSignup');
            const showLoginBtn = document.getElementById('showLogin');

            showSignupBtn.addEventListener('click', function() {
                loginForm.classList.add('hidden');
                signupForm.classList.add('active');
            });

            showLoginBtn.addEventListener('click', function() {
                signupForm.classList.remove('active');
                loginForm.classList.remove('hidden');
            });

            document.getElementById('loginForm').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Login functionality would be implemented here');
            });

            document.getElementById('signupForm').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Signup functionality would be implemented here');
            });
        });
