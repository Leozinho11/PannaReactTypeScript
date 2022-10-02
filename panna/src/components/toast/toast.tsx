import React from 'react'
import { toast, Id } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ToastContainerCustom from './toast-view'

type showToastProps = {
  title: string
  message: string
  type?: 'info' | 'success' | 'warning' | 'error'
}
const showToast = ({ title, message, type = 'info' }: showToastProps): Id => {
  return toast[type](<ToastContainerCustom title={title} message={message} />, {
    position: toast.POSITION.TOP_RIGHT,
    theme: 'colored'
  })
}

export { showToast }
