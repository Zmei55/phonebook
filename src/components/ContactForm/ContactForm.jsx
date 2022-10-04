import { useState } from 'react';
import toast from 'react-hot-toast';
import { useCreateNewContactMutation } from 'redux/contacts';
import {
  Section,
  Title,
  Form,
  Label,
  Input,
  Button,
} from './ContactForm.styled';

export function ContactForm({ onClose }) {
  const [createContact] = useCreateNewContactMutation();
  const [formState, setFormState] = useState({
    name: '',
    number: '',
  });

  const handleChange = ({ target: { name, value } }) =>
    setFormState(prev => ({ ...prev, [name]: value }));

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await createContact(formState);
      toast.success('Kontakt erstellt!');
    } catch (error) {
      console.log('ERROR');
    }

    event.target.reset();
    onClose();
  };

  return (
    <Section>
      <Title>Add new contact</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
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
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </Form>
    </Section>
  );
}
