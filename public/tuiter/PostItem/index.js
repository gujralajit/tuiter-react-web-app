/* eslint-env jquery */

import PostList from "./PostList.js";
import posts from "./posts.js";

const PostItem = () => {
    return (`
    <ul class="list-group">

        ${
        posts.map(todo => {
            return (PostList(todo));
        }).join('')
        }
        </ul>
       `);
}

// $('#wd-main-section').append(`${PostSummaryList()}`);

export default PostItem;
