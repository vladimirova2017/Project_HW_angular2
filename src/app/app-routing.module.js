"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var movie_item_component_1 = require("./features/movie-item/movie-item.component");
var movie_list_component_1 = require("./features/movie-list/movie-list.component");
var inMemoryServer_1 = require("./inMemServer/inMemoryServer");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var core_module_1 = require("./core/core.module");
exports.appRoutes = [
    { path: 'movie-list', component: movie_list_component_1.MovieListComponent },
    { path: 'movie-item/:id', component: movie_item_component_1.MovieItemComponent },
    { path: '', redirectTo: 'movie-list', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            core_module_1.CoreModule,
            router_1.RouterModule.forRoot(exports.appRoutes),
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(inMemoryServer_1.ItemData)
        ],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map