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
    width?: number | string
    height?: number
    className?: string
}

const BoxModal: React.FC<BoxModalProps> = memo(
    ({ children, bottom, left, right, top, width, height, className }: BoxModalProps) => {
        return (
            <div
                style={{
                    top: `${top}px`,
                    right: `${right}px`,
                    left: `${left}px`,
                    bottom: `${bottom}px`,
                    width: typeof width === 'number' ? `${width}px` : `${width}`,
                    height: `${height}px`
                }}
                className={`${cx('box-modal')} ${className}`}
            >
                {children}
            </div>
        )
    }
)

export default BoxModal
