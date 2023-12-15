import "./skillbox.css";

export const SkillBox = (props) => {
    const iconStyle ={
        color: props.color,
    }
    return(
        <div className="s-box">
            <div className="icon">
                <img  className="icon-b" src={props.icon}/>
                <span className="name-prop">{props.name}</span>
            </div>
        </div>
    )
}

