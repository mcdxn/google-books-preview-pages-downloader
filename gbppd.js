var gbppd = (function (){
    let book = document.getElementById("viewport");
    let observer = null;
    let links = [];
    let targets = [];

    let scroll = document.getElementsByClassName("overflow-scrolling");
    let scrollHeight = scroll[0].scrollHeight;
    let scrollAmount = 700;
    let scrollCount = 0;
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

    let movePage = function(){
        scrollCount += scrollAmount;
        if(scrollCount < scrollHeight){
            scroll[0].scrollBy(0, scrollAmount);
        }else{
            clearInterval(intervalId);
        }
    }
    
    return {

        start: function(){
            observer = new MutationObserver(callback);
            observer.observe(book, { attributes: true, childList: true, subtree: true });
            intervalId = setInterval(movePage, 500);
        },

        finish: function(){
            {           
                let uniqLinks = new Set(links);
                let newWindow = window.open();
            
                for(let link of uniqLinks) {
                    newWindow.document.write('<a href="'+link+'">'+link+"</a>"+"<br>");
                }
                observer.disconnect();
                observer = null;
            }
        }
    };

})();
