import classNames from 'classnames/bind'
import icons from '@/utils/icons'
import { memo, useCallback } from 'react'
import RawPreviewStyle from './RawPreview.module.scss'

interface RawPreviewProps {
    fileUrl: string
    fileName: string
    fileSize: number
}

const cx = classNames.bind(RawPreviewStyle)

const RawPreview: React.FC<RawPreviewProps> = memo(({ fileUrl, fileName, fileSize }) => {
    const { MdDownload } = icons
    const typeFile = fileUrl?.substring(fileUrl.lastIndexOf('.') + 1, fileUrl.length)
    const handleDownload = useCallback(() => {
        const tempLink = document.createElement('a')
        tempLink.href = fileUrl
        tempLink.click()
        tempLink.remove()
    }, [fileUrl])

    return (
        <div className={cx('raw-preview')}>
            <div className={cx(`raw-preview__type-file`, `raw-preview__${typeFile}`)}>
                <span>{fileUrl?.substring(fileUrl.lastIndexOf('.') + 1, fileUrl.length).toUpperCase()}</span>
            </div>
            <div className={cx('raw-preview__wrapper')}>
                <div className={cx('raw-preview__wrapper__file-name')}>
                    <span>{fileName}</span>
                </div>
                <div className={cx('raw-preview__wrapper__file-size')}>
                    <span>{`${(fileSize / 1024).toFixed(2)} MB`}</span>
                </div>
                <div onClick={handleDownload} className={cx('raw-preview__wrapper__icon-download')}>
                    <i>
                        <MdDownload />
                    </i>
                </div>
            </div>
        </div>
    )
})

export default RawPreview
