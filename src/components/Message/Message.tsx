import classNames from 'classnames/bind'
import { memo } from 'react'

import MessagesStyle from './Message.module.scss'
import Header from './Header'
import Content from './Content'
import Sticker from './Sticker'
import Footer from './Footer'
import { useAppSelector } from '@/hooks/redux'
import HeaderGroup from './HeaderGroup'
// import { Room, User } from '@/objects'

const cx = classNames.bind(MessagesStyle)

const Messages = memo(() => {
    const messageData = useAppSelector((state) => state.message.room)

    return !messageData ? (
        <div>
            {/* 
                Khung hiển thị mặc định
            */}
        </div>
    ) : (
        <div className={cx('messages')}>
            {messageData.roomName ? (
                <HeaderGroup
                    avatarGroup={messageData.groupAvatar}
                    description={messageData.description}
                    roomName={messageData.roomName}
                    users={messageData.users}
                />
            ) : (
                <Header />
            )}

            <Content />
            <Sticker />
            <Footer />
        </div>
    )
})

export default Messages
