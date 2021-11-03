import React from 'react'
import { ListNews } from '../../components/organisms'
import Container from '../../components/atoms/PageContainer'

function Covid() {
    return (
        <Container>
            <ListNews query={'covid'} />
        </Container>
    )
}

export default Covid
