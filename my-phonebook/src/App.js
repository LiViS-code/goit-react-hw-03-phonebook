import React, { Component } from "react";
import "react-toastify/dist/ReactToastify.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import { Container, Logo, Title, ContactsTitle, Message } from "./App.styled";
import toastMsg from "./utils/toastMsg";
import phonebook from "./img/phonebook.png";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  onChangeState = (newContacts) => {
    this.setState(() => ({
      contacts: newContacts,
    }));
    this.saveToLocalStorage();
  };

  onFilter = (word) => {
    this.setState(() => ({ filter: word.toUpperCase() }));
  };

  onDelete = (id) => {
    const { contacts } = this.state;
    for (let i = 0; i < contacts.length; i += 1) {
      if (contacts[i].id === id) {
        const name = contacts[i].name;
        contacts.splice(i, 1);
        toastMsg(name, "info");
        break;
      }
    }
    this.onChangeState(contacts);
  };

  saveToLocalStorage() {
    const arrContacts = [];
    this.state.contacts.map((contact) => arrContacts.push(contact));
    localStorage.setItem("contacts", JSON.stringify(arrContacts));
  }

  componentDidMount = () => {
    if (localStorage.getItem("contacts")) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem("contacts")),
      });
    }
  };

  render() {
    const {
      state: { contacts, filter },
      onChangeState,
      onFilter,
      onDelete,
    } = this;
    const onContctsGroup = contacts.length !== 0 ? true : false;
    const onContactsFilter = contacts.length >= 2 ? true : false;

    return (
      <Container>
        <Title>
          <Logo src={phonebook} alt="fonebook" width="50px" />
          Phonebook
        </Title>
        <ContactForm contacts={contacts} onChangeState={onChangeState} />
        {onContctsGroup ? (
          <>
            <ContactsTitle>Contacts</ContactsTitle>
            {onContactsFilter && <Filter onFilter={onFilter} />}
            <ContactList
              contacts={contacts}
              filter={filter}
              onDelete={onDelete}
            />
          </>
        ) : (
          <Message>You have no saved contacts</Message>
        )}
      </Container>
    );
  }
}

export default App;
