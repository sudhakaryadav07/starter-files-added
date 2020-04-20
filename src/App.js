import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';
import CreateContact from './CreateContact';
import { Route } from 'react-router-dom';

class App extends Component {

  state = {
    contacts: []
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

  CreateContact = (contact) => {
    ContactsAPI.create(contact).then((contact) => {
      this.setState((currentState) => ({
        contacts: currentState.contacts.concat([contact])
      }))
    })
  }

  render() {
    let { contacts } = this.state;

    return (
      <div>
        <Route exact path="/" render={() => (
          <ListContacts
            contacts={contacts}
            onDeleteContact={this.removeContact} />
        )} />

        <Route exact path="/create" render={({history}) => (
          <CreateContact
            onCreateContact={(contact) => {
              this.CreateContact(contact)
              history.push('/')
            }}
          />
        )} />

      </div>
    );
  }
}

export default App;
