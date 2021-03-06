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
var core_1 = require('angular2/core');
var all_1 = require('ng2-material/all');
var CheckboxSyncing = (function () {
    function CheckboxSyncing() {
        this.items = [1, 2, 3, 4, 5];
        this.selected = [];
    }
    CheckboxSyncing.prototype.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1)
            list.splice(idx, 1);
        else
            list.push(item);
    };
    CheckboxSyncing.prototype.exists = function (item, list) {
        return list.indexOf(item) > -1;
    };
    CheckboxSyncing = __decorate([
        core_1.Component({ selector: 'checkbox-syncing' }),
        core_1.View({
            templateUrl: 'examples/components/checkbox/syncing.html',
            styleUrls: ['examples/components/checkbox/syncing.css'],
            directives: [all_1.MATERIAL_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], CheckboxSyncing);
    return CheckboxSyncing;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CheckboxSyncing;
//# sourceMappingURL=syncing.js.map