interface Slide { image: string; text: string; id: number; }

export const nunCarouselControllerName = "NunCarouselController";
export class NunCarouselController {
    myInterval: number = 3000;

    slides: Slide[] = [
        {
            id: 0,
            image: "/images/main/Page2CommunityAtPrayer.jpg",
            text: "Called to a life of prayer"
        }, {
            id: 1,
            image: "/images/main/Page3SusannaAtPrayer.jpg",
            text: "we seek to live the Gospel"
        }, {
            id: 2,
            image: "/images/main/Page4ChapelGroupAtPrayer.jpg",
            text: "in and for"
        }, {
            id: 3,
            image: "/images/main/Page5GroupOnLawn.jpg",
            text: "our world of today."
        }, {
            id: 4,
            image: "/images/main/Page6YohaanaInLibrary.jpg",
            text: "We share our lives"
        }, {
            id: 5,
            image: "/images/main/Page7ProvidenceGroup.jpg",
            text: "and all that we do."
        }];
}
