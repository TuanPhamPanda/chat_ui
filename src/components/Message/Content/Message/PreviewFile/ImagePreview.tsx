import React, { memo } from 'react'

interface ImagePreviewProps {
    fileUrl?: string
}

const ImagePreview: React.FC<ImagePreviewProps> = memo(({ fileUrl }) => {
    return <img className='image-preview' src={fileUrl} alt='Image Preview' />
})

export default ImagePreview
