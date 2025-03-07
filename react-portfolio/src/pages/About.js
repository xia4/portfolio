import styled from 'styled-components';
import NameImg from '../assets/name_img2.png';
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBuilding } from '@fortawesome/free-solid-svg-icons'

const AboutSection = styled.div`
    overflow: hidden;
    height: 100vh;
    background-color: #222;
`

const AboutWrapper = styled.section`
    min-width: 100vw;
    width: auto;
    min-height: 100vh;
    display: flex;
    align-items: center;
    gap: 50px;
    position: relative;
   transition: left 0.1s ease-out;
   padding: 0 6rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    padding: 5rem;
  }
`;

const AboutCard = styled.div`
    width: 90vw;
    height: 100%;
    flex-shrink: 0;
    background: #3b3b3b;
    padding: 2.5rem 0;
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
    color: #eee;
    @media screen and (max-width: 768px) {
        font-size: 20px;
     }
`;

const AboutText = styled.p`
    color: #ddd;
    font-size: 16px;
    font-weight: 600;
    margin-top: 1rem;
    line-height: 1.5;
    word-break: keep-all;

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }

    > span {
        position: relative;
        z-index: 2;

        &::before {
            content: '';
            display: block;
            width: 100%;
            height: 16px;
            background-color: rgb(255 247 0 / 53%);
            position: absolute;
            top: 12px;
            left: 0;
            z-index: -1;
        }
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
const Name = styled.h2`
    font-size: 40px;
    color: #eee;
    font-family: "Shadows Into Light", cursive;
`
const AboutList = styled.ul`
    font-size: 16px;
    line-height: 1.5;

    li {
        color: #ddd;
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
        border: 1px dashed #ddd;
        border-radius: 50px;
        padding: 2px 15px;
        text-transform: uppercase;
        font-size: 14px;
        line-height: 1.5;
        color: #ddd;
        transition: all 0.2s;
        cursor: default;

        &:hover {
            border-color: #fff;
            color: #fff;
        }
    }
`

const About = () => {
    const aboutWrapperRef = useRef(null);

    return (
        <AboutSection id='about' className='section'>
            <AboutWrapper ref={aboutWrapperRef}>
                <AboutCard>
                    <div>
                        <LeftBox data-aos='fade-right' data-aos-duration="1000" data-aos-delay="400" className='img_wrapper' >
                            <img src={require('../assets/proflie_img.png')} alt="프로필 이미지" />
                        </LeftBox>
                        <RightBox data-aos='fade-left' data-aos-duration="1000" data-aos-delay="400" >
                            <Name >
                                HyunJun Lee
                            </Name>
                            <AboutText>
                                안녕하세요! 3년 차 <span>웹 퍼블리셔 이현준</span>입니다.
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
                                <li className="item">2023.06 ~ 2025.03 (주)서로커뮤니케이션</li>
                                <li className="item">2021.11 ~ 2022.12 (주)이유엠</li>
                            </AboutList>
                        </LeftBox>
                        <RightBox data-aos='fade-left' data-aos-duration="1000" data-aos-delay="300" >
                            <AboutTitle><FontAwesomeIcon icon={faGraduationCap} />EDUCATION</AboutTitle>
                            <AboutList>
                                <li className="item">2021.07 ~ 2021.10 위코드 부트캠프 수료</li>
                                <li className="item">2016.03 ~ 2021.07 전주비전대학교 건축과 졸업</li>
                            </AboutList>
                        </RightBox>
                    </div>
                </AboutCard>
                <AboutCard>
                    <div>
                        <LeftBox data-aos='fade-right' data-aos-duration="1000" data-aos-delay="400" className='img_wrapper' >
                            <img src={require('../assets/proflie_img.png')} alt="프로필 이미지" />
                        </LeftBox>
                        <RightBox data-aos='fade-left' data-aos-duration="1000" data-aos-delay="400" >
                            <Name >
                                HyunJun Lee
                            </Name>
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
                                <li className="item">2023.06 ~ 2025.03 (주)서로커뮤니케이션</li>
                                <li className="item">2021.11 ~ 2022.12 (주)이유엠</li>
                            </AboutList>
                        </LeftBox>
                        <RightBox data-aos='fade-left' data-aos-duration="1000" data-aos-delay="300" >
                            <AboutTitle><FontAwesomeIcon icon={faGraduationCap} />EDUCATION</AboutTitle>
                            <AboutList>
                                <li className="item">2021.07 ~ 2021.10 위코드 부트캠프 수료</li>
                                <li className="item">2016.03 ~ 2021.07 전주비전대학교 건축과 졸업</li>
                            </AboutList>
                        </RightBox>
                    </div>
                </AboutCard>
            </AboutWrapper>
        </AboutSection>
    );
};

export default About;
