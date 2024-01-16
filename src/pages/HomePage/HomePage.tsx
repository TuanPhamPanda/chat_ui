import classNames from 'classnames/bind'
import { useNavigate } from 'react-router-dom'
import { memo, useEffect } from 'react'

import HomePageStyle from './HomePage.module.scss'
import { ListUser, Message } from '@/components'
import { Sidebar } from '@/components'
import { useAppSelector } from '@/hooks/redux'

const cx = classNames.bind(HomePageStyle)

const HomePage = memo(() => {
    /*
    - chia 3 columns: 
    + messages list
    + message: default white, change image list background
    
    + list user
  */

    // const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.user.user)
    const navigate = useNavigate()

    useEffect(() => {
        const userLocalStorageString = localStorage.getItem('user')
        if (!userLocalStorageString) {
            navigate('/login')
        }
    }, [navigate, user])

    return (
        <>
            <div className={cx('home-page')}>
                <Sidebar />
                <Message />
                <ListUser />
            </div>
        </>
    )
})

export default HomePage
