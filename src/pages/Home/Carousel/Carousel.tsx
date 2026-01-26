import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import "./Carousel.css";
import "swiper/css";
import 'swiper/css/pagination';
import "swiper/css/navigation";

type CarouselItem = {
    /// definimos cómo debe ser el item del menú, cada uno tiene una etiqueta y puede tener opcionalmente un submenú
    // Type es como una clase pero no se instancia ni tiene lógica, solo se usa para definir tipos de datos.
    question: string;
    image_link: string;
    image_alt?: string;
    background_color: string;

};

const CAR_ITEMS: CarouselItem[] = [
    { question: "¿Necesitás ayuda para definir tu futuro académico?", image_link: "./home/home_slider/asesoramiento.png", image_alt: "alt missing", background_color: "#034aac" },
    { question: "¿Querés descubrir tus verdaderas aptitudes y motivaciones?", image_link: "./home/home_slider/objetivos.png", image_alt: "alt missing", background_color: "#000a4e" },
    { question: "¿Observas cambios en la escritura que llaman tu atención?", image_link: "./home/home_slider/nina_escribiendo.png", image_alt: "alt missing", background_color: "#046af8" },
    { question: "¿Sabes qué dice tu firma manuscrita sobre tí?", image_link: "./home/home_slider/signing.png", image_alt: "alt missing", background_color: "#034aac" },
    { question: "¿Phasellus malesuada rutrum neque at egestas?", image_link: "./home/home_slider/nina_escribiendo.png", image_alt: "alt missing", background_color: "#000b67" },
    { question: "¿Morbi eleifend metus sed dolor mollis, imperdiet scelerisque?", image_link: "./home/home_slider/nina_escribiendo.png", image_alt: "alt missing", background_color: "#000a4e" },
];

type CarouselProps = {
    onScrollClick: () => void;
};

const Carousel = ({ onScrollClick }: CarouselProps) => {
    return (
        <Swiper
            pagination={{
                type: 'progressbar',
                clickable: true,
            }}
            navigation={true}
            loop={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
            speed={1500}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
            {CAR_ITEMS.map((item, index) => (
                <SwiperSlide key={index}>

                    <ul
                        className={index % 2 === 0 ? "question list_right" : "question list_left"}
                    >
                        <li
                            className="question_box" style={{ background: item.background_color }}>
                            <h1>{item.question}</h1>
                            <button onClick={onScrollClick}>Contactame</button>
                        </li>
                        <li className="img_box">
                            <div className={index % 2 === 0 ? "degrade d_right" : "degrade d_left"}
                                style={index % 2 === 0 ? { background: "linear-gradient(to left, transparent, " + item.background_color + ")" } : { background: "linear-gradient(90deg, transparent 0%, transparent 24%, " + item.background_color + " 94%, " + item.background_color + " 100%)" }}
                            ></div>
                            <img src={item.image_link} alt={item.image_alt} className="" />

                        </li>
                    </ul>

                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
