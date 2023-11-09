import styled from "styled-components";

export const Swiper = styled.div`
  display: flex;
  width: auto;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #00ced1;
  }

  .swiper-pagination-bullet {
    background-color: #00ced1;
  }
`;
