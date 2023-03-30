import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit, liked, likes, replies, retuits}) => {
    const dispatch = useDispatch();
    const likeTuitHandler = (tuit) => {
        dispatch(updateTuitThunk({
            ...tuit,
            likes : tuit.likes + 1,
            liked : true}));
    }
    const unlikeTuitHandler = (tuit) => {
        dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes - 1,
            liked: false}));
    }
    const dislikeTuitHandler = (tuit) => {
        dispatch(updateTuitThunk({
            ...tuit,
            dislikes: tuit.dislikes + 1,
            disliked: true}));
    }
    const undislikeTuitHandler = (tuit) => {
        dispatch(updateTuitThunk({
            ...tuit,
            dislikes: tuit.dislikes - 1,
            disliked: false}));
    }
    return(
        <ul className="list-group list-group-horizontal justify-content-evenly">
            <li className="list-group-item border-0">
                <i className="bi bi-chat me-3"/>{replies}
            </li>
            <li className="list-group-item border-0">
                <i className="bi bi-arrow-down-up me-3"/>{retuits}
            </li>
            <li className="list-group-item border-0">
                {
                    liked &&
                    <i onClick={() => unlikeTuitHandler(tuit)}
                       className="bi bi-heart-fill me-3" style={{color:"red"}}/>
                }
                {
                    !liked &&
                    <i onClick={() => likeTuitHandler(tuit)}
                       className="bi bi-heart me-3"/>
                }
                {likes}
                {/*<i onClick={() => dispatch(updateTuitThunk({*/}
                {/*    // ...tuit,*/}
                {/*    likes: likes + 1,*/}
                {/*}))} className="bi bi-heart-fill me-2 text-danger"/>*/}
            </li>
            <li className="list-group-item border-0">
                {
                    tuit.disliked &&
                    <i onClick={() => undislikeTuitHandler(tuit)}
                       className="bi bi-hand-thumbs-down-fill me-3" style={{color:"red"}}/>
                }
                {
                    !tuit.disliked &&
                    <i onClick={() => dislikeTuitHandler(tuit)}
                       className="bi bi-hand-thumbs-down me-3"/>
                }
                {tuit.dislikes}
            </li>
            <li className="list-group-item border-0">
                <i className="bi bi-share me-3"/>
            </li>
        </ul>
    )
}
export default TuitStats;
