import axios from 'axios';

axios.defaults.baseURL = 'https://6438fee64660f26eb1a7e5cd.mockapi.io/api';

export async function fetchContacts() {
  try {
    const response = await axios('/contacts');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export async function addContact(data) {
  try {
    const response = await axios.post('/contacts', data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export async function deleteContact(id) {
  try {
    const response = await axios.delete(`/contacts/${id}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
