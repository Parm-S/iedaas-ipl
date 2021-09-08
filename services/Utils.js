const Utils = { 
    // --------------------------------
    //  Parse a url and break it into resource, id and verb
    // --------------------------------
    parseRequestURL : () => {

        let url = location.hash.slice(2).toLowerCase() || '/';
        let r = url.split("/")
        let request = {
            resource    : null
        }
        request.resource    = r[1]
        return request
    }

    // --------------------------------
    //  Simple sleep implementation
    // --------------------------------
    , sleep: (ms) => {
        return new Promise(resolve => setTimeout(resolve, 3000));
    }
}

export default Utils;