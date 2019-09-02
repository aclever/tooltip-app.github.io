var PLAYER_PATH = 'https://cdn.mdconpro.com/';
var PROJECT_ID = '2a3c15a7-2b1d-47f4-97e2-c81642371f5c';

/* Signalayer Player Snippet */
window.Signalayer || function (t, e) {
    var o = {
        url: PLAYER_PATH + "static/player.js",
        key: PROJECT_ID,
        async: true
    };

    window.Signalayer = {cs: [], _apiKey: o.key};
    for (
        var r = ["identify", "goal", "updateUserData", "start", "stop", "refresh", "show", "hide", "on"],
            i = {}, n = 0; n < r.length; n++) {
        var a = r[n];
        i[a] = function (t) {
            return function () {
                var e = Array.prototype.slice.call(arguments);
                window.Signalayer.cs.push({method: t, args: e})
            }
        }(a)
    }
    window.Signalayer.API = i;
    var n = t.createElement(e), s = t.getElementsByTagName(e)[0];
    n.type = "text/javascript", n.async = o.async, s.parentNode.insertBefore(n, s), n.src = o.url
}(document, "script");

/* Signalayer Player Snippet */
