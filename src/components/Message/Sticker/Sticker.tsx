import classNames from 'classnames/bind'
import { memo } from 'react'

import StickerStyle from './Sticker.module.scss'

const cx = classNames.bind(StickerStyle)

const Sticker = memo(() => {
    return <div className={cx('sticker')}>Sticker</div>
})

export default Sticker
