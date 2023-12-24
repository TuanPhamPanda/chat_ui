import classNames from 'classnames/bind'

import icons from '@/utils/icons'
import InformationStyle from './Information.module.scss'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'

const cx = classNames.bind(InformationStyle)

export default function Information() {
    //Header
    //nút ẩn sidebar
    //show more
    //Change theme
    //Profile info
    //Avatar
    //Name full
    //Create room chat
    const dispatch = useAppDispatch()
    const themeSelector = useAppSelector((state) => state.theme)
    const userSelector = useAppSelector((state) => state.user)

    const { HiPlus } = icons

    // const [theme, setTheme] = useState(false)
    /*
    //hover three dots:
                <div className={cx('create-room')}>
                <button>Create room</button>
            </div>
            */

    return (
        <header className={cx('information')}>
            <div className={cx('info')}>
                <div className={cx('profile')}>
                    <h4>Welcome,</h4>
                    <span>{userSelector.user?.$name}</span>
                </div>

                <div className={cx('icons')}>
                    {/* <i className={cx('arrow-left')}>
                        <FaArrowLeft size={30} />
                    </i> */}
                    <button className={`${cx('icons__add-room', themeSelector.theme)}`}>
                        <HiPlus size={30} />
                    </button>
                </div>
            </div>
        </header>
    )
}
