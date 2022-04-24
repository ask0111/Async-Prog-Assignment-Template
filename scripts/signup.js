
var userData = JSON.parse(localStorage.getItem('userDetail')) || [];


document.querySelector("#signUp").addEventListener('click', (event)=>{
console.log("hi")

    var userObj ={
        name: document.querySelector('#signUpName').value,
        Contact: document.querySelector('#signUpCNum').value,
        email: document.querySelector('#signUpEmail').value,
        Password: document.querySelector('#signUpPass').value,
    }

    userData.forEach(element => {
        if(element.email == userObj.email){
            alert('already registered on this email')
            loop.stop = true;
        }
    });

    event.preventDefault();
    userData.push(userObj)
    localStorage.setItem('userDetail', JSON.stringify(userData));
    console.log(userData)
});