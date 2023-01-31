"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dragReducer_1 = __importDefault(require("./dragReducer"));
/**
 * 相信的心就是魔法
 * @param root
 */
function magic(root) {
    // console.log(root, 'ok')
    var element = new Document().getElementById(root);
    new dragReducer_1.default().createChild(element);
}
;
