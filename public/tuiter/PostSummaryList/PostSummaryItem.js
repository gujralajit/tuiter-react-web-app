const PostSummaryItem = (post) => {
    return (`
            <a href="#" class="list-group-item list-group-item-action">
                <p>
                    <img src=${post.image} class="wd-suggested-img">
                    <span class="text-secondary">${post.topic}</span><br>
                    <b>${post.userName}</b>
                    <img src="../../img/verified-icon.png" class="wd-suggested-icon wd-rounded-corners-all-around">
                    <span class="text-secondary">&#183; ${post.time}</span><br>
                    <b class="">${post.title}</b>
                </p>
            </a>
   `);
}

export default PostSummaryItem;
