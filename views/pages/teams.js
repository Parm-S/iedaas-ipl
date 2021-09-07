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

let Teams = {
    render: async () => {
        let teams = await getTeamList();
        console.log(teams);
        let view = `
        <div class="container">
        <div class="flex-container">
            <!-- ******************start card - csk ******************************* -->
          
                <div class="card card-csk">
                <a href="/#/teams/chennai-super-kings">
                    <div class="card-image">
                        <img src="./images/csk.png" alt="John" />
                    </div>
                    <div class="card-details">
                        <h3 id="card-csk-teamName" class="card-title card-title-long-name">${teams[0].teamName}</h3>
                        <p id="card-csk-venue" class="card-sub-title">${teams[0].venue}</p>
                        <div class="teams-card-wins"><i class="fas fa-trophy"></i>
                            ${teams[0].winningYears}
                        </div>
                    </div>
                    <button class="card-link">Team Home</button>
                    <div class="card-arrow">
                        <button class=""><i class="fas fa-chevron-right"></i></button>
                    </div>
                </a>
                </div>
           
            <!--*************************** end card-csk********************************** -->
            <!-- ************************** start card - dc ***************************** -->
            <div class="card card-dc">
              <a href="/#/teams/delhi-capital">
                <div class="card-image">
                    <img src="./images/dc.png" alt="John" />
                </div>
                <div class="card-details">
                    <h3 id="card-dc-teamName" class="card-title card-title-short-name">${teams[1].teamName}</h3>
                    <p id="card-dc-venue" class="card-sub-title">${teams[1].venue}</p>
                    <div class="teams-card-wins-no-trophy ">
                        ${teams[1].winningYears}
                    </div>
                </div>
                <button class="card-link">Team Home</button>
                <div class="card-arrow">
                    <button class=""><i class="fas fa-chevron-right"></i></button>
                </div>
                </a>
            </div>
            <!-- ********************* end card-dc*************************  -->
            <!--************************ start-card-pk************************ -->
            <div class="card card-pk">
             <a href="/#/teams/punjab-kings">
                <div class="card-image">
                    <img src="./images/pk.png" alt="John" />
                </div>
                <div class="card-details">
                    <h3 id="card-pk-teamName" class="card-title card-title-short-name">${teams[2].teamName}</h3>
                    <p id="card-pk-venue" class="card-sub-title">${teams[2].venue}</p>
                    <div class="teams-card-wins-no-trophy ">
                        
                        ${teams[2].winningYears}
                    </div>
                </div>
                <button class="card-link">Team Home</button>
                <div class="card-arrow">
                    <button class=""><i class="fas fa-chevron-right"></i></button>
                </div>
                </a>
            </div>
            <!--********************************* end card-pk ******************************* -->
            <!-- ********************start card-kkr **************************************-->
            <div class="card card-kkr">
             <a href="/#/teams/kolkata-knight-rider">
                <div class="card-image">
                    <img src="./images/kkr.png" alt="John" />
                </div>
                <div class="card-details">
                    <h3 id="card-kkr-teamName" class="card-title card-title-long-name">${teams[3].teamName}</h3>
                    <p id="card-kkr-venue" class="card-sub-title">${teams[3].venue}</p>
                    <div class="teams-card-wins"><i class="fas fa-trophy"></i>
                        ${teams[3].winningYears}
                    </div>
                </div>
                <button class="card-link">Team Home</button>
                <div class="card-arrow">
                    <button class=""><i class="fas fa-chevron-right"></i></button>
                </div>
                </a>
            </div>
            <!-- ***********************end-card-kkr ******************* -->
             
            <!-- ***********************start-card-mi************************ -->
            <div class="card card-mi">
            <a href="/#/teams/mumbai-indians">
                <div class="card-image">
                    <img src="./images/mi.png" alt="John" />
                </div>
                <div class="card-details">
                    <h3 id="card-mi-teamName" class="card-title card-title-short-name">${teams[4].teamName}</h3>
                    <p id="card-mi-venue" class="card-sub-title">${teams[4].venue}</p>
                    <div class="teams-card-wins"><i class="fas fa-trophy"></i>
                        ${teams[4].winningYears}
                    </div>
                </div>
                <button class="card-link">Team Home</button>
                <div class="card-arrow">
                    <button class=""><i class="fas fa-chevron-right"></i></button>
                </div>
                </a>
            </div>
            <!--************************ end-card-mi*************************** -->
                   

            <!--******************************** start card-rr************************* -->
            <div class="card card-rr">
            <a href="/#/teams/rajasthan-royal">
                <div class="card-image">
                    <img src="./images/rr.png" alt="John" />
                </div>
                <div class="card-details">
                    <h3 id="card-rr-teamName" class="card-title card-title-short-name">${teams[5].teamName}</h3>
                    <p id="card-rr-venue" class="card-sub-title">${teams[5].venue}</p>
                    <div class="teams-card-wins"><i class="fas fa-trophy"></i>
                        ${teams[5].winningYears}
                    </div>
                </div>
                <button class="card-link">Team Home</button>
                <div class="card-arrow">
                    <button class=""><i class="fas fa-chevron-right"></i></button>
                </div>
                </a>
            </div>
            <!--************************ end card-rr********************************  -->
            <!--*********************** start card-rcb************************************* -->
            <div class="card card-rcb">
            <a href="/#/teams/royal-challenger-banglore">
                <div class="card-image">
                    <img src="./images/rcb.png" alt="John" />
                </div>
                <div class="card-details">
                    <h3 id="card-rcb-teamName" class="card-title card-title-long-name">${teams[6].teamName}</h3>
                    <p id="card-rcb-venue" class="card-sub-title">${teams[6].venue}</p>
                    <div class="teams-card-wins-no-trophy ">
                       
                        ${teams[6].winningYears}
                    </div>
                </div>
                <button class="card-link">Team Home</button>
                <div class="card-arrow">
                    <button class=""><i class="fas fa-chevron-right"></i></button>
                </div>
                </a>
            </div>
            <!--******************* end-card-rcb************************************ -->
            <!--******************* start-card-srh***************************************** -->
            <div class="card card-srh">
            <a href="/#/teams/sunriser-hyderabad">
                <div class="card-image">
                    <img src="./images/srh.png" alt="John" />
                </div>
                <div class="card-details">
                    <h3 id="card-srh-teamName" class="card-title card-title-short-name">${teams[7].teamName}</h3>
                    <p id="card-srh-venue" class="card-sub-title">${teams[7].venue}</p>
                    <div class="teams-card-wins"><i class="fas fa-trophy"></i>
                        ${teams[7].winningYears}
                    </div>
                </div>
                <button class="card-link">Team Home</button>
                <div class="card-arrow">
                    <button class=""><i class="fas fa-chevron-right"></i></button>
                </div>
                </a>
            </div>
            <!--****************************** end card-srh*************************** -->
        </div>
    </div>
        `;
        return view;
    },
    after_render: async () => { }
}
export default Teams;