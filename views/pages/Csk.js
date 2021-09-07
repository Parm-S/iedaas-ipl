
import Loader from "../../services/Loader.js";
import Error404 from "./Error.js";
let getTeamList = async () => {
    try {
        Loader.showLoader();
        const response = await fetch('https://ipl-t20.herokuapp.com/teams');
        Loader.hideLoader();
        const json = response.json();
        return json;
    } catch (error) {
        document.getElementById('page_container').innerHTML = await Error404.render();
        console.log(error);
    }
}

let getPlayerList = async () => {
    try {
    
        Loader.showLoader();
        console.log('csk loader');
        const response = await fetch('https://ipl-t20.herokuapp.com/teams/chennai-super-kings');
        
        Loader.hideLoader();
        const json = await response.json();
        return json;
    } catch (err) {
          document.getElementById('page_container').innerHTML = await Error404.render();
        console.log(err);
    }
}
let Csk = {
    render: async () => {
        let team =await getTeamList();
        console.log(team)
        let playersList = await getPlayerList();
        console.log(playersList.players);
        let view =
            `<div class="team-container">
                <div class="team-header csk">
                    <div class="team-header-overlay">
                        <div class="team-header-overlay-img">
                            <div class="team-header-overlay-color">
                               <div class="team-background-logo csk-color">
                                  <div class="csk-logo"></div>
                                        <div class="team-content">
                                        <h1 class="team-content-name">${team[0].teamName}</h1>
                                        <p class="team-content-trophy"><i class="fas fa-trophy"></i>${team[0].winningYears}</p>

                                        <ul class="team-content-list">
                                            <li>
                                            <span class="team-content-value">Owner</span>
                                            <span class="team-content-label">Chennai Super Kings Cricket ltd</span>
                                            </li>
                                            <hr/>
                                            <li>
                                            <span class="team-content-value">coach</span>
                                            <span class="team-content-label">Stephen Fleming</span>
                                            </li>
                                            
                                            <li>
                                            <span class="team-content-value">venue</span>
                                            <span class="team-content-label">${team[0].venue}</span>
                                            </li>
                                            <hr/>
                                            <li>
                                            <span class="team-content-value">captain</span>
                                            <span class="team-content-label" >${playersList.players[0].name}</span>
                                            </li>
        
                                        </ul>                                
                                        </div>
                                        
                                    
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="team-card-container">
                    <div  class="team-player">
                        ${
                            playersList.players.map(player =>
                            `<div class="team-card">
                                <div class="team-card-image image-csk">
                                    <img src=${player.image} alt=${player.name}/>
                                </div>
                                <div class="team-card-player-detail"> 
                                        <p class="player-name">${player.name} </p>
                                        <ul class="player-stats">
                                        <li>
                                            <span class="value">${player.stats.matches}</span>
                                            <span class="label">Matches</span>
                                        </li>
                                        <li>
                                            <span class="value">${player.stats.runs}</span>
                                            <span class="label">Runs</span>
                                        </li>
                                        
                                        <li>
                                            <span class="value">${player.stats.wickets}</span>
                                            <span class="label">Wickets</span>
                                        </li>
                                        </ul>
                                        <button class="team-card-button">View Profile</button>
                                </div> 
                            </div>`
                        ).join('')
                        }
                    </div>
                </div>
           </div>  `
        return view
    },
    after_render: async () => { }
}

export default Csk;


