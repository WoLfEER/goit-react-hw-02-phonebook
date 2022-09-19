import React from 'react';
import { List, Item, Button } from './ContactList.module';

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
