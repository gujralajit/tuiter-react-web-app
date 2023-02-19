/* eslint-env jquery */

import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return (`
        <div class="list-group main-section">
        ${
        posts.map(todo => {
            return (PostSummaryItem(todo));
        }).join('')
    }
       </div>
   `);
}

// $('#wd-main-section').append(`${PostSummaryList()}`);

export default PostSummaryList;
