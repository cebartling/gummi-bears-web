
export const buildPriceString = (price) => {
    const dollars = Math.floor(price / 100);
    const cents = price % 100;
    return cents >= 10 ? `${dollars}.${cents}` : `${dollars}.0${cents}`;
};
