import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (id, value) =>{
  
  console.error('put request to update jatedb');

  const jateDb = await openDB('jate', 1);

  const tx = jateDb.transaction('jate','readWrite');

  const store = tx.objectStore('jate');

  const request = objectStore.getAll()

  const res = await request;
  console.log('saved to jatedb', res);


};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async (value) =>{

  console.error('retrieving Database from jate');

  const jateDb = await openDB('jate', 1);

  const tx = jateDb.transaction('jate', 'readWrite');

  const store = tx.objectStore('jate');

  const request = store.getAll()

  const res = await request;
  console.log('Date saved to db', res);
};



initdb();