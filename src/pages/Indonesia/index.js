import React from 'react'
import {ListNews, endpoints} from '../../components/organisms'
import Container from '../../components/atoms/PageContainer'

const Indonesia = () => {
    
    return (
        <Container>
            <ListNews endpoint={endpoints.HEADLINES} country={'id'}/>
        </Container>
    );
}

export default Indonesia;