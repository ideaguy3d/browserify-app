/**
 * Created by Julius Hernandez on 4/4/2016.
 */

"use strict";

var taskTemplate = '<li class="task">\n    <input type="checkbox" class="complete">\n    <input type="text" class="description">\n</li>',
    jQuery = require('jquery');

function _renderTask(task) {
    var $task = jQuery(taskTemplate);
    if(task.complete) {
        jQuerytask.find(".complete").attr("checked", "checked");
    }
    $task.find(".description").val(task.description);
    return $task;
}

exports.renderTasks = function (tasks) {
    var elemArray = jQuery.map(tasks, _renderTask);
    jQuery("#task-list").empty().append(elementArray);
};

exports.renderNew = function () {
    var $taskList = jQuery("#task-list");
    $taskList.prepend(_renderTask({}));
};
