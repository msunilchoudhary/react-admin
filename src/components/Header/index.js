import Sidebar from '../Sidebar'
import Navbar from '../Navbar'

function Header({isSidebarShow, handleToggleMenubar}) {
    
  return (
    <>
        <Sidebar isSidebarShow={isSidebarShow} />        
        <Navbar handleToggleMenubar={handleToggleMenubar} isSidebarShow={isSidebarShow} />   
    </>
  )
}

export default Header