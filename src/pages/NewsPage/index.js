import React from 'react'
import { ListNews, endpoints } from '../../components/organisms'
import { NewsTitle } from '../../components/molecules'
import { useParams } from 'react-router-dom';
import Container from '../../components/atoms/PageContainer'
import { Helmet } from 'react-helmet'

function NewsPage() {

    const { id } = useParams();
    return (
        <>
            <Helmet>
                <title>{id} - Web News</title>
            </Helmet>
            <Container>
                <NewsTitle id={id}/>
                <ListNews endpoint={endpoints.EVERYTHING} query={id} />
            </Container>
        </>
    )
}

export default NewsPage
