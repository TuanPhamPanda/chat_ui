import classNames from 'classnames/bind'
import { memo } from 'react'

import SidebarRightStyle from './SidebarRight.module.scss'
import Information from './Information'
import Search from './Search'
import ListMessage from './ListMessage'

const cx = classNames.bind(SidebarRightStyle)

const SidebarRight = memo(() => {
    return (
        <div className={cx('sidebar-right')}>
            <div>
                <Information />
                <Search />
            </div>
            <ListMessage />
        </div>
    )
})

export default SidebarRight
