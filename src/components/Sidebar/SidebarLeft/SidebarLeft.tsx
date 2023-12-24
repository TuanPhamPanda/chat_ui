import classNames from 'classnames/bind'
import { MouseEvent, useCallback, useState } from 'react'

import SidebarLeftStyle from './SidebarLeft.module.scss'
import logo from '@/assets/logo.png'
import icons from '@/utils/icons'
import { BoxModal } from '@/components'
import { useAppSelector, useAppDispatch } from '@/hooks/redux'
import { setThemeDark, setThemeLight } from '@/redux/reducers/ThemeReducer'
import { logout } from '@/redux/reducers/UserReducer'

const cx = classNames.bind(SidebarLeftStyle)

export default function SidebarLeft() {
    const [isBoxModal, setIsBoxModal] = useState(false)

    const { MdDarkMode, MdLightMode, CiLogout } = icons
    const dispatch = useAppDispatch()

    const { theme } = useAppSelector((state) => state.theme)
    const { user } = useAppSelector((state) => state.user)

    const handleChangeTheme = useCallback(() => {
        if (theme === 'dark') {
            dispatch(setThemeLight())
        } else {
            dispatch(setThemeDark())
        }
    }, [theme, dispatch])

    const handleShowBoxModal = useCallback((e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        const className = (e.target as HTMLElement).classList
        if (className.value.includes('avatar') || className.value.includes('profile')) {
            setIsBoxModal((prevState) => !prevState)
        }
    }, [])

    const handleLogout = useCallback(() => {
        dispatch(logout())
    }, [dispatch])

    console.log(user?.$picture)

    return (
        <div className={cx('sidebar-left')}>
            <div className={cx('sidebar-left__top')}>{<img src={`${logo}`} alt='logo' />}</div>
            <div className={cx('sidebar-left__center')}>
                {
                    //list room cua user
                }
            </div>
            <div className={cx('sidebar-left__bottom')}>
                {/* Change theme */}
                <div
                    className={cx(
                        'sidebar-left__bottom__theme',
                        theme ? cx('sidebar-left__bottom__theme-light') : cx('sidebar-left__bottom__theme-dark')
                    )}
                >
                    <i onClick={handleChangeTheme}>{theme ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}</i>
                </div>

                <div onClick={handleShowBoxModal} className={cx('profile')}>
                    <img className='avatar' src={`${user?.$picture}`} alt='' />
                    {isBoxModal ? (
                        <BoxModal top={-36} right={-108}>
                            <div className={cx('box-nodal__box', theme ? 'light' : 'dark')}>
                                <button className={`${cx('box-nodal__box__logout')}`}>
                                    <i className='box-nodal__box__icon'>
                                        <CiLogout size={24} />
                                    </i>
                                    <span onClick={handleLogout} className='box-nodal__box__title'>
                                        Logout
                                    </span>
                                </button>
                            </div>
                        </BoxModal>
                    ) : null}
                </div>
            </div>
        </div>
    )
}
