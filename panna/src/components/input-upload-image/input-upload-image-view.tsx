import React from 'react'
import Theme from 'styles/theme'
import {
  CompanyImageStyled,
  ContainerStyled,
  TitleStyled
} from './input-upload-image.styled'

type InputUploadImageViewProps = {
  hasError: boolean
  dataUrlImage: string
  title?: string
  handleClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
const InputUploadImageView: React.FC<InputUploadImageViewProps> = ({
  hasError,
  dataUrlImage,
  handleClick,
  title
}) => {
  return (
    <ContainerStyled
      aria-label="input upload de imagem"
      onClick={(e) => handleClick(e)}
      hasError={hasError}
      dataUrlImage={dataUrlImage}
    >
      {dataUrlImage ? (
        <>
          <CompanyImageStyled
            src={dataUrlImage}
            alt=""
            hasError={hasError}
            dataUrlImage={dataUrlImage}
          />
          <TitleStyled>{title}</TitleStyled>
        </>
      ) : (
        <>
          <Theme.icons.uploadIcon />
        </>
      )}
    </ContainerStyled>
  )
}
export default InputUploadImageView
