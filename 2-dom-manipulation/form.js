const form = document.querySelector('form');

//validate form data
function validateForm(event) {
    event.preventDefault();
    const firstName = document.querySelector('input[id="firstName"]');
    const lastName = document.querySelector('input[id="lastName"]');
    const email = document.querySelector('input[id="email"]');
    const telephone = document.querySelector('input[id="telephone"]');
    const hobbies = document.querySelectorAll('input[type="checkbox"]');
    let isHobbySelected = false;
    let hobbiesSelected = [];

    //regular expresion for name
    const nameReg = /^[a-zA-Z]+$/;

    //regular expresion for email
    const emailReg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    //regular expresion for phone number only numbers
    const phoneReg = /^[0-9]+$/;

    if(!nameReg.test(firstName.value)) {
        alert('First name is not valid');
        return false;
    }

    if(!nameReg.test(lastName.value)) {
        alert('Last name is not valid');
        return false;
    }

    if(!emailReg.test(email.value)) {
        alert('Email is not valid');
        return false;
    }

    if(!phoneReg.test(telephone.value)) {
        alert('Telephone is not valid');
        return false;
    }

    hobbies.forEach(hobby => {
        if (hobby.checked) {
            isHobbySelected = true;
            hobbiesSelected.push(hobby.id);
        }
    });

    if (!isHobbySelected) {
        alert('Please select at least one hobby');
        return false;
    }

    let formData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        telephone: telephone.value,
        hobbies: hobbiesSelected,
    };

    // console.log(formData);
    printData(formData);
}

//print form data to the html
function printData(objectData){
    const div = document.createElement('div');
    div.innerHTML = `
        <p>First name: ${objectData.firstName}</p>
        <p>Last name: ${objectData.lastName}</p>
        <p>Email: ${objectData.email}</p>
        <p>Telephone: ${objectData.telephone}</p>
        <p>Hobbies: ${objectData.hobbies.join(', ')}</p>
    `;
    form.appendChild(div);
}

form.addEventListener('submit', validateForm);