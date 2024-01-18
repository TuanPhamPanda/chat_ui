import { Room } from '@/objects'
import MessageItemStyle from './MessageItem.module.scss'
import classNames from 'classnames/bind'
import { useAppSelector, useAppDispatch } from '@/hooks/redux'
import { memo, useCallback, useState } from 'react'
import icons from '@/utils/icons'
import { setRoomMessage, toggleProfile } from '@/redux/reducers'

const cx = classNames.bind(MessageItemStyle)

interface IMessageItemProps {
    room: Room
}

const MessageItem = memo(({ room }: IMessageItemProps) => {
    const dispatch = useAppDispatch()

    const user = useAppSelector((state) => state.user.user)
    const theme = useAppSelector((state) => state.toggle.theme)
    const informationProfile = useAppSelector((state) => state.toggle.informationProfile)

    const [isShowOption, setIsShowOption] = useState(false)
    const { SlOptions } = icons
    const handleShowOption = useCallback(() => {
        // setIsShowOption(true)
    }, [])

    const handleHideOption = useCallback(() => {
        setIsShowOption(false)
    }, [])

    const handleMessageItem = useCallback(() => {
        dispatch(setRoomMessage({ room }))
        if (informationProfile) {
            dispatch(toggleProfile({ idRoom: room.id, isGroup: !!room.roomName }))
        }
    }, [room, dispatch, informationProfile])

    return (
        <div onClick={handleMessageItem} className={cx('message-item')}>
            <div className={cx('message-item__avatar')}>
                {room.roomName ? (
                    room.groupAvatar ? (
                        <img src={room.groupAvatar} alt='picture' />
                    ) : (
                        <div
                            style={
                                room.users.length === 1
                                    ? { gridTemplate: 'repeat(1,1fr)/repeat(1, 1fr)', padding: '8px' }
                                    : room.users.length === 2
                                    ? {
                                          gridTemplate: 'repeat(1,1fr)/repeat(2, 1fr)'
                                      }
                                    : {}
                            }
                            className={cx('message-item__avatar__list-avatar')}
                        >
                            {room.users.length <= 4 &&
                                room.users.map((u, index) => {
                                    return <img key={u.id + '-' + (index + 1)} src={u.picture} alt='avatar' />
                                })}
                            {room.users.length > 4 && (
                                <>
                                    <img src={room.users[0].picture} alt='avatar' />
                                    <img src={room.users[1].picture} alt='avatar' />
                                    <img src={room.users[2].picture} alt='avatar' />
                                    <span
                                        style={
                                            theme === 'light' ? { backgroundColor: '#ccc', borderRadius: '50%' } : {}
                                        }
                                    >
                                        {room.users.length - 3}
                                    </span>
                                </>
                            )}
                        </div>
                    )
                ) : room.messages.length === 0 ? (
                    <img src={room.users[1].picture} alt='picture' />
                ) : (
                    <img src={room.messages[0].user.picture} alt='picture' />
                )}
            </div>

            <div className={cx('message-item__info-name__info-latest-message')}>
                <div className={cx('message-item__info-name')}>
                    <h4>{room.users.length === 2 && !room.roomName ? room.messages[0]?.user.name : room.roomName}</h4>
                </div>
                <div className={cx('message-item__info-latest-message')}>
                    <h5>
                        {/* 
                            - sticker, file, 
                            - room.users.length === 2 && !room.roomName => 
                        */}
                        {room.users.length === 2 && !room.roomName && room.messages.length === 0
                            ? 'Hãy bắt đầu chia sẻ những câu chuyện thú vị cùng nhau ngay...'
                            : room.messages.length === 0 && room.users.length === 1
                            ? 'Hãy thêm thành viên để bắt đầu chia sẻ những câu chuyện thú vị cùng nhau...'
                            : room.messages.length === 0 && room.users.length > 1
                            ? 'Bắt đầu chia sẻ những câu chuyện thú vị cùng nhau...'
                            : room.messages[0].type === 'message'
                            ? `${room.messages[0].user.id === user?.id ? 'Bạn' : room.messages[0].user.name} : ${
                                  room.messages[0].content
                              }`
                            : ''}
                    </h5>
                </div>
            </div>
            {/* 
                - Nêu message mới nhất quá 7 ngày thì hiển thị ngày/ tháng/ năm. VD: 31/12/23
                - Nếu chưa hết 1 ngày -> cách bao nhiêu giờ. VD: 21 giờ
                - Nếu chưa hết 2 ngày -> hiển thị hôm qua.
                - Nếu chưa hết 7 ngày -> Số ngày cách tin nhắn mới nhất. VD: 2, 3,4, 5, 6, 7 ngày
                - Nếu chưa qua 1 giờ && > 2 phút -> cách bao nhiêu phút. VD: 30 phút.
                - Nếu chưa qua 2 phút -> Vài giây
            */}
            <div className={cx('message-item__info-timing-message__info-notification')}>
                <div
                    onMouseOut={handleHideOption}
                    onMouseMove={handleShowOption}
                    className={cx('message-item__info-timing-message')}
                >
                    {isShowOption ? (
                        <div className={cx('message-item__info-timing-message__info-notification__option')}>
                            <SlOptions width={12} height={20} />
                        </div>
                    ) : (
                        <h6>16 giờ</h6>
                    )}
                </div>
                <div className={cx('message-item__info-notification')}>
                    <h6>5+</h6>
                </div>
            </div>
        </div>
    )
})

export default MessageItem
