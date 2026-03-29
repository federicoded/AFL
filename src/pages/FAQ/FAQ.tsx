import "./FAQ.css";
import Accordion from "./Accordion/Accordion";
import {useScrollToTag} from "../../hooks/useScrollTo";

type FA_question = {
    question: string;
    answer: string;
    img_link?: string;
};

const FA_questions: FA_question[] = [
    {
        question: "¿El resultado es inmediato?",
        answer: "No, los resultados no son inmediatos. El proceso implica una entrevista inicial, la toma de la muestra gráfica, el análisis de la misma y, finalmente, la entrega del informe (por ejemplo, un perfil grafo-psicológico). Cada etapa requiere su tiempo para poder trabajar de manera responsable."
    },
    {
        question: '¿Qué es el "manuscrito"?',
        answer: "El manuscrito es el papel donde la persona consultante escribe de puño y letra. Ese material es el que se analiza en detalle. A partir del manuscrito se observan aspectos como márgenes, tamaño de letra, inclinación, presión, entre otros."
    },
    {
        question: '¿Se puede realizar un grafoanálisis solo viendo el manuscrito?',
        answer: "No. El análisis requiere herramientas específicas, como lupa y elementos de medición, además de un proceso técnico. No es serio ni ético hablar de la personalidad de alguien solo con una observación superficial."
    },
    {
        question: '¿Puedo enviar una foto o escaneo del manuscrito?',
        answer: "No es lo recomendable. Un grafoanálisis serio necesita el manuscrito original, ya que en una foto o escaneo se pierden aspectos importantes, como la presión del trazo. Si el proceso se realiza a distancia, el manuscrito debe enviarse por correo para poder ser analizado correctamente."
    },
    {
        question: '¿El análisis grafológico puede reemplazar un diagnóstico psicológico?',
        answer: "No. El grafoanálisis no reemplaza el trabajo de otros profesionales. Su objeto de estudio es el manuscrito. En algunos casos, puede sugerirse la consulta con profesionales como psicólogos o psicopedagogos, según lo que se observe."
    },
    {
        question: '¿El grafoanálisis puede complementar un proceso terapéutico psicológico?',
        answer: "Sí. La grafología puede funcionar como una herramienta complementaria. Por ejemplo, se puede realizar una toma gráfica al inicio de un proceso terapéutico y luego durante el mismo, para acompañar, reflexionar y observar posibles cambios."
    },
    {
        question: '¿Para qué sirve el análisis grafológico?',
        answer: "Analizar la escritura puede tener distintos objetivos. Por ejemplo, conocer rasgos de la personalidad, identificar posibles neurodivergencias o detectar situaciones de vulneración. También puede aplicarse en ámbitos como la orientación vocacional o laboral."
    },
    {
        question: '¿La grafología puede revelar algo que no quiero que se sepa?',
        answer: "Esta es una duda muy común. El trabajo se realiza siempre con cuidado, respeto y confidencialidad. Además, si la persona consultante desea enfocarse en ciertos aspectos, el análisis se orienta a eso, sin abordar temas que no hayan sido solicitados."
    },
    {
        question: '¿Tengo que asistir de manera presencial?',
        answer: "No necesariamente. Los encuentros pueden realizarse de forma virtual (entrevista y toma gráfica). Luego, el manuscrito se envía por correo postal para su análisis."
    },
    {
        question: '¿Qué necesito para comenzar?',
        answer: "Solo se necesita predisposición para el encuentro y para realizar la escritura. En caso de ser menor de 18 años, es importante contar con el acompañamiento de un adulto responsable."
    },
    
];

const FAQ = () => {
    useScrollToTag();
    return (
        <main>
            <div className="faq_page" id="first_element">
                <h1>Preguntas frecuentes</h1>
                <div className="faq_container">

                    <Accordion items={FA_questions} />
                </div>

            </div>
        </main>
    );
};

export default FAQ;
/*
<Accordion>
                        {FA_questions.map((question, index) => (
                            <Accordion.Item eventKey={index.toString()}>
                                <Accordion.Header>{question.question}</Accordion.Header>
                                <Accordion.Body>
                                    {question.answer}
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
*/