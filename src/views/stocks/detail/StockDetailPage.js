import React from 'react';
import {useQuery} from '@apollo/client';
import ViewTitle from '../../../components/common/ViewTitle';
import UserStockByIdQuery from '../../../graphql/queries/stocks/UserStockByIdQuery';
import LoadingAlert from '../../../components/common/LoadingAlert';
import ErrorAlert from '../../../components/common/ErrorAlert';
import StockPriceDirection from '../../../components/common/StockPriceDirection';
import LatestPricesVolumes from './LatestPricesVolumes';
import SlidingTimeSeriesChart from "./SlidingTimeSeriesChart";
import IntradayTimeSeriesChart from "./IntradayTimeSeriesChart";
import Moment from "react-moment";

const StockDetailPage = ({match: {params: {userStockId}}}) => {
    const {loading, error, data} = useQuery(UserStockByIdQuery, {
        variables: {
            id: userStockId
        }
    });

    if (loading) {
        return (<LoadingAlert message="Please wait while the user/stock association information is loaded."/>);
    }

    if (error) {
        return (<ErrorAlert message="Unable to load the user/stock association information at this time."/>);
    }

    const {name, symbol} = data.userStockById?.stock;
    const {eventDate, openPrice, closePrice, highPrice, lowPrice, volume} =
        data.userStockById?.stock?.latestDailyTimeSeriesEvent;


    const title = (
        <>
            <StockPriceDirection openPrice={openPrice}
                                 closePrice={closePrice}/>
            &nbsp;
            {symbol} - {name}
        </>
    )

    return (
        <div className="p-3">
            <ViewTitle title={title}/>
            <div className="row">
                Last updated: &nbsp;<Moment format="MMMM D, YYYY">{eventDate}</Moment>
            </div>
            <LatestPricesVolumes closePrice={closePrice}
                                 openPrice={openPrice}
                                 highPrice={highPrice}
                                 lowPrice={lowPrice}
                                 volume={volume}/>

            <IntradayTimeSeriesChart timeSeriesData={data.userStockById?.stock?.intradayTimeSeriesEvents}/>
            <SlidingTimeSeriesChart timeSeriesData={data.userStockById?.stock?.dailyTimeSeriesEvents}/>
        </div>
    );
};

export default StockDetailPage;
