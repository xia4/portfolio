import styled from 'styled-components';
import NameImg from '../assets/name_img2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBuilding } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel } from 'swiper/modules';

const AboutWrapper = styled.section`
  min-height: 100vh;
  background-color: #f3f4f6;
  padding: 0 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    padding: 5rem;
  }
`;

const AboutCard = styled.div`
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 2.5rem 5rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 768px) {
        padding: 2.5rem;
    }
    
    > div {
        display: flex;
        justify-content: space-evenly;
        gap: 30px;

        @media screen and (max-width: 1024px){
            flex-direction: column;
            align-items: center;

            + div {
                align-items: flex-start;
                flex-direction: row;
                @media screen and (max-width: 768px) {
                    flex-direction: column;
                }
            }
        }
        

        + div {
            margin-top: 40px;
        }
    }
`;

const AboutTitle = styled.h2`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 1rem;
    font-size: 24px;
    font-weight: bold;
    color: #222;
    @media screen and (max-width: 768px) {
        font-size: 20px;
     }
`;

const AboutText = styled.p`
  color: #4b5563;
  font-size: 16px;
  font-weight: 600;
  margin-top: 1rem;
  line-height: 1.5;
  word-break: keep-all;
  @media screen and (max-width: 768px) {
        font-size: 14px;
     }
`;

const LeftBox = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    
    
    &.img_wrapper {
        border-radius: 20px;
        overflow: hidden;
        box-shadow: rgb(61 61 71 / 44%) 0px 7px 29px 0px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`
const RightBox = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    width: 100%;
`
const Signature = styled.h3`
    width: 233px;
    height: 50px;
    background: url(${NameImg}) 0 0 no-repeat;
    background-size: 100% auto;
`
const AboutList = styled.ul`
    font-size: 16px;
    line-height: 1.5;

    li {
        color: #4b5563;
        font-family: "Noto Sans KR", sans-serif;
        font-weight: 600;

        + li {
            margin-top: 10px;
        }
    }
`

const SkillList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;

    li {
        border: 1px dashed #aaa;
        border-radius: 50px;
        padding: 2px 15px;
        text-transform: uppercase;
        font-size: 14px;
        line-height: 1.5;
        color: #858585;
        transition: all 0.2s;
        cursor: default;

        &:hover {
            border-color: #222;
            color: #222;
        }
    }
`

const About = () => {
    return (
        <div className="section" id='about'>
            <AboutWrapper>
                <Swiper
                    direction={'horizontal'}
                    spaceBetween={50}
                    slidesPerView={1}
                    mousewheel={true}
                    modules={[Mousewheel]}
                    loop={false}
                >
                    <SwiperSlide>
                        <AboutCard>
                            <div>
                                <LeftBox data-aos='fade-right' data-aos-duration="1000" data-aos-delay="400" className='img_wrapper' >
                                    <img src={require('../assets/proflie_img.jpg')} alt="프로필 이미지" />
                                </LeftBox>
                                <RightBox data-aos='fade-left' data-aos-duration="1000" data-aos-delay="400" >
                                    <Signature >
                                        <span class="hidden">HyunJun Lee</span>
                                    </Signature>
                                    <AboutText>
                                        안녕하세요! 3년 차 웹 퍼블리셔 이현준입니다.
                                    </AboutText>
                                    <AboutText>
                                        3년간 다양한 프로젝트에서 웹 퍼블리싱을 담당하며, 접근성과 사용성을 고려해 사용자 경험을 중심으로 설계한 웹 퍼블리셔입니다.
                                    </AboutText>
                                    <AboutText>
                                        HTML, CSS, JavaScript에 대한 탄탄한 기본기를 바탕으로 시멘틱 마크업, 반응형 디자인, 크로스 브라우징 대응에 강점을 가지고 있습니다.
                                    </AboutText>
                                    <AboutText>
                                        디자인을 실제 웹 환경에 매끄럽게 구현하며, 작은 디테일까지 세심하게 처리해 완성도를 높여왔습니다.
                                    </AboutText>
                                    <AboutText>
                                        프론트엔드 개발 역량을 늘리기 위해 Svelte.js, Vue3 등 다양한 JavaScript 프레임워크를 활용하여 프로젝트를 진행해왔고
                                    </AboutText>
                                    <AboutText>
                                        협업을 통해 더욱 성장해 프론트엔드 개발자로 나아가는 목표를 가지고 있습니다.
                                    </AboutText>
                                    <SkillList>
                                        <li className='skill_item'>html</li>
                                        <li className='skill_item'>css</li>
                                        <li className='skill_item'>scss</li>
                                        <li className='skill_item'>javascript</li>
                                        <li className='skill_item'>jquery</li>
                                        <li className='skill_item'>react</li>
                                        <li className='skill_item'>git</li>
                                        <li className='skill_item'>figma</li>
                                    </SkillList>
                                </RightBox>
                            </div>
                            <div>
                                <LeftBox data-aos='fade-right' data-aos-duration="1000" data-aos-delay="400" >
                                    <AboutTitle><FontAwesomeIcon icon={faBuilding} />WORK EXPERIENCE</AboutTitle>
                                    <AboutList>
                                        <li class="item">2023.06 ~ 2025.03 (주)서로커뮤니케이션</li>
                                        <li class="item">2021.11 ~ 2022.12 (주)이유엠</li>
                                    </AboutList>
                                </LeftBox>
                                <RightBox data-aos='fade-left' data-aos-duration="1000" data-aos-delay="300" >
                                    <AboutTitle><FontAwesomeIcon icon={faGraduationCap} />EDUCATION</AboutTitle>
                                    <AboutList>
                                        <li class="item">2021.07 ~ 2021.10 위코드 부트캠프 수료</li>
                                        <li class="item">2016.03 ~ 2021.07 전주비전대학교 건축과 졸업</li>
                                    </AboutList>
                                </RightBox>
                            </div>
                        </AboutCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <AboutCard>
                            <div>
                                <LeftBox data-aos='fade-right' data-aos-duration="1000" data-aos-delay="400" className='img_wrapper' >
                                    <img src={require('../assets/proflie_img.jpg')} alt="프로필 이미지" />
                                </LeftBox>
                                <RightBox data-aos='fade-left' data-aos-duration="1000" data-aos-delay="400" >
                                    <Signature >
                                        <span class="hidden">HyunJun Lee</span>
                                    </Signature>
                                    <AboutText>
                                        안녕하세요! 3년 차 웹 퍼블리셔 이현준입니다.
                                    </AboutText>
                                    <AboutText>
                                        3년간 다양한 프로젝트에서 웹 퍼블리싱을 담당하며, 접근성과 사용성을 고려해 사용자 경험을 중심으로 설계한 웹 퍼블리셔입니다.
                                    </AboutText>
                                    <AboutText>
                                        HTML, CSS, JavaScript에 대한 탄탄한 기본기를 바탕으로 시멘틱 마크업, 반응형 디자인, 크로스 브라우징 대응에 강점을 가지고 있습니다.
                                    </AboutText>
                                    <AboutText>
                                        디자인을 실제 웹 환경에 매끄럽게 구현하며, 작은 디테일까지 세심하게 처리해 완성도를 높여왔습니다.
                                    </AboutText>
                                    <AboutText>
                                        프론트엔드 개발 역량을 늘리기 위해 Svelte.js, Vue3 등 다양한 JavaScript 프레임워크를 활용하여 프로젝트를 진행해왔고
                                    </AboutText>
                                    <AboutText>
                                        협업을 통해 더욱 성장해 프론트엔드 개발자로 나아가는 목표를 가지고 있습니다.
                                    </AboutText>
                                    <SkillList>
                                        <li className='skill_item'>html</li>
                                        <li className='skill_item'>css</li>
                                        <li className='skill_item'>scss</li>
                                        <li className='skill_item'>javascript</li>
                                        <li className='skill_item'>jquery</li>
                                        <li className='skill_item'>react</li>
                                        <li className='skill_item'>git</li>
                                        <li className='skill_item'>figma</li>
                                    </SkillList>
                                </RightBox>
                            </div>
                            <div>
                                <LeftBox data-aos='fade-right' data-aos-duration="1000" data-aos-delay="400" >
                                    <AboutTitle><FontAwesomeIcon icon={faBuilding} />WORK EXPERIENCE</AboutTitle>
                                    <AboutList>
                                        <li class="item">2023.06 ~ 2025.03 (주)서로커뮤니케이션</li>
                                        <li class="item">2021.11 ~ 2022.12 (주)이유엠</li>
                                    </AboutList>
                                </LeftBox>
                                <RightBox data-aos='fade-left' data-aos-duration="1000" data-aos-delay="300" >
                                    <AboutTitle><FontAwesomeIcon icon={faGraduationCap} />EDUCATION</AboutTitle>
                                    <AboutList>
                                        <li class="item">2021.07 ~ 2021.10 위코드 부트캠프 수료</li>
                                        <li class="item">2016.03 ~ 2021.07 전주비전대학교 건축과 졸업</li>
                                    </AboutList>
                                </RightBox>
                            </div>
                        </AboutCard>
                    </SwiperSlide>
                </Swiper>
            </AboutWrapper>
        </div>
    );
};

export default About;
