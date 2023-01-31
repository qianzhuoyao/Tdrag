interface paramProp {
    HTMLElement?: HTMLElement;
    callback: (evt: MouseEvent) => void;
}
interface dragCallbackProp {
    mouseDown?: () => void;
    mouseMove?: () => void;
    mouseUp?: () => void;
}
interface dragProps {
    HTMLElement: HTMLElement;
    callback?: dragCallbackProp;
}
declare const throttle: (callback: () => boolean, time?: number) => () => void;
declare const down: (params: paramProp) => void;
declare const move: (params: paramProp) => void;
declare const up: (params: paramProp) => void;
declare const drag: (params: dragProps) => void;
export { down, move, up, throttle, drag };
