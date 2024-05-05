// Import Swiper React components
import { Swiper } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import { useState } from 'react';

function Carousel({ children }) {
  // function to load next page
  // const [swiper, setSwiper] = useState(null);

  // const handleSlideChange = swiper => {
  //   if (swiper.isEnd) {
  //     loadNextPage();
  //   }
  // };
  return (
    <Swiper
      // onSwiper={setSwiper}
      className='px-8'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={35}
      slidesPerView={3}
      loop={true}
      navigation={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },

        750: {
          slidesPerView: 2,
        },

        1000: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
      }}
      pagination={{
        type: 'progressbar',
        clickable: true,
      }}>
      {children}
    </Swiper>
  );
}

export default Carousel;

// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// function Carousel({ children }) {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//   };

//   return (
//     <div className='slider-container'>
//       <Slider
//         className='py-12'
//         {...settings}>
//         {children}
//       </Slider>
//     </div>
//   );
// }

// export default Carousel;
