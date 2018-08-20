import { mainControllerName } from "./controllers/mainController";

function getTheConventTemplateUrl(params: any) {
    const view = params.view || "home";
    return "templates/theConvent/" + view + ".html";
}

function getMainTemplateUrl(params: any) {
    const view = params.view || "home";
    return "templates/main/" + view + ".html";
}

configureRoutes.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
function configureRoutes(
        $stateProvider: angular.ui.IStateProvider,
        $urlRouterProvider: angular.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider) {

    $urlRouterProvider.otherwise("home");

    $stateProvider.
        state("home", {
            url: "/",
            templateUrl: "templates/home.html",
            controller: mainControllerName
        }).
        state("the-convent", {
            abstract: true,
            template: `
    <div ng-include="'templates/theConvent/navbar.html'"></div>

    <div class="container">
        <div ui-view></div>
    </div>
`
        }).
        state("the-convent.content", {
            url: "/theConvent/:view",
            templateUrl: getTheConventTemplateUrl,
            controller: mainControllerName
        }).
        state("main", {
            abstract: true,
            template: `
    <div ng-include="'templates/main/navbar.html'"></div>

    <div class="container">
        <div ui-view></div>
    </div>
`
        }).
        state("main.content", {
            url: "/:view",
            templateUrl: getMainTemplateUrl,
            controller: mainControllerName
        });

    $locationProvider.html5Mode(true);
}

export default configureRoutes;