"use client"
import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const CentralizeData = createContext(null);

const Storedata = (props) => {
    const [data, setdata] = useState([])
  return (
    <CentralizeData.Provider value={[data, setdata]}>
          {props.children}
    </CentralizeData.Provider>
  )
}

export default Storedata