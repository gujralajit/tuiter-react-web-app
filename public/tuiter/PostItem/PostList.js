const PostList = (post) => {
    return (`
            <div class="wd-flex-container">

    <div>
        <img src=${post.pfp} class="wd-flex-container wd-avatar-image">
    </div>
    <div>
        <p class="wd-fg-color-white wd-handle-font"><b>${post.userName}</b>
            <nobr class="wd-fg-color-gray"> @${post.handle} &#183; ${post.time}</nobr>
        <p class="wd-fg-color-white wd-content-font">${post.text}</p>
        <img src=${post.image} class="wd-content-image">
        <div class="wd-flex-container-inside mt-2">
            <i class="fa fa-comment wd-fg-color-lightgray"></i><p class="wd-tweet-icons">${post.comments}</p>
            <i class="fa fa-retweet wd-fg-color-lightgray"></i><p class="wd-tweet-icons">${post.retuits}</p>
            <i class="fa fa-heart wd-fg-color-red"></i><p class="wd-tweet-icons">${post.likes}</p>
            <i class="fa fa-share wd-fg-color-lightgray"></i>
        </div>
    </div>
        </div>

   `);
}

export default PostList;
