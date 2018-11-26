let arrayPerson = []

function addPerson(){
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastname').value;
    let age = document.getElementById('age').value;
    let gender;

    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value;
    }
    else if (document.getElementById('female').checked) {
        gender = document.getElementById('female').value;
    }

    if (name && lastName && age && gender){  
        arrayPerson.push({
            namePerson: name, 
            lastNamePerson: lastName, 
            agePerson: age, 
            genderPerson: gender
        });
        document.getElementById('info').innerHTML += 'Person № ' + arrayPerson.length + '\r' +
                                                     'name: ' + arrayPerson[arrayPerson.length-1].namePerson + '\r' +
                                                     'last name: ' +  arrayPerson[arrayPerson.length-1].lastNamePerson + '\r' +
                                                     'date: ' +  arrayPerson[arrayPerson.length-1].agePerson + '\r' +
                                                     'gender: ' + arrayPerson[arrayPerson.length-1].genderPerson + '\r\r'
        console.log(arrayPerson);
        clearStack();
    }
    else{
        alert('Заполните все поля');
    }
}

function clearStack(){
        document.getElementById('name').value = '', 
        document.getElementById('lastname').value = '',
        document.getElementById('age').value = ''
}