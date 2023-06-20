import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'


const Slider = () => {
  return (
    <AwesomeSlider>
      <div data-src={img1} />
      <div data-src={img2} />
      <div data-src={img3} />
    </AwesomeSlider>
  );
};

export default Slider;
