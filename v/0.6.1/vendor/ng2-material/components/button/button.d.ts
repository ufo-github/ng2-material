import { OnChanges, ElementRef } from "@angular/core";
export declare class MdButton {
    private _element;
    isMouseDown: boolean;
    isKeyboardFocused: boolean;
    constructor(_element: ElementRef);
    onMousedown(event: any): void;
    onFocus(): void;
    onBlur(): void;
}
export declare class MdAnchor extends MdButton implements OnChanges {
    tabIndex: number;
    disabled_: boolean;
    disabled: boolean;
    onClick(event: any): void;
    ngOnChanges(_: any): void;
    isAriaDisabled: string;
}
