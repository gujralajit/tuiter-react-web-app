import React from "react";

const TuitStats = ({liked, likes, replies, retuits}) => {
    return(
        <ul className="list-group list-group-horizontal justify-content-evenly">
            <li className="list-group-item border-0">
                <i className="bi bi-chat me-3"/>{replies}
            </li>
            <li className="list-group-item border-0">
                <i className="bi bi-recycle me-3"/>{retuits}
            </li>
            <li className="list-group-item border-0">
                {
                    liked && <i className="bi bi-heart-fill me-3" style={{color:"red"}}/>
                }
                {
                    !liked && <i className="bi bi-heart me-3"/>
                }
                {likes}
            </li>
            <li className="list-group-item border-0">
                <i className="bi bi-upload me-3"/>
            </li>
        </ul>
    )
}
export default TuitStats;
