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
        'pastor': { name: 'Pastor Peña', strength: 8, agility: 7, stamina: 9, image: 'game_pastor.png', bio: 'Un ex-policía que se infiltró en San Onofre. Es astuto y un buen estratega. Su fuerza está en su aguante y su mente fría.' },
        'mario': { name: 'Mario Borges', strength: 9, agility: 6, stamina: 8, image: 'game_mario.png', bio: 'El líder y la mente maestra. Físicamente fuerte y sin escrúpulos. Su poder reside en su astucia y brutalidad.' },
        'diosito': { name: 'Diosito Borges', strength: 7, agility: 9, stamina: 7, image: 'game_diosito.png', bio: 'Impulsivo y rápido. La mano derecha de Mario, su agilidad lo hace un oponente impredecible y letal en el cuerpo a cuerpo.' },
        'sapo': { name: 'El Sapo', strength: 10, agility: 5, stamina: 10, image: 'game_sapo.png', bio: 'La bestia de la prisión. Es la fuerza pura y el poder bruto. Su poca agilidad se compensa con una fuerza y aguante inigualables.' },
        'coco': { name: 'Coco', strength: 7, agility: 8, stamina: 6, image: 'game_coco.png', bio: 'Un personaje clave en la prisión. No destaca por su fuerza pero es rápido y sabe esquivar bien los problemas. Un rival a tomar en serio.' },
        'tati': { name: 'Tati', strength: 6, agility: 8, stamina: 7, image: 'game_tati.png', bio: 'Líder en la prisión de mujeres. Inteligente y ágil, no duda en usar cualquier ventaja para ganar. Una oponente digna de respeto.' },
        'barro': { name: 'Barro', strength: 9, agility: 6, stamina: 8, image: 'game_barro.png', bio: 'Un recluso temido. Su fuerza y aguante lo convierten en un tanque humano. Ataca con golpes certeros y no se rinde fácilmente.' }
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
                <img src="${char.image}" alt="${char.name}">
                <h5>${char.name}</h5>
            `;
            characterGrid.appendChild(charDiv);
        }
    }

    function displayProfile(id) {
        const char = charactersForGame[id];
        document.getElementById('profile-image').src = char.image;
        document.getElementById('profile-name').textContent = char.name;
        document.getElementById('profile-bio').textContent = char.bio;
        document.getElementById('profile-strength').textContent = char.strength;
        document.getElementById('profile-agility').textContent = char.agility;
        document.getElementById('profile-stamina').textContent = char.stamina;

        characterProfile.classList.remove('hidden');
        characterProfile.scrollIntoView({ behavior: 'smooth' });
        
        // Asignar el ID al botón para la siguiente fase
        selectFightBtn.dataset.charId = id;
    }

    function setupFight(player1Id) {
        // Selecciona un oponente al azar
        const opponents = Object.keys(charactersForGame).filter(key => key !== player1Id);
        const player2Id = opponents[Math.floor(Math.random() * opponents.length)];

        player1 = { ...charactersForGame[player1Id], health: MAX_HEALTH };
        player2 = { ...charactersForGame[player2Id], health: MAX_HEALTH };
        
        document.getElementById('player1-img').src = player1.image;
        document.getElementById('player2-img').src = player2.image;
        document.getElementById('player1').querySelector('.fighter-name').textContent = player1.name;
        document.getElementById('player2').querySelector('.fighter-name').textContent = player2.name;

        // Mostrar el área de pelea y ocultar el perfil
        fightArea.classList.remove('hidden');
        characterProfile.classList.add('hidden');
        
        // Animaciones de entrada
        document.getElementById('player1').classList.add('enter-from-left');
        document.getElementById('player2').classList.add('enter-from-right');
        
        // Reiniciar barra de vida y log
        document.getElementById('player1-health').style.width = '100%';
        document.getElementById('player2-health').style.width = '100%';
        combatLog.innerHTML = '';
        fightResult.classList.add('hidden');

        fightArea.scrollIntoView({ behavior: 'smooth' });
    }

    function fightSimulation() {
        if (player1.health <= 0 || player2.health <= 0) return;

        // Lógica de daño
        const damage1 = Math.round(Math.random() * player1.strength) + 1;
        const damage2 = Math.round(Math.random() * player2.strength) + 1;
        
        player2.health -= damage1;
        player1.health -= damage2;
        
        // Limitar la vida para que no baje de cero
        player1.health = Math.max(0, player1.health);
        player2.health = Math.max(0, player2.health);
        
        // Animación de ataque y daño
        document.getElementById('player1-img').classList.add('attack-animation');
        document.getElementById('player2-img').classList.add('hit-animation');
        
        // Retrasar la eliminación de la clase para que se vea la animación
        setTimeout(() => {
            document.getElementById('player1-img').classList.remove('attack-animation');
            document.getElementById('player2-img').classList.remove('hit-animation');
        }, 500);

        // Actualizar barras de vida
        document.getElementById('player1-health').style.width = `${player1.health}%`;
        document.getElementById('player2-health').style.width = `${player2.health}%`;

        // Actualizar log
        combatLog.innerHTML += `<p>¡${player1.name} golpea a ${player2.name}! (${damage1} de daño)</p>`;
        combatLog.innerHTML += `<p>¡${player2.name} golpea a ${player1.name}! (${damage2} de daño)</p>`;
        combatLog.scrollTop = combatLog.scrollHeight;
        
        // Comprobar si hay un ganador
        if (player1.health <= 0) {
            showResult(player2, player1);
        } else if (player2.health <= 0) {
            showResult(player1, player2);
        }
    }
    
    function showResult(winner, loser) {
        fightResult.classList.remove('hidden');
        fightResult.innerHTML = `<h3>¡El ganador es ${winner.name}!</h3><p>${loser.name} fue derrotado en el patio.</p>`;
        startFightBtn.disabled = true;
    }

    // Event Listeners
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

    // Inicializar el juego
    renderCharacterGrid();
});
