const cskTeamName = document.querySelector('#card-csk-teamName');
const cskVenue = document.querySelector('#card-csk-venue');
const cskWinningYears = document.querySelector('#card-csk-winningYear');

const dcTeamName = document.querySelector('#card-dc-teamName');
const dcVenue = document.querySelector('#card-dc-venue');

const pkTeamName = document.querySelector('#card-pk-teamName');
const pkVenue = document.querySelector('#card-pk-venue');

const kkrTeamName = document.querySelector('#card-kkr-teamName');
const kkrVenue = document.querySelector('#card-kkr-venue');
const kkrWinningYears = document.querySelector('#card-kkr-winningYear');

const miTeamName = document.querySelector('#card-mi-teamName');
const miVenue = document.querySelector('#card-mi-venue');
const miWinningYears = document.querySelector('#card-mi-winningYear');

const rrTeamName = document.querySelector('#card-rr-teamName');
const rrVenue = document.querySelector('#card-rr-venue');
const rrWinningYears = document.querySelector('#card-rr-winningYear');

const rcbTeamName = document.querySelector('#card-rcb-teamName');
const rcbVenue = document.querySelector('#card-rcb-venue');


const srhTeamName = document.querySelector('#card-srh-teamName');
const srhVenue = document.querySelector('#card-srh-venue');
const srhWinningYears = document.querySelector('#card-srh-winningYear');



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
        console.log(resData[0].winningYears)
        cskTeamName.innerHTML = resData[0].teamName;
        cskVenue.innerHTML = resData[0].venue;
        cskWinningYears.innerHTML = resData[0].winningYears;

        dcTeamName.innerHTML = resData[1].teamName;
        dcVenue.innerHTML = resData[1].venue;

        pkTeamName.innerHTML = resData[2].teamName;
        pkVenue.innerHTML = resData[2].venue;

        kkrTeamName.innerHTML = resData[3].teamName;
        kkrVenue.innerHTML = resData[3].venue;
        kkrWinningYears.innerHTML = resData[3].winningYears;

        miTeamName.innerHTML = resData[4].teamName;
        miVenue.innerHTML = resData[4].venue;
        miWinningYears.innerHTML = resData[4].winningYears;

        rrTeamName.innerHTML = resData[5].teamName;
        rrVenue.innerHTML = resData[5].venue;
        rrWinningYears.innerHTML = resData[5].winningYears;

        rcbTeamName.innerHTML = resData[6].teamName;
        rcbVenue.innerHTML = resData[6].venue;


        srhTeamName.innerHTML = resData[7].teamName;
        srhVenue.innerHTML = resData[7].venue;
        srhWinningYears.innerHTML = resData[7].winningYears;
    })
    .catch((error) => {
        console.log(error);
    })

