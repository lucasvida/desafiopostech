

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const obj = {
        "names": [form.nome1.value, form.nome2.value],
        "message": `${form.sobre.value}`,
    }
    console.log(obj)

    fetch("https://fsdt-contact.onrender.com/contact", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })

})

