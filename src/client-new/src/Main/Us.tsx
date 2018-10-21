import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import communityAtPrayer from '../images/main/Page2CommunityAtPrayer.jpg';
import susannaAtPrayer from '../images/main/Page3SusannaAtPrayer.jpg';
import chapelGroupAtPrayer from '../images/main/Page4ChapelGroupAtPrayer.jpg';
import groupOnLawn from '../images/main/Page5GroupOnLawn.jpg';
import yohaanaInLibrary from '../images/main/Page6YohaanaInLibrary.jpg';
import providenceGroup from '../images/main/Page7ProvidenceGroup.jpg';

const items = [
    {
        src: communityAtPrayer,
        caption: 'Called to a life of prayer'
    },
    {
        src: susannaAtPrayer,
        caption: 'we seek to live the Gospel'
    },
    {
        src: chapelGroupAtPrayer,
        caption: 'in and for'
    },
    {
        src: groupOnLawn,
        caption: 'our world of today.'
    },
    {
        src: yohaanaInLibrary,
        caption: 'We share our lives'
    },
    {
        src: providenceGroup,
        caption: 'and all that we do.'
    }
];

type Props = RouteComponentProps<{}>;

const defaultState = { activeIndex: 0 };

export class Us extends React.Component<Props, typeof defaultState> {
    animating = false;

    state = defaultState;

    onExiting = () => {
        this.animating = true;
    };

    onExited = () => {
        this.animating = false;
    };

    next = () => {
        if (this.animating) {
            return;
        }
        this.setState(prevState => {
            const nextIndex = prevState.activeIndex === items.length - 1 ? 0 : prevState.activeIndex + 1;
            return { activeIndex: nextIndex };
        });
    };

    previous = () => {
        if (this.animating) {
            return;
        }
        this.setState(prevState => {
            const nextIndex = prevState.activeIndex === 0 ? items.length - 1 : prevState.activeIndex - 1;
            return { activeIndex: nextIndex };
        });
    };

    goToIndex = (newIndex: number) => {
        if (this.animating) {
            return;
        }
        this.setState(() => ({ activeIndex: newIndex }));
    };

    render() {
        const { activeIndex } = this.state;

        const slides = items.map(item => {
            return (
                <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src}>
                    <img src={item.src} alt={item.caption} />
                    <CarouselCaption captionText={''} captionHeader={item.caption} />
                </CarouselItem>
            );
        });

        return (
            <div className="row">
                <div className="col-lg-6 col-md-7 col-sm-9 col-xs-12">
                    <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                    </Carousel>
                </div>
                <div className="col-lg-6 col-md-5 col-sm-3 col-xs-12">
                    <blockquote className="blockquote-reverse">
                        <p>"Called to a life of prayer we seek to live the Gospel in and for our world of today.</p>

                        <p>We share our lives and all that we do."</p>

                        <footer>The Poor Clares of Arundel.</footer>
                    </blockquote>

                    <p>
                        <a href="http://youtu.be/u_RlaYfJGbc">See a slideshow of us here...</a>
                    </p>
                </div>
            </div>
        );
    }
}
