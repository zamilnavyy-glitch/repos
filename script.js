function switchPasswordType() {
    const passwordInput = document.getElementById('Password');
    const passIcon = document.getElementById('passIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passIcon.classList.remove('bi-eye');
        passIcon.classList.add('bi-eye-slash');
    } else {
        passwordInput.type = 'password';
        passIcon.classList.remove('bi-eye-slash');
        passIcon.classList.add('bi-eye');
    }
}

// Handle form submission
document.querySelector('.form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
    
    if (email && password) {
        alert('Login successful! (Demo)');
        // Di sini bisa ditambahkan logika login sebenarnya
    } else {
        alert('Please fill in all fields!');
    }
});