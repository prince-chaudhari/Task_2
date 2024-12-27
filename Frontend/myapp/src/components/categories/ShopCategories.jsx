import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { CgArrowTopRightO } from "react-icons/cg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import '../../assets/styles/ShopCategories.css'

const ShopCategories = () => {
    const categories = [
        { id: 1, name: "Clothing", image: "/project_1/IMAGES/collection-1.jpg" },
        { id: 2, name: "Sunglasses", image: "/project_1/IMAGES/collection-2.jpg" },
        { id: 3, name: "Bags", image: "/project_1/IMAGES/collection-14.jpg" },
        { id: 4, name: "Shoes", image: "/project_1/IMAGES/collection-20.jpg" },
        { id: 5, name: "Watches", image: "/project_1/IMAGES/collection-17.jpg" },
        { id: 6, name: "Accessories", image: "/project_1/IMAGES/collection-18.jpg" },
    ];

    const [swiperInstance, setSwiperInstance] = useState(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleNext = () => {
        if (swiperInstance) swiperInstance.slideNext();
    };

    const handlePrev = () => {
        if (swiperInstance) swiperInstance.slidePrev();
    };

    const updateNavigationState = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <div className="px-3 px-md-4">
            <div className="d-flex gap-3 align-items-center mb-4 justify-content-sm-between justify-content-between justify-content-lg-start justify-content-md-start ">
                <div className=" order-sm-1 order-1 order-lg-first order-md-first">
                    <button
                        className="btn btn-outline-dark rounded-circle me-1 me-sm-2 category-icons"
                        onClick={handlePrev}
                        disabled={isBeginning}
                        
                    >
                        <FiArrowLeft />
                    </button>
                    <button
                        className="btn btn-outline-dark rounded-circle category-icons"
                        onClick={handleNext}
                        disabled={isEnd}
                    >
                        <FiArrowRight />
                    </button>
                </div>
                <h5 className="fw-bold text-uppercase mt-2 order-sm-0 order-lg-last order-md-last order-0 category-heading">Shop by Categories</h5>
            </div>

            <div className="row g-4">
                <div className="col-12 col-md-8 col-lg-9">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        onSwiper={setSwiperInstance}
                        onSlideChange={(swiper) => updateNavigationState(swiper)}
                        onReachBeginning={() => setIsBeginning(true)}
                        onReachEnd={() => setIsEnd(true)}
                        breakpoints={{
                            0: { slidesPerView: 2 }, // 1 slide on mobile
                            576: { slidesPerView: 2 }, // 2 slides on small devices
                            768: { slidesPerView: 2 }, // 3 slides on tablets
                            1200: { slidesPerView: 3 }, // 4 slides on large screens
                        }}
                    >
                        {categories.map((category) => (
                            <SwiperSlide key={category.id}>
                                <div className="position-relative overflow-hidden shadow">
                                    <img
                                        src={category.image}
                                        className="img-fluid w-100"
                                        alt={category.name}
                                    />
                                    <div
                                        className="position-absolute bg-white px-3 py-2 category-name"
                                        style={{
                                            borderTopRightRadius: "8px",
                                            fontWeight: "bold",
                                            bottom: "20px",
                                            left: "20px",
                                        }}
                                    >
                                        {category.name}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="col-12 col-md-4 col-lg-3 ">
                    <div
                        className="rounded-3 p-lg-4 p-md-5 w-100 h-100 d-flex flex-lg-column flex-md-column align-items-center justify-content-md-center justify-content-lg-center justify-content-sm-around flex-sm-row discover-section justify-content-around"
                        style={{border:"2px solid black"}}
                    >
                        <p className="fw-bold mb-3 text-center fs-5 fs-md-5  pt-sm-3 pt-3">
                            Discover all new items
                        </p>
                        <button className="btn">
                            <span style={{ fontSize: "1.5rem" }}>
                                <CgArrowTopRightO size={"40px"} />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCategories;
