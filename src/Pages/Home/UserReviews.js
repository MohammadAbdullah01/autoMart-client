import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';

const UserReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("https://lit-reaches-35676.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);
    return (
        <div className='mb-16 mt-10'>
            <h1 className='mt-5 mb-3 text-xl md:text-4xl lg:text-5xl text-rose-400 text-center font-bold'>CLIENTS REVIEWS</h1>
            <div className='bg-rose-400'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='text-center px-10 py-5 md:py-7 md:px-20 text-white '>

                            <h1 className='font-mono text-xl md:text-2xl'>{review.name}</h1>
                            <Rating
                                initialRating={review.rating}
                                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                fullSymbol={<FontAwesomeIcon className='text-green-800' icon={faStar} />}
                                readonly
                            ></Rating>
                            <h1 className='font-mono text-base md:text-xl'>{review.review}</h1>
                        </div>
                    </SwiperSlide>)}
                    <br />
                </Swiper>
            </div>
        </div>
    );
};

export default UserReviews;