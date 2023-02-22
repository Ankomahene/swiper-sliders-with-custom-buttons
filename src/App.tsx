import { A11y, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperNavButtons } from './components/SwiperNavButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView="auto"
        >
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperSlide className="res-slide" />
          <SwiperNavButtons />
        </Swiper>
      </h1>
    </div>
  );
}

export default App;
