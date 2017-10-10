"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var footer_component_1 = require("./footer/footer.component");
var header_component_1 = require("./header/header.component");
var search_button_component_1 = require("./search-button/search-button.component");
var sort_buttons_component_1 = require("./sort-buttons/sort-buttons.component");
var forms_1 = require("@angular/forms");
var rating_component_1 = require("./rating/rating.component");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        declarations: [
            footer_component_1.FooterComponent,
            header_component_1.HeaderComponent,
            rating_component_1.RatingComponent,
            search_button_component_1.SearchButtonComponent,
            sort_buttons_component_1.SortButtonsComponent
        ],
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        providers: [],
        exports: [
            footer_component_1.FooterComponent,
            header_component_1.HeaderComponent,
            rating_component_1.RatingComponent,
            search_button_component_1.SearchButtonComponent,
            sort_buttons_component_1.SortButtonsComponent
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map