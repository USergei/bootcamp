import React, {useState} from "react"
import { NavLink } from "react-router-dom"
import style from "./Navbar.module.scss"
import SVG from "react-inlinesvg"
import dashboard from "../../../assets/icons/dashboard.svg"
import envelope from "../../../assets/icons/navbarEnvelope.svg"
import editor from "../../../assets/icons/editor.svg"
import documents from "../../../assets/icons/documents.svg"
import projects from "../../../assets/icons/projects.svg"
import settings from "../../../assets/icons/settings.svg"
import classNames from "classnames"


const Navbar = ({isNavbarOpen}) => {
    const sideBarClassNames = classNames(
        style.navbar,
        {
            [style.isNavbarMinimised]: isNavbarOpen
        }
    )
      
    const sidebarNavigationMenu = {
        dashboard: {
            icon: dashboard,
            title: 'Dashboard',
            url: '/'
        },
        messages: {
            icon: envelope,
            title: 'Messages',
            submenu: {
                compose: {
                    title: 'Compose',
                    url: '/messages/compose'
                },
                inbox: {
                    title: 'Inbox',
                    url: '/messages/inbox'
                },
                draft: {
                    title: 'Draft',
                    url: '/messages/draft'
                },
                sentbox: {
                    title: 'Sentbox',
                    url: '/messages/sentbox'
                }
            }
        },
        editor: {
            icon: editor,
            title: 'Editor',
            url: '/document'
        },
        documents: {
            icon: documents,
            title: 'Documents',
            url: '/documents'
        },
        projects: {
            icon: projects,
            title: 'Projects',
            url: '/projects'
        },
        settings: {
            icon: settings,
            title: 'Settings'
        }
    }

    const [sideBarMenuState, setSideBarMenuState] = useState({})
    const menuItemOnClickHandler = menuItemKey => {
        setSideBarMenuState({
            ...sideBarMenuState,
            [menuItemKey]: !sideBarMenuState[menuItemKey]
        })
    }
   
    const buildMenu = menuObject => {
        const menuItems = []
        for (let [topLevelMenuItemKey, topLevelMenu] of Object.entries(menuObject)) {
            const subMenuItems = []
            if (topLevelMenu.submenu && !isNavbarOpen) {
                for (let [subMenuLevelItemKey, subMenuItem] of Object.entries(topLevelMenu.submenu)) {
                    subMenuItems.push(
                        <a key={subMenuLevelItemKey} className={style.subMenu} href={subMenuItem.url}>
                            <div className={style.subMenuText}>{subMenuItem.title}</div>
                            <div className={style.subMenuNotification}>3</div>
                        </a>
                    )
                }
            }
            menuItems.push(
                <nav key={topLevelMenuItemKey}>
                    <div className={style.navbarItem} >
                        <div className={style.navbarIcon}>
                            <NavLink to={{pathname: topLevelMenu.url}}>
                                <SVG src={topLevelMenu.icon} alt="icon" />
                            </NavLink>
                            <div className={style.navbarNotification}>3</div>
                        </div>
                        <NavLink to={{pathname: topLevelMenu.url}}>{topLevelMenu.title}</NavLink>
                        <button onClick={() => menuItemOnClickHandler(topLevelMenuItemKey)}>+</button>
                    </div>
                    {subMenuItems.length > 0 && sideBarMenuState[topLevelMenuItemKey] &&
                        <nav className={style.isClosed}>
                            {subMenuItems}
                        </nav>
                    }       
                </nav> 
            )
        }

        return menuItems
    }

    return (
        <div className={sideBarClassNames}>
            {buildMenu(sidebarNavigationMenu)}
        </div>
    )
}

export default Navbar