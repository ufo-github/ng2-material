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
var imagePath = 'public/images/avatars/avatar11.svg';
var ListBasicUsage = (function () {
    function ListBasicUsage() {
        this.phones = [
            { type: 'Home', number: '(555) 251-1234' },
            { type: 'Cell', number: '(555) 786-9841' },
            { type: 'Office', number: '(555) 314-1592' }
        ];
        this.todos = [
            {
                face: imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face: imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face: imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face: imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face: imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
        ];
    }
    ListBasicUsage = __decorate([
        core_1.Component({ selector: 'list-basic-usage' }),
        core_1.View({
            templateUrl: 'examples/components/list/basic_usage.html',
            styleUrls: ['examples/components/list/basic_usage.css'],
            directives: [all_1.MATERIAL_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], ListBasicUsage);
    return ListBasicUsage;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ListBasicUsage;
//# sourceMappingURL=basic_usage.js.map