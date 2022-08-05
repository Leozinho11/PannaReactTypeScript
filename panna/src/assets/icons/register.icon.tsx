import React from 'react'

const RegisterIcon: React.FC = () => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="19" height="19" fill="url(#register-pattern)" />
      <defs>
        <pattern
          id="register-pattern"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#register-image" transform="scale(0.005)" />
        </pattern>
        <image
          id="register-image"
          width="200"
          height="200"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export default RegisterIcon
