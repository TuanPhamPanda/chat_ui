import classNames from 'classnames/bind'
import { useState, useCallback } from 'react'

import TabListStyle from './TabList.module.scss'

const cx = classNames.bind(TabListStyle)

export default function TabList() {
    const [tab, setTab] = useState(false)
    const handleChangeTab = useCallback(
        (tab: boolean) => {
            if (tab) {
                setTab(false)
            } else {
                setTab(true)
            }
        },
        [setTab]
    )

    return (
        <div className={cx('tab-list')}>
            <div onClick={() => handleChangeTab(true)} className={cx('tab-item', tab ? '' : 'active')}>
                <span>Message personal</span>
            </div>
            <div onClick={() => handleChangeTab(false)} className={cx('tab-item', tab ? 'active' : '')}>
                <span>Message groups</span>
            </div>
        </div>
    )
}
