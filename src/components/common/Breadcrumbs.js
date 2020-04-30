import React from 'react';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import {NavLink} from "react-router-dom";

const userNamesById = {'1': 'John'}

const DynamicUserBreadcrumb = ({match}) => (
    <span>{userNamesById[match.params.userId]}</span>
);

// define custom breadcrumbs for certain routes.
// breadcumbs can be components or strings.
const routes = [
    {path: '/userStock/:userStockId', breadcrumb: DynamicUserBreadcrumb},
    {path: '/stocks', breadcrumb: 'Stocks'},
];

// map & render your breadcrumb components however you want.
const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs(routes);

    return (
        <>
            {breadcrumbs.map(({match, breadcrumb}) => (
                <span key={match.url} className="ml-1">
                  <NavLink to={match.url}>{breadcrumb}</NavLink>
                </span>
            ))}
        </>
    );
};

export default Breadcrumbs;
