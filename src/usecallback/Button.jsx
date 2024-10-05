import React, { memo } from 'react'

const Button = (props) => {

    let { fun, children } = props

    console.log(children);

    return (
        <>
            {/* tag */}
            <button onClick={fun}>{children}</button>
        </>

    )
}

export default memo(Button)