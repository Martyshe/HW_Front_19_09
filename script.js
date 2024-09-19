const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const age = document.querySelector('#age');
const save = document.querySelector('#Save');
const restore = document.querySelector('#Restore');
const clear = document.querySelector('#Clear');

function saveInput () {
    const inpObj = {
        firstname: firstname.value,
        lastname: lastname.value,
        age: age.value,
    }
    const saveToLS = localStorage.setItem('input', JSON.stringify(inpObj));
}
save.onclick = () => {
    saveInput();
}

function restoreInput () {
    const getInp = JSON.parse(localStorage.getItem('input'));
    firstname.value = getInp.firstname;
    lastname.value = getInp.lastname;
    age.value = getInp.age;
}

restore.onclick = () => {
    restoreInput();
}

function clearInput () {
    localStorage.removeItem('input');
    firstname.value = '';
    lastname.value = '';
    age.value = '';
}

clear.onclick = () => {
    clearInput();
}
