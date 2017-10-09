"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var header_component_1 = require("./shared/header/header.component");
var footer_component_1 = require("./shared/footer/footer.component");
var sort_buttons_component_1 = require("./shared/sort-buttons/sort-buttons.component");
var search_button_component_1 = require("./shared/search-button/search-button.component");
/*import {StarsComponent}  from './shared/stars/stars.component';*/
var search_filter_pipe_1 = require("./features/pipe/search-filter/search-filter.pipe");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var inMemoryServer_1 = require("./inMemServer/inMemoryServer");
var movie_list_component_1 = require("./features/movie-list/movie-list.component");
var router_1 = require("@angular/router");
var movie_item_component_1 = require("./features/movie-item/movie-item.component");
var rating_component_1 = require("./shared/rating/rating.component");
var appRoutes = [
    { path: "movie-list", component: movie_list_component_1.MovieListComponent },
    { path: 'movie-item/:id', component: movie_item_component_1.MovieItemComponent },
    { path: "", redirectTo: "movie-list", pathMatch: "full" }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            sort_buttons_component_1.SortButtonsComponent,
            search_button_component_1.SearchButtonComponent,
            /* StarsComponent,*/
            search_filter_pipe_1.SearchFilter,
            movie_list_component_1.MovieListComponent,
            movie_item_component_1.MovieItemComponent,
            rating_component_1.StarRatingComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(inMemoryServer_1.ItemData),
            router_1.RouterModule.forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map