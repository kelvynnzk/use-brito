/* FUNÇÕES DE ADMINISTRAÇÃO */// Use Brito — Admin
// Interações client-side leves. Sem backend real: os dados são de exemplo
// para você conectar depois à sua API/banco de dados.

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initSearchFilter();
  initSwitches();
  initSidebarActive();
});

// Abas de status (Pedidos, Estoque) filtram linhas de tabela por data-status
function initTabs(){
  document.querySelectorAll('.tabs').forEach(tabGroup => {
    const targetSelector = tabGroup.dataset.target;
    if(!targetSelector) return;
    const rows = document.querySelectorAll(targetSelector + ' tbody tr');

    tabGroup.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        tabGroup.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.dataset.filter;
        rows.forEach(row => {
          const show = filter === 'all' || row.dataset.status === filter;
          row.style.display = show ? '' : 'none';
        });
      });
    });
  });
}

// Campo de busca filtra linhas de uma tabela por texto
function initSearchFilter(){
  document.querySelectorAll('[data-search-target]').forEach(input => {
    const rows = document.querySelectorAll(input.dataset.searchTarget + ' tbody tr');
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      rows.forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(q) ? '' : 'none';
      });
    });
  });
}

// Switches de configurações (visual apenas, sem persistência)
function initSwitches(){
  document.querySelectorAll('.switch input').forEach(input => {
    input.addEventListener('change', () => {
      const row = input.closest('.toggle-row');
      if(row) row.dataset.on = input.checked;
    });
  });
}

// Marca o link ativo da sidebar pelo nome do arquivo atual
function initSidebarActive(){
  const page = location.pathname.split('/').pop() || 'dashboard.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if(href === page) link.classList.add('active');
    else link.classList.remove('active');
  });
}

// Navega para o detalhe do pedido ao clicar na linha (usado em orders.html)
function goToOrder(id){
  location.href = 'order-detail.html?id=' + encodeURIComponent(id);
}

// Navega para o formulário de edição de produto
function editProduct(id){
  location.href = 'products-form.html?id=' + encodeURIComponent(id);
}