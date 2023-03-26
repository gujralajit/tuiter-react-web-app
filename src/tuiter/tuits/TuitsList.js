import React from "react";
import TuitItem from "./TuitItem";
import {useSelector} from "react-redux";

const TuitsList = () => {
    const tuitsArray = useSelector(state => state.hometuits)
    return(
        <ul className="list-group">
            {
                tuitsArray.map(tuit => <TuitItem key={tuit._id} tuit={tuit}/> )
            }
        </ul>
    );
};
export default TuitsList;
