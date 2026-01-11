import {  useState } from 'react';
import { AiFillProduct } from 'react-icons/ai';
import { BiSolidCategoryAlt, BiSolidDashboard } from 'react-icons/bi';
import { CgMenuBoxed } from 'react-icons/cg';
import { HiUsers } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import { MdListAlt } from 'react-icons/md';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/msc-logo.png';

function Sidebar({isSidebarShow}) {
    const [isShowSidebarDropdown, setIsShowSidebarDropdown] = useState(false)
    const [activeMenu, setActiveMenu] = useState(null)

    const handleOnClickMenu = (index) => {
        if(activeMenu === index){
            setActiveMenu(null)
            setIsShowSidebarDropdown(false)
        }
        else{
            setActiveMenu(index)
            setIsShowSidebarDropdown(true)            
        }
        
    }

  return (
    <div className={`menuSidebar light ${!isSidebarShow ? 'showSidebar' : ''}`}>
        <div className='tophead d-flex align-items-center'>
            <Link to="/" className='logo'>
                <img src={logo} alt="MSunilChoudhary" />
            </Link>
        </div>
        <div className='menubar'>
            <ul className='menu-lists'>
                <li>
                    <Link to="/">
                        <i className='icons'>
                            <BiSolidDashboard />
                        </i>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" onClick={() => handleOnClickMenu(0)}>
                        <i className='icons'>
                            <CgMenuBoxed />
                        </i>
                        <span>Home Banners</span>
                        <span className='arrow'>
                            <IoIosArrowDown />
                        </span>
                    </Link>
                    {isShowSidebarDropdown === true && activeMenu === 0 && (
                        <div className='dropdownSidebarMenu'>
                            <ul>
                                <li><Link to="/">Banner Lists</Link></li>
                                <li><Link to="/">Add Banner</Link></li>
                            </ul>
                        </div>
                        )
                    }
                </li>
                <li>
                    <Link to="/" onClick={()=> handleOnClickMenu(1)}>
                        <i className='icons'>
                            <BiSolidCategoryAlt />
                        </i>
                        <span>Categories</span>
                        <span className='arrow'>
                            <IoIosArrowDown />
                        </span>
                    </Link>
                    {isShowSidebarDropdown === true && activeMenu === 1 && (
                        <div className='dropdownSidebarMenu'>
                            <ul>
                                <li><Link to="/">Category Lists</Link></li>
                                <li><Link to="/">Add Category</Link></li>
                            </ul>
                        </div>
                        )
                    }
                </li>
                <li>
                    <Link to="/" onClick={()=>handleOnClickMenu(2)}>
                        <i className='icons'>
                            <AiFillProduct />
                        </i>
                        <span>Products</span>
                        <span className='arrow'>
                            <IoIosArrowDown />
                        </span>
                    </Link>
                    {isShowSidebarDropdown === true && activeMenu === 2 && (
                        <div className='dropdownSidebarMenu'>
                            <ul>
                                <li><Link to="/">Product Lists</Link></li>
                                <li><Link to="/">Add Product</Link></li>
                            </ul>
                        </div>
                        )
                    }
                </li>
                <li>
                    <Link to="/" onClick={()=>handleOnClickMenu(3)}>
                        <i className='icons'>
                            <HiUsers />
                        </i>
                        <span>Users</span>
                        <span className='arrow'>
                            <IoIosArrowDown />
                        </span>
                    </Link>
                    {isShowSidebarDropdown === true && activeMenu === 3 && (
                        <div className='dropdownSidebarMenu'>
                            <ul>
                                <li><Link to="/">User Lists</Link></li>
                                <li><Link to="/">Add User</Link></li>
                            </ul>
                        </div>
                        )
                    }
                </li>
                <li>
                    <Link to="/" onClick={()=>handleOnClickMenu(4)}>
                        <i className='icons'>
                            <MdListAlt />
                        </i>
                        <span>Orders</span>
                        <span className='arrow'>
                            <IoIosArrowDown />
                        </span>
                    </Link>
                    {isShowSidebarDropdown === true && activeMenu === 4 && (
                        <div className='dropdownSidebarMenu'>
                            <ul>
                                <li><Link to="/">All Orders</Link></li>
                                <li><Link to="/">Orders Completed</Link></li>
                                <li><Link to="/">Orders Cancelled</Link></li>
                                <li><Link to="/">Orders Pending</Link></li>
                            </ul>
                        </div>
                        )
                    }
                </li>
                <li>
                    <Link to="/" onClick={()=>handleOnClickMenu(5)}>
                        <i className='icons'>
                            <BiSolidDashboard />
                        </i>
                        <span>Banners</span>
                        <span className='arrow'>
                            <IoIosArrowDown />
                        </span>
                    </Link>
                    {isShowSidebarDropdown === true && activeMenu === 5 && (
                        <div className='dropdownSidebarMenu'>
                            <ul>
                                <li><Link to="/">All Banners</Link></li>
                                <li><Link to="/">Add Banner</Link></li>
                            </ul>
                        </div>
                        )
                    }
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar