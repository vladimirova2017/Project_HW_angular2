"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var inMemoryServer_1 = require("./inMemServer/inMemoryServer");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var movie_list_routes_1 = require("./features/movie-list/movie-list.routes");
var movie_item_routes_1 = require("./features/movie-item/movie-item.routes");
var movie_edit_routers_1 = require("./features/movie-edit/movie-edit.routers");
exports.appRoutes = movie_list_routes_1.MovieListRoutes.concat(movie_item_routes_1.MovieItemRoutes, movie_edit_routers_1.MovieEditRoutes, [
    { path: '', redirectTo: 'movie-list', pathMatch: 'full' },
]);
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(exports.appRoutes),
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(inMemoryServer_1.ItemData)
        ],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map