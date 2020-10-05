import React from 'react';
import PropTypes from 'prop-types';
import {DateTime} from 'luxon';

const DateTimeFormat = ({iso8601DateTimeString, formatOptions = DateTime.DATETIME_FULL}) => {

  const timestamp = DateTime.fromISO(iso8601DateTimeString)

  return (
    <>
      {timestamp.toLocaleString(formatOptions)}
    </>
  );
};

DateTimeFormat.propTypes = {
  iso8601DateTimeString: PropTypes.string.isRequired,
  formatOptions: PropTypes.object
};

export default DateTimeFormat;
