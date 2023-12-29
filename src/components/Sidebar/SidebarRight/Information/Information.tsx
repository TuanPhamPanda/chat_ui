import classNames from 'classnames/bind'
import { ChangeEvent, useCallback, useState } from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'

import icons from '@/utils/icons'
import InformationStyle from './Information.module.scss'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'

const cx = classNames.bind(InformationStyle)

export default function Information() {
    const dispatch = useAppDispatch()
    const themeSelector = useAppSelector((state) => state.theme)
    const userSelector = useAppSelector((state) => state.user)
    const [open, setOpen] = useState(true)
    const [roomName, setRoomName] = useState('')

    const { HiPlus } = icons

    const handleOpenModal = useCallback(() => {
        setOpen(true)
    }, [])

    const handleCloseModal = useCallback(() => {
        setOpen(false)
        setRoomName('')
    }, [])

    const handleChangeInputRoomName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setRoomName(event.target.value)
    }, [])

    const handleCreateRoom = useCallback(() => {
        console.log(roomName)
    }, [roomName])

    return (
        <header className={cx('information')}>
            <div className={cx('info')}>
                <div className={cx('profile')}>
                    <h4>Welcome,</h4>
                    <span>{userSelector.user?.$name}</span>
                </div>

                <div className={cx('icons')}>
                    <button onClick={handleOpenModal} className={`${cx('icons__add-room', themeSelector.theme)}`}>
                        <HiPlus size={30} />
                    </button>
                </div>
            </div>

            <Modal center open={open} onClose={handleCloseModal}>
                <div className={cx('__modal-create-room')}>
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
                    <div className={cx('__modal-create-room__button')}>
                        <button onClick={handleCreateRoom}>Create</button>
                    </div>
                </div>
            </Modal>
        </header>
    )
}
