import classNames from 'classnames/bind'

import HeaderStyle from './Header.module.scss'
import icons from '@/utils/icons'
import { memo } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { toggleProfile } from '@/redux/reducers'

const cx = classNames.bind(HeaderStyle)

interface HeaderProps {
    roomId?: string
}

const Header = memo(({ roomId }: HeaderProps) => {
    //search
    //if(type phong=> )
    //image
    //active online
    //list message to date from latest to current
    //display name
    //search message
    //camera call
    //voice call
    //profile user

    const { IoCall, IoVideocamSharp, FaSearch, HiDotsVertical } = icons
    const { informationProfile } = useAppSelector((state) => state.toggle)
    const dispatch = useAppDispatch()

    return (
        <div className={cx('header')}>
            <div className={cx('header__left')}>
                <div className={cx('header__left__avatar')}>
                    <img src='https://picsum.photos/200' alt='avatar' />
                </div>
                <div>
                    <div className={cx('header__left__display-name')}>
                        <h4>Bella Hulman</h4>
                    </div>
                    <div className={cx('header__left__status')}>
                        <span>Online</span>
                    </div>
                </div>
            </div>
            <div className={cx('header__right')}>
                <button className={cx("'header__right__voice-call'")}>
                    <IoCall size={18} />
                </button>
                <button className={cx('header__right__video-call')}>
                    <IoVideocamSharp size={18} />
                </button>
                <button className={cx('header__right__search')}>
                    <FaSearch size={18} />
                </button>
                <button
                    onClick={() => {
                        if (!informationProfile) {
                            const informationData = { idRoom: roomId!, isGroup: false }
                            dispatch(toggleProfile(informationData))
                            return
                        }
                        dispatch(toggleProfile(null))
                    }}
                    className={cx('header__right__other')}
                >
                    <HiDotsVertical size={18} />
                </button>
            </div>
        </div>
    )
})

export default Header
