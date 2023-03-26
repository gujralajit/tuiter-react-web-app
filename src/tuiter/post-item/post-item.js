import React from "react";
const PostItem = ({
                             post = {
                                 "_id": 123,
                                 "pfp": "../../img/cat-aura-pfp.jpg",
                                 "userName": "cat with confusing auras.",
                                 "handle": "cat_auras",
                                 "time": "20h",
                                 "text": "boo",
                                 "image": "../../img/cat-image.jpeg",
                                 "comments": "216",
                                 "retuits": "391",
                                 "likes": "7925",
                             }
                         }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img className="rounded-circle" src={`../../img/${post.pfp}`}
                         height="35px" width="35px"/>
                </div>
                <div className="col-11">
                    <div className="fw-bolder ps-2">
                        {post.userName}
                        <i className="fas fa-check-circle"/>
                        <span
                            className="text-secondary fw-lighter"> {post.handle} &#183; {post.time}
                        </span>
                    </div>
                    <div className="fw-light ps-2">
                        {post.title}
                    </div>
                    <div className="border border-dark rounded-2">
                        <img className="rounded-top border-bottom border-dark"
                             src={`../../img/${post.image}`} width="100%"/>
                    </div>
                    <ul className="list-group list-group-horizontal justify-content-evenly pt-1 pe-5">
                        <i className="wd-icon bi bi-chat wd-fg-color-lightgray">{post.comments}</i>
                        <i className="bi bi-arrow-down-up wd-fg-color-lightgray">{post.retuits}</i>
                        <i className="bi bi-heart">{post.likes}</i>
                        <i className="bi bi-share wd-fg-color-lightgray pt-1"/>
                    </ul>
                </div>
            </div>
        </li>
    );
};

export default PostItem;
