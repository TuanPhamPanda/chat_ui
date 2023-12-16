import classNames from 'classnames/bind'

import StickerStyle from './Sticker.module.scss'

const cx = classNames.bind(StickerStyle)

export default function Sticker() {
    return <div className={cx('sticker')}>Sticker</div>
}
