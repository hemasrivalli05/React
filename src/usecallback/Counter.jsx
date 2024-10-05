import React, { memo } from 'react'

const Counter = (props) => {

    let { count, children } = props
    console.log(children);

    return (
        <>
            <h1>{children}--{count}</h1>
        </>
    )
}

export default memo(Counter)