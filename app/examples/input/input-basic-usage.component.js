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
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var input_1 = require('@angular2-material/input');
var toolbar_1 = require('@angular2-material/toolbar');
var ng2_material_1 = require('ng2-material');
var InputBasicUsageComponent = (function () {
    function InputBasicUsageComponent() {
        this.user = {
            title: 'Developer',
            email: 'ipsum@lorem.com',
            firstName: '',
            lastName: '',
            company: 'Google',
            address: '1600 Amphitheatre Pkwy',
            address2: '',
            city: 'Mountain View',
            state: 'CA',
            biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
            postalCode: '94043'
        };
        this.states = [
            'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL',
            'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT',
            'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI',
            'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
        ].map(function (state) { return { abbrev: state }; });
    }
    InputBasicUsageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'input-basic-usage',
            templateUrl: 'input-basic-usage.component.html',
            styleUrls: ['input-basic-usage.component.css'],
            directives: [ng2_material_1.MATERIAL_DIRECTIVES, toolbar_1.MdToolbar, input_1.MD_INPUT_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], InputBasicUsageComponent);
    return InputBasicUsageComponent;
}());
exports.InputBasicUsageComponent = InputBasicUsageComponent;
//# sourceMappingURL=input-basic-usage.component.js.map