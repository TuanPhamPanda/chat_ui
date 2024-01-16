import classNames from 'classnames/bind'
import { useState, useEffect, memo } from 'react'

import ImagePreview from './ImagePreview'
import VideoPreview from './VideoPreview/VideoPreview'
import RawPreview from './RawPreview/RawPreview'
import PreviewFileStyle from './PreviewFile.module.scss'

const cx = classNames.bind(PreviewFileStyle)

interface PreviewFileProps {
    fileUrl: string
    fileName: string
    fileSize: number
}

const PreviewFile = memo(({ fileUrl, fileName, fileSize }: PreviewFileProps) => {
    const [fileType, setFileType] = useState<string>('')

    useEffect(() => {
        if (fileUrl?.includes('/raw/upload/')) {
            setFileType('raw')
        } else if (fileUrl?.includes('/image/upload/')) {
            setFileType('image')
        } else {
            setFileType('video')
        }
    }, [fileUrl])

    const renderPreview = () => {
        if (!fileType) {
            return
        }
        switch (fileType) {
            case 'image':
                return (
                    <div className={cx('file-preview__image-preview')}>
                        <ImagePreview fileUrl={fileUrl} />
                    </div>
                )
            case 'video':
                return (
                    <div className={cx('file-preview__video-preview')}>
                        <VideoPreview fileUrl={fileUrl} fileName={fileName} />
                    </div>
                )
            case 'raw':
                return <RawPreview fileUrl={fileUrl} fileName={fileName} fileSize={fileSize} />
            default:
                return
        }
    }

    return <div className={cx('file-preview')}>{renderPreview()}</div>
})

export default PreviewFile
