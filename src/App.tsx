import { ToastContainer } from 'react-toastify'
import classNames from 'classnames/bind'
import 'react-toastify/dist/ReactToastify.css';

import AppStyle from './App.module.scss'
import { ListUser, Message } from './components'
import SidebarLeft from './components/SidebarLeft'

const cx = classNames.bind(AppStyle)

function App() {
    /*
    - chia 3 columns: 
    + messages list
    + message: default white, change image list background
    
    + list user
  */

    return (
        <>

            <div className={cx('app')}>
                <SidebarLeft />
                <Message />
                <ListUser />
            </div>
            {
                //box modal
                //toastify
                //
            }
            <ToastContainer
                position='top-right'
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
        </>
    )
}

export default App
