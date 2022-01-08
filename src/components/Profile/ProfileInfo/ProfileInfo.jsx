import s from './ProfileInfo.module.css'
import React, {useState} from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatuseWithHooks";
import userPhoto from '../../../asseds/images/UserImage.png';
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected =(e) => {
        if(e.target.files.length){
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formatData) => {
        saveProfile(formatData);
        setEditMode(false);
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                <img src={profile.photos.large || userPhoto} className={s.mainphoto}/>
                </div>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData  goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}/>}
            </div>
        </div>
    );
}

const ProfileData = ({profile, isOwner, goToEditMode}) =>{
    return (<div>
        {isOwner &&
        <div>
            <button onClick={goToEditMode}>Edit</button>
        </div>}
        <div><b>Name:</b> {profile.fullName}</div>
        <div><b>About me:</b> {profile.aboutMe}</div>
        <div><b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}</div>
        <div><b>Looking for a job description:</b> {profile.lookingForAJobDescription}</div>
    </div>)
}

export default ProfileInfo;

