import { Image } from 'react-bootstrap';
import profileimg from '../../asset/Intropage.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons';

function Post() {
    // Mock data for posts
    const posts = [
        {
            id: 1,
            username: "Soontornpattanaruj",
            profilePic: profileimg,
            postImage: profileimg,
            caption: "Vongola 1 & Vongola 10 in the anime.",
            likes: 1234,
            commentCount: 45,
            timePosted: "2h"
        },
        {
            id: 2,
            username: "Soontornpattanaruj",
            profilePic: profileimg,
            postImage: profileimg,
            caption: "KHR characters looking awesome!",
            likes: 987,
            commentCount: 23,
            timePosted: "5h"
        },
        {
            id: 3,
            username: "anime_lover",
            profilePic: profileimg,
            postImage: profileimg,
            caption: "Best anime scenes of 2024!",
            likes: 3456,
            commentCount: 120,
            timePosted: "1d"
        },
        {
            id: 4,
            username: "Soontornpattanaruj",
            profilePic: profileimg,
            postImage: profileimg,
            caption: "Vongola 1 & Vongola 10 in the anime.",
            likes: 1234,
            commentCount: 45,
            timePosted: "2h"
        },
        {
            id: 5,
            username: "Soontornpattanaruj",
            profilePic: profileimg,
            postImage: profileimg,
            caption: "KHR characters looking awesome!",
            likes: 987,
            commentCount: 23,
            timePosted: "5h"
        },
        {
            id: 6,
            username: "anime_lover",
            profilePic: profileimg,
            postImage: profileimg,
            caption: "Best anime scenes of 2024!",
            likes: 3456,
            commentCount: 120,
            timePosted: "1d"
        },
        {
            id: 7,
            username: "Soontornpattanaruj",
            profilePic: profileimg,
            postImage: profileimg,
            caption: "Vongola 1 & Vongola 10 in the anime.",
            likes: 1234,
            commentCount: 45,
            timePosted: "2h"
        },
        {
            id: 8,
            username: "Soontornpattanaruj",
            profilePic: profileimg,
            postImage: profileimg,
            caption: "KHR characters looking awesome!",
            likes: 987,
            commentCount: 23,
            timePosted: "5h"
        },
        {
            id: 9,
            username: "anime_lover",
            profilePic: profileimg,
            postImage: profileimg,
            caption: "Best anime scenes of 2024!",
            likes: 3456,
            commentCount: 120,
            timePosted: "1d"
        },
        {
            id: 10,
            username: "Soontornpattanaruj",
            profilePic: profileimg,
            postImage: profileimg,
            caption: "Vongola 1 & Vongola 10 in the anime.",
            likes: 1234,
            commentCount: 45,
            timePosted: "2h"
        },
        {
            id: 11,
            username: "Soontornpattanaruj",
            profilePic: profileimg,
            postImage: profileimg,
            caption: "KHR characters looking awesome!",
            likes: 987,
            commentCount: 23,
            timePosted: "5h"
        },
        {
            id: 12,
            username: "anime_lover",
            profilePic: profileimg,
            postImage: profileimg,
            caption: "Best anime scenes of 2024!",
            likes: 3456,
            commentCount: 120,
            timePosted: "1d"
        },
        {
            id: 13,
            username: "Soontornpattanaruj",
            profilePic: profileimg,
            postImage: profileimg,
            caption: "Vongola 1 & Vongola 10 in the anime.",
            likes: 1234,
            commentCount: 45,
            timePosted: "2h"
        },
        {
            id: 14,
            username: "Soontornpattanaruj",
            profilePic: profileimg,
            postImage: profileimg,
            caption: "KHR characters looking awesome!",
            likes: 987,
            commentCount: 23,
            timePosted: "5h"
        },
        {
            id: 15,
            username: "anime_lover",
            profilePic: profileimg,
            postImage: profileimg,
            caption: "Best anime scenes of 2024!",
            likes: 3456,
            commentCount: 120,
            timePosted: "1d"
        },
        {
            id: 16,
            username: "Soontornpattanaruj",
            profilePic: profileimg,
            postImage: profileimg,
            caption: "Vongola 1 & Vongola 10 in the anime.",
            likes: 1234,
            commentCount: 45,
            timePosted: "2h"
        },
        {
            id: 17,
            username: "Soontornpattanaruj",
            profilePic: profileimg,
            postImage: profileimg,
            caption: "KHR characters looking awesome!",
            likes: 987,
            commentCount: 23,
            timePosted: "5h"
        },
        {
            id: 18,
            username: "anime_lover",
            profilePic: profileimg,
            postImage: profileimg,
            caption: "Best anime scenes of 2024!",
            likes: 3456,
            commentCount: 120,
            timePosted: "1d"
        },
        {
            id: 19,
            username: "Soontornpattanaruj",
            profilePic: profileimg,
            postImage: profileimg,
            caption: "Vongola 1 & Vongola 10 in the anime.",
            likes: 1234,
            commentCount: 45,
            timePosted: "2h"
        },
        {
            id: 20,
            username: "Soontornpattanaruj",
            profilePic: profileimg,
            postImage: profileimg,
            caption: "KHR characters looking awesome!",
            likes: 987,
            commentCount: 23,
            timePosted: "5h"
        },
        {
            id: 21,
            username: "anime_lover",
            profilePic: profileimg,
            postImage: profileimg,
            caption: "Best anime scenes of 2024!",
            likes: 3456,
            commentCount: 120,
            timePosted: "1d"
        },
        {
            id: 22,
            username: "Soontornpattanaruj",
            profilePic: profileimg,
            postImage: profileimg,
            caption: "Vongola 1 & Vongola 10 in the anime.",
            likes: 1234,
            commentCount: 45,
            timePosted: "2h"
        },
        {
            id: 23,
            username: "Soontornpattanaruj",
            profilePic: profileimg,
            postImage: profileimg,
            caption: "KHR characters looking awesome!",
            likes: 987,
            commentCount: 23,
            timePosted: "5h"
        },
        {
            id: 24,
            username: "anime_lover",
            profilePic: profileimg,
            postImage: profileimg,
            caption: "Best anime scenes of 2024!",
            likes: 3456,
            commentCount: 120,
            timePosted: "1d"
        },
        {
            id: 25,
            username: "Soontornpattanaruj",
            profilePic: profileimg,
            postImage: profileimg,
            caption: "Vongola 1 & Vongola 10 in the anime.",
            likes: 1234,
            commentCount: 45,
            timePosted: "2h"
        },
        {
            id: 26,
            username: "Soontornpattanaruj",
            profilePic: profileimg,
            postImage: profileimg,
            caption: "KHR characters looking awesome!",
            likes: 987,
            commentCount: 23,
            timePosted: "5h"
        },
        {
            id: 27,
            username: "anime_lover",
            profilePic: profileimg,
            postImage: profileimg,
            caption: "Best anime scenes of 2024!",
            likes: 3456,
            commentCount: 120,
            timePosted: "1d"
        }
    ];

    // Function to handle icon click (you can expand this later)
    const handleIconClick = (iconName, postId) => {
        console.log(`${iconName} clicked for post ${postId}`);
        // Add your logic here
    };

    return (
        <div className="d-flex" style={{ backgroundColor: "#000", width: "100%", flexDirection: "column" }}>
            {posts.map(post => (
                <div key={post.id} className="w-50 mx-auto mt-3" style={{ borderBottom: post.id !== posts.length ? '1px solid #302f2f' : 'none', paddingBottom: '15px' }}>
                    {/* Post Header */}
                    <div className="d-flex align-items-center mt-2">
                        <Image
                            src={post.profilePic}
                            roundedCircle
                            width={30}
                            height={30}
                            className="border"
                            style={{ borderColor: '#E1306C', borderWidth: 2, borderStyle: 'solid' }}
                        />
                        <p className="text-white ms-2 mb-0">{post.username}</p>
                        <p className="text-muted ms-2 mb-0" style={{fontSize: "12px"}}>• {post.timePosted}</p>
                        <div className="d-flex align-items-center ms-auto">
                            <FontAwesomeIcon 
                                icon={faBars} 
                                className="text-white"
                                style={{ cursor: 'pointer' }}
                                onMouseDown={e => e.currentTarget.style.backgroundColor = '#333'}
                                onMouseUp={e => e.currentTarget.style.backgroundColor = 'transparent'}
                                onClick={() => handleIconClick('menu', post.id)}
                            />
                        </div>
                    </div>
                    
                    {/* Post Image */}
                    <div>
                        <Image
                            src={post.postImage}
                            className="w-100 mt-3"
                            style={{ border: '1px solid #302f2f' }} 
                        />
                    </div>
                    
                    {/* Action Icons */}
                    <div className="d-flex align-items-center mt-3">
                        <FontAwesomeIcon 
                            icon={faHeart} 
                            className="text-white fs-5" 
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleIconClick('like', post.id)}
                        />
                        <FontAwesomeIcon 
                            icon={faComment} 
                            className="text-white fs-5 ms-3" 
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleIconClick('comment', post.id)}
                        />
                        <FontAwesomeIcon 
                            icon={faPaperPlane} 
                            className="text-white fs-5 ms-3" 
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleIconClick('share', post.id)}
                        />
                        <FontAwesomeIcon 
                            icon={faBookmark} 
                            className="text-white fs-5 ms-auto" 
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleIconClick('save', post.id)}
                        />
                    </div>
                    
                    {/* Likes */}
                    <p className="text-white mt-2 mb-1" style={{fontSize: "13px", fontWeight: "bold"}}>
                        {post.likes.toLocaleString()} likes
                    </p>
                    
                    {/* Caption */}
                    <div className='d-flex align-items-start mb-0'>
                        <p className="text-white fw-bold mb-0" style={{fontSize: "13px"}}>{post.username}</p>
                        <p className="text-white mb-0" style={{fontSize: "13px", marginLeft: "5px"}}>{post.caption}</p>
                    </div>
                    
                    {/* View Comments Link */}
                    <p className="text-muted mt-1 mb-1" style={{fontSize: "13px", cursor: "pointer"}}>
                        View all {post.commentCount} comments
                    </p>
                    
                    {/* Translation Link */}
                    <div className='mt-1'>
                        <p className='text-white fw-bold mb-2' style={{fontSize: "13px", cursor: "pointer"}}>See translate</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Post;