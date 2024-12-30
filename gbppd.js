var gbppd = (function () {
  let book = document.getElementById("viewport");
  let observer = null;
  let links = [];
  let targets = [];

  let scroll = document.getElementsByClassName("overflow-scrolling");
  let scrollHeight = scroll ? scroll[0].scrollHeight : 0;
  let scrollAmount = 800;
  let scrollCount = 0;
  let intervalId = null;

  let callback = function (mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (mutation.type == "childList") {
        targets = mutation.target.getElementsByTagName("img");

        if (targets) {
          for (let target of targets) {
            links.push(target.src);
          }
        }
      }
    }
  };

  let movePage = function () {
    scrollCount += Math.floor(Math.random() * (scrollAmount - 50 + 1)) + 50;
    if (scrollCount < scrollHeight) {
      scroll[0].scrollBy(0, scrollAmount);
    } else {
      clearInterval(intervalId);
    }
  };

  let downloadAllPages = function (a, callback) {
    let timeOutId = null;
    function next(i) {
      if (i >= a.length) {
        if (timeOutId) clearTimeout(timeOutId);
        callback();
        return;
      }

      if (a[i].href.match(/books.google./)) {
        a[i].click();
      }

      timeOutId = setTimeout(function () {
        next(i + 1);
      }, 500);
    }

    next(0);
  };

  return {
    start: function () {
      observer = new MutationObserver(callback);
      observer.observe(book, {
        attributes: true,
        childList: true,
        subtree: true,
      });
      intervalId = setInterval(movePage, 500);
    },

    finish: function () {
      {
        let uniqLinks = new Set(links);
        let finishWindow = window.open();

        let pageNum = 0;

        for (let link of uniqLinks) {
          finishWindow.document.write(
            '<a href="' +
              link +
              '" download="' +
              "page-0" +
              pageNum +
              '">' +
              link +
              "</a>" +
              "<br>"
          );
          pageNum = pageNum + 1;
        }

        let anchors = finishWindow.document.getElementsByTagName("a");

        downloadAllPages(anchors, () => {
          finishWindow.document.write("<h1>FINISHED DOWNLOADING.</h1>");
        });

        if (observer) {
          observer.disconnect();
          observer = null;
        }

        clearInterval(intervalId);
      }
    },
  };
})();
