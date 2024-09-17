import CreatePost from "./CreatePost"
import Home from "./Home"
import Notifications from "./Notifications"
import Profilelink from "./Profilelink"
import Search from "./Search"

const SidebarItems = () => {
  return (
    <div>
      <Home/>
      <Search/>
      <Notifications/>
      <CreatePost/>
      <Profilelink/>
    </div>
  )
}

export default SidebarItems
