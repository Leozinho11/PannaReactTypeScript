import React, { useEffect, useState } from 'react'
import { useFilePicker } from 'use-file-picker'
import InputUploadImageView from './input-upload-image-team-view'

type InputUploadImageProps = {
  urlImage?: string
  hasError: boolean
  title?: string
  handleSelectedImage: (dataUrl: object, file: File) => void
}
const InputUploadTeamImage: React.FC<InputUploadImageProps> = ({
  urlImage,
  hasError,
  handleSelectedImage,
  title
}) => {
  const [dataUrlImage, setDataUrlImage] = useState('')
  const [openFileSelector, { loading, plainFiles, filesContent }] =
    useFilePicker({
      accept: 'image/*',
      multiple: false,
      readAs: 'DataURL'
    })

  useEffect(() => {
    setDataUrlImage(urlImage || '')
    if (loading) {
      const image = filesContent[0].content
      setDataUrlImage(image)
      handleSelectedImage(filesContent[0], plainFiles[0])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filesContent, plainFiles])

  return (
    <InputUploadImageView
      hasError={hasError}
      title={title}
      handleClick={openFileSelector}
      dataUrlImage={dataUrlImage}
    />
  )
}

export default InputUploadTeamImage
