import { useCreateContactMutation } from 'redux/contacts';
import { toast } from 'react-hot-toast';
import { Form, Label, Input, Button } from './ContactForm.styled';

export function ContactForm() {
  const [createContact] = useCreateContactMutation();

  const handleSubmit = async event => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const phone = event.target.elements.phone.value;
    event.target.reset();

    try {
      await createContact({ name, phone });
      toast.success('Contact created!');
    } catch (error) {
      console.log('ERROR');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          // value={name}
          // onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="phone"
          // value={number}
          // onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
}
