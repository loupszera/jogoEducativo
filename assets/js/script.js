document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const movesCountSpan = document.getElementById('moves-count');
    const restartButton = document.getElementById('restart-button');
    const playAgainButton = document.getElementById('play-again-button');
    const winModal = document.getElementById('win-modal');
    const finalMovesSpan = document.getElementById('final-moves');

    // --- Dados do Jogo ---
        const craftItems = [
            { id: 'ze-crente', img: 'assets/images/Captura de tela 2025-09-05 112516.png' },
            { id: 'adalton-fernandes', img: 'assets/images/Captura de tela 2025-09-05 112553.png' },
            { id: 'mario-teles', img: 'assets/images/Captura de tela 2025-09-05 112606.png' },
            { id: 'joao-borges', img: 'assets/images/Captura de tela 2025-09-05 112617.png' },
            { id: 'kalapalo', img: 'assets/images/Captura de tela 2025-09-05 112627.png' },
            { id: 'assurini', img: 'assets/images/Captura de tela 2025-09-05 112641.png' },
            { id: 'espedito-seleiro', img: 'assets/images/Captura de tela 2025-09-05 112723.png' },
            { id: 'diomar-freitas', img: 'assets/images/Captura de tela 2025-09-05 112733.png' },
        ];

    // --- Variáveis de Estado ---
    let cards = [];
    let flippedCards = [];
    let matchedPairs = 0;
    let moves = 0;
    let canFlip = true;

    // --- Funções ---

    /**
     * Embaralha um array.
     * @param {Array} array O array a ser embaralhado.
     */
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    /**
     * Cria e exibe as cartas no tabuleiro.
     */
    function createBoard() {
        // Duplicate items to create pairs and shuffle them
        const gameItems = [...craftItems, ...craftItems];
        shuffle(gameItems);

        gameBoard.innerHTML = ''; // Limpa o tabuleiro anterior
        cards = []; // Reinicia o array de cartas

        gameItems.forEach(item => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.dataset.id = item.id;

            cardElement.innerHTML = `
                <div class="card-face card-front">
                    <img src="assets/images/verso-carta.png" alt="Verso da Carta" class="card-front-img" />
                </div>
                <div class="card-face card-back">
                    <img src="${item.img}" alt="${item.id}" class="card-img" />
                </div>
            `;
            cardElement.addEventListener('click', handleCardClick);
            gameBoard.appendChild(cardElement);
            cards.push(cardElement);
        });
    }

    /**
     * Reseta todas as variáveis do jogo e cria um novo tabuleiro.
     */
    function restartGame() {
        flippedCards = [];
        matchedPairs = 0;
        moves = 0;
        canFlip = true;
        movesCountSpan.textContent = '0';
        winModal.classList.remove('visible');
        createBoard();
    }

    /**
     * Lida com a lógica ao clicar em uma carta.
     * @param {Event} event O evento de clique.
     */
    function handleCardClick(event) {
        if (!canFlip) return;
        
        const clickedCard = event.currentTarget;

        // Evita clicar na mesma carta duas vezes ou em uma carta já combinada
        if (clickedCard.classList.contains('flipped') || clickedCard.classList.contains('matched')) {
            return;
        }

        flipCard(clickedCard);
        flippedCards.push(clickedCard);

        if (flippedCards.length === 2) {
            canFlip = false; // Prevent flipping more cards
            incrementMoves();
            checkForMatch();
        }
    }

    /**
     * Vira a carta para mostrar o verso.
     * @param {HTMLElement} card O elemento da carta a ser virado.
     */
    function flipCard(card) {
        card.classList.add('flipped');
    }

    /**
     * Desvira a carta para mostrar a frente.
     * @param {HTMLElement} card O elemento da carta a ser desvirado.
     */
    function unflipCard(card) {
        card.classList.remove('flipped');
    }

    /**
     * Verifica se as duas cartas viradas são um par.
     */
    function checkForMatch() {
        const [card1, card2] = flippedCards;
        
        if (card1.dataset.id === card2.dataset.id) {
            // É um par!
            card1.classList.add('matched');
            card2.classList.add('matched');
            matchedPairs++;
            flippedCards = [];
            canFlip = true;
            checkWinCondition();
        } else {
            // Não é par, desvira após um tempo
            setTimeout(() => {
                unflipCard(card1);
                unflipCard(card2);
                flippedCards = [];
                canFlip = true;
            }, 1200);
        }
    }
    
    /**
     * Incrementa o contador de movimentos e atualiza a exibição.
     */
    function incrementMoves() {
        moves++;
        movesCountSpan.textContent = moves;
    }

    /**
     * Verifica se o jogo foi vencido (todos os pares encontrados).
     */
    function checkWinCondition() {
        if (matchedPairs === craftItems.length) {
            setTimeout(() => {
                finalMovesSpan.textContent = moves;
                winModal.classList.add('visible');
            }, 500);
        }
    }

    // --- Listeners de Eventos ---
    restartButton.addEventListener('click', restartGame);
    playAgainButton.addEventListener('click', restartGame);

    // --- Início do Jogo ---
    restartGame();
});
