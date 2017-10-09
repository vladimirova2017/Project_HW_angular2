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
var movie_service_1 = require("../../core/services/movie.service");
var router_1 = require("@angular/router");
var MovieListComponent = (function () {
    function MovieListComponent(service, router) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.flagLikes = false;
        this.flagRating = false;
        this.service.getItems().subscribe(function (result) { return _this.itemData = result; }, function (error) { return console.log(error.statusText); });
    }
    MovieListComponent.prototype.ratingComponetClick = function (clickObj) {
        var item = this.itemData.filter(function (item) { return item.id === clickObj.itemId; });
        if (!!item && item.length === 1) {
            item[0].stars = clickObj.rating;
            this.ratingClicked = clickObj.rating;
            this.itemIdRatingClicked = clickObj.itemId;
        }
    };
    MovieListComponent.prototype.searchItemMovie = function (searchTitle) {
        var _this = this;
        this.service.getItems().subscribe(function (result) {
            _this.itemData = result.filter(function (item) { return (item['title'].toLowerCase().indexOf(searchTitle) !== -1); });
        }, function (error) { return console.log(error.statusText); });
    };
    MovieListComponent.prototype.sortItemMovie = function (sortBy) {
        if (sortBy == 'likes') {
            this.sortByLikes();
        }
        else {
            this.sortByRating();
        }
    };
    MovieListComponent.prototype.sortByLikes = function () {
        var _this = this;
        this.service.getItems().subscribe(function (result) {
            if (!_this.flagLikes) {
                _this.itemData = result.sort(function (a, b) { return b['likes'] - a['likes']; });
            }
            else {
                _this.itemData = result.sort(function (a, b) { return a['likes'] - b['likes']; });
            }
            _this.flagLikes = !_this.flagLikes;
        }, function (error) { return console.log(error.statusText); });
    };
    MovieListComponent.prototype.sortByRating = function () {
        var _this = this;
        this.service.getItems().subscribe(function (result) {
            if (!_this.flagRating) {
                _this.itemData = result.sort(function (a, b) { return b['stars'] - a['stars']; });
            }
            else {
                _this.itemData = result.sort(function (a, b) { return a['stars'] - b['stars']; });
            }
            _this.flagRating = !_this.flagRating;
        }, function (error) { return console.log(error.statusText); });
    };
    MovieListComponent.prototype.like = function (item) {
        item['likes']++;
        this.likeRender(item);
    };
    MovieListComponent.prototype.dislike = function (item) {
        if (item['likes']) {
            item['likes']--;
            this.likeRender(item);
        }
    };
    MovieListComponent.prototype.getItemData = function () {
        return this.itemData;
    };
    MovieListComponent.prototype.setItemData = function (itemData) {
        return this.itemData = itemData;
    };
    MovieListComponent.prototype.movieItem = function (item) {
        this.router.navigate(['/movie-item', item.id]);
    };
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.service.getItems().subscribe(function (result) { return _this.itemData = result; }, function (error) { return console.log(error.statusText); });
    };
    MovieListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    MovieListComponent.prototype.likeRender = function (item) {
        this.service.likeMovie(item).subscribe(function (result) { return console.log(result.status); }, function (error) { return console.log(error); });
    };
    ;
    return MovieListComponent;
}());
MovieListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'movie-list',
        templateUrl: 'movie-list.component.html',
        styleUrls: ['movie-list.component.css'],
        providers: [movie_service_1.MovieService]
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieService,
        router_1.Router])
], MovieListComponent);
exports.MovieListComponent = MovieListComponent;
//# sourceMappingURL=movie-list.component.js.map