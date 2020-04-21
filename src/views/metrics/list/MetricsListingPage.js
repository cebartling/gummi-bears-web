import React from 'react';
import {useQuery} from "@apollo/client";
import {useHistory} from "react-router-dom";
import LoadingAlert from "../../../components/common/LoadingAlert";
import ErrorAlert from "../../../components/common/ErrorAlert";
import ViewTitle from "../../../components/common/ViewTitle";
import AllMetricsQuery from "../../../graphql/queries/metrics/AllMetricsQuery";
import MetricsListingToolbar from "./MetricsListingToolbar";
import MetricsListingTable from "./MetricsListingTable";

function MetricsListingPage({ location }) {
    const {loading, error, data, refetch} = useQuery(AllMetricsQuery, {
    });
    const history = useHistory();

    if (location.state?.shouldRefetch) {
        refetch();
    }

    if (loading) {
        return (<LoadingAlert message="Please wait while the metrics information is loaded."/>);
    }

    if (error) {
        return (<ErrorAlert message="Unable to load the metrics information at this time."/>);
    }

    function onClickAddNewMetric() {
        history.push('/metric/new');
    }

    function onChangeFilterField(changeEvent) {
        console.log('onChangeFilterField triggered:', changeEvent);
    }

    return (
        <div className="p-3">
            <ViewTitle title="Metrics"/>
            <MetricsListingToolbar onClickAddNewMetric={onClickAddNewMetric}
                                   onChangeFilterField={onChangeFilterField}/>
            <MetricsListingTable metrics={data.metrics}/>
        </div>
    );
}


export default MetricsListingPage;
