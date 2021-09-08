

 
let Loader = {
    showLoader: function() { 
        const p = document.createElement('div'); 
        p.innerHTML = "loading..."; 
        p.id = "loader" 
        document.getElementById('page_container').append(p) 
    },
    hideLoader:function() { 
        const p = document.getElementById('loader'); 
        p.remove(); 
    } 
}
export default Loader;