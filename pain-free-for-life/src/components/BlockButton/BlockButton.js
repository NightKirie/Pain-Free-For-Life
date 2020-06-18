import React from 'react';
import styled from 'styled-components';



const Image = styled.img`
    & {
        display: block;
		width: 100%;
    }
`;

const ImageContainer = styled.span`
    & {
        -moz-transition: -moz-transform 0.5s ease;
        -webkit-transition: -webkit-transform 0.5s ease;
        -ms-transition: -ms-transform 0.5s ease;
        transition: transform 0.5s ease;
        position: relative;
        display: block;
        width: 100%;
        border-radius: 4px;
        overflow: hidden;
    }

    &:before {
        pointer-events: none;
        -moz-transition: background-color 0.5s ease, opacity 0.5s ease;
        -webkit-transition: background-color 0.5s ease, opacity 0.5s ease;
        -ms-transition: background-color 0.5s ease, opacity 0.5s ease;
        transition: background-color 0.5s ease, opacity 0.5s ease;
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 1.0;
        z-index: 1;
        opacity: 0.8;
        background-color: #f2849e;
    }

    &:after {
        pointer-events: none;
        -moz-transition: opacity 0.5s ease;
        -webkit-transition: opacity 0.5s ease;
        -ms-transition: opacity 0.5s ease;
        transition: opacity 0.5s ease;
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 0.25px%3B stroke: %23ffffff%3B %7D%3C/style%3E%3Cline x1='0' y1='0' x2='100' y2='100' /%3E%3Cline x1='100' y1='0' x2='0' y2='100' /%3E%3C/svg%3E");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        opacity: 0.25;
        z-index: 2;
    }
`;

const Content = styled.div`
    -moz-transition: max-height 0.5s ease, opacity 0.5s ease;
    -webkit-transition: max-height 0.5s ease, opacity 0.5s ease;
    -ms-transition: max-height 0.5s ease, opacity 0.5s ease;
    transition: max-height 0.5s ease, opacity 0.5s ease;
    width: 100%;
    max-height: 0;
    line-height: 1.5;
    margin-top: 0.35em;
    opacity: 0;

    :last-child {
        margin-bottom: 0;
    }
`;

const Link = styled.a`
    & {
        display: -moz-flex;
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        -moz-flex-direction: column;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -moz-align-items: center;
        -webkit-align-items: center;
        -ms-align-items: center;
        align-items: center;
        -moz-justify-content: center;
        -webkit-justify-content: center;
        -ms-justify-content: center;
        justify-content: center;
        -moz-transition: background-color 0.5s ease, -moz-transform 0.5s ease;
        -webkit-transition: background-color 0.5s ease, -webkit-transform 0.5s ease;
        -ms-transition: background-color 0.5s ease, -ms-transform 0.5s ease;
        transition: background-color 0.5s ease, transform 0.5s ease;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 1em;
        border-radius: 4px;
        border-bottom: 0;
        color: #ffffff;
        text-align: center;
        text-decoration: none;
        z-index: 3;
    }
    
    :last-child {
        margin: 0;
    }
    
    &:hover {
        color: #ffffff !important;
    }
`;

const ButtonArticle = styled.article`
    & {
        -moz-transition: -moz-transform 0.5s ease, opacity 0.5s ease;
        -webkit-transition: -webkit-transform 0.5s ease, opacity 0.5s ease;
        -ms-transition: -ms-transform 0.5s ease, opacity 0.5s ease;
        transition: transform 0.5s ease, opacity 0.5s ease;
        position: relative;
        width: calc(33.33333% - 2.5em);
        margin: 2.5em 0 0 2.5em;
    }
    
    &:hover > ${ImageContainer} {
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
    }
    &:hover > ${ImageContainer}:before {
        background-color: #333333;
	    opacity: 0.35;
    }
    &:hover > ${ImageContainer}:after {
        opacity: 0;
    }


`;








function BlockButton() {
    return (
        <ButtonArticle>
            <ImageContainer>
                <Image src="images/pic01.jpg" alt="" />
            </ImageContainer>
            <Link href="generic.html">
                <h2>Magna</h2>
                <Content>
                    <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </Content>
            </Link>
        </ButtonArticle>
    );
}

// function BlockButton() {
//     return (
//         <article class="style1">
//             <span class="image">
//                 <img src="images/pic01.jpg" alt="" />
//             </span>
//             <a href="generic.html">
//                 <h2>Magna</h2>
//                 <div class="content">
//                     <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
//                 </div>
//             </a>
//         </article>
//     );
// }

export default BlockButton;