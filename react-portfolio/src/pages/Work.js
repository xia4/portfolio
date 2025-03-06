import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Mousewheel } from 'swiper/modules';

const WorkWrapper = styled.section`
    min-height: 100vh;
`

const WorkCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    
    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80%;
        height: auto;
        padding: 40px 50px;
        border: 1px dashed #bbb;
        border-radius: 40px;
         @media screen and (max-width: 1350px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 50px;
         }
    }
`

const Article = styled.article`
    width: 30%;
    @media screen and (max-width: 1350px) {
        width: 100%;
    }
`

const Sub = styled.p`
    font-size: 17px;
`
const MainTitle = styled.h3`
    font-size: 36px;
    font-weight: 700;
`
const DescList = styled.ul`
    margin-top: 20px;

    @media screen and (max-width: 1350px){
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        float: left;

        &:has(+ div) {
            width: 60%;
        }
    }
`

const DescItem = styled.li`
    padding: 0 70px 25px 0;

    &:last-child {
        padding-bottom: 0;
    }
    @media screen and (max-width: 1350px) {
        padding-right: 60px;
    }
`

const BoldFont = styled.strong`
    font-size: 18px;
    color: #444;
`
const SubTxt = styled.p`
    font-size: 16px;
    color: #666;
    word-break: keep-all;
`
const ImgBox = styled.figure`
    max-width: 755px;
    max-height: 360px;
    width: 100%;
    height: 360px;
    position: relative;
    overflow: hidden;
    box-shadow: 5px 5px 25px 10px rgba(0, 0, 0, 0.2);
    @media screen and (max-width: 1350px) {
        margin: auto;
    }
    
    &:hover {
        img {
            transform: scale(1.1);
        }
    }
    img {
        height: 100%;
        transition: all 0.5s;
        object-fit: cover;
    }
`

const Btn = styled.div`
    max-width: 200px;
    width: 100%;
    margin-top: 20px;
    @media screen and (max-width: 1350px) {
        float: right;
        margin-top: auto;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 40px;
        font-size: 18px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: #666;
        border: 1px solid #bbb;
        border-radius: 40px;
        transition: all 0.4s;

        &:hover {
            background-color: #d3d3d3;
            border-color: #d3d3d3;
            color: #fff;
        }
    }
`

const Work = () => {
    const projects = [
        {
            title: "NAVER CLOUD PLATFORM",
            subTitle: "RESPONSIVE WEBSITE [PC, MOB]",
            stack: "HTML, CSS, JavaScript",
            contribution: "퍼블리싱 100% + 개발 30%",
            period: "23.06 - 25.03",
            description: "네이버 클라우드와 협업하여 네이버 클라우드 서비스 마크업 및 유지보수 작업을 팀원들과 함께 협업하여 작업했습니다.",
            imgSrc: require('../assets/port_navercloud.jpg'),
            link: null
        },
        {
            title: "KICC",
            subTitle: "RESPONSIVE WEBSITE [PC, MOB]",
            stack: "Vue3, SCSS",
            contribution: "퍼블리싱 80% + 개발 40%",
            period: "25.01 - 25.03",
            description: "KICC 전체 리뉴얼되어 내외부 개발자 2명과 함께 작업을 하였으며, 컴포넌트 제작, 메인/서브 페이지 제작, 반응형 작업 등 vue3 환경에서 퍼블리싱 작업 및 프론트 개발 업무를 진행하였습니다.",
            imgSrc: require('../assets/kicc.png'),
            link: "https://www.kicc.co.kr/"
        },
        {
            title: "tedo",
            subTitle: "RESPONSIVE WEBSITE [PC, MOB, TABLET]",
            stack: "PHP, HTML, CSS",
            contribution: "퍼블리싱 100% + 개발 30%",
            period: "24.11 - 25.02",
            description: "클라이언트와 기획 단계부터 함께 논의하였으며, 반응형 UI와 섹션별 인터렉션을 제안해 결과물의 완성도를 더욱 높였습니다.",
            imgSrc: require('../assets/tedo.png'),
            link: "https://tedo.kr/"
        },
        {
            title: "한국경영인증원",
            subTitle: "STANDARD WEBSITE [INDEX]",
            stack: "PHP, HTML, CSS",
            contribution: "퍼블리싱 100%",
            period: "24.03 - 25.03",
            description: "클라이언트와 직접 소통하며 서브페이지 수정, 제작 등 PHP 기반 퍼블리싱 유지보수 작업을 진행하였습니다.",
            imgSrc: require('../assets/kmr.png'),
            link: "https://www.ikmr.co.kr/"
        },
        {
            title: "두산 친환경 리즌마켓",
            subTitle: "STANDARD WEBSITE [INDEX]",
            stack: "Svelte, CSS",
            contribution: "퍼블리싱 100% + 개발 70%",
            period: "24.03 - 24.11",
            description: "샵바이를 통해 제작 된 친환경 쇼핑 플랫폼이며,  샵바이에서 제공해주는 API를 활용해 컴포넌트 제작 개발, 이벤트 페이지, 서브 페이지 등 퍼블리싱을 Svelte.js, SCSS로 작업하였습니다.",
            imgSrc: require('../assets/rezn.png'),
            link: "https://reznmarket.com/home"
        },
        {
            title: "두산 피플리",
            subTitle: "RESPONSIVE WEBSITE [PC, MOB]",
            stack: "HTML, CSS, JavaScript",
            contribution: "퍼블리싱 100%",
            period: "24.04 - 24.05",
            description: "두산의 기본적인 HR 전반에 대한 올인원 플랫폼이며, HTML, CSS, JavaScript를 활용하여 퍼블리싱 작업을 진행하였습니다.",
            imgSrc: require('../assets/peoply.png'),
            link: "https://www.doosandigitalinnovation.com/kr/service/peoply"
        },
        {
            title: "네이쳐스영",
            subTitle: "RESPONSIVE WEBSITE [PC, MOB]",
            stack: "PHP, HTML, CSS, JavaScript",
            contribution: "퍼블리싱 40%",
            period: "24.03 - 24.05",
            description: "PHP 기반 퍼블리싱하여 메인, 서브 페이지를 유지보수 작업하였습니다.",
            imgSrc: require('../assets/naturesyoung.png'),
            link: "https://naturesyoung.com/"
        },
        {
            title: "TSI",
            subTitle: "RESPONSIVE WEBSITE [PC, MOB]",
            stack: "PHP, HTML, CSS, JavaScript",
            contribution: "퍼블리싱 40%",
            period: "23.11 - 23.12",
            description: "PHP 기반 퍼블리싱하여 메인, 서브 페이지를 유지보수 작업하였습니다.",
            imgSrc: require('../assets/TSI.png'),
            link: "https://taesungind.co.kr/"
        },
    ];
    return (
        <div className="section" id="work">
            <WorkWrapper >
                <Swiper
                    direction={'horizontal'}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={true}
                    mousewheel={true}
                    modules={[Navigation, Mousewheel]}
                    loop={false}
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <WorkCont>
                                <div data-aos='zoom-in' data-aos-duration="1000" data-aos-delay="300">
                                    <Article>
                                        <div className="tit_area">
                                            <Sub>{project.subTitle}</Sub>
                                            <MainTitle>{project.title}</MainTitle>
                                        </div>
                                        <DescList>
                                            <DescItem>
                                                <BoldFont>기술 스택</BoldFont>
                                                <SubTxt>{project.stack}</SubTxt>
                                            </DescItem>
                                            <DescItem>
                                                <BoldFont>기여도</BoldFont>
                                                <SubTxt>{project.contribution}</SubTxt>
                                            </DescItem>
                                            <DescItem>
                                                <BoldFont>작업 기간</BoldFont>
                                                <SubTxt>{project.period}</SubTxt>
                                            </DescItem>
                                            <DescItem>
                                                <SubTxt>{project.description}</SubTxt>
                                            </DescItem>
                                        </DescList>
                                        {project.link && (
                                            <Btn>
                                                <a href={project.link} target="_blank" className="view_btn">view</a>
                                            </Btn>
                                        )}
                                    </Article>
                                    <ImgBox>
                                        <img src={project.imgSrc} alt={project.title} />
                                    </ImgBox>
                                </div>
                            </WorkCont>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </WorkWrapper>
        </div>
    )
}

export default Work;