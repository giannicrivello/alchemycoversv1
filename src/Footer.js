import React from 'react';
import './Footer.css';
import LearnMoreButton from './LearnMoreButton.js';
import styled from 'styled-components';


const FooterLogo = styled.div`
        left: 0;
        padding-right: 0;
        margin-left: 20px;
        margin-bottom: 20px;
`;

const FooterLogoImage = styled.img`
        height: 50px;
`;


export default class Footer extends React.Component {
    render() {
            return(
                    <>
                    <div className='footer'>
                            <div className='learnmore-button'>
                                    <LearnMoreButton />
                            </div>
                        <FooterLogo>
                                <FooterLogoImage src='https://assets.website-files.com/609179603d60ed597c1ebefa/6091da1df148ebb0c9d2e561_logo-black.png' />
                       </FooterLogo>
                    </div>
                 </>
                 )
            

        
    }
}