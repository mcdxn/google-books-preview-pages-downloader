var gbppd = (function (){
    let book = document.getElementById("viewport");
    let observer = null;
    let links = [];
    let targets = [];
    let intervalId = '';

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

    let move_page = function(){
        $('#viewport > div:nth-child(2) > div:nth-child(2)').click()
    }

    
    return { 
        start: function(){
            observer = new MutationObserver(callback);
            observer.observe(book, { attributes: true, childList: true, subtree: true });
            intervalId = setInterval(move_page, 500);
        },

        finish: function(){
            let uniqLinks = new Set(links);
            let newWindow = window.open();
        
            for(let link of uniqLinks) {
                newWindow.document.write('<a href="'+link+'">'+link+"</a>"+"<br>");
            }
            observer.disconnect();
            observer = null;
            clearInterval(intervalId);
        }
    };

})();