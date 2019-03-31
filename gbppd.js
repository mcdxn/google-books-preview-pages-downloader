var gbppd = (function (){
    let book = document.getElementById("viewport");
    let observer = null;
    let links = [];
    let targets = [];

    let callback = function(mutationsList, observer) {
        
        for(let mutation of mutationsList) {
            if (mutation.type == 'childList') {
                
                targets = mutation.target.getElementsByTagName("img");

                if(targets) {
                    for(let target of targets){
                        links.push(target.src);
                    }
                }

            }
        }
    }

    
    return { 
        start: function(){
            observer = new MutationObserver(callback);
            observer.observe(book, { attributes: true, childList: true, subtree: true });        
        },

        finish: function(){
        let uniqLinks = new Set(links);
        let newWindow = window.open();
        
        for(let link of uniqLinks) {
            newWindow.document.write('<br>');
            newWindow.document.write(link);
        }

        observer.disconnect();
        observer = null;
    } 
};

})();