
// const setHeaders = {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*'
//     },
//     mode: 'cors',
//     cache: 'default'

// };
fetch('https://ipl-t20.herokuapp.com/teams/sunrisers-hyderabad')
.then((data)=>{
    console.log(data);
    return data.json();
}).then((resData) => {
    console.log(resData.players[0]);
    const htmlData = resData.players
    .map(player => {
       return `<div class="card">
       <div class="card-image">
           <img src=${player.image} alt="kane-williamson" />
       </div>
       <div class="card-player-detail">
           <p class="player-name">${player.name}
            
           </p>
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
           <button class="card-button">View Profile</button>
       </div>
   </div>
   </div>`;
    })
    .join('')
    console.log(htmlData);
    document.querySelector('#players').insertAdjacentHTML("afterbegin",htmlData);
});
