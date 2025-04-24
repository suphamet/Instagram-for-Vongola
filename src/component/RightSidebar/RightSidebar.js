import { Image } from 'react-bootstrap';
import profileimg from '../../asset/Intropage.jpg';

function RightSidebar() {
    // Mock data for user profile
    const userProfile = {
        username: "soontornpattanaruj",
        surname: "Suphamet",
        lastname: "Soontornpattanaruj",
        profilePic: profileimg
    };

    // Mock data for suggested users
    const suggestedUsers = [
        {
            id: 1,
            username: "johndoe",
            info: "Followed by _puretmw",
            profilePic: profileimg
        },
        {
            id: 2,
            username: "janedoe",
            info: "Followed by alex + 3 more",
            profilePic: profileimg
        },
        {
            id: 3,
            username: "alex_smith",
            info: "New to Instagram",
            profilePic: profileimg
        },
        {
            id: 4,
            username: "taylor_swift",
            info: "Suggested for you",
            profilePic: profileimg
        },
        {
            id: 5,
            username: "robert_downey",
            info: "Followed by mark_wilson",
            profilePic: profileimg
        }
    ];

    return (
        <div style={{ marginTop: "10%", width: "75%" }}>
            {/* User Profile Section */}
            <div className='d-flex align-items-center justify-content-between mb-4'>
                <div className='d-flex'>
                    <div className='d-flex align-items-center'>
                        <div>
                            <Image
                                src={userProfile.profilePic}
                                roundedCircle
                                width={50}
                                height={50}
                                className="border p-1"
                                style={{ borderColor: '#E1306C', borderWidth: 2, borderStyle: 'solid' }}
                            />
                        </div>
                        <div className='ms-3 d-flex flex-column justify-content-center'>
                            <p className='text-white mb-0' style={{ fontSize: '14px', lineHeight: '1.2' }}>{userProfile.username}</p>
                            <p className='mb-0' style={{ fontSize: '13px', lineHeight: '1.2', color:"#9b9d9e" }}>{userProfile.surname}</p>
                            <p className='mb-0' style={{ fontSize: '13px', lineHeight: '1.2', color:"#9b9d9e" }}>{userProfile.lastname}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='mb-0' style={{ fontSize: '12px', color: '#217abf', cursor: 'pointer' }}>Switch</p>
                </div>
            </div>

            {/* Suggestions Header */}
            <div className='d-flex flex-row align-items-center justify-content-between mb-3'>
                <p className="fw-bold mb-0" style={{ fontSize: '14px', color:"#9b9d9e" }}>Suggestions for you</p>
                <p className="fw-bold text-white mb-0" style={{ fontSize: '12px', cursor: 'pointer' }}>See All</p>
            </div>

            {/* Suggestions List */}
            {suggestedUsers.map(user => (
                <div key={user.id} className='d-flex align-items-center justify-content-between mb-3'>
                    <div className='d-flex'>
                        <div className='d-flex align-items-center'>
                            <div>
                                <Image
                                    src={user.profilePic}
                                    roundedCircle
                                    width={40}
                                    height={40}
                                    className="border p-1"
                                    style={{ borderColor: '#E1306C', borderWidth: 2, borderStyle: 'solid' }}
                                />
                            </div>
                            <div className='ms-3 d-flex flex-column justify-content-center'>
                                <p className='text-white mb-0' style={{ fontSize: '14px', lineHeight: '1.2' }}>{user.username}</p>
                                <p className='mb-0' style={{ fontSize: '12px', lineHeight: '1.2', color:"#9b9d9e" }}>{user.info}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='mb-0' style={{ fontSize: '12px', color: '#217abf', cursor: 'pointer' }}>Follow</p>
                    </div>
                </div>
            ))}

            {/* Footer Links
            <div className="mt-4">
                <p style={{ fontSize: '11px', color: '#9b9d9e', lineHeight: '1.5' }}>
                    About · Help · Press · API · Jobs · Privacy · Terms · Locations · Language
                </p>
                <p style={{ fontSize: '11px', color: '#9b9d9e', marginTop: '15px' }}>
                    © 2025 INSTAGRAM FROM META
                </p>
            </div> */}
        </div>
    )
}

export default RightSidebar;