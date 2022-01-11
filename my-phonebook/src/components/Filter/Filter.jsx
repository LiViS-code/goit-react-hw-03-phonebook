import React, { Component } from "react";
import PropTypes from "prop-types";
import { FcFilledFilter } from "react-icons/fc";
import { Container } from "./Filter.styled";
import { Input, Label } from "../ContactForm/ContactForm.styled";

class Filter extends Component {
  handleInput = (e) => {
    const { value } = e.target;
    const { onFilter } = this.props;
    onFilter(value);
  };

  render() {
    const { handleInput } = this;
    const { filter } = this.props;
    return (
      <Container>
        <Label htmlFor="inputFilter">
          <FcFilledFilter />
          Find contacts by name
        </Label>
        <Input
          id="inputFilter"
          type="text"
          value={filter}
          name="filter"
          onChange={handleInput}
        ></Input>
      </Container>
    );
  }
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
