var PLAYER_PATH = 'https://tooltip-cdn.mdconpro.com/';
var PROJECT_ID = '36175d66-8f83-4305-84ab-6a263ada9e1e';

/* Tooltip Player Snippet */
window.Tooltip || function (t, e) {
    var o = {
        url: PLAYER_PATH + "static/player.js",
        key: PROJECT_ID,
        async: true
    };

    window.Tooltip = {cs: [], _apiKey: o.key};
    for (
        var r = ["identify", "goal", "updateUserData", "start", "stop", "refresh", "show", "hide", "on"],
            i = {}, n = 0; n < r.length; n++) {
        var a = r[n];
        i[a] = function (t) {
            return function () {
                var e = Array.prototype.slice.call(arguments);
                window.Tooltip.cs.push({method: t, args: e})
            }
        }(a)
    }
    window.Tooltip.API = i;
    var n = t.createElement(e), s = t.getElementsByTagName(e)[0];
    n.type = "text/javascript", n.async = o.async, s.parentNode.insertBefore(n, s), n.src = o.url
}(document, "script");

/* Tooltip Player Snippet */
