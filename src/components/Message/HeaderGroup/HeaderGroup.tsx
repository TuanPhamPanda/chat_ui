import classNames from 'classnames/bind'
import HeaderGroupStyle from './HeaderGroup.module.scss'
import icons from '@/utils/icons'
import { User } from '@/objects'
import { memo, useCallback, useState } from 'react'

const cx = classNames.bind(HeaderGroupStyle)

interface HeaderGroupStyle {
    users: User[]
    roomName: string
    description: string
    avatarGroup: string
}

const HeaderGroup = memo(({ users, roomName, description, avatarGroup }: HeaderGroupStyle) => {
    const { TbUserPlus } = icons
    const [lengthImage] = useState(3)
    const handleInvite = useCallback(() => {
        console.log('show mời')
    }, [])

    return (
        <div className={cx('header')}>
            <div className={cx('header__left')}>
                <div className='header__left__avatar-group'>
                    <img src={!avatarGroup ? 'https://picsum.photos/200/200' : avatarGroup} alt='avatar-group' />
                </div>
                <div className={cx('header__left__name-description-group')}>
                    <div className={cx('header__left__name-description-group__name-group')}>
                        <span>{roomName}</span>
                    </div>
                    <div className={cx('header__left__name-description-group__description-group')}>
                        <span>{description}</span>
                    </div>
                </div>
            </div>
            <div style={users.length > 3 ? {} : { gap: '8px', paddingRight: '12px' }} className={cx('header__right')}>
                <div onClick={handleInvite} className={cx('header__right__invite')}>
                    <TbUserPlus size={24} />
                    <span>Mời</span>
                </div>
                <div className={cx('header__right__users-in-room')}>
                    <div className={cx('header__right__users-in-room__avatars')}>
                        {users.slice(0, lengthImage).map((u, index) => (
                            <img key={u.id + index} src={u.picture} />
                        ))}
                    </div>
                    <div className={cx('header__right__users-in-room__length-avatar')}>
                        {users.length > 3 && (
                            <span
                                style={
                                    users.length > 50
                                        ? { paddingLeft: '12px', paddingRight: '12px' }
                                        : { paddingLeft: '4px', paddingRight: '4px' }
                                }
                            >
                                +{users.length - 3}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
})

export default HeaderGroup
