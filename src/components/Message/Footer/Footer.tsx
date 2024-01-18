import classNames from 'classnames/bind'
import FooterStyle from './Footer.module.scss'
import icons from '@/utils/icons'
import { ChangeEvent, memo, useCallback, useState } from 'react'
import { useAppDispatch } from '@/hooks/redux'
import { toggleSticker } from '@/redux/reducers'

const cx = classNames.bind(FooterStyle)

const Footer = memo(() => {
    /*
        store redux:
            sticker: boolean
            microphone: boolean
            online: boolean
    */

    const dispatch = useAppDispatch()
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

    const handleToggleSticker = useCallback(() => {
        dispatch(toggleSticker())
    }, [])

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
            <div className={cx('footer__sticker')} onClick={handleToggleSticker}>
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
})

export default Footer
