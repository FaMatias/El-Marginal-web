document.addEventListener('DOMContentLoaded', () => {

    const seasonData = {
        s1: {
            title: 'Temporada 1: El Inicio del Infierno',
            description: 'Un ex-policía se infiltra en la cárcel de San Onofre para desmantelar una banda de secuestradores, liderada por los hermanos Borges. Se encuentra con un universo de violencia, traición y códigos de prisión que lo pondrán a prueba.',
            characters: [
                { name: 'Pastor Peña', alias: 'Pastor', image: 's1_pastor.jpg' },
                { name: 'Mario Borges', alias: 'Mario', image: 's1_mario.jpg' },
                { name: 'Diosito Borges', alias: 'Diosito', image: 's1_diosito.jpg' }
            ]
        },
        s2: {
            title: 'Temporada 2: La Precuela',
            description: 'Retrocedemos en el tiempo para conocer cómo los hermanos Borges llegaron a dominar San Onofre. Una lucha de poder contra "El Sapo" y la aparición de "la Sub-21" marcan el inicio de una guerra interna.',
            characters: [
                { name: 'Mario Borges', alias: 'Mario', image: 's2_mario.jpg' },
                { name: 'Diosito Borges', alias: 'Diosito', image: 's2_diosito.jpg' },
                { name: 'El Sapo', alias: 'El Sapo', image: 's2_sapo.jpg' }
            ]
        },
        s3: {
            title: 'Temporada 3: Negocios de Mierda',
            description: 'Los hermanos Borges, ahora con el poder, se asocian con un empresario corrupto para una estafa. La llegada de una nueva reclusa y la inestabilidad de la prisión ponen en jaque el liderazgo de Mario.',
            characters: [
                { name: 'Mario Borges', alias: 'Mario', image: 's3_mario.jpg' },
                { name: 'Diosito Borges', alias: 'Diosito', image: 's3_diosito.jpg' },
                { name: 'La Mecha', alias: 'La Mecha', image: 's3_mecha.jpg' }
            ]
        },
        s4: {
            title: 'Temporada 4: Más Allá de los Muros',
            description: 'San Onofre ha sido clausurada. Los Borges y Pastor son transferidos a un penal de máxima seguridad. Allí se encuentran con una nueva y peligrosa jerarquía criminal que los obligará a aliarse de la manera más inesperada.',
            characters: [
                { name: 'Mario Borges', alias: 'Mario', image: 's4_mario.jpg' },
                { name: 'Diosito Borges', alias: 'Diosito', image: 's4_diosito.jpg' },
                { name: 'Coco', alias: 'Coco', image: 's4_coco.jpg' }
            ]
        },
        s5: {
            title: 'Temporada 5: El Final',
            description: 'La confrontación final entre los personajes de la serie. Secretos del pasado salen a la luz, alianzas se rompen y la supervivencia de los reclusos pende de un hilo en la conclusión de esta historia.',
            characters: [
                { name: 'Mario Borges', alias: 'Mario', image: 's5_mario.jpg' },
                { name: 'Diosito Borges', alias: 'Diosito', image: 's5_diosito.jpg' },
                { name: 'Barro', alias: 'Barro', image: 's5_barro.jpg' }
            ]
        },
        s6: {
            title: 'En El Barro (El Mudo): La Cárcel de Mujeres',
            description: 'En este spin-off, la historia se centra en una cárcel de mujeres donde las internas viven bajo las mismas reglas de poder y corrupción que los hombres en San Onofre. Con una estética similar, esta serie explora el otro lado del sistema penitenciario.',
            characters: [
                { name: 'Tati', alias: 'Tati', image: 's6_tati.jpg' },
                { name: 'Coco', alias: 'Coco', image: 's6_coco.jpg' },
                { name: 'Rita', alias: 'Rita', image: 's6_rita.jpg' }
            ]
        }
    };

    const charactersForGame = {
        'pastor': { name: 'Pastor Peña', strength: 8, agility: 7, stamina: 9, image: 'game_pastor.png' },
        'mario': { name: 'Mario Borges', strength: 9, agility: 6, stamina: 8, image: 'game_mario.png' },
        'diosito': { name: 'Diosito Borges', strength: 7, agility: 9, stamina: 7, image: 'game_diosito.png' },
        'sapo': { name: 'El Sapo', strength: 10, agility: 5, stamina: 10, image: 'game_sapo.png' },
        'coco': { name: 'Coco', strength: 7, agility: 8, stamina: 6, image: 'game_coco.png' },
        'tati': { name: 'Tati', strength: 6, agility: 8, stamina: 7, image: 'game_tati.png' },
        'barro': { name: 'Barro', strength: 9, agility: 6, stamina: 8, image: 'game_barro.png' }
    };
    
    // VARIABLES DEL JUEGO
    let player1, player2;

    // --- LÓGICA DE NAVEGACIÓN Y CONTENIDO ---

    const navButtons = document.querySelectorAll('.nav-btn');
    const contentDisplay = document.getElementById('content-display');

    function renderContent(season) {
        const data = seasonData[season];
        const html = `
            <h3>${data.title}</h3>
            <p>${data.description}</p>
            <h4>Personajes Principales</h4>
            <div class="characters-list">
                ${data.characters.map(char => `
                    <div class="character-card">
                        <img src="${char.image}" alt="${char.name}">
                        <h5>${char.name}</h5>
                        <p>Apodo: ${char.alias}</p>
                    </div>
                `).join('')}
            </div>
        `;
        contentDisplay.innerHTML = html;
        contentDisplay.scrollIntoView({ behavior: 'smooth' });
    }

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderContent(btn.dataset.season);
        });
    });

    // Carga el contenido de la primera temporada por defecto
    renderContent('s1');

    // --- LÓGICA DEL JUEGO SIMULADO ---

    const characterSelection = document.getElementById('character-selection');
    const characterGrid = characterSelection.querySelector('.character-grid');
    const fightArea = document.getElementById('fight-area');
    const startFightBtn = document.getElementById('start-fight-btn');
    const combatLog = document.getElementById('combat-log');
    const fightResult = document.getElementById('fight-result');

    function renderCharacterGrid() {
        for (const [id, char] of Object.entries(charactersForGame)) {
            const charDiv = document.createElement('div');
            charDiv.classList.add('character-card-game');
            charDiv.dataset.id = id;
            charDiv.innerHTML = `
                <img src="${char.image}" alt="${char.name}">
                <h5>${char.name}</h5>
            `;
            characterGrid.appendChild(charDiv);
        }
    }

    function setupFight(player1Id, player2Id) {
        player1 = charactersForGame[player1Id];
        player2 = charactersForGame[player2Id];

        document.getElementById('player1-img').src = player1.image;
        document.getElementById('player2-img').src = player2.image;
        document.getElementById('player1').querySelector('.fighter-name').textContent = player1.name;
        document.getElementById('player2').querySelector('.fighter-name').textContent = player2.name;

        document.getElementById('fight-area').classList.remove('hidden');
        document.getElementById('character-selection').classList.add('hidden');
        
        // Animaciones de entrada
        document.getElementById('player1').classList.add('enter-from-left');
        document.getElementById('player2').classList.add('enter-from-right');
    }

    function fightSimulation() {
        startFightBtn.disabled = true;
        combatLog.innerHTML = '';
        fightResult.classList.add('hidden');

        // Lógica simple de simulación de combate
        const messages = [
            `¡${player1.name} ataca con una patada!`,
            `¡${player2.name} esquiva y contraataca!`,
            `Un derechazo de ${player1.name} impacta en el rostro de ${player2.name}!`,
            `${player2.name} responde con un rodillazo al estómago.`
        ];
        
        const winner = (player1.strength + player1.stamina) > (player2.strength + player2.stamina) ? player1 : player2;
        const loser = winner === player1 ? player2 : player1;

        let logIndex = 0;
        const fightInterval = setInterval(() => {
            if (logIndex < messages.length) {
                const p = document.createElement('p');
                p.textContent = messages[logIndex];
                combatLog.appendChild(p);
                combatLog.scrollTop = combatLog.scrollHeight;
                logIndex++;
            } else {
                clearInterval(fightInterval);
                showResult(winner, loser);
            }
        }, 1000);
    }
    
    function showResult(winner, loser) {
        fightResult.classList.remove('hidden');
        fightResult.innerHTML = `<h3>¡El ganador es ${winner.name}!</h3><p>${loser.name} fue derrotado en el patio.</p>`;
        startFightBtn.disabled = false;
    }

    // Event Listeners del juego
    let player1Id = 'mario', player2Id = 'diosito'; // Valores por defecto

    characterGrid.addEventListener('click', (e) => {
        const charCard = e.target.closest('.character-card-game');
        if (charCard) {
            const id = charCard.dataset.id;
            // Un poco de IA para elegir al oponente
            const opponents = Object.keys(charactersForGame).filter(key => key !== id);
            const randomOpponentId = opponents[Math.floor(Math.random() * opponents.length)];
            
            player1Id = id;
            player2Id = randomOpponentId;
            
            // Ocultar selección y mostrar área de pelea
            setupFight(player1Id, player2Id);
            
            fightArea.scrollIntoView({ behavior: 'smooth' });
        }
    });

    startFightBtn.addEventListener('click', fightSimulation);

    // Inicializar el juego
    renderCharacterGrid();

});
