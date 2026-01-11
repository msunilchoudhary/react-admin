
import { LuMenu } from 'react-icons/lu'

function Navbar({handleToggleMenubar, isSidebarShow}) {
  return (
    <div className={`headerNavbar light px-4 ${!isSidebarShow ? 'setFull' : ''}`}>
        <div className='row align-items-center'>
            <button className='toggleMenubar' onClick={handleToggleMenubar}><LuMenu /></button>
        </div>
    </div>
  )
}

export default Navbar