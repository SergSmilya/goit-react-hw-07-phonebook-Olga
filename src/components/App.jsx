import { useEffect, useState } from 'react';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Input from './Input/Input';
import { fetchContacts } from 'Api';
import { useSelector, useDispatch } from 'react-redux';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  console.log(contacts);

  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   fetchContacts();
  // }, []);

  // function updateState(values) {
  //   setContacts(prev => [...prev, values]);
  // }

  function checkName(name) {
    return contacts.find(ob => name === ob.name);
  }

  function onFilterChange(e) {
    setFilter(e.target.attributes.name.ownerElement.value.toLowerCase());
  }

  function onFilter() {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>

      <Input checkName={checkName} />

      <Filter onFilterChange={onFilterChange} />

      <Contacts contacts={onFilter()} />
    </div>
  );
}
