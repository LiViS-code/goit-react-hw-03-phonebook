import React, { Component } from "react";
import "react-toastify/dist/ReactToastify.css";
import { nanoid } from "nanoid";
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

  onChangeState = (name, number) => {
    if (this.matchCheckName(name, this.state.contacts)) {
      toastMsg(name, "warn");
      return "not success";
    }

    const newContact = [{ id: nanoid(), name: name, number: number }];

    this.setState((s) => ({
      contacts: s.contacts.concat(newContact),
    }));
    toastMsg(name, "success");
    return "success";
  };

  matchCheckName = (name, contacts) => {
    for (let i = 0; i < contacts.length; i += 1) {
      if (contacts[i].name === name) return true;
    }
    return false;
  };

  onFilter = (word) => {
    this.setState({ filter: word.toLowerCase() });
  };

  onDelete = (id) => {
    const newContacts = this.state.contacts;

    for (let i = 0; i < newContacts.length; i += 1) {
      if (newContacts[i].id === id) {
        const name = newContacts[i].name;
        newContacts.splice(i, 1);
        this.setState({ contacts: newContacts });
        toastMsg(name, "info");
        break;
      }
    }

    if (this.state.contacts.length <= 1) {
      this.onFilter("");
    }
  };

  componentDidMount = () => {
    if (localStorage.getItem("contacts")) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem("contacts")),
      });
    }
  };

  componentDidUpdate = (prevState) => {
    if (prevState.contacts !== this.state.contacts)
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
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
            {onContactsFilter && <Filter onFilter={onFilter} filter={filter} />}
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
