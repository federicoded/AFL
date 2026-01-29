import "./Common_Section.css";

type CommonSectionProps = {
    left: React.ReactNode;
    right: React.ReactNode;
    bigger_side?: "left" | "right";
};

const Common_Section = ({ left, right, bigger_side }: CommonSectionProps) => {
    return (
        <div className="content_section">
            <div className={bigger_side=="left" ? "left_side bigger_side" : "left_side smaller_side" }>
                {left}
            </div>

            <div className={bigger_side=="right" ? "right_side bigger_side" : "right_side smaller_side" }>
                {right}
            </div>
        </div>
    );
};

export default Common_Section;