import React from 'react';
import ViewTitle from "../../components/common/ViewTitle";
import WatchList from "./watchlist/WatchList";

function DashboardPage() {

    return (
        <>
            <div className="row p-3">
                <ViewTitle title="Dashboard"/>
            </div>
            <div className="row">
                <WatchList/>
            </div>
        </>
    );
}

export default DashboardPage;
