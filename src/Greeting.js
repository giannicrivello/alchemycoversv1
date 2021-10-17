import React from 'react';
import './Greeting.css';
import Title from './Title.js';
import Gallery from './Gallery.js';
import Nav from './Nav.js';
import styled from 'styled-components';

// const MainGalleryWrapper = styled.section`
//     padding-top: 200px;
//     background: rgb(2,0,36);
//     background: linear-gradient(137deg, rgba(2,0,36,1) 0%, rgba(255,255,255,0.14469537815126055) 98%, rgba(193,69,195,0.45281862745098034) 100%);

// `;


export default class Greeting extends React.Component {
    render() {
        return(
            <>
            <div className='greeting'>
                <Nav />
                <div className='greeting-title'>
                    <Title />
                    {/* <MainGalleryWrapper>
                        <Gallery />

                    </MainGalleryWrapper> */}
                    
                </div> 
               
            
            </div>
          
            </>
        )
    }
}
