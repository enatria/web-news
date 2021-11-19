import React from 'react'
import { endpoints, ListNews } from '../../components/organisms'
import Container from '../../components/atoms/PageContainer'
import { Helmet } from 'react-helmet';

const Indonesia = () => {
    
    return (
        <>
            <Helmet>
                <title>Indonesia - Web News</title>
            </Helmet>
            <Container>
                <ListNews country={'id'} endpoint={endpoints.INDONESIA} />
            </Container>
        </>
    );
}

export default Indonesia;