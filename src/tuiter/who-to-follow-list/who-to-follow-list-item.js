const WhoToFollowListItem = ({
                                 who = {userName: 'NASA', handle: 'NASA', avatarIcon: '../../img/nasa-icon.png'}
                             }) => {
    return (
    <li class="list-group-item">
    <div class="row">
        <div class="col-2">
            <img class="rounded-circle" height={48} src={`../../img/${who.avatarIcon}`}/>
        </div>
        <div class="col-8">
            <div class="fw-bolder">{who.userName}
                <img src="../../img/verified-icon.png" height={12} class=" ps-1 rounded-circle"/>
            </div>
            <div class="text-secondary">@{who.handle}</div>
        </div>
        <div class="col-2">
            <button type="button" class="btn btn-primary rounded-pill float-end">Follow</button>
        </div>
    </div>
    </li>
   );
};

export default WhoToFollowListItem;
