import classNames from 'classnames/bind'
import { ReactNode, memo } from 'react'

import BoxModalStyle from './BoxModal.module.scss'

const cx = classNames.bind(BoxModalStyle)

interface BoxModalProps {
    children: ReactNode
    top?: number
    right?: number
    left?: number
    bottom?: number
    width?: number
    height?: number
}

const BoxModal: React.FC<BoxModalProps> = memo(
    ({ children, bottom, left, right, top, width, height }: BoxModalProps) => {
        return (
            <div
                style={{
                    top: `${top}px`,
                    right: `${right}px`,
                    left: `${left}px`,
                    bottom: `${bottom}px`,
                    width: `${width}px`,
                    height: `${height}px`
                }}
                className={cx('box-modal')}
            >
                {children}
            </div>
        )
    }
)

export default BoxModal