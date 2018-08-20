import { SiteSectionService } from "../services/siteSectionService";

export const mainControllerName = "MainController";
export class MainController {

    static $inject = ["$location", "siteSectionService"];
    constructor(
        private $location: ng.ILocationService,
        private siteSectionService: SiteSectionService) {

        siteSectionService.determineSiteSection($location.path());
    }
}
