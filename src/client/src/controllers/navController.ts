import { SiteSectionService } from "../services/siteSectionService";

/**
 * See https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference for docs
 */
export interface IWindowWithAnalyticsService extends ng.IWindowService {
    ga: (command: string, hitType: string, fields: {
        page: string;
        title?: string;
    }) => any;
}

export const navControllerName = "NavController";
export class NavController {

    isCollapsed: boolean;

    static $inject = ["$scope", "$rootScope", "siteSectionService", "$location", "$window"];
    constructor(
        private $scope: ng.IScope,
        private $rootScope: ng.IRootScopeService,
        private siteSectionService: SiteSectionService,
        private $location: ng.ILocationService,
        private $window: IWindowWithAnalyticsService) {

        this.isCollapsed = true;

        $rootScope.$on("$stateChangeStart", (event, toState, toParams, fromState, fromParams) => this.isCollapsed = true);
        $rootScope.$on("$stateChangeError", (event, toState, toParams, fromState, fromParams, error) => { });
        $rootScope.$on("$stateChangeSuccess", (event, toState, toParams, fromState, fromParams) => $window.ga("send", "pageview", { page: $location.path() }));
    }

    toggleCollapsed() {
        this.isCollapsed = !this.isCollapsed;
    }
}
