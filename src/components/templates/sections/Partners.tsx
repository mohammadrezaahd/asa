"use client";

import { SliderProps } from "@/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import Data from "@/data/sliders/partners.json";

interface PartnerItem {
  image: string;
  alt: string;
  link?: string;
}

interface PartnersData {
  items: PartnerItem[];
}

interface PartnersSliderProps {
  bgStyle?: "soft" | "dark" | "light";
}

const PartnersSlider = ({ bgStyle }: PartnersSliderProps) => {
  return (
    <>
      {/* partners */}
      <div className={`mil-${bgStyle}-bg mil-partners mil-relative`}>
        {bgStyle === "soft" && (
          <Image
            src="/img/other/bg.svg"
            className="mil-bg-img"
            alt="background image"
            fill
            style={{ objectFit: "cover" }}
          />
        )}

        <div className="container mil-p-120-120">
          <div className="mil-background-grid mil-softened" />

          <Swiper
            {...SliderProps.milInfiniteSlider}
            className="swiper-container mil-infinite-show mil-up"
          >
            {(Data as PartnersData).items.map((item, key) => (
              <SwiperSlide
                className="swiper-slide"
                key={`partners-slider-item-${key}`}
              >
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mil-partner-frame"
                    style={{ width: "60px" }}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={60}
                      height={40}
                      style={{ objectFit: "contain" }}
                    />
                  </a>
                ) : (
                  <div className="mil-partner-frame" style={{ width: "60px" }}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={60}
                      height={40}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* partners end */}
    </>
  );
};
export default PartnersSlider;
