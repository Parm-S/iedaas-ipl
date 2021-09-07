import Dc from './views/pages/Dc.js';
import Csk from './views/pages/Csk.js';
import Pk from './views/pages/Pk.js';
import Kkr from './views/pages/Kkr.js';
import Mi from './views/pages/Mi.js';
import Rcb from './views/pages/Rcb.js';
import Rr from './views/pages/Rr.js';
import Srh from './views/pages/Srh.js';
import Error404 from './views/pages/Error.js';
import Utils from './services/Utils.js';
import Teams from './views/pages/teams.js';
// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/': Teams,
    '/teams': Teams,
    '/chennai-super-kings': Csk,
    '/delhi-capital': Dc,
    '/punjab-kings': Pk,
    '/kolkata-knight-rider': Kkr,
    '/mumbai-indians': Mi,
    '/rajasthan-royal': Rr,
    '/royal-challenger-banglore': Rcb,
    '/sunriser-hyderabad': Srh
};


// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {
    // Lazy load view element:
    const content = document.getElementById('page_container');
    // Get the parsed URl from the addressbar
    let request = Utils.parseRequestURL()
    console.log(request);
    // Parse the URL 
    let parsedURL = (request.resource ? '/' + request.resource : '/')
    console.log(parsedURL);
    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();
}
// Listen on hash change:
window.addEventListener('hashchange', router);
// Listen on page load:
window.addEventListener('load', router);

