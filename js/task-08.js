const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    

    if (email === "" || password === "") {
        alert('Proszę wypełnić wszystkie pola formularza.');
    } else {
        // Możesz wykonać tutaj inne operacje na wartościach email i password, jeśli to konieczne
    }
    console.log(`Login: ${email}, Password: ${password}`);
    const object = {
         
email:email,
password:password


    };
    console.log(object);
    form.reset();
}
