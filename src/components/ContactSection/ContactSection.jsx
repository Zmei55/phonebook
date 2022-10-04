import { useState } from 'react';
import { Modal } from 'components/Modal';
import { ContactForm } from 'components/ContactForm';
import { ContactFilter } from 'components/ContactFilter';
import { AddContactBtn } from 'components/AddContactBtn';
import { Section, AddContactIcon } from './ContactSection.styled';

export function ContactSection({ filterValue, handleFilter }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Section>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm onClose={toggleModal} />
        </Modal>
      )}

      <ContactFilter filterValue={filterValue} handleFilter={handleFilter} />

      <AddContactBtn onClick={toggleModal} aria-label="add contact">
        <AddContactIcon />
      </AddContactBtn>
    </Section>
  );
}
