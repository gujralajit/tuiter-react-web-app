import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import '../index.css'
import {useDispatch} from "react-redux";
import {updateUser} from "../reducers/profile-reducer";

const EditProfileComponent = () => {
    const profileInfo = useSelector((state) => state.profile);
    let [profile, setProfile]  = useState(profileInfo);
    let [userName, setUserName] = useState(profile.firstName + " " + profile.lastName);
    let [bio, setBio] = useState(profile.bio);
    let [location, setLocation] = useState(profile.location);
    let [website, setWebsite] = useState(profile.website);
    let [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth);
    const dispatch = useDispatch();
    console.log("profile is : " + userName);

    const saveClickHandler = () => {
        const newFirstName = userName.split(" ")[0];
        // const userInfo = {
        //     firstName: newFirstName,
        //     lastName: userName.slice(newFirstName.length + 1),
        //     bio: bio,
        //     location: location,
        //     website: website,
        //     dateOfBirth: dateOfBirth,
        // }
        dispatch(updateUser({
            ...profile,
            firstName: newFirstName,
            lastName: userName.slice(newFirstName.length + 1),
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: dateOfBirth,
        }));

        // dispatch(updateUser({userInfo}));
    }

    return(
        <div className="border border-light">
            <div className="row">
                <div className="col-1 d-flex align-content-center flex-wrap">
                    <Link to="/tuiter/profile">
                        <i className="bi bi-x"/>
                    </Link>
                </div>
                <div className="col-11">
                    <div className="fw-bold fs-4">{userName}</div>
                    <div className="fw-light text-secon dary fs-6">23.8K tuits</div>
                </div>
            </div>
            <div className="row ">
                <div className="col-12 pos-relative">
                    <img src="../../img/elno-banner.jpg" width="100%"/>
                    <img src="../../img/elno-pfp.jpg"
                         className="rounded-circle float-start wd-profile-image border border-white"
                         width={100} height={100}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 pt-3 pe-4">
                    <Link to="/tuiter/profile" className="btn btn-dark btn-sm rounded-pill position-relative float-end px-3 fw-bold" onClick={saveClickHandler}>Save</Link>
                </div>
            </div>
            <div className="ps-3">
                <div className="fw-bold fs-4 pt-3">{userName}</div>
                <div className="fw-light fs-6 text-secondary">@elonmusk</div>
            </div>
            <div className="px-3">
                <div className="border w-100 rounded-1 mt-2" >
                    <label className="wd-input-label text-secondary">Name</label>
                    <input type="text"
                           className="form-control border-0 pt-0"
                           defaultValue={userName}
                           onChange={(event) => setUserName(event.target.value)} />
                </div>
                <div className="border w-100 rounded-1 mt-4">
                    <label className="wd-input-label text-secondary">Bio</label>
                    <textarea rows={3}
                              className="form-control border-0 pt-0"
                              value={bio}
                              onChange={(event) => setBio(event.target.value)} />
                </div>
                <div className="border w-100 rounded-1 mt-4" >
                    <label className="wd-input-label text-secondary">Location</label>
                    <input type="text"
                           className="form-control border-0 pt-0"
                           defaultValue={location}
                           onChange={(event) => setLocation(event.target.value)} />
                </div>
                <div className="border w-100 rounded-1 mt-4" >
                    <label className="wd-input-label text-secondary">Website</label>
                    <input type="text"
                           className="form-control border-0 pt-0"
                           defaultValue={website}
                           onChange={(event) => setWebsite(event.target.value)} />
                </div>
                <div className="mt-4">
                    <div className="text-secondary">
                        Birth Date
                        <input type="date"
                               className="form-control"
                               defaultValue={(dateOfBirth)}
                               onChange={(event) => setDateOfBirth((event.target.value))}
                        />
                    </div>
                </div>
                <div className={"mt-4"}>
                                    <span>Switch to professional
                                    </span>
                </div>

            </div>
        </div>
    );
};
export default EditProfileComponent;
