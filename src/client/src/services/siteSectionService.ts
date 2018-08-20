export const siteSectionServiceName = "siteSectionService";
export class SiteSectionService {

    siteSection: string;
    constructor() {
      this.siteSection = "home";
    }

    getSiteSection() {
        return this.siteSection;
    }

    determineSiteSection(path: string) {
        let newSiteSection = "home";

        if (path.indexOf("/theConvent/") !== -1) {
            newSiteSection = "theConvent";
        }
        else if (path !== "/") {
            newSiteSection = "main";
        }

        this.siteSection = newSiteSection;
    }
}
