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
var animate_1 = require("../../core/util/animate");
var core_1 = require("angular2/core");
var dom_adapter_1 = require("angular2/src/platform/dom/dom_adapter");
var MdBackdrop = (function () {
    function MdBackdrop(element) {
        this.element = element;
        this.clickClose = false;
        this.hideScroll = true;
        this.onHiding = new core_1.EventEmitter();
        this.onHidden = new core_1.EventEmitter();
        this.onShowing = new core_1.EventEmitter();
        this.onShown = new core_1.EventEmitter();
        this.transitionClass = 'md-active';
        this.transitionAddClass = true;
        this._visible = false;
        this._transitioning = false;
        this._previousOverflow = null;
        this._body = dom_adapter_1.DOM.query('body');
    }
    Object.defineProperty(MdBackdrop.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (value) {
            this.toggle(value);
        },
        enumerable: true,
        configurable: true
    });
    MdBackdrop.prototype.onClick = function () {
        if (this.clickClose && !this._transitioning && this.visible) {
            this.hide();
        }
    };
    MdBackdrop.prototype.hide = function () {
        return this.toggle(false);
    };
    MdBackdrop.prototype.show = function () {
        return this.toggle(true);
    };
    MdBackdrop.prototype.toggle = function (visible) {
        var _this = this;
        if (visible === void 0) { visible = !this.visible; }
        if (visible === this._visible) {
            return Promise.resolve();
        }
        var beginEvent = visible ? this.onShowing : this.onHiding;
        var endEvent = visible ? this.onShown : this.onHidden;
        this._visible = visible;
        this._transitioning = true;
        beginEvent.emit(this);
        var action = visible ?
            (this.transitionAddClass ? animate_1.Animate.enter : animate_1.Animate.leave) :
            (this.transitionAddClass ? animate_1.Animate.leave : animate_1.Animate.enter);
        if (visible && this.hideScroll && this.element && !this._previousOverflow) {
            var style = dom_adapter_1.DOM.getStyle(this._body, 'overflow');
            if (style !== 'hidden') {
                this._previousOverflow = style;
                dom_adapter_1.DOM.setStyle(this._body, 'overflow', 'hidden');
            }
        }
        else if (!visible && this.hideScroll && this.element && this._previousOverflow !== null) {
            dom_adapter_1.DOM.setStyle(this._body, 'overflow', this._previousOverflow);
            this._previousOverflow = null;
        }
        return action(this.element.nativeElement, this.transitionClass).then(function () {
            _this._transitioning = false;
            endEvent.emit(_this);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdBackdrop.prototype, "clickClose", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdBackdrop.prototype, "hideScroll", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MdBackdrop.prototype, "onHiding", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MdBackdrop.prototype, "onHidden", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MdBackdrop.prototype, "onShowing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MdBackdrop.prototype, "onShown", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdBackdrop.prototype, "transitionClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdBackdrop.prototype, "transitionAddClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdBackdrop.prototype, "visible", null);
    MdBackdrop = __decorate([
        core_1.Component({
            selector: 'md-backdrop',
            host: {
                'class': 'md-backdrop',
                '(click)': 'onClick()',
            },
        }),
        core_1.View({ template: '', encapsulation: core_1.ViewEncapsulation.None }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MdBackdrop);
    return MdBackdrop;
}());
exports.MdBackdrop = MdBackdrop;
//# sourceMappingURL=backdrop.js.map