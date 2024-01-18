import classNames from 'classnames/bind'
import { ChangeEvent, memo, useCallback, useState } from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import { AxiosError } from 'axios'

import icons from '@/utils/icons'
import InformationStyle from './Information.module.scss'
import { useAppSelector, useAppDispatch } from '@/hooks/redux'
import { roomApi } from '@/apis/v1'
import { Room } from '@/objects'
import { addRoom } from '@/redux/reducers'

const cx = classNames.bind(InformationStyle)

const Information = memo(() => {
    const dispatch = useAppDispatch()
    const themeSelector = useAppSelector((state) => state.toggle)
    const user = useAppSelector((state) => state.user.user)
    const [open, setOpen] = useState(false)
    const [roomName, setRoomName] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState<string | undefined>()
    const { HiPlus } = icons

    const handleOpenModal = useCallback(() => {
        setOpen(true)
    }, [])

    const handleCloseModal = useCallback(() => {
        setOpen(false)
        setRoomName('')
        setError('')
    }, [])

    const handleChangeInputRoomName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setRoomName(event.target.value)
    }, [])

    const handleChangeInputDescription = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
    }, [])

    const handleCreateRoom = useCallback(async () => {
        const userId = user?.id
        if (userId) {
            if (!roomName) {
                setError('Room name cannot be left blank. Please enter a room name.')
                return
            } else if (!description) {
                setError('Description cannot be left blank. Please enter a description.')
                return
            } else {
                try {
                    const { room } = (await roomApi.createRoom(roomName, userId, description)) as {
                        room: Room
                        err: 0 | 1
                    }
                    dispatch(addRoom({ room: room }))
                    handleCloseModal()
                } catch (err) {
                    const { response } = err as AxiosError

                    if (response?.status === 400) {
                        const errorData = response?.data as { msg: string; err: 0 | 1 }
                        setError(errorData.msg)
                    }
                }
            }
        }
    }, [roomName, user, description, dispatch, handleCloseModal])

    return (
        <header className={cx('information')}>
            <div className={cx('info')}>
                <div className={cx('profile')}>
                    <h4>Welcome,</h4>
                    <span>{user?.name}</span>
                </div>

                <div className={cx('icons')}>
                    <button onClick={handleOpenModal} className={`${cx('icons__add-room', themeSelector.theme)}`}>
                        <HiPlus size={30} />
                    </button>
                </div>
            </div>

            <Modal center open={open} onClose={handleCloseModal}>
                <div style={error ? { height: '320px' } : {}} className={cx('__modal-create-room')}>
                    <span className={cx('__modal-create-room__title')}>Create room</span>
                    <div className={cx('__modal-create-room__input')}>
                        <label htmlFor='room-name'>Room name: </label>
                        <input
                            value={roomName}
                            onChange={handleChangeInputRoomName}
                            id='room-name'
                            type='text'
                            placeholder='Enter room name...'
                        />
                    </div>
                    <div className={cx('__modal-create-room__input')}>
                        <label htmlFor='room-name'>Description: </label>
                        <input
                            value={description}
                            onChange={handleChangeInputDescription}
                            id='room-name'
                            type='text'
                            placeholder='Enter description...'
                        />
                    </div>
                    {error && (
                        <div className={cx('__modal-create-room__error')}>
                            <span>{error}</span>
                        </div>
                    )}
                    <div className={cx('__modal-create-room__button')}>
                        <button onClick={handleCreateRoom}>Create</button>
                    </div>
                </div>
            </Modal>
        </header>
    )
})

export default Information
