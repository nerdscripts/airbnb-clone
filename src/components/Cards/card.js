import React from "react";
import "./styles.css";
import hotel from "../../assets/hotels/hotel-1.jpeg";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { fontSize } from "@mui/system";
// Core modules imports are same as usual
import { Navigation, Pagination, scrollbar } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// Styles must use direct files imports
import 'swiper/swiper.min.css'; // core Swiper
import 'swiper/modules/navigation/navigation.min.css'; // Navigation module
import 'swiper/modules/pagination/pagination.min.css'; // Pagination module


function Card({ card }) {
  return (
    <div className="card-box">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        mousewheel={true}
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Pagination, Navigation,]}
        style={{ height: "270px", width: "270px"}}
        bulletClass={"background-color:#fff;"}
       
      >
        {card.imgSrc.map((src, i) =>(
          <SwiperSlide key={i}>
            <img
              src={src} className="card-img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="card-info-flex">
        <h3 className="card-title">{card.title}</h3>
        <div className="card-rating">
          <StarRateRoundedIcon />
          <p>{card.rating}</p>
        </div>
      </div>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.desc}</p>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.date}</p>
      <p style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--font-black)" }}><span style={{ fontWeight: "600"}}>$ {card.price}</span> night </p>
      
    </div>
  );
}

export default Card;
