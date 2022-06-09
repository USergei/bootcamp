import React, {useState} from "react"
import style from './Navbar.module.scss'
import SVG from 'react-inlinesvg'
import dashboard from './../../../assets/icons/dashboard.svg'
import envelope from './../../../assets/icons/navbarEnvelope.svg'
import overview from './../../../assets/icons/overview.svg'
import statistic from './../../../assets/icons/statistic.svg'
import invoice from './../../../assets/icons/invoice.svg'
import myAds from './../../../assets/icons/myAds.svg'
import calendar from './../../../assets/icons/calendar.svg'
import feedbackStar from './../../../assets/icons/feedbackStar.svg'
import statement from './../../../assets/icons/statement.svg'
import settings from './../../../assets/icons/settings.svg'
import classNames from 'classnames'


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
        overview: {
            icon: overview,
            title: 'Overview'
        },
        statistic: {
            icon: statistic,
            title: 'Statistic'
        },
        invoice: {
            icon: invoice,
            title: 'Invoice'
        },
        myAds: {
            icon: myAds,
            title: 'My Ads'
        },
        calendar: {
            icon: calendar,
            title: 'Calendar'
        },
        feedback: {
            icon: feedbackStar,
            title: 'Feedback'
        },
        statement: {
            icon: statement,
            title: 'Statement'
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
            if (topLevelMenu.submenu ) {
                for (let subMenuItem of Object.values(topLevelMenu.submenu)) {
                    subMenuItems.push(
                        <a className={style.subMenu} href={subMenuItem.url}>
                            <div className={style.subMenuText}>{subMenuItem.title}</div>
                            <div className={style.subMenuNotification}>3</div>
                        </a>
                    )
                }
            }
            menuItems.push(
                <nav>
                    <div className={style.navbarItem}>
                        <div className={style.navbarIcon}>
                            <SVG src={topLevelMenu.icon} alt="icon" />
                            <div className={style.navbarNotification}>3</div>
                        </div>
                        <span>{topLevelMenu.title}</span>
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