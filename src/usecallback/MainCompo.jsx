import React, { useCallback, useState } from 'react'
import Counter from './Counter'
import Button from './Button'

const MainCompo = () => {

    let [age, setage] = useState(23)
    let [sal, setSal] = useState(50000)

    let ageIncrement = useCallback(() => {
        setage(age + 1)
    }, [age])

    let salIncrement = useCallback(() => {
        setSal(sal + 5000)
    }, [sal])

    return (
        <>
            <Counter count={age}>Age Count</Counter>
            <Counter count={sal}>Sal Count</Counter>
            <Button fun={ageIncrement}>Age Increment</Button>
            <Button fun={salIncrement}>Sal Increment</Button>

        </>
    );
}
export default MainCompo