import classNames from 'classnames/bind'

import icons from '@/utils/icons'
import InformationStyle from './Information.module.scss'
import { useCallback, useEffect, useState } from 'react'

const cx = classNames.bind(InformationStyle)

export default function Information() {
    //Header
    //nút ẩn sidebar
    //show more
    //Change theme
    //Profile info
    //Avatar
    //Name full
    //Create room chat
    const { FaArrowLeft, MdDarkMode, MdLightMode, HiPlus } = icons
    // const [theme, setTheme] = useState(false)
    /*
    //hover three dots:
                <div className={cx('create-room')}>
                <button>Create room</button>
            </div>
            */
    const [theme, setTheme] = useState(() => {
        // const themeSystem = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        // const themeData =
        //     localStorage.getItem('theme') === null
        //         ? themeSystem
        //         : localStorage.getItem('theme') == 'true'
        //         ? true
        //         : false
        const themeSystem = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        const themeData =
            localStorage.getItem('theme') === null ? themeSystem : localStorage.getItem('theme') === 'true'
        return themeData
    })

    useEffect(() => {
        const allElement = document.querySelector('*')
        if (allElement) {
            if (theme) {
                if (allElement.classList.contains('light')) {
                    allElement.classList.remove('light')
                }
                allElement.classList.toggle('dark')
            } else {
                if (allElement.classList.contains('dark')) {
                    allElement.classList.remove('dark')
                }
                allElement.classList.toggle('light')
            }
        }
    }, [theme])

    const handleChangeTheme = useCallback(() => {
        setTheme((prev) => {
            const nextPrevious = !prev
            localStorage.setItem('theme', JSON.stringify(nextPrevious))
            return nextPrevious
        })
    }, [])

    return (
        <header className={cx('information')}>
            <div className={cx('info')}>
                <div className={cx('profile')}>
                    <div className={cx('profile__image')}>
                        <img className='avatar' src='https://picsum.photos/400/400' alt='' />
                    </div>
                    <div className={cx('profile__name')}>
                        <h4>Phạm Anh Tuấn</h4>
                    </div>
                </div>

                <div className={cx('icons')}>
                    <i className={cx('arrow-left')}>
                        <FaArrowLeft size={30} />
                    </i>
                    <i onClick={handleChangeTheme}>{theme ? <MdDarkMode size={30} /> : <MdLightMode size={30} />}</i>
                    <button className={cx('icons__add-room', theme ? 'light' : 'dark')}>
                        <HiPlus size={30} />
                    </button>
                </div>
            </div>
        </header>
    )
}
