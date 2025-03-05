import { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    width: 100%;
    max-width: 90%;
    height: 70px;
    position: fixed;
    z-index: 5;
    top: 20px;
    left: 50%;
    transform: translate(-50%);
    padding: 0 40px;
    box-sizing: border-box;
    transition: all 0.4s;
    font: 20px 'Source Sans Pro', sans-serif;
    background: rgb(107 143 209 / 58%);
    border-radius: 1.8rem;

    @media (max-width: 768px) {
        height: 60px;
        .header_nav {
            display: ${props => (props.isNavOpen ? 'block' : 'none')};
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            background: rgba(0, 0, 0, 0.8);
            padding: 20px;
            border-radius: 0 0 1.8rem 1.8rem;
        }
    }

    &.top {
        border-radius: 0;
        max-width: 100%;
        margin: 0;
        top: 0;
    }
`;

const HeaderInner = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const H1 = styled.h1 `
    font-family: 'Righteous', cursive;
    font-size: 20px;

    a {
        color: #b4e3ff;
    }
`

const Nav = styled.nav`
    height: 100%;

    .list {
        display: flex;
        height: 100%;

        li {
            display: flex;
            align-items: center;
            position: relative;
            padding: 16px 20px;
            font-family: 'Righteous', cursive;
            cursor: pointer;

            a {
                color: #b4e3ff;
                transition: all 0.6s;
                text-transform: uppercase;
            }

            &.on a {
                color: #fff;
            }
        }
    }
`
const ToggleBtn = styled.button`
    display:none;
    background: transparent;
    border: 0;
    .nav_icon {
        width: 2rem;
        height: 1.4rem;
        position: relative;

        span {
            position: absolute;
            width: 100%;
            height: 2px;
            background: #fff;
            display: block;
            transition: all ease-in-out 0.3s;
            cursor: pointer;

            &:nth-of-type(1) {top: 0;}
            &:nth-of-type(2) {top: 45%;}
            &:nth-of-type(3) {bottom: 0;}
        }
    }
    @media (max-width: 768px) {
        display: block
    }
`

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isTop, setIsTop] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth',
            });
        }

        setActiveSection(id)
    };

    useEffect(() => {
         const handleScroll = () => {
            const sections = ['home', 'about', 'work', 'direction'];
            const scrollTop = window.scrollY;
            setIsTop(scrollTop > 0);
            
            sections.forEach((sectionId) => {
                const section = document.getElementById(sectionId);
                if (section && scrollTop >= section.offsetTop - 50 && scrollTop < section.offsetTop + section.offsetHeight - 50) {
                    setActiveSection(sectionId);
                }
            });
        };

        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <HeaderWrapper isNavOpen={isNavOpen} className={isTop ? 'top' : ''}>
            <HeaderInner>
                <H1>
                    <a className="logo" href="#home"  data-scroll="#home" onClick={(e) => {e.preventDefault(); scrollToSection('home')}}>HyunJun</a>
                </H1>
                <ToggleBtn className="nav_toggle" onClick={toggleNav}>
                    <div className="nav_icon">
                        <span></span><span></span><span></span>
                    </div>
                </ToggleBtn>
               <Nav className={`header_nav ${isNavOpen ? 'open' : ''}`}>
                    <ul className="list">
                        {['home', 'about', 'work', 'direction'].map((item) => (
                            <li key={item} className={activeSection === item ? 'on' : ''}>
                                <a
                                    href={`#${item}`}
                                    data-scroll={item}
                                    onClick={(e) => {
                                         e.preventDefault();
                                        scrollToSection(item);
                                        setIsNavOpen(false);
                                    }}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </Nav>
            </HeaderInner>
        </HeaderWrapper>
    );
}

export default Header;
