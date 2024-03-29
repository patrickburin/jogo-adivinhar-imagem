//styles
import * as C from "./styles";

//Swiper
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperComponent = () => {
  const images = [
    { id: 1, image: "src/images/australia.png" },
    { id: 2, image: "src/images/canada.png" },
    { id: 3, image: "src/images/brasil.png" },
    { id: 4, image: "src/images/unitedStates.png" },
    { id: 5, image: "src/images/japan.png" },
    { id: 6, image: "src/images/holanda.png" },
    { id: 7, image: "src/images/italia.png" },
    { id: 8, image: "src/images/alemanha.svg" },
    { id: 9, image: "src/images/gremio.png" },
  ];
  return (
    <C.Swiper>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={5}
        spaceBetween={0}
        navigation
        pagination
        autoplay={{ delay: 1500 }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <img src={image.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </C.Swiper>
  );
};

export default SwiperComponent;
