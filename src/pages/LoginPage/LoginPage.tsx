import { memo, useCallback, useEffect } from 'react'
import classNames from 'classnames/bind'

import LoginPageStyle from './LoginPage.module.scss'
import { useAppDispatch } from '@/hooks/redux'
import loginImage from '@/assets/Vector 1.png'
import image1 from '@/assets/snapedit_1703358571115.png'
import { CredentialResponse, GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { login } from '@/redux/reducers/UserReducer'
import { apiVersion1 } from '@/apis'
import { User } from '@/objects'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '@/hooks/redux'

const cx = classNames.bind(LoginPageStyle)

const Login = memo(() => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const userState = useAppSelector((state) => state.user.user)

    const handleLogin = useCallback(
        async (response: CredentialResponse) => {
            const credential = response.credential
            if (credential) {
                const decode = jwtDecode(credential)
                //lưu vô Redux Persist

                const response = await apiVersion1.userApi.signInGoogle(decode)
                if (!response.err) {
                    const user = new User(
                        response.user.id,
                        response.user.name,
                        response.user.picture,
                        response.user.familyName,
                        response.user.givenName
                    )

                    dispatch(login({ user: user }))
                    navigate('/')
                }
            }
        },
        [dispatch, navigate]
    )

    useEffect(() => {
        if (userState) {
            navigate('/')
        }
    }, [userState, navigate])

    return (
        <div className={`${cx('login-page')}`}>
            <div className={cx('login-page__left')}>
                <img className={cx('login-page__left__img')} src={loginImage} alt='login-page' />
                <div className={cx('login-page__left__absolute', 'login-page__left__absolute__img')}>
                    <img src={image1} alt='' />
                </div>
                <div className={cx('login-page__left__absolute')}>
                    <span className={cx('login-page__left__absolute__title')}>Welcome back!</span>
                    <span className={cx('login-page__left__absolute__description')}>Glad to see you, Again!</span>
                </div>
            </div>
            <div className={cx('login-page__right')}>
                <div className={cx('login-page__right__wrapper')}>
                    <div className={cx('login-page__right__wrapper__title')}>
                        <span>Login to your account</span>
                    </div>
                    <div className={cx('login-page__right__wrapper__google')}>
                        {/* icon google */}
                        <GoogleOAuthProvider clientId={`${import.meta.env.VITE_API_CLIENT_ID_GOOGLE}`}>
                            <GoogleLogin text='signin_with' locale='en' onSuccess={handleLogin} />
                        </GoogleOAuthProvider>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Login
