import React from "react";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
// import {deleteTuit} from "../reducers/hometuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {
        tuit = {
            "_id": 123,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "pfp": "../../img/spacex-logo.png",
            "liked": true,
            "disliked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "dislikes": 0,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
        // dispatch(deleteTuit(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                    <img className="rounded-circle" src={`../../img/${tuit.pfp}`}
                         height="50px" width="50px"/>
                </div>
                <div className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 col-xxl-11">
                    <div className="fw-bolder ps-2">
                        {tuit.userName}
                        <i className="fas fa-check-circle"/>
                        <span
                            className="text-secondary fw-lighter"> {tuit.handle} - {tuit.time}
                        </span>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}/>
                    </div>
                    <div className="fw-light ps-2">
                        {tuit.tuit}
                    </div>
                    <TuitStats
                        tuit={tuit}
                        liked={tuit.liked}
                        likes={tuit.likes}
                        replies={tuit.replies}
                        retuits={tuit.retuits}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;
