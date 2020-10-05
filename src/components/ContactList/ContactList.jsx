import React from "react";
import styles from "./contactlist.module.css";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

const ContactList = ({ contacts, onDelete }) => (
  <ul className="list">
    {contacts.map(({ id, name, number }) => (
      <CSSTransition key={id} timeout={250} classNames={styles}>
        <li key={id}>
          <div className="contact">
            <span>
              {name}: {number}
            </span>
            <button className="delete" id={id} onClick={onDelete}>
              Delete
            </button>
          </div>
        </li>
      </CSSTransition>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
};

export default ContactList;
