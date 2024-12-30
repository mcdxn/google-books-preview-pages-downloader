var gbppd = (function () {
  let e = document.getElementById("viewport"),
    t = null,
    n = [],
    o = [],
    l = document.getElementsByClassName("overflow-scrolling"),
    r = l ? l[0].scrollHeight : 0,
    i = 0,
    a = "",
    c = function (e, t) {
      for (let t of e)
        if (
          "childList" == t.type &&
          ((o = t.target.getElementsByTagName("img")), o)
        )
          for (let e of o) n.push(e.src);
    },
    u = function () {
      (i += Math.floor(751 * Math.random()) + 50),
        i < r ? l[0].scrollBy(0, 800) : clearInterval(a);
    };
  return {
    start: function () {
      (t = new MutationObserver(c)),
        t.observe(e, { attributes: !0, childList: !0, subtree: !0 }),
        (a = setInterval(u, 500));
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
        !(function (e) {
          let t = null;
          !(function n(o) {
            o >= e.length
              ? t && clearTimeout(t)
              : (e[o].href.match(/books.google./) && e[o].click(),
                (t = setTimeout(function () {
                  n(o + 1);
                }, 500)));
          })(0);
        })(o.document.getElementsByTagName("a")),
          t && (t.disconnect(), (t = null)),
          clearInterval(a),
          clearTimeout(timeOutId);
      }
    },
  };
})();
