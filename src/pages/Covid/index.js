import React from 'react'
import { endpoints, ListNews } from '../../components/organisms'
import Container from '../../components/atoms/PageContainer'
import { Helmet } from 'react-helmet'
import { NewsTitle } from '../../components/molecules'

function Covid() {
    return (
        <>
            <Helmet>
                <title>COVID-19 - Web News</title>
            </Helmet>
            <Container>
                <NewsTitle id={"COVID-19"}/>
                <ListNews endpoint={endpoints.COVID} />
            </Container>
        </>
    )
}

export default Covid
