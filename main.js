const music = [
    { artist: 'Alchemist', genre: 'hip-hop' },
    { artist: 'DJ Q-Bert', genre: 'turntablism' },
    { artist: 'MF Doom', genre: 'hip-hop' }
];

const myMusic = music.map((person) => {
    return `
    <div class="testing">
        <h1>${person.artist}</h1>
        <h2>${person.genre}</h2>
    </div>
    `
});

document.body.innerHTML = myMusic;
