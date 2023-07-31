import { createContext } from 'react'
import { IAppContext } from '@context/types'

export const AppContext = createContext<IAppContext>({} as IAppContext)
