import LeftSidebar from '../../component/LeftSidebar/LeftSidebar'
import RightSidebar from '../../component/RightSidebar/RightSidebar'
import Story from '../../component/Story/Story'
import Post from '../../component/Post/Post'

function Instagram() {
    return (
        <div className="d-flex vh-100" style={{backgroundColor:"#000"}}>
            <LeftSidebar />
            <div className="overflow-auto flex-grow-1" style={{backgroundColor:"#000"}}>
                <div className="d-flex">
                    <div className="me-auto" style={{maxWidth: "65%"}}>
                        <Story />
                        <Post />
                    </div>
                    <div style={{width: "80%"}}>
                        <RightSidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instagram;