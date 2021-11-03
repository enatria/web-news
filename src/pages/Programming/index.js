import React from 'react'
import { ListNews } from '../../components/organisms'
import Container from '../../components/atoms/PageContainer'

function Programming() {
    return (
        <Container>
            <ListNews query={'programming'} />
        </Container>
    )
}

export default Programming
