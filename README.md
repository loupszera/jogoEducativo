# Protótipo - Jogo da Memória: Artesanato Brasileiro

Este é um protótipo de um jogo da memória temático, focado em destacar o trabalho de mestres artesãos brasileiros. O projeto foi desenvolvido como uma demonstração interativa e educacional.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web padrões, sem a necessidade de um servidor complexo para ser executado.

- **HTML5**: Para a estrutura semântica do conteúdo e do jogo.
- **CSS3**: Para estilização, animações e layout.
  - **Layout**: Utiliza **Flexbox** e **Grid Layout** para criar um design responsivo e alinhado.
  - **Animações**: As transições de virar as cartas e os efeitos de vitória são feitos com `@keyframes` e `transition`.
- **Tailwind CSS**: Um framework CSS "utility-first" usado para agilizar a estilização de componentes diretamente no HTML.
- **JavaScript (ES6)**: Toda a lógica do jogo, como embaralhar as cartas, gerenciar cliques, verificar pares e controlar o estado do jogo, é implementada em JavaScript puro, contido no arquivo `index.html`.
- **Google Fonts**: Para a tipografia do projeto, utilizando as fontes "Poppins" e "Playfair Display".

## 📂 Estrutura do Projeto

A estrutura de arquivos foi organizada para separar os diferentes tipos de recursos (assets), facilitando a manutenção:

```
/
|-- assets/
|   |-- css/
|   |   |-- style.css       # Estilos personalizados
|   |-- images/
|   |   |-- (imagens do jogo, logos e fundo)
|   |-- js/                 # Pasta para futuros arquivos JavaScript
|-- index.html              # Arquivo principal com a estrutura e a lógica do jogo
|-- README.md               # Esta documentação
```

- **`assets/`**: Pasta principal que contém todos os recursos estáticos.
- **`assets/css/`**: Contém as folhas de estilo personalizadas.
- **`assets/images/`**: Armazena todas as imagens utilizadas, incluindo as cartas, logos e a imagem de fundo.
- **`index.html`**: O coração do projeto. Contém o HTML da página e o script com toda a lógica do jogo.

## 🎮 Lógica do Jogo

O script do jogo, localizado dentro do `index.html`, gerencia as seguintes funcionalidades:

1.  **Inicialização**: Ao carregar a página, o script duplica as imagens dos artesãos para criar os pares, embaralha-os e os insere dinamicamente no tabuleiro.
2.  **Interação**: O jogador clica em duas cartas. O script controla a animação de "virar" a carta.
3.  **Verificação**: O jogo verifica se as duas cartas viradas correspondem (possuem o mesmo `data-id`).
    - Se forem um par, elas permanecem viradas e são marcadas como "combinadas".
    - Se não forem um par, elas são viradas de volta após um curto intervalo.
4.  **Contagem de Movimentos**: Cada par de cliques é contado como um movimento.
5.  **Condição de Vitória**: O jogo termina quando todos os pares são encontrados. Uma tela de parabéns é exibida com a contagem final de movimentos.
6.  **Reiniciar**: O jogador pode reiniciar o jogo a qualquer momento, o que reseta o tabuleiro e os contadores.

## 🏃 Como Executar

Como este é um projeto puramente front-end, basta abrir o arquivo `index.html` em qualquer navegador web moderno (como Google Chrome, Firefox, ou Microsoft Edge).

