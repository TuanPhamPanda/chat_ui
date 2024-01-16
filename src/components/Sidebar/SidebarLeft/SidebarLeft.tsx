import classNames from 'classnames/bind'
import { MouseEvent, memo, useCallback, useState } from 'react'

import SidebarLeftStyle from './SidebarLeft.module.scss'
import logo from '@/assets/logo.png'
import icons from '@/utils/icons'
import { BoxModal } from '@/components'
import { useAppSelector, useAppDispatch } from '@/hooks/redux'
import { logout } from '@/redux/reducers/UserReducer'
import { setTheme } from '@/redux/reducers'

const cx = classNames.bind(SidebarLeftStyle)

const SidebarLeft = memo(() => {
    const [isBoxModal, setIsBoxModal] = useState(false)

    const { MdDarkMode, MdLightMode, CiLogout } = icons
    const dispatch = useAppDispatch()

    const { theme } = useAppSelector((state) => state.theme)
    const { user } = useAppSelector((state) => state.user)

    const handleChangeTheme = useCallback(() => {
        dispatch(setTheme())

        if (theme === 'dark') {
            localStorage.setItem('theme', JSON.stringify(false))

            const allElement = document.querySelector('*')
            if (allElement) {
                if (allElement.classList.contains('dark')) {
                    allElement.classList.remove('dark')
                }
                allElement.classList.add('light')
            }
        } else {
            localStorage.setItem('theme', JSON.stringify(true))
            const allElement = document.querySelector('*')
            if (allElement) {
                if (allElement.classList.contains('light')) {
                    allElement.classList.remove('light')
                }
                allElement.classList.add('dark')
            }
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
                    onClick={handleChangeTheme}
                    className={cx(
                        'sidebar-left__bottom__theme',
                        theme === 'light'
                            ? cx('sidebar-left__bottom__theme-light')
                            : cx('sidebar-left__bottom__theme-dark')
                    )}
                >
                    <i>{theme === 'light' ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}</i>
                </div>

                <div onClick={handleShowBoxModal} className={cx('profile')}>
                    <img className='avatar' src={`${user?.picture}`} alt='' />
                    {isBoxModal ? (
                        <BoxModal top={-36} right={-108}>
                            <div className={cx('box-nodal__box', theme ? 'light' : 'dark')}>
                                <button onClick={handleLogout} className={`${cx('box-nodal__box__logout')}`}>
                                    <i className='box-nodal__box__icon'>
                                        <CiLogout size={24} />
                                    </i>
                                    <span className='box-nodal__box__title'>Logout</span>
                                </button>
                            </div>
                        </BoxModal>
                    ) : null}
                </div>
            </div>
        </div>
    )
})

export default SidebarLeft
