import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const WorkWrapper = styled.section`
    min-height: 100vh;
`

const WorkCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`

const Article = styled.article`
    width: 40%;
`

const Work = () => {
    return (
        <div className="section">
            <WorkWrapper id='work'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    id='work'
                >
                    <SwiperSlide>
                        <WorkCont>
                            <Article>
                                <div className='tit_area'>
                                    <p class="sub">RESPONSIVE WEBSITE [PC, MOB]</p>
                                    <h3 class="title">NAVER CLOUD PLATFORM</h3>
                                </div>
                                <ul className='desc_list'>
                                    <li className='desc_item'>
                                        <strong>기술 스택</strong>
                                        <p>HTML, CSS, JavaScript</p>
                                    </li>
                                    <li className='desc_item'>
                                        <strong>기여도</strong>
                                        <p>퍼블리싱 100% + 개발 30%</p>
                                    </li>
                                    <li className='desc_item'>
                                        <strong>작업 기간</strong>
                                        <p>23.06 - 25.03</p>
                                    </li>
                                    <li className='desc_item'>
                                        <p>네이버 클라우드와 협업하여 네이버 클라우드 서비스 마크업 및 유지보수 작업을 팀원들과 함께 협업하여 작업했습니다.</p>
                                    </li>
                                </ul>
                            </Article>
                            <figure className='picture'>
                                <img src={require('../assets/port_navercloud.jpg')} alt="네이버 클라우드 플랫폼" />
                            </figure>
                        </WorkCont>
                    </SwiperSlide>
                    <SwiperSlide>
                        <WorkCont>
                            <article>
                                <div className='tit_area'>
                                    <p class="sub">RESPONSIVE WEBSITE [PC, MOB]</p>
                                    <h3 class="title">KICC</h3>
                                </div>
                                <ul className='desc_list'>
                                    <li className='desc_item'>
                                        <strong>기술 스택</strong>
                                        <p>Vue3, SCSS</p>
                                    </li>
                                    <li className='desc_item'>
                                        <strong>기여도</strong>
                                        <p>퍼블리싱 80% + 개발 40%</p>
                                    </li>
                                    <li className='desc_item'>
                                        <strong>작업 기간</strong>
                                        <p>25.01 - 25.03</p>
                                    </li>
                                    <li className='desc_item'>
                                        <p>
                                            KICC 전체 리뉴얼되어 내외부 개발자 2명과 함께 작업을 하였으며,<br />
                                            컴포넌트 제작, 메인/서브 페이지 제작, 반응형 작업 등 vue3 환경에서 퍼블리싱 작업 및 프론트 개발 업무를 진행하였습니다.
                                        </p>
                                    </li>
                                </ul>
                                <div className='btn_area'>
                                    <a href="https://www.kicc.co.kr/" target='_blank' className='view_btn'>view</a>
                                </div>
                            </article>
                        </WorkCont>
                    </SwiperSlide>
                    <SwiperSlide>
                        <WorkCont>
                            <article>
                                <div className='tit_area'>
                                    <p class="sub">RESPONSIVE WEBSITE [PC, MOB, TABLET]</p>
                                    <h3 class="title">tedo</h3>
                                </div>
                                <ul className='desc_list'>
                                    <li className='desc_item'>
                                        <strong>기술 스택</strong>
                                        <p>PHP, HTML, CSS</p>
                                    </li>
                                    <li className='desc_item'>
                                        <strong>기여도</strong>
                                        <p>퍼블리싱 100% + 개발 30%</p>
                                    </li>
                                    <li className='desc_item'>
                                        <strong>작업 기간</strong>
                                        <p>24.11 - 25.02</p>
                                    </li>
                                    <li className='desc_item'>
                                        <p>
                                            클라이언트와 기획 단계부터 함께 논의하였으며, 반응형 UI와 섹션별 인터렉션을 제안해 결과물의 완성도를 더욱 높였습니다.<br />
                                            HTML, CSS, JavaScript를 활용하여 내부 퍼블리셔 한명과 함께 UI 개발을 진행하였습니다.
                                        </p>
                                    </li>
                                </ul>
                                <div className='btn_area'>
                                    <a href="https://tedo.kr/" target='_blank' className='view_btn'>view</a>
                                </div>
                            </article>
                        </WorkCont>
                    </SwiperSlide>
                    <SwiperSlide>
                        <WorkCont>
                            <article>
                                <div className='tit_area'>
                                    <p class="sub">STANDARD WEBSITE [INDEX]</p>
                                    <h3 class="title">한국경영인증원</h3>
                                </div>
                                <ul className='desc_list'>
                                    <li className='desc_item'>
                                        <strong>기술 스택</strong>
                                        <p>PHP, HTML, CSS</p>
                                    </li>
                                    <li className='desc_item'>
                                        <strong>기여도</strong>
                                        <p>퍼블리싱 100%</p>
                                    </li>
                                    <li className='desc_item'>
                                        <strong>작업 기간</strong>
                                        <p>24.03 - 25.03</p>
                                    </li>
                                    <li className='desc_item'>
                                        <p>
                                            클라이언트와 직접 소통하며 서브페이지 수정, 제작 등 PHP 기반 퍼블리싱 유지보수 작업을 진행하였습니다.
                                        </p>
                                    </li>
                                </ul>
                                <div className='btn_area'>
                                    <a href="https://www.ikmr.co.kr/" target='_blank' className='view_btn'>view</a>
                                </div>
                            </article>
                        </WorkCont>
                    </SwiperSlide>
                    <SwiperSlide>
                        <WorkCont>
                            <article>
                                <div className='tit_area'>
                                    <p class="sub">STANDARD WEBSITE [INDEX]</p>
                                    <h3 class="title">두산 친환경 리즌마켓</h3>
                                </div>
                                <ul className='desc_list'>
                                    <li className='desc_item'>
                                        <strong>기술 스택</strong>
                                        <p>Svelte, CSS</p>
                                    </li>
                                    <li className='desc_item'>
                                        <strong>기여도</strong>
                                        <p>퍼블리싱 100% + 개발 70%</p>
                                    </li>
                                    <li className='desc_item'>
                                        <strong>작업 기간</strong>
                                        <p>24.03 - 24.11</p>
                                    </li>
                                    <li className='desc_item'>
                                        <p>
                                            샵바이를 통해 제작 된 친환경 쇼핑 플랫폼이며,  샵바이에서 제공해주는 API를 활용해 컴포넌트 제작 개발, 이벤트 페이지, 서브 페이지 등 퍼블리싱을 Svelte.js, SCSS로 작업하였습니다.
                                        </p>
                                    </li>
                                </ul>
                                <div className='btn_area'>
                                    <a href="https://reznmarket.com/home" target='_blank' className='view_btn'>view</a>
                                </div>
                            </article>
                        </WorkCont>
                    </SwiperSlide>
                    <SwiperSlide>
                        <WorkCont>
                            <article>
                                <div className='tit_area'>
                                    <p class="sub">RESPONSIVE WEBSITE [PC, MOB]</p>
                                    <h3 class="title">두산 피플리</h3>
                                </div>
                                <ul className='desc_list'>
                                    <li className='desc_item'>
                                        <strong>기술 스택</strong>
                                        <p>HTML, CSS, JavaScript</p>
                                    </li>
                                    <li className='desc_item'>
                                        <strong>기여도</strong>
                                        <p>퍼블리싱 100%</p>
                                    </li>
                                    <li className='desc_item'>
                                        <strong>작업 기간</strong>
                                        <p>24.04 - 24.05</p>
                                    </li>
                                    <li className='desc_item'>
                                        <p>
                                            두산의 기본적인 HR 전반에 대한 올인원 플랫폼이며,<br />
                                            HTML, CSS, JavaScript를 활용하여 퍼블리싱 작업을 진행하였습니다.
                                        </p>
                                    </li>
                                </ul>
                                <div className='btn_area'>
                                    <a href="https://www.doosandigitalinnovation.com/kr/service/peoply" target='_blank' className='view_btn'>view</a>
                                </div>
                            </article>
                        </WorkCont>
                    </SwiperSlide>
                    <SwiperSlide>
                        <WorkCont>
                            <article>
                                <div className='tit_area'>
                                    <p class="sub">RESPONSIVE WEBSITE [PC, MOB]</p>
                                    <h3 class="title">네이쳐스영</h3>
                                </div>
                                <ul className='desc_list'>
                                    <li className='desc_item'>
                                        <strong>기술 스택</strong>
                                        <p>PHP, HTML, CSS, JavaScript</p>
                                    </li>
                                    <li className='desc_item'>
                                        <strong>기여도</strong>
                                        <p>퍼블리싱 40%</p>
                                    </li>
                                    <li className='desc_item'>
                                        <strong>작업 기간</strong>
                                        <p>24.03 - 24.05</p>
                                    </li>
                                    <li className='desc_item'>
                                        <p>
                                            PHP 기반 퍼블리싱하여 메인, 서브 페이지를 유지보수 작업하였습니다.
                                        </p>
                                    </li>
                                </ul>
                                <div className='btn_area'>
                                    <a href="https://naturesyoung.com/" target='_blank' className='view_btn'>view</a>
                                </div>
                            </article>
                        </WorkCont>
                    </SwiperSlide>
                    <SwiperSlide>
                        <WorkCont>
                            <article>
                                <div className='tit_area'>
                                    <p class="sub">RESPONSIVE WEBSITE [PC, MOB]</p>
                                    <h3 class="title">TSI</h3>
                                </div>
                                <ul className='desc_list'>
                                    <li className='desc_item'>
                                        <strong>기술 스택</strong>
                                        <p>PHP, HTML, CSS, JavaScript</p>
                                    </li>
                                    <li className='desc_item'>
                                        <strong>기여도</strong>
                                        <p>퍼블리싱 40%</p>
                                    </li>
                                    <li className='desc_item'>
                                        <strong>작업 기간</strong>
                                        <p>23.11 - 23.12</p>
                                    </li>
                                    <li className='desc_item'>
                                        <p>
                                            PHP 기반 퍼블리싱하여 메인, 서브 페이지를 유지보수 작업하였습니다.
                                        </p>
                                    </li>
                                </ul>
                                <div className='btn_area'>
                                    <a href="https://taesungind.co.kr/" target='_blank' className='view_btn'>view</a>
                                </div>
                            </article>
                        </WorkCont>
                    </SwiperSlide>
                </Swiper>
            </WorkWrapper>
        </div>
    )
}

export default Work;