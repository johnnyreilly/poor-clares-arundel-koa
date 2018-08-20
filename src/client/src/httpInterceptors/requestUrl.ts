export const requestUrlName = "commonRequestUrl";

requestUrlFactory.$inject = ["$templateCache"];
export function requestUrlFactory($templateCache: angular.ITemplateCacheService) {

    const service = {
        request
    };

    return service;

    function request(requestConfig: angular.IRequestConfig) {

        // For the loading of HTML templates we want the appRoot to be prefixed to the path
        // and we want a suffix to either allow caching or prevent caching
        // (depending on whether in debug mode or not)
        if (requestConfig.method === "GET" && requestConfig.url.toLowerCase().endsWith(".html")) {
            // If this has already been placed into a primed template cache then we should leave the URL as is
            // so that the version in templateCache is served.  If we tweak the URL then it will not be found
            const cachedAlready = $templateCache.get(requestConfig.url);
            if (!cachedAlready) {
                requestConfig.url = `${requestConfig.url}?v=${__VERSION__}`;
            }
        }

        return requestConfig;
    }
}
