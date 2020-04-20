import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';
import CreateContact from './CreateContact';

class App extends Component {

  state = {
    contacts: [],
    screen: 'create'
  };

  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      console.log(contacts)
      this.setState(() => ({
        contacts
      }))
    });
  }

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id;
      })
    }));

    ContactsAPI.remove(contact);
  }

  render() {
    let { contacts, screen } = this.state;

    return (
      <div>
        {screen === 'list' && <ListContacts
          contacts={contacts}
          onDeleteContact={this.removeContact}
        />}

        {screen === 'create' && <CreateContact />}
      </div>
    );
  }
}

export default App;
