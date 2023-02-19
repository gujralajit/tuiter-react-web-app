/* eslint-env jquery */

import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./who.js";

const WhoToFollowList = () => {
    return (`
        <ul class="list-group">
           ${
        whos.map(todo => {
            return (WhoToFollowListItem(todo));
        }).join('')
    }
       </ul>
   `);
}

// $('#wd-who-to-follow').append(`${WhoToFollowList()}`);

export default WhoToFollowList;
