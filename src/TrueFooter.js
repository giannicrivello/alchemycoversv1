import React from 'react';
import styled from 'styled-components';
import chroma from 'chroma-js';
import './TrueFooter.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';

const colors = ['#efedf5', '#bcbddc', '#756bb1']
const options = ['Follow Us', 'Contact Us', 'Subscribe Now!']
const subs = ['instagram - facebook - google', 'customersupport@alchemycovers.com', 'email']


const FooterWrapper = styled.div`
    height: 50vh;
    width: 100vw;
    display: flex;
`;

const ContactUsModule = styled.div`
    background-color: #efedf5;
    width: 100%;
    font-size: 16px;
    padding-left: 20px;
    
`;
const FollowUsModule = styled.div`
    background-color: #bcbddc;
    width: 100%;
    font-size: 16px;
    padding-left: 20px;


`;

const SubscribeNow = styled.div`
    background-color: #756bb1;
    width: 100%;
    font-size: 16px;
    padding-left: 20px;
`;

export default class TrueFooter extends React.Component{
    render() {
        return(
            <FooterWrapper>
                
                <ContactUsModule>
                    <h1>Contact Us</h1>
                    <p>customersupport@alchemycovers.com</p>
                    <p>(971) 297-5527</p>
                    <p>Business Hours:
                        <br />
                        Monday - Saturday: 8am - 6pm
                    </p>
                </ContactUsModule>
                <FollowUsModule>
                    <h1>Follow Us</h1>
                    <p>instagram - facebook - google</p>
                    <FacebookIcon />
                    <InstagramIcon />
                    <LanguageIcon />
                    
                </FollowUsModule>
            
                <SubscribeNow>
                    <h1>Subscribe!</h1>
                    <p>Email capture goes here</p>
                </SubscribeNow>

  
            </FooterWrapper>
        )
    }

}