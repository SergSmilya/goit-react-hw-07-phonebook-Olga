import { deleteContacts } from 'Redux/Operations';
import { useDispatch } from 'react-redux';

export default function OneContact({ contacts }) {
  const dispatch = useDispatch();
  const { id, name, number } = contacts;
  return (
    <li>
      <div>
        {name}: {number}
      </div>
      <button type="button" onClick={() => dispatch(deleteContacts(id))}>
        Delete
      </button>
    </li>
  );
}
