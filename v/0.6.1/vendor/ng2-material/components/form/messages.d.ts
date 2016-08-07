import { NgFormModel, NgControlName } from "@angular/common";
import { OnDestroy, OnInit, QueryList } from "@angular/core";
export declare class MdMessage {
    errorKey: string;
    okay: boolean;
}
export declare class MdMessages implements OnInit, OnDestroy {
    messages: QueryList<MdMessage>;
    form: NgFormModel;
    property: string | NgControlName;
    valid: boolean;
    isTouched: boolean;
    constructor(messages: QueryList<MdMessage>, form: NgFormModel);
    private _unsubscribe;
    ngOnInit(): void;
    ngOnDestroy(): any;
    private _valueChanged();
}
