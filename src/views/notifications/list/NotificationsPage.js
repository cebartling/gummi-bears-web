import React from 'react';
import {useSelector} from 'react-redux';
// import {useQuery} from '@apollo/client';
import {userIdSelector} from '../../../redux/selectors';
// import LoadingAlert from '../../../components/common/LoadingAlert';
// import ErrorAlert from '../../../components/common/ErrorAlert';
import ViewTitle from '../../../components/common/ViewTitle';
// import UserStockNotificationsQuery from '../../../graphql/queries/Notifications/UserStockNotificationsQuery';
// import NotificationsTable from './NotificationsTable';
// import NotificationsToolbar from "./NotificationsToolbar";

function NotificationsPage() {
  const currentUserId = useSelector(userIdSelector);
  // const {loading, error, data, refetch} = useQuery(UserStockNotificationsQuery, {
  //   variables: {
  //     id: currentUserId
  //   }
  // });

  // if (loading) {
  //   return (<LoadingAlert message="Please wait while the Notifications information is loaded."/>);
  // }

  // if (error) {
  //   return (<ErrorAlert message="Unable to load the Notifications information at this time."/>);
  // }

  return (
    <div className="p-3">
      <ViewTitle title="Notifications"/>
      {/*{data.userById.userStocks.map((userStock) => {*/}
      {/*  if (userStock.userStockNotifications.length > 0) {*/}
      {/*    return (<NotificationsTable userStock={userStock} key={userStock.id}/>);*/}
      {/*  } else {*/}
      {/*    return null;*/}
      {/*  }*/}
      {/*})}*/}
    </div>
  );
}

NotificationsPage.propTypes = {
  // location: PropTypes.shape({
  //   state: PropTypes.shape({
  //     shouldRefetch: PropTypes.bool
  //   })
  // })
};

export default NotificationsPage;
