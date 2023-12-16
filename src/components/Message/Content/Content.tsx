import classNames from 'classnames/bind'

import ContentStyle from './Content.module.scss'

const cx = classNames.bind(ContentStyle)

export default function Content() {
    return <div className={cx('content')}>Content</div>
}
