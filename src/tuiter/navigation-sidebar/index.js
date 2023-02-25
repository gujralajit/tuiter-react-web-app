import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
        const {pathname} = useLocation();
        const paths = pathname.split('/')
        const active = paths[2];
    return (
        <div className="list-group">
            <a className="list-group-item ps-md-1 ps-lg-2">
                <div className="float-start pe-1 pt-1">
                    <i className="bi bi-twitter"></i>
                </div>
                <div className="d-none d-xl-block d-inline-block">Tuiter</div></a>
            <Link to="./home" className={`list-group-item ps-md-1 ps-lg-2
                    ${active === 'home'?'active':''}`}>
                <div className="float-start pe-1 pt-1">
                    <i className="bi bi-house-fill"></i>
                </div>
                <div className="d-none d-xl-block d-inline-block">Home</div>
            </Link>
            <Link to="./explore"  className={`list-group-item ps-md-1 ps-lg-2
                    ${active === 'explore'?'active':''}`}>
                <div className="float-start pe-1 pt-1">
                    <i className="bi bi-hash"></i>
                </div>
                <div className="d-none d-xl-block d-inline-block">Explore</div>
            </Link>
            <Link to="./home"  className={`list-group-item ps-md-1 ps-lg-2
                    ${active === 'notifications'?'active':''}`}>
                <div className="float-start pe-1 pt-1">
                    <i className="bi bi-bell-fill"></i>
                </div>
                <div className="d-none d-xl-block d-inline-block">Notifications</div>
            </Link>
            <Link to="./home"  className={`list-group-item ps-md-1 ps-lg-2
                    ${active === 'messages'?'active':''}`}>
                <div className="float-start pe-1 pt-1">
                    <i className="bi bi-chat-square-text-fill"></i>
                </div>
                <div className="d-none d-xl-block d-inline-block">Messages</div>
            </Link>
            <Link to="./home"  className={`list-group-item ps-md-1 ps-lg-2
                    ${active === 'bookmarks'?'active':''}`}>
                <div className="float-start pe-1 pt-1">
                    <i className="bi bi-bookmark-fill"></i>
                </div>
                <div className="d-none d-xl-block d-inline-block">Bookmarks</div>
            </Link>
            <Link to="./home"  className={`list-group-item ps-md-1 ps-lg-2
                    ${active === 'lists'?'active':''}`}>
                <div className="float-start pe-1 pt-1">
                    <i className="bi bi-list-task"></i>
                </div>
                <div className="d-none d-xl-block d-inline-block">Lists</div>
            </Link>
            <Link to="./home"  className={`list-group-item ps-md-1 ps-lg-2
                    ${active === 'profile'?'active':''}`}>
                <div className="float-start pe-1 pt-1">
                    <i className="bi bi-person-fill"></i>
                </div>
                <div className="d-none d-xl-block d-inline-block">Profile</div>
            </Link>
            <Link to="./home"  className={`list-group-item ps-md-1 ps-lg-2
                    ${active === 'more'?'active':''}`}>
                <div className="float-start pe-1 pt-1">
                    <i className="bi bi-three-dots"></i>
                </div>
                <div className="d-none d-xl-block d-inline-block">More</div>
            </Link>
        </div>
    );
};
export default NavigationSidebar;
