import { EventEmitter } from "@angular/core";
export declare class MdSwitch {
    checkedChange: EventEmitter<boolean>;
    checked: boolean;
    disabled_: boolean;
    private _tabindex;
    tabindex: number;
    disabled: boolean;
    onKeydown(event: KeyboardEvent): void;
    toggle(event: any): void;
}
