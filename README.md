 projetoEcommerce

Projeto de e-commerce feito com **React + Vite**.

O app possui navegação entre páginas, autenticação simples, carrinho de compras e tela de checkout.  
Os produtos são carregados de uma lista local e a aplicação usa `localStorage` para salvar o usuário atual e os usuários cadastrados.

 Funcionalidades

- Página inicial com vitrine de produtos
- Página de autenticação com cadastro e login
- Página de detalhes do produto
- Carrinho de compras com controle de quantidade
- Tela de checkout com resumo do pedido
- Persistência simples de login via `localStorage`

 Tecnologias

- React
- Vite
- React Router DOM
- React Hook Form
- CSS
- JavaScript

Como rodar o projeto
- npm install
Rodar em desenvolvimento
- npm run dev
Gerar build de produção
- npm run build
Visualizar o build localmente
- npm run preview

Rotas
- / → Home
- /auth → Login / Cadastro
- /checkout → Checkout
- /products/:id → Detalhes do produto

A aplicação usa dois contextos principais:

- AuthContext: controla cadastro, login, logout e usuário atual.
- CartContext: controla itens do carrinho, quantidade, remoção e total.

Os usuários cadastrados e o usuário logado são salvos no localStorage.

Melhorias futuras
- Integrar com uma API real
- Adicionar autenticação segura
- Salvar carrinho no localStorage
- Criar filtro e busca de produtos
- Adicionar validação mais completa no checkout
- Melhorar responsividade em telas menores

