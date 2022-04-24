var userData = JSON.parse(localStorage.getItem('userDetail')) || [];


document.querySelector("#login").addEventListener('click', (event)=>{

    var email = document.querySelector('#loginEmail').value;
    var Password = document.querySelector('#loginPass').value;
    

    userData.forEach(element => {
        if(element.email == email && element.Password == Password){
            alert('login successfully')
            event.preventDefault();
            window.location.href = 'index.html';
            loop.stop = true;
        }
    });
    alert('invalid Credentials');

    event.preventDefault();
});