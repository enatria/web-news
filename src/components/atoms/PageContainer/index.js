import React from 'react'

const PageContainer = ({children}) => {
    return (
        <div style={{minHeight: '100vh'}}>{children}</div>
    )
}

export default PageContainer