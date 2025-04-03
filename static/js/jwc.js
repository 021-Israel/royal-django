//Slide de roupas destaque

let contador = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
    }, 3500)


function nextImage(){
    contador++;
    if(contador>5){
        contador = 1;
    }

    document.getElementById("radio"+contador).checked = true;

}


//formulário email do footer

function exibirDados() {
    //Captura os valores dos inputs
    let email = document.getElementById('correio').value;

    //Usando document.write para exibir os dados da página
    document.write('<p><strong>E-mail:</strong> '+email + '</p>')
}



document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Aqui você pode fazer qualquer validação de e-mail ou lógica adicional, se necessário.
    let email = document.getElementById('correio').value;
    
    // Exibe o alerta de sucesso com SweetAlert2
    Swal.fire({
        title: 'Cadastro realizado com sucesso!',
        text: 'E-mail cadastrado: ' + email,
        icon: 'success',
        confirmButtonText: 'OK'
    }).then(() => {
        // Aqui você pode limpar o formulário ou fazer outras ações
        document.getElementById('cadastroForm').reset(); // Opcional: limpa o formulário
    });
});





// Função para mover os slides
function moveSlide(direction, carouselIndex) {
    var carousel = document.querySelectorAll('.carousel')[carouselIndex - 1]; // Seleciona o carrossel correto
    var items = carousel.querySelectorAll('.carousel-item'); // Pega todos os itens do carrossel
    var totalItems = items.length; // Total de itens no carrossel
    var currentIndex = Array.from(items).findIndex(item => item.style.display === 'block'); // Índice do item atual

    // Se não há item visível, começamos do primeiro
    if (currentIndex === -1) currentIndex = 0;

    // Remover a visibilidade do item atual
    items[currentIndex].style.display = 'none';

    // Calcular o novo índice com base na direção
    var newIndex = currentIndex + direction;

    // Lógica para rotação circular
    if (newIndex < 0) {
        newIndex = totalItems - 1; // Vai para o último item se a direção for negativa
    } else if (newIndex >= totalItems) {
        newIndex = 0; // Vai para o primeiro item se a direção for positiva
    }

    // Mostrar o novo item
    items[newIndex].style.display = 'block';
}

// Inicializar todos os carrosséis com o primeiro item visível
document.addEventListener("DOMContentLoaded", function () {
    var carousels = document.querySelectorAll('.carousel');
    carousels.forEach(function (carousel) {
        var items = carousel.querySelectorAll('.carousel-item');
        items.forEach(function (item, index) {
            if (index !== 0) item.style.display = 'none'; // Esconde todos os itens, exceto o primeiro
        });
    });
});





let carrinho = [];

    // Função para adicionar produtos ao carrinho
    function adicionarCarrinho(nomeProduto, precoProduto) {
        carrinho.push({ nome: nomeProduto, preco: precoProduto });
        exibirCarrinho();
    }

    // Função para exibir os itens no carrinho
    function exibirCarrinho() {
        const listaCarrinho = document.getElementById('itensCarrinho');
        const totalCarrinho = document.getElementById('totalCarrinho');
        
        listaCarrinho.innerHTML = ''; // Limpa a lista de itens no carrinho

        let total = 0;
        
        // Exibe os itens no carrinho
        carrinho.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nome} - R$${item.preco.toFixed(2)}`;
            listaCarrinho.appendChild(li);
            total += item.preco;
        });

        totalCarrinho.textContent = total.toFixed(2); // Atualiza o valor total
    }

// Função para finalizar a compra
function finalizarCompra() {
    if (carrinho.length > 0) {
        Swal.fire({
            title: 'Compra finalizada com sucesso!',
            text: 'Total: R$' + document.getElementById('totalCarrinho').textContent,
            icon: 'success',
            draggable: true
        });
        carrinho = []; // Limpa o carrinho
        exibirCarrinho(); // Atualiza o carrinho (agora vazio)
    } else {
        Swal.fire({
            title: 'Carrinho Vazio',
            text: 'Seu carrinho está vazio!',
            icon: 'warning',
            draggable: true
        });
    }
}
