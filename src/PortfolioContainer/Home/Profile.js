import React from 'react';

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <a href="https://www.facebook.com/profile.php?id=100076436963011">
                            <i className="fa fa-facebook-square"></i>
                        </a>
                        <a href="https://www.google.com.my/?gws_rd=ssl">
                            <i className="fa fa-google-plus-square"></i>
                        </a>
                        <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin/">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-youtube-square"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;