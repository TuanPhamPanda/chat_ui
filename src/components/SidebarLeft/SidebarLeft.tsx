import classNames from 'classnames/bind'
import SidebarLeftStyle from './SidebarLeft.module.scss'
import ListMessage from './ListMessage'
import Information from './Information'
import Search from './ListMessage/Search'
import TabList from './ListMessage/TabList'

const cx = classNames.bind(SidebarLeftStyle)

export default function SidebarLeft() {
    return (
        <div className={cx('sidebar-left')}>
            <div>
                <Information />
                <Search />
                <TabList />
            </div>
            <ListMessage />
        </div>
    )
}
