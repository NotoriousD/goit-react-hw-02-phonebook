import React, { Component } from "react";
import faker from "faker";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import "./Phonebook.scss";

export default class Phonebook extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  getLocalStorageContact = () => {
    const currentData = JSON.parse(localStorage.getItem("contacts"));
    if (!!currentData && currentData.length > 0) {
      this.setState({
        contacts: [...currentData],
      });
    }
  };

  componentDidMount() {
    this.getLocalStorageContact();
  }

  componentDidUpdate() {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  handleSubmit = (person) => {
    const { contacts } = this.state;
    const currentContacts = contacts.map((contact) =>
      contact.name.toLowerCase()
    );
    if (!currentContacts.includes(person.name.toLowerCase())) {
      this.setState({
        contacts: [
          ...this.state.contacts,
          {
            id: faker.random.uuid(),
            ...person,
          },
        ],
      });
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    } else {
      alert(`${person.name} is already in contacts`);
    }
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return filter
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  };

  onSearchContact = (e) => {
    e.preventDefault();
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const filteredNames = this.getFilteredContacts();
    console.log(`filtered`, filteredNames);
    return (
      <div className="content">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter onFilter={this.onSearchContact} />
        <ContactList contacts={filteredNames} />
      </div>
    );
  }
}
