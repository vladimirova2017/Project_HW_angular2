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
var core_1 = require("@angular/core");
var SearchButtonComponent = (function () {
    function SearchButtonComponent() {
        this.newSearchTitle = '';
        this.eventSearch = new core_1.EventEmitter();
    }
    SearchButtonComponent.prototype.onSearch = function (form) {
        this.eventSearch.emit(form.value.title);
    };
    return SearchButtonComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SearchButtonComponent.prototype, "eventSearch", void 0);
SearchButtonComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'search-button',
        templateUrl: 'search-button.component.html',
        styleUrls: ['search-button.component.css']
    })
], SearchButtonComponent);
exports.SearchButtonComponent = SearchButtonComponent;
//# sourceMappingURL=search-button.component.js.map