import React, {useState} from "react"
import style from './Navbar.module.scss'
import SVG from 'react-inlinesvg'
import dashboard from './../../../assets/icons/dashboard.svg'
import envelope from './../../../assets/icons/envelope.svg'
import overview from './../../../assets/icons/overview.svg'
import statistic from './../../../assets/icons/statistic.svg'
import invoice from './../../../assets/icons/invoice.svg'
import myAds from './../../../assets/icons/myAds.svg'
import calendar from './../../../assets/icons/calendar.svg'
import feedbackStar from './../../../assets/icons/feedbackStar.svg'
import statement from './../../../assets/icons/statement.svg'
import settings from './../../../assets/icons/settings.svg'

const Navbar = () => {
    const sidebarNavigationMenu = {
        dashboard: {
            icon: dashboard,
            title: 'Dashboard',
            // compose: {
            //     title: 'Compose',
            //     url: '/messages/compose'
            // },
            // inbox: {
            //     title: 'Inbox',
            //     url: '/messages/inbox'
            // },
            // draft: {
            //     title: 'Draft',
            //     url: '/messages/draft'
            // },
            // sentbox: {
            //     title: 'Sentbox',
            //     url: '/messages/sentbox'
            // }
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
            [menuItemKey]: sideBarMenuState.menuItemKey? false : true
        })
    }

    console.log(sideBarMenuState)
    
    const buildMenu = menuObject => {
        const menuItems = []
        for (let [topLevelMenuItemKey, topLevelMenu] of Object.entries(menuObject)) {
            const subMenuItems = []
            if (topLevelMenu.submenu ) {
                for (let subMenuItem of Object.values(topLevelMenu.submenu)) {
                    subMenuItems.push(
                        <a className={style.subMenuItem} href={subMenuItem.url}>{subMenuItem.title}</a>
                    )
                }
            }
            menuItems.push(
                <nav>
                    <div className={style.navbarFlex}>
                        <SVG src={topLevelMenu.icon} alt="icon" />
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
        <div className={style.navbar}>
            {buildMenu(sidebarNavigationMenu)}
           
        </div>
    )
}

export default Navbar