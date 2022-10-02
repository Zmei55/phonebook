import { useState } from 'react';
import { useCreateNewContactMutation } from 'redux/contacts';
import {
  Section,
  Title,
  Form,
  Label,
  Input,
  Button,
} from './ContactForm.styled';

export function ContactForm() {
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
    } catch (error) {
      console.log('ERROR');
    }

    event.target.reset();
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
