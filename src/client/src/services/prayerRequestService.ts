interface PrayerRequestResult {
    success: boolean;
    text: string;
}

export const prayerRequestServiceName = "prayerRequestService";
export class PrayerRequestService {

    url: string;

    static $inject = ["$http"];
    constructor(
        private $http: ng.IHttpService) {
          this.url = "/api/PrayerRequest";
    }

    sendPrayerRequest(email: string, prayFor: string) {

        return this.$http.post<PrayerRequestResult>(this.url, { email, prayFor })
            .then(response => ({
                  success: response.data.success,
                  text: response.data.text
            }));
    }
}
