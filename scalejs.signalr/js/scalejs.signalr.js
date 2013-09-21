
/*global define*/
define('scalejs.signalr/hub',[
    'scalejs!core',
    'jQuery'
], function (
    core,
    $
) {
    

    var listeners = [];

    function create(name, opts) {
        //$.connection.hub.logging = true;

        var hub = $.connection[name];
        core.object.extend(hub.client, opts);

        return hub;
    }

    function onHubStarted() {
        listeners.forEach(function (l) {
            l();
        });
    }

    function start() {
        $.connection.hub.start().done(onHubStarted);
    }

    function onConnected(callback) {
        listeners.push(callback);
    }

    return {
        create: create,
        start: start,
        onConnected: onConnected
    };
});


/*global define*/
define('scalejs.signalr',[
    'scalejs!core',
    'scalejs.signalr/hub',
    'signalr.hubs'
], function (
    core,
    hub
) {
    

    core.registerExtension({
        signalr: {
            createHub: hub.create,
            startHub: hub.start,
            onConnected: hub.onConnected
        }
    });
});