document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector('.login_form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        
        if (username === '' || password === '') {
            alert('Please fill in both fields.');
            return;
        }

    
        console.log('Username:', username);
        console.log('Password:', password);

        alert('Login successful! Welcome, ' + username + '!');
        
        
    });
});