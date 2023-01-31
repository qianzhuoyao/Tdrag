import DragElement from "./dragElement";
export default class DragReducer {
    static instance: DragReducer | null;
    children: DragElement[];
    IDS: number[];
    maxID: number;
    constructor();
    single(): DragReducer;
    /**
     * 生成递增标识
     */
    generateMaxID(): number | undefined;
    /**
     * 插入递增标识至标识集合
     */
    insertIDS(): void;
    /**
     * 同步集合与最大标识
     */
    autoGenerateElementId(): number | undefined;
    /**
     * 创建节点
     */
    createChild(HTMLElement: (HTMLElement | null)): void;
}
