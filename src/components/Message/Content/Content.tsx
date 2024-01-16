import { memo, useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import { Scrollbars } from 'react-custom-scrollbars-2'

import ContentStyle from './Content.module.scss'
import { useAppSelector } from '@/hooks/redux'
import Message from './Message'
import { Message as MessageObject } from '@/objects'
import { messageApi } from '@/apis/v1'

const cx = classNames.bind(ContentStyle)

const Content = memo(() => {
    const roomId = useAppSelector((state) => state.message.room?.id)
    const user = useAppSelector((state) => state.user.user)
    const [messages, setMessages] = useState<MessageObject[]>([])
    const scrollbarsRef = useRef<Scrollbars>(null)

    useEffect(() => {
        if (roomId) {
            const fetchData = async () => {
                const response = (await messageApi.getAllMessageByIdRoom(roomId)) as {
                    err: 1 | 0
                    messages: MessageObject[]
                }
                setMessages(response.messages)
            }
            fetchData()
        }
    }, [roomId])

    useEffect(() => {
        setTimeout(() => {
            if (scrollbarsRef.current) {
                scrollbarsRef.current.scrollToBottom()
            }
        }, 0)
    }, [messages, scrollbarsRef])

    return (
        <Scrollbars
            style={{ width: '100%', height: '100%' }}
            ref={scrollbarsRef}
            autoHideTimeout={1000}
            autoHideDuration={200}
            className='scrollbar'
            thumbMinSize={12}
            universal
            autoHide
        >
            <div className={cx('content')}>
                {messages?.map((message) => (
                    <div
                        key={message.id}
                        className={cx(`content__message-${user?.id !== message.user.id ? 'left' : 'right'}`)}
                    >
                        <Message message={message} />
                    </div>
                ))}
            </div>
        </Scrollbars>
    )
})

export default Content
