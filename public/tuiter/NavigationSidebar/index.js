/* eslint-env jquery */

const NavigationSidebar = () => {
    return(`
  <div class="">
<!--  col-2 col-md-1 col-xl-2">-->
        <div class="list-group">
            <a href="../navigation.html" class="list-group-item list-group-item-action ps-md-1 ps-lg-2">
                <i class="fas fa-tty"></i>
            </a>
            <a href="#" class="list-group-item list-group-item-action ps-md-1 ps-lg-2">
                <div class="float-start pe-1">
                <i class="fas fa-home"></i>
                </div>
                <div class="d-none d-xl-block d-inline-block">Home</div>
            </a>
            <a href="#" class="list-group-item list-group-item-action active ps-md-1 ps-lg-2">
                <div class="float-start pe-1">
                <i class="fas fa-hashtag"></i>
                </div>
                <div class="d-none d-xl-block d-inline-block">Explore</div>
            </a>
            <a href="#" class="list-group-item list-group-item-action ps-md-1 ps-lg-2">
                <div class="float-start pe-1">
                <i class="fas fa-bell"></i>
                </div>
                <div class="d-none d-xl-block d-inline-block">Notifications</div>
            </a>
            <a href="#" class="list-group-item list-group-item-action ps-md-1 ps-lg-2">
                <div class="float-start pe-1">
                <i class="fas fa-envelope"></i>
                </div>
                <div class="d-none d-xl-block d-inline-block">Messages</div>
            </a>
            <a href="#" class="list-group-item list-group-item-action ps-md-1 ps-lg-2">
                <div class="float-start pe-1">
                <i class="fas fa-bookmark"></i>
                </div>
                <div class="d-none d-xl-block d-inline-block">Bookmarks</div>
            </a>
            <a href="#" class="list-group-item list-group-item-action ps-md-1 ps-lg-2">
                <div class="float-start pe-1">
                <i class="fas fa-list"></i>
                </div>
                <div class="d-none d-xl-block d-inline-block">Lists</div>
            </a>
            <a href="#" class="list-group-item list-group-item-action ps-md-1 ps-lg-2">
                <div class="float-start pe-1">
                <i class="fas fa-user"></i>
                </div>
                <div class="d-none d-xl-block d-inline-block">Profile</div>
            </a>
            <a href="#" class="list-group-item list-group-item-action ps-md-1 ps-lg-2">
                <div class="float-start pe-1">
                <i class="fas fa-ellipsis-h"></i>
                </div>
                <div class="d-none d-xl-block d-inline-block">More</div>
            </a>
            <button type="button" class="btn btn-primary rounded-pill mt-2">Tuit</button>
        </div>
    </div>
 `);
}
// $('#wd-navigation-sidebar').append(`${NavigationSidebar()}`);

export default NavigationSidebar;

