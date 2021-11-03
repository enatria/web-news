import React from 'react';
import { Link, MemoryRouter, Route, useRouteMatch } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

export default function PaginationLink() {
    let { url } = useRouteMatch()
    return (
        <MemoryRouter initialEntries={['/'+url]} initialIndex={1}>
        <Route>
            {({ location }) => {
            const query = new URLSearchParams(location.search);
            const page = parseInt(query.get('page') || '1', 10);
            return (
                <Pagination
                page={page}
                count={10}
                renderItem={(item) => (
                    <PaginationItem
                    component={Link}
                    to={url === '/' ? `/?page=${item.page}` : `${url}/?page=${item.page}`}
                    {...item}
                    />
                )}
                />
            );
            }}
        </Route>
        </MemoryRouter>
    );
}