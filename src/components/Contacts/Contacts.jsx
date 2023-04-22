import { deleteContacts } from 'Redux/ContactsSlice';
import { useDispatch } from 'react-redux';

export default function Contacts({ contacts }) {
  const dispatch = useDispatch();

  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ name, id, number }) => (
          <li key={id}>
            <div>
              {name}: {number}
            </div>
            <button type="button" onClick={() => dispatch(deleteContacts(id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
