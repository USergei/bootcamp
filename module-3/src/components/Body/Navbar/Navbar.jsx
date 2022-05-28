import React from "react"
import style from './Navbar.module.scss'
import SVG from 'react-inlinesvg'
import dashboard from './../../../assets/icons/dashboard.svg'
import envelope from './../../../assets/icons/envelope.svg'

const Navbar = () => {
    const sidebarNavigationMenu = {
        dashboard: {
            icon: dashboard,
            title: 'Dashboard',
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
        }
    }

    const buildMenu = menuObject => {
        // console.log(Object.entries(menuObject))
        const menuItems = []
        for (let [key,value] of Object.entries(menuObject)) {
            // console.log(value);
            menuItems.push(
                <nav>
                    {<SVG className={style.navbarIcon} src={value.icon} alt="icon" />}
                    <span>{value.title}</span>
                    <nav>
                        <a href=""></a>
                    </nav>
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