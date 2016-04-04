/**
 * Created by Julius Hernandez on 4/4/2016.
 */

"use strict";

//this entire block of code is wrapped by browserify in a function.

var STORE_NAME = "tasks";

exports.save = function (tasks) {
    localStorage.setItem(STORE_NAME, JSON.stringify(tasks));
};

exports.load = function () {
    var storedTasks = localStorage.getItem(STORE_NAME);
    if(storedTasks) {
        return JSON.parse(storedTasks);
    }
    return [];
};

exports.clear = function () {
    localStorage.removeItem(STORE_NAME);
};
