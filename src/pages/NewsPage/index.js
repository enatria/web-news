import React from 'react'
import { endpoints, ListNews } from '../../components/organisms'
import { NewsTitle } from '../../components/molecules'
import { useParams } from 'react-router-dom';
import Container from '../../components/atoms/PageContainer'
import { Helmet } from 'react-helmet'

function NewsPage() {

    const { id } = useParams();
    return (
        <>
            <Helmet>
                <title>search for "{id}" - Web News</title>
            </Helmet>
            <Container>
                <NewsTitle id={id} fromSearch/>
                <ListNews endpoint={endpoints.EVERYTHING} query={id} gridNoBreakPoint />
            </Container>
        </>
    )
}

export default NewsPage
