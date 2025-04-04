

document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    let email = document.getElementById('correio').value;

    Swal.fire({
        title: `Email ${email} cadastrado com sucesso! `,
        icon: "success",
        confirmButtonText: "OK"
    }).then(() => {
        console.log( ` Email cadastrado com sucesso ${email} ` )
    });
});
