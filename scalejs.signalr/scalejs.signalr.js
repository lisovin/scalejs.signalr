/*global define*/
define([
    'scalejs!core',
    'scalejs.signalr/hub',
    'signalr.hubs'
], function (
    core,
    hub
) {
    'use strict';

    core.registerExtension({
        signalr: {
            createHub: hub.create,
            startHub : hub.start
        }
    });
});