import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'; import 'swiper/css';
import "swiper/css/parallax";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Parallax, Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";

type CardContent = {
    icon_link: string,
    title: string,
    items: string[]
}

type ServiceProps = {
    service_id: string,
    service_title: string,
    bg_image: string,
    slide_1_items?: string[],
    cards_content?: CardContent[],
}

const Cards = ({ cards_content }: { cards_content: CardContent[] }) => {
    const element =
        <>
            <ul className='service_cards_container'>
                {
                    cards_content?.map((card) => (
                        <>
                            <li className="service_card">
                                <img src={card.icon_link} className='card_icon'></img>
                                <h3>
                                    {card.title}
                                </h3>

                                <ul className='card_list'>
                                    {card.items.map((item) => (
                                        <>
                                            <li>{item}</li>
                                        </>
                                    ))}
                                </ul>
                            </li>
                        </>
                    ))
                }
            </ul>
        </>
    return element
}


const Service = ({ service_id, service_title, bg_image, slide_1_items, cards_content }: ServiceProps) => {
    return (
        <>
            <h1 className={'service_title link_target'} id={service_id}>{service_title}</h1>
            <Swiper
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="service_swiper"
            >
                <div
                    className="parallax-bg"
                    style={{
                        backgroundImage: "url('" + bg_image + "')",
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide >
                    <div className="slide_content_bg" >
                        <div className="slide_content" >
                            <ul style={{ width: "fit-content" }}>
                                {slide_1_items?.map((item, index) => (
                                    <>
                                        <li className='service_items'>
                                            <p className='item'>
                                                {slide_1_items[index]}
                                            </p>
                                        </li>
                                    </>
                                ))}
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide_content_bg" >

                        <div className='slide_content'>
                            <ul className='service_cards_container'>
                                {
                                    cards_content ? <Cards cards_content={cards_content} /> : null
                                }
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide_content_bg" >
                        <div className='slide_content'>
                            <h2> ¿Te gustaría conocer más? </h2>
                            <Link to="/#contact_me">
                                <button style={{ width: "fit-content" }}>Contactame</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Service;