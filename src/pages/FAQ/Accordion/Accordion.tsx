import { useState } from "react";
import "./Accordion.css";

type AccordionItem = {
    question: string;
    answer: React.ReactNode;
};

type AccordionProps = {
    items: AccordionItem[];
};

const Accordion = ({ items }: AccordionProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <div className={openIndex === index ? "accordion-item open" : "accordion-item"} key={index}>
                    <div
                        className="accordion-header"
                        onClick={() => toggle(index)}
                        aria-expanded={openIndex === index}
                    >
                        <h3>
                            {item.question}
                        </h3>
                        <span className="accordion-icon">
                            {openIndex === index ? "▲" : "▼"}
                        </span>
                    </div>

                    {openIndex === index && (
                        <div className="accordion-content">
                            <p>
                                {item.answer}
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
