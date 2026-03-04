import "./Mini_Section.css";

type CommonSectionProps = {
    content: React.ReactNode;
    className?: string;
};

const Mini_Section = ({ content, className }: CommonSectionProps) => {
    return (
        <div className={"mini_section "+className}>
            {content}

        </div>
    );
};

export default Mini_Section;