import classNames from 'classnames/bind'

import MessagesStyle from './Message.module.scss'
import Header from './Header'
import Content from './Content'
import Sticker from './Sticker'
import Footer from './Footer'

const cx = classNames.bind(MessagesStyle)

export default function Messages() {
    return (
        <div className={cx('messages')}>
            <Header />
            <Content />
            <Sticker />
            <Footer />
        </div>
    )
}
