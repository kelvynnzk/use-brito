/* NAVEGAÇÕES E INTERAÇÕES DE PÁGINA */// Funcionalidade do Menu Mobile
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Interação dos botões de Adicionar ao Carrinho
const cartButtons = document.querySelectorAll('.btn-add-cart');
const cartIcon = document.getElementById('cart-icon');
let cartCount = 0;

cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        // Feedback visual simples
        button.textContent = 'Adicionado!';
        button.style.backgroundColor = '#d8a47f'; // Muda para a cor de destaque (accent-color)
        
        // Retorna o botão ao estado normal após 2 segundos
        setTimeout(() => {
            button.textContent = 'Adicionar ao Carrinho';
            button.style.backgroundColor = '#1a1a1a'; // Volta para o padrão
        }, 2000);

        // Um pequeno efeito no ícone do carrinho no cabeçalho
        cartIcon.style.transform = 'scale(1.2)';
        cartIcon.style.color = '#d8a47f';
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
            cartIcon.style.color = 'inherit';
        }, 300);
    });
});






// Envia a mensagem automaticamente //
const mensagem = `
Olá Gostaria de finalizar o meu pedido na Use.Brito.

produto: ${produto.nome}
Tamanho: ${produto.tamanho}
Quantidade: ${produto.quantidade}
Total: ${produto.total}

Nome ${clearInterval.nome}
Endereço: ${cliente.endereco}
`;

window.open(
    `https://wa.me/+5521992751307=${encodeURIComponent(mensagem)}`,
    "_blank"
);