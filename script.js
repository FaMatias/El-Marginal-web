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
                { name: 'Coco', alias: 'Coco', image: 's5_coco.jpg' }
            ]
        },
        s6: {
            title: 'El Mudo (En El Barro): La Cárcel de Mujeres',
            description: 'En este spin-off, la historia se centra en una cárcel de mujeres donde las internas viven bajo las mismas reglas de poder y corrupción que los hombres en San Onofre. Con una estética similar, esta serie explora el otro lado del sistema penitenciario.',
            characters: [
                { name: 'Bardo', alias: 'Bardo', image: 's6_bardo.jpg', bio: 'El personaje principal de la serie. Es una mujer aguerrida y con una historia de vida muy compleja, que la hace fuerte e impredecible. La vida en la cárcel de mujeres la obliga a pelear por su propia superviviencia.'},
                { name: 'Gato', alias: 'Gato', image: 's6_gato.jpg', bio: 'Un personaje temido en la cárcel de mujeres. Siempre está vigilando y actúa de forma silenciosa para obtener lo que quiere. Nadie sabe realmente de su pasado, pero es conocida por su fuerza.'},
                { name: 'Chuky', alias: 'Chuky', image: 's6_chuky.jpg', bio: 'Una de las líderes de la prisión de mujeres. Su forma de ser es dura, pero leal a quienes la siguen. No duda en usar la violencia para mantener el orden en el patio.'},
                { name: 'Pastor Peña', alias: 'Pastor', image: 's6_pastor.jpg', bio: 'En esta serie, Pastor Peña reaparece con otro objetivo. Su pasado lo obliga a enfrentarse a los nuevos desafíos que le depara la vida, esta vez en la cárcel de mujeres. Se le ve como una figura más sabia, que ayuda a otros a sobrevivir en este ambiente.'}
            ]
        }
    };

    const charactersForGame = {
        'pastor': { name: 'Pastor Peña', strength: 8, agility: 7, stamina: 9, emoji: '🎨', bio: 'Un ex-policía con experiencia. Su fuerza está en su aguante y su mente fría.' },
        'mario': { name: 'Mario Borges', strength: 9, agility: 6, stamina: 8, emoji: '👑', bio: 'El líder y la mente maestra. Físicamente fuerte y sin escrúpulos.' },
        'diosito': { name: 'Diosito Borges', strength: 7, agility: 9, stamina: 7, emoji: '👼', bio: 'Impulsivo y rápido. Su agilidad lo hace un oponente impredecible.' },
        'sapo': { name: 'El Sapo', strength: 10, agility: 5, stamina: 10, emoji: '🐸', bio: 'La bestia de la prisión. Es la fuerza pura y el poder bruto.' },
        'coco': { name: 'Coco', strength: 7, agility: 8, stamina: 6, emoji: '⛓️', bio: 'Un personaje clave. No destaca por su fuerza pero es rápido y sabe esquivar bien.' },
        'tati': { name: 'Tati', strength: 6, agility: 8, stamina: 7, emoji: '💅', bio: 'Líder en la prisión de mujeres. Inteligente y ágil, no duda en usar cualquier ventaja para ganar.' },
        'bardo': { name: 'Bardo', strength: 9, agility: 6, stamina: 8, emoji: '💥', bio: 'Un personaje aguerrido y fuerte. No se rinde fácilmente.' },
        'gato': { name: 'Gato', strength: 8, agility: 7, stamina: 6, emoji: '🐱', bio: 'Un personaje silencioso, pero fuerte. Es un oponente digno en la pelea.'},
        'chuky': { name: 'Chuky', strength: 8, agility: 8, stamina: 7, emoji: '🔪', bio: 'Una líder astuta y veloz. Sabe cómo pelear y se defiende como nadie.'}
    };
    
    // VARIABLES DEL JUEGO
    let player1, player2;
    let player1Health, player2Health;
    const MAX_HEALTH = 100;

    // --- LÓGICA DE NAVEGACIÓN Y CONTENIDO ---
    const navButtons = document.querySelectorAll('.nav-btn');
    const contentDisplay = document.getElementById('content-display');

    function renderContent(season) {
        const data = seasonData[season];
        const html = `
            <div class="season-content-box">
                <h3 class="season-title">${data.title}</h3>
                <p class="season-description">${data.description}</p>
                <h4 class="characters-title">Personajes Principales</h4>
                <div class="characters-list">
                    ${data.characters.map(char => `
                        <div class="character-card">
                            <img src="${char.image}" alt="${char.name}">
                            <h5>${char.name}</h5>
                            <p class="character-alias">Apodo: ${char.alias}</p>
                        </div>
                    `).join('')}
                </div>
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

    renderContent('s1');

    // --- LÓGICA DEL JUEGO SIMULADO ---
    const characterSelection = document.getElementById('character-selection');
    const characterGrid = characterSelection.querySelector('.character-grid');
    const characterProfile = document.getElementById('character-profile');
    const selectFightBtn = document.getElementById('select-fight-btn');
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
                <span class="game-emoji">${char.emoji}</span>
                <h5 class="character-name-game">${char.name}</h5>
            `;
            characterGrid.appendChild(charDiv);
        }
    }

    function displayProfile(id) {
        const char = charactersForGame[id];
        document.getElementById('profile-image').textContent = char.emoji;
        document.getElementById('profile-name').textContent = char.name;
        document.getElementById('profile-bio').textContent = char.bio;
        document.getElementById('profile-strength').textContent = char.strength;
        document.getElementById('profile-agility').textContent = char.agility;
        document.getElementById('profile-stamina').textContent = char.stamina;

        characterProfile.classList.remove('hidden');
        characterSelection.classList.add('hidden');
        
        selectFightBtn.dataset.charId = id;
    }

    function setupFight(player1Id) {
        const opponents = Object.keys(charactersForGame).filter(key => key !== player1Id);
        const player2Id = opponents[Math.floor(Math.random() * opponents.length)];

        player1 = { ...charactersForGame[player1Id], health: MAX_HEALTH };
        player2 = { ...charactersForGame[player2Id], health: MAX_HEALTH };
        
        document.getElementById('player1-emoji').textContent = player1.emoji;
        document.getElementById('player2-emoji').textContent = player2.emoji;
        document.getElementById('player1').querySelector('.fighter-name').textContent = player1.name;
        document.getElementById('player2').querySelector('.fighter-name').textContent = player2.name;

        fightArea.classList.remove('hidden');
        characterProfile.classList.add('hidden');
        
        document.getElementById('player1').classList.add('enter-from-left');
        document.getElementById('player2').classList.add('enter-from-right');
        
        document.getElementById('player1-health').style.width = '100%';
        document.getElementById('player2-health').style.width = '100%';
        combatLog.innerHTML = '';
        fightResult.classList.add('hidden');

        fightArea.scrollIntoView({ behavior: 'smooth' });
    }

    function fightSimulation() {
        if (player1.health <= 0 || player2.health <= 0) {
            startFightBtn.disabled = true;
            return;
        }

        const damage1 = Math.round(Math.random() * player1.strength) + 1;
        const damage2 = Math.round(Math.random() * player2.strength) + 1;
        
        player2.health -= damage1;
        player1.health -= damage2;
        
        player1.health = Math.max(0, player1.health);
        player2.health = Math.max(0, player2.health);

        document.getElementById('player1-emoji').classList.add('attack-animation');
        document.getElementById('player2-emoji').classList.add('hit-animation');
        
        setTimeout(() => {
            document.getElementById('player1-emoji').classList.remove('attack-animation');
            document.getElementById('player2-emoji').classList.remove('hit-animation');
        }, 500);

        document.getElementById('player1-health').style.width = `${player1.health}%`;
        document.getElementById('player2-health').style.width = `${player2.health}%`;

        combatLog.innerHTML += `<p>¡${player1.name} golpea a ${player2.name}! (${damage1} de daño)</p>`;
        combatLog.innerHTML += `<p>¡${player2.name} golpea a ${player1.name}! (${damage2} de daño)</p>`;
        combatLog.scrollTop = combatLog.scrollHeight;
        
        if (player1.health <= 0) {
            showResult(player2, player1);
        } else if (player2.health <= 0) {
            showResult(player1, player2);
        }
    }
    
    function showResult(winner, loser) {
        fightResult.classList.remove('hidden');
        fightResult.innerHTML = `<h3 class="win-text">¡El ganador es ${winner.name}!</h3><p>${loser.name} fue derrotado.</p>`;
        startFightBtn.disabled = true;
    }

    characterGrid.addEventListener('click', (e) => {
        const charCard = e.target.closest('.character-card-game');
        if (charCard) {
            displayProfile(charCard.dataset.id);
        }
    });

    selectFightBtn.addEventListener('click', () => {
        const charId = selectFightBtn.dataset.charId;
        setupFight(charId);
        startFightBtn.disabled = false;
    });

    startFightBtn.addEventListener('click', fightSimulation);

    renderCharacterGrid();
});
