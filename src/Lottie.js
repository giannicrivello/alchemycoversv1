import React from 'react';
import Lottie from 'react-lottie';
import animationData from './lotties/loading-animation.json';
import scrollAnimaiton from './lotties/scroll-down.json';


export default function LottieAnimation() {
    const loadingOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={loadingOptions}
          height={500}
          width={500}
        />
        
      </div>
    );
  };