import classNames from 'classnames/bind'
import { toast } from 'react-toastify'
import { memo } from 'react'

import SearchStyle from './Search.module.scss'
import icons from '@/utils/icons'

const cx = classNames.bind(SearchStyle)

const Search = memo(() => {
    const { FaSearch } = icons

    return (
        <div className={cx('search')}>
            <input type='text' placeholder='Search message...' />
            <button onClick={() => toast('Wow so easy!')} className={cx('btn')}>
                <FaSearch color='white' size={24} />
            </button>
        </div>
    )
})

export default Search
