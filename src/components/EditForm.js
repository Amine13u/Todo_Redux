import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";

import { editTodo } from "../js/Actions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "50px",
    width: "380px",
    margin: "auto",
    textAlign: "center",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const EditForm = ({ oldTodo, editTodo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState(oldTodo.description);

  useEffect(() => {
    setDescription(oldTodo.description);
  }, [isOpen, oldTodo.description]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = { ...oldTodo, description: description };
    editTodo(newTodo);
    toggleModal();
  };

  return (
    <Fragment>
      <button onClick={toggleModal}>EDIT</button>
      <Modal isOpen={isOpen} style={customStyles} onRequestClose={toggleModal}>
        <form onSubmit={handleSubmit}>
          <input
            value={description}
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button type="submit"> CONFIRM </button>
          <button onClick={toggleModal}> CANCEL </button>
        </form>
      </Modal>
    </Fragment>
  );
};

export default connect(null, { editTodo })(EditForm);
