import ListUserStyle from './ListUser.module.scss'
// import { useEffect } from 'react'
// import { reduxHook } from '@/hooks'
// import { getAllUsersThunk } from '@/redux/reducers'

//const { useAppDispatch, useAppSelector } = reduxHook

export default function ListUser() {
    // const dispatch = useAppDispatch()

    // const users = useAppSelector((state) => state.user.users)

    // useEffect(() => {        
    //     dispatch(getAllUsersThunk())
    // }, [dispatch])

    return <div className={ListUserStyle['list-user']}>ListUser</div>
}
