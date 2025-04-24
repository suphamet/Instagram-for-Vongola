import './Sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSearch, faCompass, faVideo, faMessage, faHeart, faSquarePlus, faUser } from '@fortawesome/free-solid-svg-icons';

// สร้างอาร์เรย์ข้อมูลสำหรับการ map เมนู
const menuItems = [
  {
    id: 1,
    name: 'Home',
    icon: faHouse
  },
  {
    id: 2,
    name: 'Search',
    icon: faSearch
  },
  {
    id: 3,
    name: 'Explore',
    icon: faCompass
  },
  {
    id: 4,
    name: 'Reels',
    icon: faVideo
  },
  {
    id: 5,
    name: 'Messages',
    icon: faMessage
  },
  {
    id: 6,
    name: 'Notifications',
    icon: faHeart
  },
  {
    id: 7,
    name: 'Create',
    icon: faSquarePlus
  },
  {
    id: 8,
    name: 'Profile',
    icon: faUser
  }
];

function LeftSidebar() {
  return (
    <div className="vh-100 d-flex" style={{ backgroundColor: "#000" }}>
      <div className="sidebar p-4 d-flex flex-column" style={{ width: "250px", borderRight: '1px solid #302f2f'}}>
        <p className='satisfy-text text-white mt-3 mb-0' style={{ fontSize: 27 }}>Instagram</p>
        
        <div className="flex-grow-1 d-flex flex-column justify-content-evenly ms-0">
          {menuItems.map(item => (
            <button 
              key={item.id}
              className="nav-item d-flex align-items-center bg-transparent border-0 px-3 py-2 w-100"
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1a1a1a'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
              style={{ margin: '5px 0', borderRadius: '8px', transition: 'background-color 0.2s ease' }}
            >
              <FontAwesomeIcon icon={item.icon} className="text-white fs-4" />
              <span className="text-white ms-3">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;