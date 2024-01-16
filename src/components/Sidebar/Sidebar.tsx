import classNames from 'classnames/bind'
import { memo } from 'react'

import SidebarStyle from './Sidebar.module.scss'

import SidebarLeft from './SidebarLeft'
import SidebarRight from './SidebarRight'

const cx = classNames.bind(SidebarStyle)

const Sidebar = memo(() => {
    return (
        <div className={cx('sidebar')}>
            <SidebarLeft />
            <SidebarRight />
        </div>
    )
})

export default Sidebar
