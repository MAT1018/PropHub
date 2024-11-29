// Handle sign up form submission
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            password: document.getElementById('password').value,
            confirmPassword: document.getElementById('confirmPassword').value
        };

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Here you would typically send the data to a backend server
        console.log('Sign up data:', formData);
        alert('Sign up successful! Please check your email for verification.');
    });
}

// Handle sign in form submission
const signinForm = document.getElementById('signinForm');
if (signinForm) {
    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        };

        // Here you would typically send the data to a backend server
        console.log('Sign in data:', formData);
        alert('Sign in successful!');
    });
}

// DigiLocker integration mock function
function connectDigilocker() {
    alert('Connecting to DigiLocker... This is a mock implementation.');
    // Here you would implement the actual DigiLocker integration
}