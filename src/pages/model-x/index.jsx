// import Carousel from 'react-bootstrap/Carousel';
// import ModelSImage from '../../assets/model-s.png';
// import ModelXImage from '../../assets/model-x.png';
// import ModelYImage from '../../assets/model-y.png';
// import Model3rdImage from '../../assets/model_3rd.png';

// function IndividualIntervalsExample() {
//   return (
//     <div className='mt-10'>
//       <Carousel className='h-[75vh]'>
//         <Carousel.Item interval={1000}>
//           <div className='w-[100%] flex items-center justify-center  top-5 pt-8'>
//             <img className='w-[65%]' src={ModelXImage} alt="First slide" />
//           </div>
//         </Carousel.Item>
//         <Carousel.Item interval={1000}>
//           <div className='w-[100%] flex items-center justify-center  top-5 pt-8'>
//             <img className='w-[65%]' src={ModelYImage} alt="First slide" />
//           </div>
//         </Carousel.Item>
//         <Carousel.Item interval={1000}>
//           <div className='w-[100%] flex items-center justify-center  top-5 pt-8'>
//             <img className='w-[65%] -rotate-15' src={ModelSImage} alt="First slide" />
//           </div>
//         </Carousel.Item>
//         <Carousel.Item interval={1000}>
//           <div className='w-[100%] flex items-center justify-center  top-5 pt-8'>
//             <img className='w-[65%]' src={Model3rdImage} alt="First slide" />
//           </div>
//         </Carousel.Item>


//       </Carousel>
//     </div>
//   );
// }

// export default IndividualIntervalsExample;


import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ModelSImage from '../../assets/model-s.png';
import ModelXImage from '../../assets/model-x.png';
import ModelYImage from '../../assets/model-y.png';
import Model3rdImage from '../../assets/model_3rd.png';

function IndividualIntervalsExample({ onSlideChange }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
    onSlideChange(selectedIndex); // Notify parent component about the active slide
  };

  return (
    <div className='mt-10 custom-container'>
      <Carousel className='lg:h-[75vh] h-[50vh] flex justify-center items-center' activeIndex={activeIndex} onSelect={handleSelect}>
        <Carousel.Item interval={1000}>
          <div className='w-[100%] flex items-center justify-center  top-5 pt-8'>
            <img className='lg:w-[65%]' src={ModelXImage} alt="Model X" />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className='w-[100%] flex items-center justify-center  top-5 pt-8'>
            <img className='lg:w-[65%]' src={ModelYImage} alt="Model Y" />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className='w-[100%] flex items-center justify-center  top-5 pt-8'>
            <img className='lg:w-[65%] -rotate-15' src={ModelSImage} alt="Model S" />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className='w-[100%] flex items-center justify-center  top-5 pt-8'>
            <img className='lg:w-[65%]' src={Model3rdImage} alt="Model 3" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default IndividualIntervalsExample;

