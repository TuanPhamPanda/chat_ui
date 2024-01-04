import { Room } from '@/objects'
import MessageItemStyle from './MessageItem.module.scss'
import classNames from 'classnames/bind'

// interface IMessageItemProps {
//     index: number
// }

const cx = classNames.bind(MessageItemStyle)

interface IMessageItemProps {
    room: Room
}

export default function MessageItem({ room }: IMessageItemProps) {
    return (
        <div className={cx('message-item')}>
            <div className={cx('message-item__avatar')}>
                <img className='avatar' src='https://picsum.photos/400/400' alt='avatar' />
            </div>
            <div
                className={cx('message-item__info-name__info-latest-message')}
                onClick={() => {
                    console.log('Click message item')
                }}
            >
                <div className={cx('message-item__info-name')}>
                    <h4>Priya sharma </h4>
                </div>
                <div className={cx('message-item__info-latest-message')}>
                    <h4>Sticker</h4>
                </div>
            </div>
            <div className={cx('message-item__info-timing-message__info-notification')}>
                <div className={cx('message-item__info-notification')}>
                    <h6>16 giờ</h6>
                </div>
                <div className={cx('message-item__info-timing-message')}>
                    <h6>5+</h6>
                </div>
            </div>
        </div>
    )
}
