import classNames from 'classnames/bind'

import SidebarStyle from './Sidebar.module.scss'

import SidebarLeft from './SidebarLeft'
import SidebarRight from './SidebarRight'

const cx = classNames.bind(SidebarStyle)

export default function Sidebar() {
    return (
        <div className={cx('sidebar')}>
            <SidebarLeft />
            <SidebarRight />
        </div>
    )
}
