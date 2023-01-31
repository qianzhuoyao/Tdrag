"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dragEvent_1 = require("./dragEvent");
var DragElement = /** @class */ (function () {
    function DragElement(id) {
        this.id = -1;
        this.SELF = null;
        this.id = id;
    }
    ;
    /**
     * 初始化
     */
    DragElement.prototype.init = function (HTMLElement) {
        this.SELF = HTMLElement;
        this.makeSelfMovable();
    };
    ;
    /**
     * 使SELF可移动
     */
    DragElement.prototype.makeSelfMovable = function () {
        if (this.SELF) {
            (0, dragEvent_1.drag)({
                HTMLElement: this.SELF,
                callback: {
                    mouseDown: function () {
                        console.log('down');
                    },
                    mouseMove: function () {
                        console.log('move');
                    },
                    mouseUp: function () {
                        console.log('up');
                    }
                }
            });
        }
    };
    ;
    return DragElement;
}());
exports.default = DragElement;
