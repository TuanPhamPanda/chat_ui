import classNames from 'classnames/bind'
import { memo } from 'react'
import styles from './Setting.module.scss'

const cx = classNames.bind(styles)

interface SettingProps {
    icon: JSX.Element
    title: string
    description?: string
    onClick: () => void
}

const Setting = memo(({ icon, title, description, onClick }: SettingProps) => {
    return (
        <div onClick={onClick} className={cx('setting')}>
            <i className={cx('setting__icon')}>{icon}</i>
            <div>
                <span className={cx('setting__title')}>{title}</span>
                {description && <span className={cx('setting__description')}>{description}</span>}
            </div>
        </div>
    )
})

export default Setting
