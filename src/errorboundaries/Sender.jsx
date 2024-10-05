import React from 'react'
import Receiver from './Receiver'
import ErrorBoundary from './ErrorBoundary'

const Sender = () => {
    return (
        <>
            <ErrorBoundary>
                <Receiver money={5000} />
            </ErrorBoundary>
            <ErrorBoundary>
                <Receiver money={15000} />
            </ErrorBoundary>
            <ErrorBoundary>
                <Receiver money={30000} />
            </ErrorBoundary>
        </>
    );
}

export default Sender

// since we are trying to catch the errors from receiver. jsx  wrap it under ErrorBoundary.jsx , so reciver ia acting as "children" for ErrorBoundary