import React from 'react';
import CurrencyFormat from "react-currency-format";
import NumberFormat from "react-number-format";

const LatestPricesVolumes = ({openPrice, lowPrice, highPrice, closePrice, volume}) => {

    const percentChange = ((closePrice - openPrice) / closePrice) * 100;

    return (
        <div className="row mt-sm-3">
            <div className=" col-sm-2">
                <div className="card text-center">
                    <div className="card-header">
                        Open
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            <CurrencyFormat value={openPrice}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            fixedDecimalScale={true}
                                            decimalScale={2}
                                            prefix={'$'}/>
                        </h5>
                    </div>
                </div>
            </div>
            <div className=" col-sm-2">
                <div className="card text-center">
                    <div className="card-header">
                        Low
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            <CurrencyFormat value={lowPrice}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            fixedDecimalScale={true}
                                            decimalScale={2}
                                            prefix={'$'}/>
                        </h5>
                    </div>
                </div>
            </div>
            <div className=" col-sm-2">
                <div className="card text-center">
                    <div className="card-header">
                        High
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            <CurrencyFormat value={highPrice}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            fixedDecimalScale={true}
                                            decimalScale={2}
                                            prefix={'$'}/>
                        </h5>
                    </div>
                </div>
            </div>
            <div className=" col-sm-2">
                <div className="card text-center">
                    <div className="card-header">
                        Close
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            <CurrencyFormat value={closePrice}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            fixedDecimalScale={true}
                                            decimalScale={2}
                                            prefix={'$'}/>
                        </h5>
                    </div>
                </div>
            </div>
            <div className=" col-sm-2">
                <div className="card text-center">
                    <div className="card-header">
                        Volume
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            <NumberFormat value={volume}
                                          displayType={'text'}
                                          thousandSeparator={true}/>
                        </h5>
                    </div>
                </div>
            </div>
            <div className=" col-sm-2">
                <div className="card text-center">
                    <div className="card-header">
                        Percent Change
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            <NumberFormat value={percentChange}
                                          decimalScale={2}
                                          displayType={'text'}
                                          suffix={'%'}/>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestPricesVolumes;
