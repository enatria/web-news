import React from 'react'
import { ListNews } from '../../components/organisms'
import Container from '../../components/atoms/PageContainer'
import { Helmet } from 'react-helmet'

function Covid() {
    return (
        <>
            <Helmet>
                <title>COVID-19 - Web News</title>
            </Helmet>
            <Container>
                <ListNews query={'covid'} />
            </Container>
        </>
    )
}

export default Covid
