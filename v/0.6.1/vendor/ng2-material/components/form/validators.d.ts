import { Validator, Control } from "@angular/common";
export declare class MdPatternValidator implements Validator {
    static inline(pattern: string): any;
    mdPattern: string;
    validate(control: Control): {
        [key: string]: any;
    };
}
export declare class MdMaxLengthValidator implements Validator {
    static inline(length: number | string): any;
    mdMaxLength: string;
    validate(control: Control): {
        [key: string]: any;
    };
}
export declare class MdMaxValueValidator implements Validator {
    static inline(length: number | string): any;
    mdMax: string;
    validate(control: Control): {
        [key: string]: any;
    };
}
export declare class MdMinValueValidator implements Validator {
    static inline(length: number | string): any;
    mdMin: string;
    validate(control: Control): {
        [key: string]: any;
    };
}
export declare class MdNumberRequiredValidator implements Validator {
    static inline(): any;
    validate(control: Control): {
        [key: string]: any;
    };
}
export declare const INPUT_VALIDATORS: (typeof MdMaxLengthValidator | typeof MdPatternValidator | typeof MdMaxValueValidator | typeof MdMinValueValidator | typeof MdNumberRequiredValidator)[];
