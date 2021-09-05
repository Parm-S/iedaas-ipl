
// const setHeaders = {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*'
//     },
//     mode: 'cors',
//     cache: 'default'

// };
let getPlayerList = async () => {
    try {
        const response = await fetch('https://ipl-t20.herokuapp.com/teams/delhi-capitals');
        const json = await response.json();
        return json;
    } catch (err) {
        console.log(err);
    }
}
let Dc = {
    render: async () => {
        let playersList = await getPlayerList();
        console.log(playersList.players);
        let view = `
        <div class="team-container">
            <div class="team-header dc">
                <div class="team-header-overlay">
                    <div class="team-header-overlay-img">
                        <div class="teamheader-overlay-color">
                        </div>
                    </div>
                </div>
            </div>
         
            <div class="team-card-container">
                <div  class="team-player">
                    ${playersList.players.map(player => 
                    `<div class="team-card">
                        <div class="team-card-image  image-dc">
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
        </div>
    
    `

        return view
    },
    after_render: async () => { }
}

export default Dc;

// fetch('https://ipl-t20.herokuapp.com/teams/delhi-capitals')
// .then((data)=>{
//     console.log(data);
//     return data.json();
// }).then((resData) => {
//     console.log(resData.players[0]);
//     let htmlData = resData.players.map(player => 
//         {
//        return `<div class="card">
//        <div class="card-image">
//            <img src=${player.image} alt="kane-williamson" />
//        </div>
//        <div class="card-player-detail">
//            <p class="player-name">${player.name}

//            </p>
//            <ul class="player-stats">
//                <li>
//                    <span class="value">${player.stats.matches}</span>
//                    <span class="label">Matches</span>
//                </li>
//                <li>
//                    <span class="value">${player.stats.runs}</span>
//                    <span class="label">Runs</span>
//                </li>

//                <li>
//                    <span class="value">${player.stats.wickets}</span>
//                    <span class="label">Wickets</span>
//                </li>
//            </ul>
//            <button class="card-button">View Profile</button>
//        </div>
//    </div>
//    </div>`;
//     })
//     .join('')
//      console.log(htmlData);
//     document.querySelector('#players').insertAdjacentHTML("afterbegin",htmlData);
// }).catch((error) =>{
//     console.log(error);
// })

