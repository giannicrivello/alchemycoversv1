import React, {useState, useEffect, useRef} from 'react';
import Fade from 'react-reveal/Fade';
import './Title.css';
import ScrollAnimation from './ScrollAnimation.js';
import chroma from 'chroma-js';
import styled from 'styled-components';
import ParallaxJSXWrapper from './ParallaxJSXWrapper.js';
import Gallery from './Gallery.js';

const MainGalleryWrapper = styled.section`
    padding-top: 70px;
    
`;



const colors = ['#efedf5', '#bcbddc', '#756bb1'];
const delay = 2500;


const SlideShowDiv = styled.div`
    margin: 0 auto;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    padding-top: 500px;
    padding-bottom: 500px;

`;



 


function SlideShow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() =>{
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => 
        setIndex((prevIndex) => 
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
        delay
    );
    return () => {
      resetTimeout();
    }
  }, [index])


  return (
    <>
    {/* <Fade cascade bottom> */}
      <div>
      <SlideShowDiv>
      <div className='slideshowSlider' style={{ transform: `translate3d(${-index * 100}%, 0, 0)`}}>
        {colors.map((backgroundColor, index) => (
          <div className='slide' key={index} style={{ backgroundColor }}></div>
          ))}
      </div>
    
      
    </SlideShowDiv>

      </div>
    

    {/* </Fade> */}
    
    
      
    </>
  )
}

const p = {
  top: '25%',
  left:'50%',
  transform: 'translate(-50%, -50%)',
  position: 'fixed',

}




const ParallaxTitle = ParallaxJSXWrapper(<p style={p}>
  <div>
    <ScrollAnimation />
  </div>Alchemy
  <br />
  Covers
  
</p>, 0.05)
// const ParallaxGallery = ParallaxJSXWrapper(<div><SlideShow /></div>, 0.0001)




class Title extends React.Component {
  render() {
    return (
      <div>
          <div className='title'>
            {/* <p>Alchemy
              <br />
              Covers
              <div>
                <ScrollAnimation />
              </div>
            </p> */}
            <ParallaxTitle />
          </div>
          {/* <ParallaxGallery /> */}
          <SlideShow />
          <MainGalleryWrapper>
              <Gallery />

           </MainGalleryWrapper>


        


        

      </div>
    );
  }
}

export default Title;