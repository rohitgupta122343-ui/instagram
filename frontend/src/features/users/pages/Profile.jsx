import React from "react";
import profile from "../../../assets/images.png"
import '../style/profile.scss'

const Profile = () => {
  return (
    <div className="profile">

      {/* TOP SECTION */}
      <div className="profile-top">

        <div className="profile-img">
          <img
            src={profile}
            alt="profile"
          />
        </div>

        <div className="profile-info">

          <h2>@username</h2>
          <p className="bio">Bio goes here...</p>

          {/* STATS */}
          <div className="stats">
            <div>
              <b>0 </b>
              <span>Posts</span>
            </div>

            <div>
              <b>133 </b>
              <span>Followers</span>
            </div>

            <div>
              <b>415 </b>
              <span>Following</span>
            </div>
          </div>

        </div>

      </div>

      {/* BUTTONS */}
      <div className="profile-actions">
        <button>Edit Profile</button>
        <button>View Archive</button>
        <button>Log Out</button>
      </div>

    </div>
  );
};

export default Profile;