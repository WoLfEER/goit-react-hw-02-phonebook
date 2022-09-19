import React, { Component } from 'react';
import { ContactForm } from './formInput/formInput';
import ContactList from './contactsList/ContactList';
import FilterForm from './filterForm/FilterForm';
import { nanoid } from 'nanoid';
import { GlobalStyle } from 'utils/GlobalStyle';
import { Wrapper } from './App.module';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addUser = (name, number) => {
    const nameNormalize = name.toLowerCase().trim();
    const ifExist = this.state.contacts.find(
      ({ name }) => nameNormalize === name
    );
    if (ifExist) {
      return alert(`${name} already in your phone book`);
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  filterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = e => {
    const deleteById = e.target.value;

    this.setState(prevState => {
      const contacts = prevState.contacts;
      const newArr = contacts.filter(contact => contact.id !== deleteById);
      return { contacts: newArr };
    });
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <Wrapper>
        <h2>Phone book</h2>
        <ContactForm onSubmit={this.addUser} />
        <h2>Contacts</h2>
        <FilterForm filteredValue={filter} onSearch={this.filterChange} />
        {filteredContacts.length > 0 ? (
          <ContactList
            data={filteredContacts}
            deleteContact={this.deleteContact}
          />
        ) : (
          <p>Contacts not founded</p>
        )}{' '}
        <GlobalStyle />
      </Wrapper>
    );
  }
}
