import React, { Component } from "react";
import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";
import { IconContext } from "react-icons";
import { FcContacts, FcPhoneAndroid, FcAddDatabase } from "react-icons/fc";
import { FormContacts, Label, Input, Button } from "./ContactForm.styled";

const INITIAL_VALUE = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  state = { ...INITIAL_VALUE };

  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onChangeState } = this.props;
    this.setState({ number });
    if (onChangeState(name, number) === "success") this.reset();
  };

  reset = () => {
    this.setState(() => ({ ...INITIAL_VALUE }));
  };

  render() {
    const {
      handleInput,
      handleSubmit,
      state: { name, number },
    } = this;

    return (
      <FormContacts onSubmit={handleSubmit}>
        <Label htmlFor="inputName">
          <FcContacts />
          Name
        </Label>
        <Input
          id="inputName"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter contact name"
          required
          onChange={handleInput}
        />
        <Label htmlFor="inputNumber">
          <FcPhoneAndroid />
          Number
        </Label>
        <Input
          id="inputNumber"
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter phone number"
          required
          onChange={handleInput}
        />
        <Button type="submit" disabled={!name || !number}>
          Add contact
          <IconContext.Provider
            value={{
              size: "1.5em",
              style: { verticalAlign: "middle", marginLeft: "16px" },
            }}
          >
            <FcAddDatabase />
          </IconContext.Provider>
        </Button>
        <ToastContainer />
      </FormContacts>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  onChangeState: PropTypes.func.isRequired,
};

export default ContactForm;
