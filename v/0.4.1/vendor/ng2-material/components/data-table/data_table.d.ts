import { EventEmitter, QueryList, AfterContentInit } from '@angular/core';
import 'rxjs/add/operator/share';
import { MdDataTableHeaderSelectableRow, MdDataTableSelectableRow, ITableSelectableRowSelectionChange } from './data_table_selectable_tr';
export * from './data_table_selectable_tr';
export interface ITableSelectionChange {
    name: string;
    allSelected: boolean;
    values: any[];
}
export declare class MdDataTable implements AfterContentInit {
    selectable: boolean;
    onSelectableAll: EventEmitter<any>;
    onSelectableChange: EventEmitter<any>;
    _masterRow: MdDataTableHeaderSelectableRow;
    _rows: QueryList<MdDataTableSelectableRow>;
    selected: Array<string>;
    constructor();
    change(event: ITableSelectableRowSelectionChange): void;
    _getRowsValues(): any[];
    ngAfterContentInit(): void;
}
