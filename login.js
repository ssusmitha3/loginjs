
function loginform() {
    var usernameInput = document.createElement('input');
    usernameInput.setAttribute('type', 'text');
    usernameInput.setAttribute('id', 'username');
    usernameInput.setAttribute('placeholder', 'Username');
    usernameInput.setAttribute('required', '');
   

    var passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('id', 'password');
    passwordInput.setAttribute('placeholder', 'Password');
    passwordInput.setAttribute('required', '');
   
  
    var confirmpasswordInput = document.createElement('input');
    confirmpasswordInput.setAttribute('type', 'password');
    confirmpasswordInput.setAttribute('id', 'confirmpassword');
    confirmpasswordInput.setAttribute('placeholder', 'Confirm Password');
    confirmpasswordInput.setAttribute('required', '');
    

    var loginButton = document.createElement('button');
    loginButton.setAttribute('type', 'submit');
    loginButton.textContent = 'Login';
  
    
    var loginForm = document.getElementById('login-form');
    loginForm.appendChild(usernameInput);
    loginForm.appendChild(document.createElement('br')); 
    loginForm.appendChild(passwordInput);
    loginForm.appendChild(document.createElement('br')); 
    loginForm.appendChild(confirmpasswordInput);
    loginForm.appendChild(document.createElement('br')); 
    loginForm.appendChild(loginButton);

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var password = document.getElementById('password').value;
        var confirmpassword = document.getElementById('confirmpassword').value;
        var errorMessage = document.getElementById('error-message');

        if (password === confirmpassword) {
            errorMessage.textContent = '';
            alert('Login successful!');
        } else {
            errorMessage.textContent = 'Invalid username or password';
        }
    });
};
loginform();
