import React from 'react';
import { Image } from 'react-bootstrap';
import profileimg from '../../asset/Intropage.jpg'
// Mock data สำหรับ Stories
const storiesData = [
    {
        id: 1,
        username: 'suphamet',
        profileImage: [profileimg],
    },
    {
        id: 2,
        username: 'natthaphong',
        profileImage: [profileimg],
    },
    {
        id: 3,
        username: 'thanakit',
        profileImage: [profileimg],
    },
    {
        id: 4,
        username: 'panupong',
        profileImage: [profileimg],
    },
    {
        id: 5,
        username: 'chaiwat',
        profileImage: [profileimg],
    },
    {
        id: 6,
        username: 'noppadon',
        profileImage: [profileimg],
    },
    {
        id: 7,
        username: 'noppadon',
        profileImage: [profileimg],
    },
    {
        id: 8,
        username: 'noppadon',
        profileImage: [profileimg],
    },
    
];

// คอมโพเนนท์ StoryItem
const StoryItem = ({ profileImage, username }) => {
    return (
        <div className='d-flex flex-column align-items-center mx-2'>
            <Image
                src={profileImage}
                alt={username}
                roundedCircle
                width={65}
                height={65}
                className="mt-3 border p-1"
                style={{ borderColor: '#E1306C', borderWidth: 2, borderStyle: 'solid' }}
            />
            <p className='text-white text-center mt-2' style={{ fontSize: 12 }}>{username}</p>
        </div>
    );
};

function Story() {
    return (
        <div className="d-flex vh-20" style={{ backgroundColor: "#000", width: "100%" }}>
            <div className="flex-grow-1 overflow-auto">
                {/* Stories container */}
                <div className="d-flex mt-3 overflow-auto justify-content-center">
                    {storiesData.map(story => (
                        <StoryItem
                            key={story.id}
                            profileImage={story.profileImage}
                            username={story.username}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Story;