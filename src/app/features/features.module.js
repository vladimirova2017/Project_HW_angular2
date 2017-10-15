"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var index_1 = require("./movie-list/index");
var index_2 = require("./movie-item/index");
var shared_module_1 = require("../shared/shared.module");
var index_3 = require("./movie-edit/index");
var FeaturesModule = (function () {
    function FeaturesModule() {
    }
    return FeaturesModule;
}());
FeaturesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            shared_module_1.SharedModule
        ],
        exports: [
            index_1.MovieListModule,
            index_2.MovieItemModule,
            index_3.MovieEditModule
        ]
    })
], FeaturesModule);
exports.FeaturesModule = FeaturesModule;
//# sourceMappingURL=features.module.js.map