import React from 'react';
import PropTypes from 'prop-types';

function Stream({ tracks }) {
  return (
    <div>
      {
        tracks.map(track => <div className="track" key={track.id}>{track.title}</div>)
      }
    </div>
  );
}

Stream.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
  })),
};

Stream.defaultProps = {
  tracks: [],
};

export default Stream;
