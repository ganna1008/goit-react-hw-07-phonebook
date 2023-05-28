import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import {
  ButtonSubmit,
  InputField,
  InputForm,
  InputLabel,
} from './ContactForm.styled';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const isExist = contacts.some(contact => contact.name === name);

    if (isExist) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, phone: number }));
    }
    form.reset();
  };

  return (
    <InputForm onSubmit={handleSubmit}>
      <InputLabel>
        Name
        <InputField
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </InputLabel>

      <InputLabel>
        Number
        <InputField
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputLabel>
      <ButtonSubmit type="submit">Add contact</ButtonSubmit>
    </InputForm>
  );
};
