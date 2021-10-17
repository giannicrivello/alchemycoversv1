import React from 'react';
import StarAnimation from './StarAnimation';
import styled, { ThemeProvider } from 'styled-components'
import './WhyAlchemy.css';
import chroma from 'chroma-js';
import Fade from 'react-reveal';
import ParallaxJSXWrapper from './ParallaxJSXWrapper';
import ScrollAnimation from './ScrollAnimation.js';
import TrueFooter from './TrueFooter.js';






const styles = {
    consultationImage1: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      position: 'fixed',
    //   top: '50%',
      left:'50%',
      transform: 'translate(-50%, -50%)',
    },
    consultationImage2: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      position: 'fixed',
      left:'40%',
      transform: 'translate(-100px, 50px)',
    },
    test: {
        height: '75vh'
    },
    consultationP: {
      position: 'fixed',
    //   top: '50%',
      left:'50%',
      transform: 'translate(-150px, 50px)',
      color: 'white',
    },
    schedulingImage1: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      position: 'fixed',
      left:'20%',
      transform: 'translate(-100px, 50px)',
    },
    schedulingImage2: {
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            position: 'fixed',
            left:'20%',
            transform: 'translate(-200px, 80px)',
    },
    schedulingP: {
      position: 'fixed',
    //   top: '50%',
      left:'50%',
      transform: 'translate(-150px, 50px)',
      color: 'black',
    },
    quotesImage: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      position: 'fixed',
    //   top: '50%',
      left:'50%',
      transform: 'translate(-50%, -50%)',

    }, 
    quotesImage2: {
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        position: 'fixed',
        left:'20%',
        transform: 'translate(-200px, 80px)',
    },
    quotesP: {
        position: 'fixed',
      //   top: '50%',
        left:'50%',
        transform: 'translate(-150px, 50px)',
        color: 'black',
      },
      BuyNowImage: {
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        position: 'fixed',
        left:'20%',
        transform: 'translate(-100px, 50px)',
  
      }, 
      BuyNowImage2: {
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          position: 'fixed',
          left:'20%',
          transform: 'translate(-200px, 80px)',
      },
      BuyNowP: {
        position: 'fixed',
        //   top: '50%',
          left:'50%',
          transform: 'translate(-150px, 50px)',
          color: 'black',
        },
}
  
  
// const ConsultationImage = ParallaxJSXWrapper(<div style={consultationImage}></div>)
const ConsultationImage = ParallaxJSXWrapper(<div style={styles.consultationImage1}><img src='https://i.pinimg.com/564x/8e/77/4a/8e774a534f31d027a9e4b3f7723e1f71.jpg'/></div>, 0.05);
const ConsultationImage2 = ParallaxJSXWrapper(<div style={styles.consultationImage2}><img src='https://i.pinimg.com/564x/8e/77/4a/8e774a534f31d027a9e4b3f7723e1f71.jpg'/></div>, 0.03)
const ConsultationCopy = ParallaxJSXWrapper(<div style={styles.consultationP}><p>Consultion</p></div>, 0.05)

const SchedulingImage = ParallaxJSXWrapper(<div style={styles.schedulingImage1}><img src='https://i.pinimg.com/564x/8e/77/4a/8e774a534f31d027a9e4b3f7723e1f71.jpg'/></div>, 0.05);
const SchedulingImage2 = ParallaxJSXWrapper(<div style={styles.schedulingImage2}><img src='https://i.pinimg.com/564x/8e/77/4a/8e774a534f31d027a9e4b3f7723e1f71.jpg'/></div>, 0.03)
const SchedulingCopy = ParallaxJSXWrapper(<div style={styles.quotesP}><p>Sheduling</p></div>, 0.05)


const QuotesImage = ParallaxJSXWrapper(<div style={styles.quotesImage}><img src='https://i.pinimg.com/564x/8e/77/4a/8e774a534f31d027a9e4b3f7723e1f71.jpg'/></div>, 0.05);
const QuotesImage2 = ParallaxJSXWrapper(<div style={styles.quotesImage2}><img src='https://i.pinimg.com/564x/8e/77/4a/8e774a534f31d027a9e4b3f7723e1f71.jpg'/></div>, 0.03)
const QuotesCopy = ParallaxJSXWrapper(<div style={styles.schedulingP}><p>Quotes</p></div>, 0.05);


const BuyNowImage = ParallaxJSXWrapper(<div style={styles.BuyNowImage}><img src='https://i.pinimg.com/564x/8e/77/4a/8e774a534f31d027a9e4b3f7723e1f71.jpg'/></div>, 0.05);
const BuyNowImage2 = ParallaxJSXWrapper(<div style={styles.BuyNowImage2}><img src='https://i.pinimg.com/564x/8e/77/4a/8e774a534f31d027a9e4b3f7723e1f71.jpg'/></div>, 0.03)
const BuyNowCopy = ParallaxJSXWrapper(<div style={styles.BuyNowP}><p>Quotes</p></div>, 0.05)


const BuyNowWrapper = styled.div`
    display: flex;
    padding-bottom: 200px;

`;

const ConsultationWrapper = styled.div`
    display: flex;
    padding-bottom: 200px;
`;
const QuotesWrapper = styled.div`
    display: flex;
    padding-bottom: 200px;
`;

const SchedulingWrapper = styled.div`
    display: flex;
    padding-left: 20px;
`;
  
const CopyWrapper = styled.div`
    font-size: 50px;
    padding-top: 200px;
    font-family: Cormorant;
    text-align: center;
    height: 500px;
    
`;
const ModuleCopy = styled.p`
    font-family: 'Red Hat Display', sans-serif;
    font-size: 12px;

`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center; //this centers children 
    padding-bottom: 10px;
    

`;

const Title = styled.p`
    text-align: center;
    padding: 10px 10px;
    font-size: 50px;
`;

const Module1 = styled.div`
    background-color: ${chroma('papayawhip')};
    margin-right: 20px;
    padding:40px 40px 40px 40px;
`;

const Intro = styled.div`
    font-size: 60px;
    font-family: Cormorant;
    text-align: center;
    padding-bottom: 30px
`;







export default class WhyAlchemy extends React.Component {
    render() {
        
        
        return(
            <>
            <Intro>
                    <p>The Alchemy Quality</p>
            </Intro>
                <Wrapper>
                
                    <Module1>
                            <StarAnimation />
                            <Title>
                                Alchemy
                            </Title>
                            <ModuleCopy>
                                test test test test test test
                            </ModuleCopy>
                    </Module1> 
                    <Module1>
                            <StarAnimation />
                            <Title>
                                Alchemy
                            </Title>
                            <ModuleCopy>
                                test test test test test test
                            </ModuleCopy>
                    </Module1> 
                    <Module1>
                            <StarAnimation />
                            <Title>
                              Acrylite

                            </Title>
                    </Module1> 
                    <Module1>
                            <StarAnimation />
                            <Title>
                                Alchemy
                            </Title>
                    </Module1> 

                    
                </Wrapper>
                <Fade cascade right>
                <CopyWrapper>
                    <p>Its just easier with Alchemy</p>
                </CopyWrapper>               
                </Fade>

                
                <ConsultationWrapper>
                    <ConsultationImage />
                    <ConsultationImage2 />
                    <ConsultationCopy />
                </ConsultationWrapper>
                <div style={styles.test}>
                </div>
                <SchedulingWrapper>
                    <SchedulingImage />
                    <SchedulingImage2 />
                    <SchedulingCopy />
                </SchedulingWrapper>
                <div style={styles.test}>
                </div>
                <div style={styles.test}>
                </div>
                <QuotesWrapper>
                    <QuotesImage />
                    <QuotesImage2 />
                    <QuotesCopy />
                </QuotesWrapper>
                <div style={styles.test}>
                </div>
                <ScrollAnimation />

                <div style={styles.test}>
                </div>
                <BuyNowWrapper>
                    <BuyNowImage />
                    <BuyNowImage2 />
                    <BuyNowCopy />
                </BuyNowWrapper>
                <div style={styles.test}>
                </div>
                <TrueFooter />
                
                       
            </>               
        )
    }
}