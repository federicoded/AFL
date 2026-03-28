
import { useRef } from "react";
import Carousel from "./Carousel/Carousel";
import Contact_me from "./Contact_me/Contact_me";
import Pre_footer from "../../components/Pre_footer/Pre_footer";
import { useScrollToTag } from "../../hooks/useScrollTo";


const Home = () => {
  const contact_me_ref = useRef<HTMLHeadingElement | null>(null);

  const scrollToContactMe = () => {
    contact_me_ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useScrollToTag();
  return (
    <main className="page home_page">
      <Carousel onClick_Scroll={scrollToContactMe} />

      <Contact_me ref={contact_me_ref} id="contact_me" />

      <Pre_footer />
    </main>
  );
}

export default Home;
