import React from 'react'
import { ListNews } from '../../components/organisms'
import Container from '../../components/atoms/PageContainer'
import { Helmet } from 'react-helmet';

const Indonesia = () => {
    
    return (
        <>
            <Helmet>
                <title>Indonesia - Web News</title>
            </Helmet>
            <Container>
                <ListNews country={'id'}/>
            </Container>
        </>
    );
}

export default Indonesia;