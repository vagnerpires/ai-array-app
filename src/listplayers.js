import { useState } from 'react'; // Import react and useState hook
import initialPlayers from './players'; // Import the players array
import DisplayPlayer from './displayplayer';
        
function ListPlayers() {
            
    const [players, setPlayers] = useState(initialPlayers);
    const [selectedPlayerId, setSelectedPlayerId] = useState(null);
    const [showPlayerDetails, setShowPlayerDetails] = useState(false);

    const handleMoreClick = (playerId) => {
        setSelectedPlayerId(playerId);
        setShowPlayerDetails(true);
    };

    const handleDeleteClick = (playerId) => {
        const updatedPlayers = players.filter(p => p.id !== playerId);
        setPlayers(updatedPlayers);
    }

    const handleBackToList = () => {
        setShowPlayerDetails(false);
    }

    return (
        <section className="w-1140px"> 
        {!showPlayerDetails ? (
            <>
            <h2>Top Soccer Players</h2>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Trophies</th>
                        <th>Club</th>
                        <th>Nationality</th>
                        <th>Details</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(player => (
                        <tr key={player.id}>
                            <td>{player.id}</td>
                            <td>{player.firstname} {player.lastname} ({player.age})</td>
                            <td>{player.trophies}</td>
                            <td>{player.club}</td>
                            <td>{player.nationality}</td>
                            <td><button onClick={() => handleMoreClick(player.id)}>More...</button></td>
                            <td><button className="delete" onClick={() => handleDeleteClick(player.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </>
        ) : (
            <>
            <DisplayPlayer playerId={selectedPlayerId} />
            <button onClick={handleBackToList} className='back-to-list'>Back to list</button>
            </>
        )}
        </section>
    );
}
        
export default ListPlayers;