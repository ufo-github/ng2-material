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
var core_2 = require('angular2/core');
var MdSidenav = (function () {
    function MdSidenav() {
        this.opened = true;
    }
    __decorate([
        core_2.Input(), 
        __metadata('design:type', Boolean)
    ], MdSidenav.prototype, "opened", void 0);
    MdSidenav = __decorate([
        core_1.Directive({ selector: 'md-sidenav' }), 
        __metadata('design:paramtypes', [])
    ], MdSidenav);
    return MdSidenav;
})();
exports.MdSidenav = MdSidenav;
//# sourceMappingURL=sidenav.js.map