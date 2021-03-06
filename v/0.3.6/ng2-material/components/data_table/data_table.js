"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('angular2/core');
var lang_1 = require("angular2/src/facade/lang");
require('rxjs/add/operator/share');
var data_table_selectable_tr_1 = require('./data_table_selectable_tr');
__export(require('./data_table_selectable_tr'));
var MdDataTable = (function () {
    function MdDataTable() {
        this.onSelectableAll = new core_1.EventEmitter(false);
        this.onSelectableChange = new core_1.EventEmitter(false);
        this.selected = [];
        this.onSelectableChange.share();
    }
    MdDataTable.prototype.change = function (event) {
        var outputEvent = {
            name: 'selectable_change',
            allSelected: false,
            values: []
        };
        if (event.target instanceof data_table_selectable_tr_1.MdDataTableHeaderSelectableRow === true) {
            if (event.isActive === true) {
                outputEvent.allSelected = true;
                outputEvent.values = this._getRowsValues();
            }
        }
        else {
            outputEvent.values = this.selected.slice(0);
            if (event.isActive === true) {
                outputEvent.values.push(event.selectableValue);
            }
            else {
                var index = outputEvent.values.indexOf(event.selectableValue);
                if (index !== -1) {
                    outputEvent.values.splice(index, 1);
                }
            }
        }
        this.selected = outputEvent.values;
        this.onSelectableChange.emit(outputEvent);
    };
    MdDataTable.prototype._getRowsValues = function () {
        return this._rows.toArray()
            .map(function (tr) { return tr.selectableValue; });
    };
    MdDataTable.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.selectable === true) {
            if (lang_1.isPresent(this._masterRow)) {
                this._masterRow.onChange.subscribe(this.change.bind(this));
            }
            this._rows.toArray()
                .map(function (tr) {
                tr.onChange.subscribe(_this.change.bind(_this));
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdDataTable.prototype, "selectable", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MdDataTable.prototype, "onSelectableAll", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MdDataTable.prototype, "onSelectableChange", void 0);
    __decorate([
        core_1.ContentChild(data_table_selectable_tr_1.MdDataTableHeaderSelectableRow), 
        __metadata('design:type', data_table_selectable_tr_1.MdDataTableHeaderSelectableRow)
    ], MdDataTable.prototype, "_masterRow", void 0);
    __decorate([
        core_1.ContentChildren(data_table_selectable_tr_1.MdDataTableSelectableRow, true), 
        __metadata('design:type', core_1.QueryList)
    ], MdDataTable.prototype, "_rows", void 0);
    MdDataTable = __decorate([
        core_1.Component({
            selector: 'md-data-table',
            template: "<ng-content></ng-content>",
            directives: [data_table_selectable_tr_1.MdDataTableHeaderSelectableRow, data_table_selectable_tr_1.MdDataTableSelectableRow],
            host: {
                '[class.md-data-table]': 'true',
                '[class.md-data-table-selectable]': 'selectable',
            }
        }), 
        __metadata('design:paramtypes', [])
    ], MdDataTable);
    return MdDataTable;
}());
exports.MdDataTable = MdDataTable;
//# sourceMappingURL=data_table.js.map