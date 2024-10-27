let balance = 0; // Initialize balance

// Function to toggle sections (same as before)
function toggleSection(section) {
    document.getElementById('sign-in').style.display = 'none';
    document.getElementById('sign-up').style.display = 'none';
    document.getElementById('forgot-password').style.display = 'none';

    if (section === 'signIn') {
        document.getElementById('sign-in').style.display = 'block';
    } else if (section === 'signUp') {
        document.getElementById('sign-up').style.display = 'block';
    } else if (section === 'forgotPassword') {
        document.getElementById('forgot-password').style.display = 'block';
    }
}

// Sign In functionality (same as before)
function signIn() {
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;

    // Mockup action
    console.log("Signing in with:", email, password);
    alert("Sign-In successful!");
}

// Sign Up functionality with balance increment
function signUp() {
    const firstName = document.getElementById('signUpFirstName').value;
    const lastName = document.getElementById('signUpLastName').value;
    const phone = document.getElementById('signUpPhone').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;

    // Increment balance and display
    balance += 3000;
    document.getElementById('balance').innerText = `${balance} INR`;
    document.getElementById('balance-container').style.display = 'block';

    console.log("Signing up with:", firstName, lastName, phone, email, password);
    alert("Sign-Up successful! Your investment has been added.");
}
// Forgot Password functionality (same as before)
function forgotPassword() {
    const email = document.getElementById('forgotEmail').value;

    // Mockup action
    console.log("Resetting password for:", email);
    alert("Password reset link sent!");
}
