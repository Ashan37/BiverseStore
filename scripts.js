document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login logic (replace with actual authentication logic)
    if(username === 'user' && password === 'pass') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
});
