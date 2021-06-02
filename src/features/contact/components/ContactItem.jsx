import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {
  return (
      <div>
        <p>{contact.firstName}</p>
        <p>test</p>
      </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
    photo: PropTypes.string
  })
};

export default ContactItem;
