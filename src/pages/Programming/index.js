import React from 'react'
import { ListNews, endpoints } from '../../components/organisms'
import Container from '../../components/atoms/PageContainer'
import { Helmet } from 'react-helmet'

function Programming() {
    return (
        <>
            <Helmet>
                <title>Programming - Web News</title>
            </Helmet>
            <Container>
                <ListNews endpoint={endpoints.EVERYTHING} query={'programming'} />
            </Container>
        </>
    )
}

export default Programming
