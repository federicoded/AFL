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
    { question: "¿Necesitás ayuda para definir tu futuro académico?", image_link: "/home/home_slider/asesoramiento.png", image_alt: "alt missing", background_color: "#034aac" },
    { question: "¿Deseas cambiar de profesión pero no sabes cómo dar el primer paso?", image_link: "/home/home_slider/dudando.png", image_alt: "alt missing", background_color: "#000b67" },
    { question: "¿Observas cambios en la escritura que llaman tu atención?", image_link: "/home/home_slider/nina_escribiendo.png", image_alt: "alt missing", background_color: "#046af8" },
    { question: "¿Querés descubrir tus verdaderas aptitudes y motivaciones?", image_link: "/home/home_slider/objetivos.png", image_alt: "alt missing", background_color: "#000a4e" },
    { question: "¿Querés saber qué dice tu firma manuscrita sobre tí?", image_link: "/home/home_slider/signing.png", image_alt: "alt missing", background_color: "#034aac" },
    { question: "¿Morbi eleifend metus sed dolor mollis, imperdiet scelerisque?", image_link: "/home/home_slider/nina_escribiendo.png", image_alt: "alt missing", background_color: "#000a4e" },
];

type CarouselProps = {
    onClick_Scroll: () => void;
};

const Carousel = ({ onClick_Scroll }: CarouselProps) => {
    return (
        <Swiper
            id="first_element"
            pagination={{
                type: 'progressbar',
                clickable: true,
            }}
            navigation={true}
            loop={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="carousel"
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
                            <h1 className="qustn">{item.question}</h1>
                            <button onClick={onClick_Scroll}>Contactame</button>
                        </li>
                        <li className="img_box">
                            <img src={item.image_link} alt={item.image_alt} className="" />
                            <div className={index % 2 === 0 ? "degrade d_right" : "degrade d_left"}
                                style={index % 2 === 0 ? { background: "linear-gradient(-90deg, transparent 0%, transparent 24%, " + item.background_color + " 94%, " + item.background_color + " 100%)" } : { background: "linear-gradient(90deg, transparent 0%, transparent 24%, " + item.background_color + " 94%, " + item.background_color + " 100%)" }}
                            ></div>

                        </li>
                    </ul>

                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
