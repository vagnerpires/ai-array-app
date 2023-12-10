import players from './players'; // Import the players array

function DisplayPlayer({ playerId }) {
    // Find the player with the matching ID
    const player = players.find(p => p.id === playerId);

    // Render player details or a message if not found
    if (player) {
        return (
            <section>
                <h2>{player.firstname} {player.lastname} ({player.age})</h2>
                <p><b>Club</b>: {player.club}</p>
                <p><b>Nationality</b>: {player.nationality}</p>
                <p><b>Trophies</b>: {player.trophies}</p>
                <p><b>Bio</b>: {player.bio}</p>
            </section>
        );
    }
    else {
        return (
            <section>
                <h2>Player not found</h2>
            </section>
        );
    }
}

export default DisplayPlayer;