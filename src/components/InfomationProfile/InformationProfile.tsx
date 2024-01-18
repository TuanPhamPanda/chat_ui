import { memo, useCallback, useEffect } from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import classNames from 'classnames/bind'

import { icons } from '@/utils'
import styles from './InformationProfile.module.scss'
import Setting from './Setting'
import { useAppSelector } from '@/hooks/redux'

const cx = classNames.bind(styles)

const InformationProfile = memo(() => {
    const { informationProfile } = useAppSelector((state) => state.toggle)
    //- (group, friend):
    //Call api list video, list image, list file (limit: 3), list member, rename room, .....
    //Remove all messages
    //- (group)
    //Rename
    const handleTimeDeleteMessage = useCallback(() => {}, [])
    const handleGarbageGroupWarning = useCallback(() => {}, [])
    const handleDeleteAllMessage = useCallback(() => {}, [])
    const handleLeaveGroup = useCallback(() => {}, [])

    const { IoLogOutOutline, LuTrash, TfiAlarmClock, PiWarning, GrGroup, CiEdit } = icons

    useEffect(() => {}, [informationProfile])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <span>Thông tin {informationProfile?.isGroup ? 'nhóm' : 'hội thoại'}</span>
            </div>
            <Scrollbars
                autoHideTimeout={1000}
                autoHideDuration={200}
                className={`scrollbar ${cx('scrollbar')}`}
                thumbMinSize={12}
                universal
                autoHide
            >
                <div className={cx('info')}>
                    <img src={'https://picsum.photos/200/200'} alt='image' />
                    <div>
                        <span>{informationProfile?.isGroup ? 'Nhóm 1' : 'Thái'}</span>
                        <i>
                            <CiEdit size={30} />
                        </i>
                    </div>
                    {/* Tên group */}
                    {/* !isGroup */}
                    {/* Tên user */}
                </div>

                <div className={cx('content')}>
                    {informationProfile?.isGroup && (
                        <div className={cx('members')}>
                            {/* title: Thành viên */}
                            <span>Thành viên</span>
                            {/* Thành viên */}
                            <div>
                                <i>
                                    <GrGroup size={30} />
                                    {/*  icons nhóm */}
                                    {/* số lượng thành viên */}
                                </i>
                                <span>12 thành viên</span>
                            </div>
                        </div>
                    )}

                    <div className={cx('images')}>
                        <span>Ảnh</span>
                        <div>
                            <img src='https://picsum.photos/200/200' alt='image' />
                            <img src='https://picsum.photos/200/200' alt='image' />
                            <img src='https://picsum.photos/200/200' alt='image' />
                            <img src='https://picsum.photos/200/200' alt='image' />
                        </div>
                    </div>
                    {/* title: Ảnh */}
                    {/* list image (limit 4) */}

                    <div className={cx('videos')}>
                        <span>Video</span>
                        <Scrollbars
                            autoHideTimeout={500}
                            autoHideDuration={200}
                            className={`scrollbar ${cx('scrollbar')}`}
                            thumbMinSize={12}
                            universal
                            autoHide
                        >
                            <video src='https://res.cloudinary.com/ds3sutxw9/video/upload/v1705217405/chat/c91a0557-3ec5-4bd7-8174-17017abedfaa/2023-12-29%2013-10-15-d70057e7-86b5-4492-9ff6-8f977b3e5a34.mp4'></video>
                            <video src='https://res.cloudinary.com/ds3sutxw9/video/upload/v1705217405/chat/c91a0557-3ec5-4bd7-8174-17017abedfaa/2023-12-29%2013-10-15-d70057e7-86b5-4492-9ff6-8f977b3e5a34.mp4'></video>
                            <video src='https://res.cloudinary.com/ds3sutxw9/video/upload/v1705217405/chat/c91a0557-3ec5-4bd7-8174-17017abedfaa/2023-12-29%2013-10-15-d70057e7-86b5-4492-9ff6-8f977b3e5a34.mp4'></video>
                            <video src='https://res.cloudinary.com/ds3sutxw9/video/upload/v1705217405/chat/c91a0557-3ec5-4bd7-8174-17017abedfaa/2023-12-29%2013-10-15-d70057e7-86b5-4492-9ff6-8f977b3e5a34.mp4'></video>
                        </Scrollbars>
                    </div>
                    {/* title: Video */}
                    {/* list video (limit 4) */}

                    <div className={cx('files')}>
                        <span>Files</span>
                        <div>
                            {/*  */}
                            {/* PreviewFile */}
                        </div>
                    </div>

                    {/* title: file */}
                    {/* list fille (limit 4) */}
                    {/* <div className={cx('links')}></div> */}
                    {/* title: Link */}
                    {/*  list link (làm sau) */}

                    <div className={cx('settings')}>
                        <span>Thiết lập bảo mật</span>
                        <Setting
                            onClick={handleTimeDeleteMessage}
                            icon={<TfiAlarmClock size={30} />}
                            title='Tin nhắn tự xóa'
                            description='7 ngày'
                        />
                        <Setting onClick={handleGarbageGroupWarning} icon={<PiWarning size={30} />} title='Báo xấu' />
                        <Setting
                            onClick={handleDeleteAllMessage}
                            icon={<LuTrash size={30} />}
                            title='Xóa lịch sử trò truyện'
                        />
                        {informationProfile?.isGroup && (
                            <Setting onClick={handleLeaveGroup} icon={<IoLogOutOutline size={30} />} title='Rời nhóm' />
                        )}
                    </div>
                </div>
            </Scrollbars>
        </div>
    )
})

export default InformationProfile
