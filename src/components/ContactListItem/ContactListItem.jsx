import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts';
import { Modal } from 'components/Modal';
import { UpdateContactForm } from 'components/UpdateContactForm';
import { Spinner } from 'components/Spinner';
import {
  Item,
  ContactsContainer,
  Name,
  Number,
  ButtonsContainer,
  Button,
  CallLink,
  CallIcon,
  UpdateIcon,
  DeleteIcon,
} from './ContactListItem.styled';

export function ContactListItem({ id, name, number }) {
  const [showModal, setShowModal] = useState(false);
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Item>
      {showModal && (
        <Modal onClose={toggleModal}>
          <UpdateContactForm
            id={id}
            name={name}
            number={number}
            onClose={toggleModal}
          />
        </Modal>
      )}

      <ContactsContainer>
        <Name>{`${name}:`}</Name>
        <Number>{`${number}`}</Number>
      </ContactsContainer>

      <ButtonsContainer>
        <Button type="button">
          <CallLink href={`tel:${number}`}>
            <CallIcon />
          </CallLink>
        </Button>

        <Button type="button" onClick={toggleModal} aria-label="update contact">
          <UpdateIcon />
        </Button>

        <Button
          type="button"
          onClick={() => deleteContact(id)}
          disabled={isDeleting}
        >
          {isDeleting ? <Spinner size={12} /> : <DeleteIcon />}
        </Button>
      </ButtonsContainer>
    </Item>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
