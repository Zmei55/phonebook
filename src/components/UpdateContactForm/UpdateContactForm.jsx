import { useState } from 'react';
import { useUpdateContactMutation } from 'redux/contacts';
import {
  Section,
  Title,
  Form,
  Label,
  Input,
  Button,
} from './UpdateContactForm.styled';

export function UpdateContactForm({ id, name, number }) {
  const [updateContact, { isLoading: isUpdating }] = useUpdateContactMutation();
  const [formState, setFormState] = useState({
    id,
    name,
    number,
  });
  console.log('UpdateContactForm ~ formState', formState);

  const handleChange = ({ target: { name, value } }) =>
    setFormState(prev => ({ ...prev, [name]: value }));

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await updateContact(formState);
    } catch (error) {
      console.log('ERROR');
    }

    event.target.reset();
  };

  return (
    <Section>
      <Title>Update contact</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={formState.number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button type="submit">Update</Button>
      </Form>
    </Section>
  );
}
