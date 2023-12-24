import classNames from 'classnames/bind'
import FooterStyle from './Footer.module.scss'
import icons from '@/utils/icons'
import { ChangeEvent, useCallback, useState } from 'react'

const cx = classNames.bind(FooterStyle)

export default function Footer() {
    /*
        store redux:
            sticker: boolean
            microphone: boolean
            online: boolean
    */

    const { RiAttachment2, PiSmileySticker, FaMicrophone, IoSendSharp } = icons
    const [message, setMessage] = useState<File | string | undefined>()

    const handleChooseFile = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        try {
            if (e.target.files) {
                setMessage(e.target.files[0])
            }
        } catch (error) {
            console.log(error)
        }
    }, [])

    const handleMessage = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (typeof message === 'object') {
                setMessage('')
            } else {
                setMessage(e.target.value)
            }
        },
        [message]
    )

    return (
        <div className={cx('footer')}>
            <div className={cx('footer__file')}>
                <label htmlFor='file'>
                    <i>
                        <input type='file' id='file' onChange={handleChooseFile} hidden />
                        <RiAttachment2 size={20} />
                    </i>
                </label>
            </div>
            <div className={cx('footer__input')}>
                <input
                    onChange={(e) => handleMessage(e)}
                    value={message === undefined ? '' : typeof message === 'string' ? message : message.name}
                    placeholder='Write message...'
                />
            </div>
            <div className={cx('footer__sticker')}>
                <i>
                    <PiSmileySticker size={20} />
                </i>
            </div>
            <div className={cx('footer__microphone')}>
                <i>
                    <FaMicrophone size={20} />
                </i>
            </div>
            <div className={cx('footer__send-message')}>
                <i>
                    <IoSendSharp size={20} />
                </i>
            </div>
        </div>
    )
}
