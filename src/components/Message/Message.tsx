import classNames from 'classnames/bind'
import { memo } from 'react'

import MessagesStyle from './Message.module.scss'
import Header from './Header'
import Content from './Content'
import Sticker from './Sticker'
import Footer from './Footer'
import { useAppSelector } from '@/hooks/redux'
import HeaderGroup from './HeaderGroup'
import InformationProfile from '../InfomationProfile/InformationProfile'
import { BoxModal } from '..'
// import { Room, User } from '@/objects'

const cx = classNames.bind(MessagesStyle)

const Messages = memo(() => {
    const roomData = useAppSelector((state) => state.message.room)
    const { informationProfile } = useAppSelector((state) => state.toggle)
    const isSticker = useAppSelector((state) => state.toggle.sticker)

    return (
        <div className={cx('messages', isSticker ? 'sticker' : '')}>
            {roomData?.roomName ? (
                <HeaderGroup
                    roomId={roomData?.id}
                    avatarGroup={roomData?.groupAvatar}
                    description={roomData?.description}
                    roomName={roomData?.roomName}
                    users={roomData?.users}
                />
            ) : (
                <Header roomId={roomData?.id} />
            )}

            <Content />
            {isSticker && <Sticker />}
            <Footer />

            {informationProfile && (
                <BoxModal
                    className={cx('wrapper')}
                    bottom={0}
                    right={0}
                    top={0}
                    width={'calc(100vw / 4)'}
                    children={<InformationProfile />}
                />
            )}
        </div>
    )
})

export default Messages
