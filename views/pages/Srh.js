import Loader from "../../services/Loader.js";
import Error404 from "./Error.js";

let getPlayerList = async () => {
    try {
        Loader.showLoader();
        const response = await fetch('https://ipl-t20.herokuapp.com/teams/sunrisers-hyderabad');
        Loader.hideLoader();
        const json = await response.json();
        return json;
    } catch (err) {
        document.getElementById('page_container').innerHTML =  await Error404.render();
        console.log(err);
    }
}
let Srh = {
    render: async () => {
        let playersList = await getPlayerList();
        console.log(playersList.players)
        let view = `
        <div class="team-container">
            <div class="team-header srh">
                <div class="team-header-overlay">
                        <div class="team-header-overlay-img">
                            <div class="teamheader-overlay-color"></div>
                        </div>
                </div>
            </div>
           <div class="team-card-container">
                <div  class="team-player">
                    ${playersList.players.map(player =>
                   `<div class="team-card">
                        <div class="team-card-image image-srh">
                          <img src=${player.image} alt=${player.name}/>
                        </div>
                        <div class="team-card-player-detail">
                            <p class="player-name">${player.name}</p>
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
        </div>`
        return view
    },
    after_render: async () => { }
}
export default Srh;

// .then((data)=>{
//     console.log(data);
//     return data.json();
// }).then((resData) => {(in promise) TypeError: players.map is not a function
//     console.log(resData.players[0]);
//     let htmlData = resData.
//      console.log(htmlData);
//     document.querySelector('#players').insertAdjacentHTML("afterbegin",htmlData);
// }).catch((error) =>{
//     console.log(error);
// })
