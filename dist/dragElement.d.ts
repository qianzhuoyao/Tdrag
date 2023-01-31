export default class DragElement {
    id: number;
    SELF: HTMLElement | null;
    constructor(id: number);
    /**
     * 初始化
     */
    init(HTMLElement: HTMLElement): void;
    /**
     * 使SELF可移动
     */
    makeSelfMovable(): void;
}
