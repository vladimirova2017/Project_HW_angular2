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
var search_filter_pipe_1 = require("./features/pipe/search-filter/search-filter.pipe");
var movie_list_component_1 = require("./features/movie-list/movie-list.component");
var movie_item_component_1 = require("./features/movie-item/movie-item.component");
var rating_component_1 = require("./shared/rating/rating.component");
var app_routing_module_1 = require("./app-routing.module");
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
            search_filter_pipe_1.SearchFilter,
            movie_list_component_1.MovieListComponent,
            movie_item_component_1.MovieItemComponent,
            rating_component_1.StarRatingComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map