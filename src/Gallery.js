import './Gallery.css';
import Copy1 from './Copy1.js'
import Fade from 'react-reveal/Fade';
import React from 'react';
import WhyAlchemy from './WhyAlchemy.js';
import styled from 'styled-components'

const CopyDiv = styled.div`
  padding-bottom: 200px;
`;

const Image = styled.div`
  padding-left: 20px;
  display: flex;
  padding-bottom: 40vh;
  justify-content: center;

`;

const GalleryDiv = styled.div`
    height: 100vh;
    width: 100vw;
    
`;

const ImageItems = styled.div`
  margin-right: 20px;
  
  
`;

const GalleryWrapper = styled.div`
  justify-content: center;

`;


export default class Gallery extends React.Component {
    render() {
      const imageUrls = ['https://i.pinimg.com/564x/8e/77/4a/8e774a534f31d027a9e4b3f7723e1f71.jpg','https://i.pinimg.com/564x/8e/77/4a/8e774a534f31d027a9e4b3f7723e1f71.jpg']
      const imageUrls2 = ['https://i.pinimg.com/564x/8e/77/4a/8e774a534f31d027a9e4b3f7723e1f71.jpg','https://i.pinimg.com/564x/8e/77/4a/8e774a534f31d027a9e4b3f7723e1f71.jpg']
      const listImages = imageUrls.map((image) => <Fade cascade bottom><ImageItems key={image.toString()}><img src={image}/></ImageItems></Fade>)
      const listImages2 = imageUrls2.map((image) => <Fade cascade right><ImageItems key={image.toString()}><img src={image}/></ImageItems></Fade>)
     

      return (
        <GalleryDiv>
          <CopyDiv>
            <Copy1 />
          </CopyDiv>
          <Image>
            <GalleryWrapper>
            {listImages}
            </GalleryWrapper>
            <GalleryWrapper>
            {listImages2}

            </GalleryWrapper>
          </Image>
            <WhyAlchemy />
        </GalleryDiv>
        
      );
    }
  }








