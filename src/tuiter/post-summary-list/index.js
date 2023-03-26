import React from "react";
import {useSelector} from "react-redux";
import PostSummaryItem from "./post-summary-item";
// import WhoToFollowListItem from "../who-to-follow-list/who-to-follow-list-item";

const PostSummaryList = () => {
    const postsArray = useSelector(state => state.postSummary)
    return(
        <ul className="list-group">

            {
                postsArray.map(post =>
                    <PostSummaryItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};

export default PostSummaryList;
