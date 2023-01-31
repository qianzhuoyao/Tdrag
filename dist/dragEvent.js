"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drag = exports.throttle = exports.up = exports.move = exports.down = void 0;
// 函数节流
var throttle = function (callback, time) {
    if (time === void 0) { time = 300; }
    var t = undefined;
    return function () {
        if (t)
            return;
        t = setTimeout(function () {
            var suspend = callback();
            if (suspend) {
                clearTimeout(t);
            }
            t = undefined;
        }, time);
    };
};
exports.throttle = throttle;
var down = function (params) {
    var HTMLElement = params.HTMLElement, callback = params.callback;
    HTMLElement === null || HTMLElement === void 0 ? void 0 : HTMLElement.addEventListener('mousedown', function (evt) {
        callback(evt);
    });
};
exports.down = down;
var move = function (params) {
    var callback = params.callback;
    new Document().body.addEventListener('mousemove', function (evt) {
        callback(evt);
    });
};
exports.move = move;
var up = function (params) {
    var callback = params.callback;
    new Document().body.addEventListener('mouseup', function (evt) {
        callback(evt);
    });
};
exports.up = up;
var drag = function (params) {
    var HTMLElement = params.HTMLElement, callback = params.callback;
    var movable = false, offsetLeft = 0, offsetTop = 0, timerOver = false;
    down({
        HTMLElement: HTMLElement,
        callback: function (evt) {
            movable = true;
            HTMLElement.style.setProperty('position', 'absolute');
            offsetLeft = evt.clientX;
            offsetTop = evt.clientY;
            callback && callback.mouseDown && callback.mouseDown();
        }
    });
    move({
        HTMLElement: HTMLElement,
        callback: function (evt) {
            throttle(function () {
                if (movable) {
                    var X = evt.clientX - offsetLeft;
                    var Y = evt.clientY - offsetTop;
                    HTMLElement.style.setProperty('left', "".concat(X, "px"));
                    HTMLElement.style.setProperty('top', "".concat(Y, "px"));
                    offsetLeft = evt.clientX;
                    offsetTop = evt.clientY;
                    callback && callback.mouseMove && callback.mouseMove();
                }
                return timerOver;
            }, 300);
        }
    });
    up({
        HTMLElement: HTMLElement,
        callback: function () {
            movable = false;
            timerOver = true;
            callback && callback.mouseUp && callback.mouseUp();
        }
    });
};
exports.drag = drag;
