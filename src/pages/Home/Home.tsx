
import { useRef } from "react";
import Carousel from "./Carousel/Carousel";
import Contact_me from "./Contact_me/Contact_me";
import Pre_footer from "../../components/Pre_footer/Pre_footer";


const Home = () => {
  const contact_me_ref = useRef<HTMLHeadingElement | null>(null);

  const scrollToContactMe = () => {
    contact_me_ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main>
      <Carousel onScrollClick={scrollToContactMe} />

      <Contact_me ref={contact_me_ref} />

      <Pre_footer />
    </main>
  );
}

export default Home;
