import Slider from "react-slick";
import { avatar1, iconquote, PROFILE_PLACEHOLDER } from "@/public/assets/Data";
import {   FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import Image from "next/image";



function TestimonialAvatar({ className, width, height, alt }) {
  const [src, setSrc] = useState(avatar1);
  return (
    <Image
      src={src}
      className={className}
      alt={alt}
      width={width}
      height={height}
      onError={() => setSrc(PROFILE_PLACEHOLDER)}
    />
  );
}

function MultipleItems() {
  const [showModel, setShowModel] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <section className="testimonials">
          <h3 className="h3 testimonials-title">Testimonials</h3>
          <ul
            className="testimonials-list has-scrollbar"
            onClick={() => setShowModel(true)}
          >
            <li className="testimonials-item">
              <div className="content-card">
                <TestimonialAvatar
                  className="testimonials-avatar-box"
                  alt="Daniel lewis"
                  width={60}
                  height={60}
                />
                <h4 className="h4 testimonials-item-title">Daniel lewis</h4>
                <div className="testimonials-text">
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of the client.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section className="testimonials">
          <h3 className="h3 testimonials-title">Testimonials</h3>
          <ul
            className="testimonials-list has-scrollbar"
            onClick={() => setShowModel(true)}
          >
            <li className="testimonials-item">
              <div className="content-card">
                <TestimonialAvatar
                  className="testimonials-avatar-box"
                  alt="Daniel lewis"
                  width={60}
                  height={60}
                />
                <h4 className="h4 testimonials-item-title">Daniel lewis</h4>
                <div className="testimonials-text">
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of the client.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section className="testimonials">
          <h3 className="h3 testimonials-title">Testimonials</h3>
          <ul
            className="testimonials-list has-scrollbar"
            onClick={() => setShowModel(true)}
          >
            <li className="testimonials-item">
              <div className="content-card">
                <TestimonialAvatar
                  className="testimonials-avatar-box"
                  alt="Daniel lewis"
                  width={60}
                  height={60}
                />
                <h4 className="h4 testimonials-item-title">Daniel lewis</h4>
                <div className="testimonials-text">
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of the client.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section className="testimonials">
          <h3 className="h3 testimonials-title">Testimonials</h3>
          <ul
            className="testimonials-list has-scrollbar"
            onClick={() => setShowModel(true)}
          >
            <li className="testimonials-item">
              <div className="content-card">
                <TestimonialAvatar
                  className="testimonials-avatar-box"
                  alt="Daniel lewis"
                  width={60}
                  height={60}
                />
                <h4 className="h4 testimonials-item-title">Daniel lewis</h4>
                <div className="testimonials-text">
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of the client.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section className="testimonials">
          <h3 className="h3 testimonials-title">Testimonials</h3>
          <ul
            className="testimonials-list has-scrollbar"
            onClick={() => setShowModel(true)}
          >
            <li className="testimonials-item">
              <div className="content-card">
                <TestimonialAvatar
                  className="testimonials-avatar-box"
                  alt="Daniel lewis"
                  width={60}
                  height={60}
                />
                <h4 className="h4 testimonials-item-title">Daniel lewis</h4>
                <div className="testimonials-text">
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of the client.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </Slider>
      <div className={`modal-container ${showModel ? "active" : ""}`}>
        <div className="overlay" />
        <section className="testimonials-modal">
          <button
            className="modal-close-btn"
            onClick={() => setShowModel(false)}
          >
            <FaTimes color="goldenrod" />
          </button>
          <div className="modal-Image-wrapper">
            <TestimonialAvatar
              alt="Daniel lewis"
              className="modal-Image-wrapper"
              width={80}
              height={80}
            />
            <Image src={iconquote} alt="quote icon" width={24} height={24} />
          </div>
          <div className="modal-content">
            <h4 className="h3 modal-title">Daniel lewis</h4>
            <time dateTime="2021-06-14">14 June, 2021</time>
            <div>
              <p>
                Richard was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is
                very concerned about the needs of the client.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MultipleItems;
