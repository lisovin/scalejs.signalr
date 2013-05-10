/*global define*/
define([
    'scalejs!core',
    'jQuery'
], function (
    core,
    $
) {
    'use strict';

    function create(name, opts) {
        var hub = $.connection[name];
        core.object.extend(hub.client, opts);

        return hub;
    }

    function start(done) {
        $.connection.hub.start().done(done);
    }

    return {
        create: create,
        start: start
    };
});

