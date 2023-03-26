import React from "react";
import {Link} from "react-router-dom";
import '../index.css'

const ProfileData = (
    {
        profiledata = {
            "firstName": "Elon",
            "lastName": "Musk",
            "handle": "@elonmusk",
            "profilePicture": "../../img/elno-pfp",
            "totaltuits": "23.8K",
            "bannerPicture": "../../img/elno-banner.png",
            "bio": "CEO of Tuiter",
            "website": "https://www.tesla.com/elon-musk",
            "location": "US",
            "dateOfBirth": "June 28, 1971",
            "dateJoined": "Jun 2009",
            "followingCount": 184,
            "followersCount": "123.6M"
        }
    }) => {
    return(
        <div className="border border-light">
            <div className="row">
                <div className="col-1 d-flex align-content-center flex-wrap">
                    <Link to="/tuiter/" style={{color:"black", fontSize:"1.5em"}}>
                        <i className="bi bi-arrow-left ps-2"/>
                    </Link>
                </div>
                <div className="col-11">
                    <div className="fw-bold fs-4">{profiledata.firstName} {profiledata.lastName}</div>
                    <div className="fw-light text-secondary fs-6">{profiledata.totaltuits} tuits</div>
                </div>
            </div>
            <div className="row ">
                <div className="col-12 pos-relative">
                    <img src={`../../img/${profiledata.banner}`}
                         width="100%" alt="profile banner"/>
                    <img src={`../../img/${profiledata.pfp}`}
                         alt="profile pic"
                         className="rounded-circle float-start wd-profile-image border border-white"
                         width={100} height={100}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 pt-3 pe-4">
                    <button className="btn fw-bold border-dark rounded-pill float-end">Edit Profile</button>
                </div>
            </div>
            <div className="ps-3 pt-3">
                <div className="fw-bold fs-4">{profiledata.firstName} {profiledata.lastName}</div>
                <div className="fw-light fs-6 text-secondary">{profiledata.handle}</div>
            </div>
            <div className="ps-3 pt-2">{profiledata.bio}</div>
            <ul className="pt-2 list-group list-group-horizontal list-group-flush border border-0">
                <li className="list-group-item border border-0">
                    <i className="bi bi-geo-alt"/>
                    <span className="ps-1">{profiledata.location}</span>
                </li>
                <li className="list-group-item border border-0">
                    <i className="bi bi-balloon"/>
                    <span className="ps-1">Born {profiledata.dateOfBirth}</span>
                </li>
                <li className="list-group-item border border-0">
                    <i className="bi bi-calendar3"/>
                    <span className="ps-1">Joined {profiledata.dateJoined}</span>
                </li>
            </ul>
            <ul className="list-group list-group-horizontal list-group-flush border border-0">
                <li className="list-group-item border border-0">
                    <span className="fw-bold">{profiledata.followingCount} </span>Following
                </li>
                <li className="list-group-item border border-0">
                    <span className="fw-bold">{profiledata.followersCount} </span>Followers
                </li>
            </ul>
        </div>
    );
};
export default ProfileData;