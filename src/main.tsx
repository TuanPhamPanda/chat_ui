import ReactDOM from 'react-dom/client'
import App from './App.tsx'

/* redux */
import { Provider } from 'react-redux'
import store from './redux/stores'

/* css global */
import './index.css'

/* toastify component & css */
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <Provider store={store}>
            <App />
        </Provider>
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
