﻿/*global define*/
define([
    'scalejs!core',
    'jQuery'
], function (
    core,
    $
) {
    'use strict';

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

