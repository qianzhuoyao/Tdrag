"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dragElement_1 = __importDefault(require("./dragElement"));
//异常元素id为-1
var ERR_CHILD_ID = -1;
var DragReducer = /** @class */ (function () {
    function DragReducer() {
        //节点集合
        this.children = [];
        //标识集合
        this.IDS = [];
        //最大标识
        this.maxID = 0;
        this.single();
    }
    ;
    DragReducer.prototype.single = function () {
        if (!DragReducer.instance) {
            DragReducer.instance = this;
        }
        ;
        return DragReducer.instance;
    };
    ;
    /**
     * 生成递增标识
     */
    DragReducer.prototype.generateMaxID = function () {
        var _a;
        if (DragReducer.instance) {
            DragReducer.instance.maxID++;
        }
        ;
        return (_a = DragReducer.instance) === null || _a === void 0 ? void 0 : _a.maxID;
    };
    ;
    /**
     * 插入递增标识至标识集合
     */
    DragReducer.prototype.insertIDS = function () {
        if (DragReducer.instance) {
            DragReducer.instance.IDS.push(DragReducer.instance.maxID);
        }
        ;
    };
    ;
    /**
     * 同步集合与最大标识
     */
    DragReducer.prototype.autoGenerateElementId = function () {
        var _a, _b;
        var id = (_a = DragReducer.instance) === null || _a === void 0 ? void 0 : _a.generateMaxID();
        (_b = DragReducer.instance) === null || _b === void 0 ? void 0 : _b.insertIDS();
        return id;
    };
    ;
    /**
     * 创建节点
     */
    DragReducer.prototype.createChild = function (HTMLElement) {
        var _a;
        if (DragReducer.instance && HTMLElement) {
            var E = new dragElement_1.default((_a = DragReducer.instance.autoGenerateElementId()) !== null && _a !== void 0 ? _a : ERR_CHILD_ID);
            E.init(HTMLElement);
            DragReducer.instance.children.push(E);
        }
        ;
    };
    ;
    //单例
    DragReducer.instance = null;
    return DragReducer;
}());
exports.default = DragReducer;
