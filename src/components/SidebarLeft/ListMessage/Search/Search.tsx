import classNames from 'classnames/bind'
import { toast } from 'react-toastify'

import SearchStyle from './Search.module.scss'
import icons from '@/utils/icons'

const cx = classNames.bind(SearchStyle)

export default function Search() {
    const { FaSearch } = icons

    return (
        <div className={cx('search')}>
            <input type='text' placeholder='Search message...' />
            <button onClick={() => toast('Wow so easy!')} className={cx('btn')}>
                <FaSearch color='white' size={24} />
            </button>
        </div>
    )
}
