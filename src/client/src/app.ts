import * as angular from "angular";
import "angular-animate";
import "angular-ui-bootstrap";
import "angular-ui-router";

import { mainControllerName, MainController } from "./controllers/mainController";
import { navControllerName, NavController } from "./controllers/navController";
import { nunCarouselControllerName, NunCarouselController } from "./controllers/nunCarouselController";
import { prayerRequestControllerName, PrayerRequestController } from "./controllers/prayerRequestController";
import { prayerRequestServiceName, PrayerRequestService } from "./services/prayerRequestService";
import { siteSectionServiceName, SiteSectionService } from "./services/siteSectionService";
import { requestUrlName, requestUrlFactory } from "./httpInterceptors/requestUrl";
import configureRoutes from "./app.routes";

const appName = "poorClaresApp";

function registerApp() {
    const controllersModuleName = registerControllers();
    const servicesModuleName = registerServices();
    const app = angular.module(appName, [
        "ngAnimate",
        "ui.router",
        "ui.bootstrap",
        controllersModuleName,
        servicesModuleName
    ]);

// console.log("__IN_DEBUG__", __IN_DEBUG__, typeof __IN_DEBUG__);
// console.log("__VERSION__", __VERSION__, typeof __VERSION__);

    app.config(configureRoutes);
    // app.value(configName, config);

    configureApp(app, __IN_DEBUG__);

    configureHttpInterceptors(app);

    // decorateExceptionHandler(app);

    return app.name;
}

function registerControllers() {
    return angular.module("poorClaresAppControllers", [])
        .controller(mainControllerName, MainController)
        .controller(navControllerName, NavController)
        .controller(nunCarouselControllerName, NunCarouselController)
        .controller(prayerRequestControllerName, PrayerRequestController)
        .name;
}

function registerServices() {
    return angular.module("poorClaresAppServices", [])
        .service(prayerRequestServiceName, PrayerRequestService)
        .service(siteSectionServiceName, SiteSectionService)
        .name;
}

function configureApp(app: ng.IModule, inDebug: boolean) {
    app.config(["$logProvider", "$compileProvider", (
        $logProvider: ng.ILogProvider,
        $compileProvider: ng.ICompileProvider
    ) => {
        $logProvider.debugEnabled(inDebug);
        $compileProvider.debugInfoEnabled(inDebug);
    }]);
}

function configureHttpInterceptors(app: ng.IModule) {
    app.factory(requestUrlName, requestUrlFactory)
        .config(["$httpProvider", function ($httpProvider: ng.IHttpProvider) {
            $httpProvider.interceptors.push(requestUrlName);
        }]);
}

export default registerApp;