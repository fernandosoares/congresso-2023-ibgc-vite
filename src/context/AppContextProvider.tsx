import { useState, useEffect } from 'react'
import { AppContext } from '@context/AppContext'
import { IAppContextProvider } from '@context/types'

export const AppContextProvider = ({ children }: IAppContextProvider) => {
  const [imageSrcPrefix, setImageSrcPrefix] = useState<string>('')

  useEffect(() => {
    const url = window.location.href.replace(/\/+$/, '')
    const isDevEnv =
      url.includes('localhost') ||
      url.includes('web.app') ||
      url.includes('firebase.app')

    setImageSrcPrefix(
      !isDevEnv
        ? 'https://ibgcsitenovo.blob.core.windows.net/ibgcsitenovo/2023/congresso'
        : ''
    )
    console.log(url)
  }, [])

  return (
    <AppContext.Provider
      value={{
        imageSrcPrefix
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
