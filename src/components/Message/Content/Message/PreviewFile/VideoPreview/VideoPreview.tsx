import React, { memo, useState, useRef, useEffect, useCallback } from 'react'
import classNames from 'classnames/bind'

import VideoPreviewStyle from './VideoPreview.module.scss'
import icons from '@/utils/icons'
import { parseTimer } from '@/utils/timers'

const cx = classNames.bind(VideoPreviewStyle)

interface VideoPreviewProps {
    fileUrl: string
    fileName: string
}

const VideoPreview: React.FC<VideoPreviewProps> = memo(({ fileUrl, fileName }) => {
    const { CiPause1, CiPlay1, MdDownload, GoMute, GoUnmute, MdFullscreen } = icons
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlayVideo, setIsPlayVideo] = useState(false)
    const [isMutedSound, setIsMutedSound] = useState(false)
    const [isShowControls, setIsShowControls] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const progressRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            if (isPlayVideo) {
                videoRef.current.play()
            } else {
                videoRef.current.pause()
            }
        }
    }, [isPlayVideo])

    const handleDownloadVideo = useCallback(() => {
        fetch(fileUrl)
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(new Blob([blob]))
                const a = document.createElement('a')
                a.download = fileName
                a.href = url
                a.dispatchEvent(new MouseEvent('click'))

                window.URL.revokeObjectURL(url)
            })
            .catch((error) => console.error('Lỗi khi tải video:', error))
    }, [fileUrl, fileName])

    const handleMouseMove = useCallback(() => {
        setIsShowControls(true)
    }, [])

    const handleMouseLeave = useCallback(() => {
        setIsShowControls(false)
    }, [])

    const handleTimeUpdate = useCallback(() => {
        const videoElement = videoRef.current
        if (videoElement) {
            setCurrentTime(videoElement.currentTime)
        }
    }, [videoRef])

    const setProgressBar = useCallback(
        function (e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
            const videoElement = videoRef.current
            const progressElement = progressRef.current
            if (progressElement && videoElement) {
                const width = progressElement.clientWidth
                const clickX = e.nativeEvent.offsetX
                const currentTime = (clickX / width) * videoElement.duration
                videoElement.currentTime = currentTime
                setCurrentTime(currentTime)
            }
        },
        [videoRef, progressRef]
    )

    useEffect(() => {
        if (isPlayVideo) {
            const videoElement = videoRef.current
            if (videoElement) {
                if (videoElement.duration === currentTime) {
                    setIsPlayVideo(false)
                    setCurrentTime(0)
                }
            }
        }
    }, [currentTime, videoRef, isPlayVideo])

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cx('video-preview', !isShowControls && 'hide-controls')}
        >
            <div className={cx('video-preview__center')}>
                <span onClick={() => setIsPlayVideo((prev) => !prev)}>
                    {isPlayVideo ? <CiPause1 size={40} /> : <CiPlay1 size={40} />}
                </span>
            </div>
            <div className={cx('video-preview__bottom__left')}>
                <div className={cx('video-preview__bottom__left__timer')}>
                    {videoRef.current && (
                        <>
                            <span>{parseTimer(Math.floor(currentTime))}</span>
                            <span>{parseTimer(Math.floor(videoRef.current.duration))}</span>
                        </>
                    )}
                </div>
                <div className={cx('video-preview__bottom__left__sound')}>
                    <span onClick={() => setIsMutedSound((prev) => !prev)}>
                        {isMutedSound ? <GoMute size={32} /> : <GoUnmute size={32} />}
                    </span>
                </div>
            </div>
            <div className={cx('video-preview__bottom__right')}>
                <div className={cx('video-preview__bottom__right__download')}>
                    <span onClick={handleDownloadVideo}>
                        <MdDownload size={32} />
                    </span>
                </div>
                <div className={cx('video-preview__bottom__right__full-screen')}>
                    <span>
                        <MdFullscreen size={32} />
                    </span>
                </div>
            </div>

            <div className={cx('video-preview__bottom__progress')} ref={progressRef} onClick={setProgressBar}>
                <div className={cx('video-preview__bottom')}>
                    {videoRef.current && (
                        <div
                            style={{ width: `calc(${Math.floor((currentTime / videoRef.current.duration) * 100)}%)` }}
                        ></div>
                    )}
                </div>
            </div>

            <video onTimeUpdate={handleTimeUpdate} ref={videoRef} muted={isMutedSound} src={fileUrl} />
        </div>
    )
})

export default VideoPreview
