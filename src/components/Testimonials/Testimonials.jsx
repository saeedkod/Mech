// import React from 'react';
// import "./Testimonials.css";
// import { testimonials } from '../../constants/data';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import {logos} from "../../constants/data";

// const Testimonials = () => {
//     var settings = {
//         dots: true,
//         infinite: true,
//         autoplay: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false
//       };

//   return (
//     <div className='testimonials section-p'>
//         <div className='container'>
//             <div className='testimonials-content'>
//                 <div className='section-title'>
//                     <h3 className='text-brown'>Client <span className='text-white'>Testimonials</span></h3>
//                 </div>

//                 <div className='testimonials-list'>
//                     <Slider {...settings}>
//                         {
//                             testimonials.map((testimonial, index) => {
//                                 return (
//                                     <div className='testimonials-item text-center text-white' key = {index}>
//                                         <p className='text mx-auto'>{testimonial.paragraph}</p>
//                                         <div className='testimonials-item-text'>
//                                             <span className='fs-22'>{testimonial.name}</span>
//                                             <small>{testimonial.post}</small>
//                                         </div>
//                                     </div>
//                                 )
//                             })
//                         }
//                     </Slider>
//                 </div>

//                 <div className='logos-list grid'>
//                     {
//                         logos.map((logo, index) => {
//                             return (
//                                 <div className='logos-item' key = {index}>
//                                     <img src = {logo.image} alt = "" className='mx-auto' />
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Testimonials


import React from "react";
import { testimonials }  from "../../constants/data";
import "./Testimonials.css";
// import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
// slick slider
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    let settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return(
        <div className="testimonials bg__blue section__padding">
            <div className="container">
                <div className="testimonials__content text__center">
                    <Slider {...settings}>
                        {
                           testimonials.map((testimonial, index) => {
                                return (
                                    <div className="testimonials__item text__light" key = {index}>
                                        <p className="para__text">
                                            {/* <span><FaQuoteLeft /></span> */}
                                            &nbsp;
                                            {testimonial.text} 
                                            {/* <span>&nbsp; <FaQuoteRight /></span> */}
                                        </p>
                                        <p className="text__upper text fw__5 ls__2">{testimonial.name}</p>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;