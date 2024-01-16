import { memo } from 'react'
import classNames from 'classnames/bind'
import ListUserStyle from './ListUser.module.scss'
// import { reduxHook } from '@/hooks'
// import { getAllUsersThunk } from '@/redux/reducers'

//const { useAppDispatch, useAppSelector } = reduxHook

const cx = classNames.bind(ListUserStyle)

interface ListUserProps {}

const ListUser: React.FC<ListUserProps> = memo(({}: ListUserProps) => {
    // const dispatch = useAppDispatch()

    // const users = useAppSelector((state) => state.user.users)

    // useEffect(() => {
    //     dispatch(getAllUsersThunk())
    // }, [dispatch])

    return <div className={cx('list-user')}>ListUser</div>
})

export default ListUser
