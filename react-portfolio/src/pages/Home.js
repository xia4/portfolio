import styled from 'styled-components';
import bannerImg from '../assets/main-banner3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

const HomeSection = styled.section`
    background: url(${bannerImg});
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    align-items: center;
`
const TitleWrap = styled.div`
    max-width: 90%;
    width: 100%;
    margin: 0 auto;
`
const MainTitle = styled.h1`
    font-size: 80px;
    color: #fff;
    font-weight: bold;
    letter-spacing: 10px;
    @media screen and (max-width: 1350px) {
        font-size: 60px;
    }
    @media screen and (max-width: 768px) {
        font-size: 34px;
    }
`
const MainIntro = styled.p`
    margin-top: 30px;
    font-size: 20px;
    line-height: 1.5;
    color: #fff;
     @media screen and (max-width: 768px) {
        font-size: 18px;
     }
`

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 3000)
        // const timer = setTimeout(() => {
        //     setIsLoaded(true);
        // }, 0)

        AOS.init({
            once: true,
            offset: 200
        });

        return () => clearTimeout(timer)
    }, []);

    return (
        <div className="section">
            <HomeSection id='home'>
                {isLoaded && (
                    <TitleWrap>
                        <MainTitle data-aos='fade-up' data-aos-duration="1500" data-aos-delay="500" >
                            HYUNJUN'S<br />PORTFOLIO
                        </MainTitle>
                        <MainIntro data-aos='fade-up' data-aos-duration="1500" data-aos-delay="700">
                            안녕하세요! 3년 차 웹 퍼블리셔로 웹 페이지 구축과 최적화에 경험이 있습니다.<br />
                            사용자 경험을 중시하며, 효율적인 웹 콘텐츠 제공을 위해 노력하는 웹 퍼블리셔 입니다.
                        </MainIntro>
                    </TitleWrap>
                )}
            </HomeSection>
        </div>
    )
}

export default Home;