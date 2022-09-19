import React from 'react';
import { List, Item, Button } from './ContactList.module';
import PropTypes from 'prop-types';

const ContactList = ({ data, deleteContact }) => (
  <List>
    {data.map(({ id, number, name }) => (
      <Item key={id}>
        <p>Name: &nbsp;{name}</p>
        <p>Number: &nbsp;{number}</p>
        <Button value={id} type="button" onClick={deleteContact}>
          Delete
        </Button>
      </Item>
    ))}
  </List>
);

export default ContactList;

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
