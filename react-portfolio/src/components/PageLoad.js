import { useEffect } from 'react';
import styled from 'styled-components';
import { gsap, Power3, Power4 } from 'gsap';

const PageLoadWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #d4d4d4; 
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
`;

const TitleBox = styled.div`
    text-align: center;
    opacity: 0;
    pointer-events: auto;

    .title {
        font-size: 2rem;
        color: #0a0a0a;
        font-family: 'Righteous', cursive;
    }

    .desc {
        color: #aaa;
        margin-top: 10px;
    }
`;

function PageLoadAnimation({ onComplete }) {
    useEffect(() => {
        const load = gsap.timeline({
            paused: true,
            onComplete: () => onComplete && onComplete()
        });

        load.addLabel('label')
            .to('.title-box', { opacity: 1, delay: 0.3, duration: 2 }, 'label')
            .to('.page-load', { yPercent: -100, delay: 2.5, ease: Power3.easeIn, duration: 0.8 }, 'label')
            .to('.title-box', { opacity: 0, delay: 2, duration: 1.7 }, 'label')
            .set('.page-load', { pointerEvents: 'none', delay: 3.3 }, 'label')
            .fromTo('.sc-visual .row *', { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.3, ease: Power4.easeOut, delay: 3.3 }, 'label');

        load.play();
    }, [onComplete]);

    return (
        <PageLoadWrapper className="page-load">
            <TitleBox className="title-box">
                <strong className="title">web publisher</strong>
                <p className="desc"><em className="copyright-symbol">&copy;</em><span className="year">2025</span> portfolio</p>
            </TitleBox>
        </PageLoadWrapper>
    );
}

export default PageLoadAnimation;
