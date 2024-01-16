import classNames from 'classnames/bind'
import { memo } from 'react'

import MessageStyle from './Message.module.scss'
import PreviewFile from './PreviewFile'
import { Message as MessageObject } from '@/objects'
// import { useAppSelector } from '@/hooks/redux'

const cx = classNames.bind(MessageStyle)

interface MessageProps {
    message: MessageObject
}

const Message: React.FC<MessageProps> = memo(({ message }: MessageProps) => {
    // const user = useAppSelector((state) => state.user.user)

    return (
        <div className={cx('message')}>
            {message.type === 'file' ? <PreviewFile fileUrl={message.content} fileName={message.fileName!} fileSize={message.fileSize!}  /> : <div>{message.content}</div>}

            {/* {message.user.id === user?.id ? (
                // user
                <div className={cx('message__me')}></div>
            ) : (
                //thanh vien trong group
                <div className='message__member'></div>
            )} */}
        </div>
    )
})

export default Message
