import { memo } from 'react'
import classNames from 'classnames/bind'

import UserItemStyle from './UserItem.module.scss'
const cx = classNames.bind(UserItemStyle)

interface UserItemProps {}

const UserItem: React.FC<UserItemProps> = memo(({}: UserItemProps) => {
    return <div className={cx('user-item')}></div>
})

export default UserItem
