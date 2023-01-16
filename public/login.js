/*
function entrar() {
  const email = document.getElementById('inputEmail4').value;
  const password = document.getElementById('inputPassword').value;

  if (email == "elizabeth@gmail.com" && password == '12345678') {
    window.location.href = '/bienvenido';
    localStorage.usuario = email
  }
  else if (email == "jessi@gmail.com" && password == '1234567') {
    window.location.href = '/bienvenido';
    localStorage.usuario = email
  }
  else if (email == "kevin@gmail.com" && password == '123456') {
    window.location.href = '/bienvenido';
    localStorage.usuario = email
  }
  else if (email == "rodrigo@gmail.com" && password == '12345678') {
    email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/
    window.location.href = '/bienvenido';
    localStorage.usuario = email
  } 
  else if (email == "" && password == "") {
    alert('Error no ha escrito el correo o contraseña');

  } else {
    alert('Error contraseña o correo incorrecto');
  }

}*/

const userform = document.getElementById("inputEmail4").value
const passform = document.getElementById("inputPassword").value

async function entrar() { 
  
  try {
    const rawResponse = await fetch('https://biitfitstudio.herokuapp.com/login', {
      method: 'POST',
     mode: 'no-cors',
     /* headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
       
      },*/
      body: JSON.stringify({ username: userform , password: passform })
    });
    console.log(rawResponse)
   // if (!rawResponse.ok) // or check for response.status
    //  throw "Error en autenticación del usuario"
    let body = await rawResponse.json() // or .json() or whatever
    console.log(body)// process body
  } catch (err) {
    console.log(err)
  }
}


 /*
const url = 'http://localhost:8080/login';
const userform = document.getElementById("inputEmail4").value
  const passform = document.getElementById("inputPassword").value
  
let data = {
  username: userform,
  password: passform
}

var request = new Request(url, {
	method: 'POST',
	body: data,
	headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
   
  },
});

fetch(request)
.then(function entrar() {
    // Handle response we get from the API
})
*/
