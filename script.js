// const cskTeamName = document.querySelector('#card-csk-teamName');
// const cskVenue = document.querySelector('#card-csk-venue');
// const cskWinningYears = document.querySelector('#card-csk-winningYear');

// const dcTeamName = document.querySelector('#card-dc-teamName');
// const dcVenue = document.querySelector('#card-dc-venue');

// const pkTeamName = document.querySelector('#card-pk-teamName');
// const pkVenue = document.querySelector('#card-pk-venue');

// const kkrTeamName = document.querySelector('#card-kkr-teamName');
// const kkrVenue = document.querySelector('#card-kkr-venue');
// const kkrWinningYears = document.querySelector('#card-kkr-winningYear');

// const miTeamName = document.querySelector('#card-mi-teamName');
// const miVenue = document.querySelector('#card-mi-venue');
// const miWinningYears = document.querySelector('#card-mi-winningYear');

// const rrTeamName = document.querySelector('#card-rr-teamName');
// const rrVenue = document.querySelector('#card-rr-venue');
// const rrWinningYears = document.querySelector('#card-rr-winningYear');

// const rcbTeamName = document.querySelector('#card-rcb-teamName');
// const rcbVenue = document.querySelector('#card-rcb-venue');


// const srhTeamName = document.querySelector('#card-srh-teamName');
// const srhVenue = document.querySelector('#card-srh-venue');
// const srhWinningYears = document.querySelector('#card-srh-winningYear');

const teamsNames = [
    document.querySelector('#card-csk-teamName'),
    document.querySelector('#card-dc-teamName'),
    document.querySelector('#card-pk-teamName'),
    document.querySelector('#card-kkr-teamName'),
    document.querySelector('#card-mi-teamName'),
    document.querySelector('#card-rr-teamName'),
    document.querySelector('#card-rcb-teamName'),
    document.querySelector('#card-srh-teamName'),
];
const teamsVenue = [
    document.querySelector('#card-csk-venue'),
    document.querySelector('#card-dc-venue'),
    document.querySelector('#card-pk-venue'),
    document.querySelector('#card-kkr-venue'),
    document.querySelector('#card-mi-venue'),
    document.querySelector('#card-rr-venue'),
    document.querySelector('#card-rcb-venue'),
    document.querySelector('#card-srh-venue')
]
const teamsWin = [
    document.querySelector('#card-csk-winningYear'),
    document.querySelector('#card-dc-winningYear'),
    document.querySelector('#card-pk-winningYear'),
    document.querySelector('#card-kkr-winningYear'),
    document.querySelector('#card-mi-winningYear'),
    document.querySelector('#card-rr-winningYear'),
    document.querySelector('#card-rcb-winningYear'),
    document.querySelector('#card-srh-winningYear')
]
let teamData = [

    // {
    //     "id": "chennai-super-kings",
    //     "teamName": "Chennai Super Kings",
    //     "winningYears": [
    //         2010,
    //         2011,
    //         2018
    //     ],
    //     "venue": "M. A. Chidambaram Stadium"
    // },
    // {
    //     "id": "delhi-capitals",
    //     "teamName": "Delhi Capitals",
    //     "winningYears": [],
    //     "venue": "Feroz Shah Kotla Ground"
    // },
    // {
    //     "id": "kings-xi-punjab",
    //     "teamName": "Kings XI Punjab",
    //     "winningYears": [],
    //     "venue": "IS Bindra Stadium"
    // },
    // {
    //     "id": "kolkata-knight-riders",
    //     "teamName": "Kolkata Knight Riders",
    //     "winningYears": [
    //         2012,
    //         2014
    //     ],
    //     "venue": "Eden Gardens"
    // },
    // {
    //     "id": "mumbai-indians",
    //     "teamName": "Mumbai Indians",
    //     "winningYears": [
    //         2013,
    //         2015,
    //         2017,
    //         2019
    //     ],
    //     "venue": "Wankhede Stadium"
    // },
    // {
    //     "id": "rajasthan-royals",
    //     "teamName": "Rajasthan Royals",
    //     "winningYears": [
    //         2008
    //     ],
    //     "venue": "Sawai Mansingh Stadium"
    // },
    // {
    //     "id": "royal-challengers-bangalore",
    //     "teamName": "Royal Challengers Bangalore",
    //     "winningYears": [],
    //     "venue": "M. Chinnaswamy Stadium"
    // },
    // {
    //     "id": "sunrisers-hyderabad",
    //     "teamName": "Sunrisers Hyderabad",
    //     "winningYears": [
    //         2016
    //     ],
    //     "venue": "Rajiv Gandhi Intl. Cricket Stadium"
    // }
];



const setHeaders = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    mode: 'cors',
    cache: 'default'

};

fetch('https://cors-anywhere.herokuapp.com/https://ipl-t20.herokuapp.com/teams', setHeaders)
    .then((data) => {
        return data.json();
    }).then((resData) => {
        // console.log(resData[0].winningYears)
        teamData = resData;
        console.log(teamData);
        for (let i = 0; i < teamData.length; i++) {
            console.log(teamsNames[i]);
            console.log(teamData[i]);
            teamsNames[i].innerHTML = teamData[i].teamName;
            teamsVenue[i].innerHTML = teamData[i].venue;
            if (teamData[i].winningYears.length != 0) {
                teamsWin[i].innerHTML = teamData[i].winningYears;
            } else {
                teamsWin[i].parentElement.style.visibility = "hidden";
            }
        }
        // cskTeamName.innerHTML = resData[0].teamName;
        // cskVenue.innerHTML = resData[0].venue;
        // cskWinningYears.innerHTML = resData[0].winningYears;

        // dcTeamName.innerHTML = resData[1].teamName;
        // dcVenue.innerHTML = resData[1].venue;

        // pkTeamName.innerHTML = resData[2].teamName;
        // pkVenue.innerHTML = resData[2].venue;

        // kkrTeamName.innerHTML = resData[3].teamName;
        // kkrVenue.innerHTML = resData[3].venue;
        // kkrWinningYears.innerHTML = resData[3].winningYears;

        // miTeamName.innerHTML = resData[4].teamName;
        // miVenue.innerHTML = resData[4].venue;
        // miWinningYears.innerHTML = resData[4].winningYears;

        // rrTeamName.innerHTML = resData[5].teamName;
        // rrVenue.innerHTML = resData[5].venue;
        // rrWinningYears.innerHTML = resData[5].winningYears;

        // rcbTeamName.innerHTML = resData[6].teamName;
        // rcbVenue.innerHTML = resData[6].venue;


        // srhTeamName.innerHTML = resData[7].teamName;
        // srhVenue.innerHTML = resData[7].venue;constars;
    })
    .catch((error) => {
        console.log(error);
    })

// for (let i = 0; i < teamData.length; i++) {
//     console.log(teamsNames[i]);
//     console.log(teamData[i]);
//     teamsNames[i].innerHTML = teamData[i].teamName;
//     teamsVenue[i].innerHTML = teamData[i].venue;
//     if (teamData[i].winningYears.length != 0) {
//         teamsWin[i].innerHTML = teamData[i].winningYears;
//     } else {
//         teamsWin[i].parentElement.style.visibility = "hidden";
//     }
// }