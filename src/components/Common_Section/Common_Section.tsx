import "./common_section.css";

type CommonSectionProps = {
    id?: string,
    full_content?: React.ReactNode;
    left?: React.ReactNode;
    right?: React.ReactNode;
    className?: string;
    bigger_side?: "left" | "right";
};

const Common_Section = ({ id, left, right, bigger_side, full_content, className}: CommonSectionProps) => {
    return (
        <div className={"common_section " + className} id={id}>
            {full_content && (
                <>
                    <div className="full_content">
                        {full_content}
                    </div>
                </>
            )}
            {left && (
                <>
                    <div className={bigger_side == "left" ? "side left_side bigger_side" : "side left_side smaller_side"}>
                        {left}
                    </div>
                </>
            )}
            {right && (
                <>
                    <div className={bigger_side == "right" ? "side right_side bigger_side" : "side right_side smaller_side"}>
                        {right}
                    </div>
                </>
            )}
        </div>
    );
};

export default Common_Section;