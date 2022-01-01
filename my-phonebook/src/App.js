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
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "+38(067) 459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "+38(093) 443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "+38(095) 645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "+38(099) 227-91-26" },
      { id: "id-5", name: "Vasily Lopatkin", number: "+38(067) 503-44-64" },
    ],
    filter: "",
  };

  onChangeState = (newContacts) => {
    this.setState(() => ({
      contacts: newContacts,
    }));
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
        this.alert(name, "info");
        break;
      }
    }
    this.onChangeState(contacts);
  };

  alert = (name, type) => {
    toastMsg(name, type);
  };

  render() {
    const {
      state: { contacts, filter },
      onChangeState,
      onFilter,
      onDelete,
    } = this;

    return (
      <Container>
        <Title>
          <Logo src={phonebook} alt="fonebook" width="50px" />
          Phonebook
        </Title>
        <ContactForm contacts={contacts} onChangeState={onChangeState} />
        {contacts.length ? (
          <>
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter onFilter={onFilter} />
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
