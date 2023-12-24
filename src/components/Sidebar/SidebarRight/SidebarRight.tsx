import classNames from 'classnames/bind'
import SidebarRightStyle from './SidebarRight.module.scss'
import Information from './Information'
import Search from './Search'
import ListMessage from './ListMessage'

const cx = classNames.bind(SidebarRightStyle)

export default function SidebarRight() {
    return (
        <div className={cx('sidebar-right')}>
            <div>
                <Information />
                <Search />
            </div>
            <ListMessage />
        </div>
    )
}
