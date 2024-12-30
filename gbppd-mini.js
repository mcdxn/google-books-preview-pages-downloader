var gbppd = (function () {
  let e = document.getElementById("viewport"),
    t = null,
    n = [],
    o = [],
    l = document.getElementsByClassName("overflow-scrolling"),
    r = l ? l[0].scrollHeight : 0,
    i = 0,
    c = null,
    a = function (e, t) {
      for (let t of e)
        if (
          "childList" == t.type &&
          ((o = t.target.getElementsByTagName("img")), o)
        )
          for (let e of o) n.push(e.src);
    },
    u = function () {
      (i += Math.floor(751 * Math.random()) + 50),
        i < r ? l[0].scrollBy(0, 800) : clearInterval(c);
    };
  return {
    start: function () {
      (t = new MutationObserver(a)),
        t.observe(e, { attributes: !0, childList: !0, subtree: !0 }),
        (c = setInterval(u, 500));
    },
    finish: function () {
      {
        let e = new Set(n),
          o = window.open(),
          l = 0;
        for (let t of e)
          o.document.write(
            '<a href="' + t + '" download="page-0' + l + '">' + t + "</a><br>"
          ),
            (l += 1);
        !(function (e, t) {
          let n = null;
          !(function o(l) {
            if (l >= e.length) return n && clearTimeout(n), void t();
            e[l].href.match(/books.google./) && e[l].click(),
              (n = setTimeout(function () {
                o(l + 1);
              }, 500));
          })(0);
        })(o.document.getElementsByTagName("a"), () => {
          o.document.write("<h1>FINISHED DOWNLOADING.</h1>");
        }),
          t && (t.disconnect(), (t = null)),
          clearInterval(c);
      }
    },
  };
})();
