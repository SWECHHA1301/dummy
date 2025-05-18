import React from 'react';
import "./ProfileSection.css";
import { useNavigate } from 'react-router';

const ProfileContainer = ({ children, selectedTab }) => {
    const navigate = useNavigate();

    const ProfileTab = ({ tab, imageUrl, label, iconClass }) => <div onClick={() => {
        navigate(`/profile/${tab}`);
    }} className={`option-item ${selectedTab === tab ? 'selected-option-item' : ''}`}>
        {imageUrl && <img src={imageUrl} alt={tab} />}
        {iconClass && <i className={iconClass} style={{ color: "#0d0d0c" }}></i>}
        <span>{label}</span>
    </div>;

    const Tabs = [
        {
            label: "Orders",
            tab: 'orders',
            imageUrl: "https://img.icons8.com/?size=100&id=3686&format=png&color=000000"
        },
        {
            label: "Addresses",
            tab: 'addresses',
            imageUrl: "https://img.icons8.com/?size=100&id=53383&format=png&color=000000"
        },
        {
            label: "Profile",
            tab: 'profile-details',
            iconClass: "fa-regular fa-circle-user"
        },
    ]

    return (
        <div className="main-container">
            <div className="profile-container">
                <div className="profile-header">
                    <img
                        src="https://cdn.zeptonow.com/production/app/svg/ProfileIconNonMember.svg"
                        alt="User"
                        className="profile-avatar"
                    />
                    <div className="profile-info">
                        <h2>John Doe</h2>
                        <p>+91 9876543210</p>
                    </div>
                </div>

                <div className="zepto-cash-card">
                    <div className="zepto-card-title-row">
                        <img src="https://www.zeptonow.com/images/wallet.svg" alt="Wallet Icon" className="wallet-icon" />
                        <span className="zepto-title">Zepto Cash & Gift Card</span>
                    </div>
                    <div className="card-dashed-line"></div>
                    <div className="zepto-balance-row">
                        <span className="zepto-balance">Available Balance: ₹0</span>
                        <button className="add-balance-btn">Add Balance</button>
                    </div>
                </div>

                <div className="free-cash-card">
                    <div className="free-cash-row">
                        <span className="free-cash-label">🎁 Free Cash</span>
                        <span className="free-cash-amount">₹50</span>
                    </div>
                </div>

                <div className="profile-options">
                    {
                        Tabs.map((tab) => <ProfileTab
                            iconClass={tab?.iconClass}
                            imageUrl={tab?.imageUrl}
                            label={tab.label}
                            tab={tab.tab}
                        />)
                    }
                    <div className="option-item logout">
                        <span>Logout</span>
                    </div>

                </div>
            </div>

            <div className="right-section">
                {children}
            </div>
        </div>
    );
};

export default ProfileContainer;

