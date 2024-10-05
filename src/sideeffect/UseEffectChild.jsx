import React, { useEffect } from 'react'

const UseEffectChild = () => {

    useEffect(() => {
        //! clean - up function
        return () => {
            console.log("unmounting child.....");
        }
    },[])

  return (
    <>UseEffectChild</>
  )
}

export default UseEffectChild