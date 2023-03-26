import React, {useState} from "react";
import {Link} from "react-router-dom";
import '../index.css'
import {useSelector} from "react-redux";

const ProfileData = () => {
    const profileInfo = useSelector((state) => state.profile);
    let [profile, setProfile]  = useState(profileInfo);

    return(
        <div className="border border-light">
            <div className="row">
                <div className="col-1 d-flex align-content-center flex-wrap">
                    <Link to="/tuiter/" style={{color:"black", fontSize:"1.5em"}}>
                        <i className="bi bi-arrow-left ps-2"/>
                    </Link>
                </div>
                <div className="col-11">
                    <div className="fw-bold fs-4">{profile.firstName} {profile.lastName}</div>
                    <div className="fw-light text-secondary fs-6">{profile.totaltuits} tuits</div>
                </div>
            </div>
            <div className="row ">
                <div className="col-12 pos-relative">
                    <img src={`../../img/${profile.banner}`}
                         width="100%" alt="profile banner"/>
                    <img src={`../../img/${profile.pfp}`}
                         alt="profile pic"
                         className="rounded-circle float-start wd-profile-image border border-white"
                         width={100} height={100}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 pt-3 pe-4">
                    <Link to='../edit-profile'>
                    <button className="btn fw-bold border-dark rounded-pill float-end">Edit Profile</button>
                    </Link>
                </div>
            </div>
            <div className="ps-3 pt-3">
                <div className="fw-bold fs-4">{profile.firstName} {profile.lastName}</div>
                <div className="fw-light fs-6 text-secondary">{profile.handle}</div>
            </div>
            <div className="ps-3 pt-2">{profile.bio}</div>
            <ul className="pt-2 list-group list-group-horizontal list-group-flush border border-0">
                <li className="list-group-item border border-0">
                    <i className="bi bi-geo-alt"/>
                    <span className="ps-1">{profile.location}</span>
                </li>
                <li className="list-group-item border border-0">
                    <i className="bi bi-balloon"/>
                    <span className="ps-1">Born {profile.dateOfBirth}</span>
                </li>
                <li className="list-group-item border border-0">
                    <i className="bi bi-calendar3"/>
                    <span className="ps-1">Joined {profile.dateJoined}</span>
                </li>
            </ul>
            <ul className="list-group list-group-horizontal list-group-flush border border-0">
                <li className="list-group-item border border-0">
                    <span className="fw-bold">{profile.followingCount} </span>Following
                </li>
                <li className="list-group-item border border-0">
                    <span className="fw-bold">{profile.followersCount} </span>Followers
                </li>
            </ul>
        </div>
    );
};
export default ProfileData;