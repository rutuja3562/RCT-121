import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

import style from "./Button.module.css"
export const Buttontoggle = () => {
    const [theme] =useContext(AppContext)
  return (
    <div>
    <button className={`${style.buttonbase} ${theme=="light" ? style.buttonlight :style.buttondark}`}>Click</button>
    </div>
  )
}
// npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6