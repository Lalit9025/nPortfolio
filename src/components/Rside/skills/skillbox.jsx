import "./skillbox.css";

export const SkillBox = (props) => {
    return(
        <div className="s-box">
            <div className="icon">
                <img className="icon-b" src={props.icon} alt={props.name} />
                <span className="name-prop">{props.name}</span>
            </div>
        </div>
    )
}

