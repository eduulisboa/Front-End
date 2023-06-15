import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

export default function Home() {

  const productList = useSelector((state:RootState) => state.products.products)
  const slider = (
    <AwesomeSlider animation="cubeAnimation">
      <div data-src="/path/to/image-0.png" />
      <div data-src="/path/to/image-1.png" />
      <div data-src="/path/to/image-2.jpg" />
    </AwesomeSlider>
  );

  return (
    <div>
      
    </div>
  )
}
