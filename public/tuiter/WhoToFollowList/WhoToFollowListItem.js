const WhoToFollowListItem = (who) => {
    return (`
    <li class="list-group-item">
    <div class="row">
        <div class="col-2">
            <img class="wd-img-icon rounded-circle float-start me-2" src=${who.avatarIcon}>
        </div>
        <div class="col-8">
            <div class="fw-bolder">${who.userName}
                <img src="../../img/verified-icon.png"
                     class="wd-suggested-icon wd-rounded-corners-all-around">
            </div>
            <div class="text-secondary">@${who.handle}</div>
        </div>
        <div class="col-2">
            <button type="button" class="btn btn-primary rounded-pill float-end">Follow</button>
        </div>
    </div>
    </li>
   `);
}

export default WhoToFollowListItem;
