import React from 'react'
import TemplateAuthenticationView from './template-authentication-view'

type TemplateAuthenticationProps = {
  children: React.ReactNode
}

const TemplateAuthentication: React.FC<TemplateAuthenticationProps> = ({
  children
}) => {
  return <TemplateAuthenticationView>{children}</TemplateAuthenticationView>
}

export default TemplateAuthentication
