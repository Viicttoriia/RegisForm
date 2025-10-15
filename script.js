const outputElement = document.getElementById('outputArea')

document.getElementById("index.html").onsubmit = function(event) {
    event.preventDefault();
    let name = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
    document.getElementById("output").innerHTML = `<p>Name: ${name}</p>`;
}

function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    document.getElementById("output").innerHTML = `<p>email: ${email}</p>`;
}

