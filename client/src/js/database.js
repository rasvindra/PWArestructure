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
export const putDb = async (content) => {
  try {
    const jateDb = await openDB("jate", 1);
    const tx = jateDb.transaction("jate", "readwrite");
    const store = tx.objectStore("jate");
    const request = store.put({ jate: content });
    const result = await request;
    console.log(result, "#####TEST111111");
  } catch {
    console.log("putDb not implemented","DB not working!")
  }
};


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try {
    const jateDb = await openDB("jate", 1);
    const tx = jateDb.transaction("jate", "readonly");
    const store = tx.objectStore("jate");
    const request = store.getALL();
    const result = await request;
    console.log(result, "#####TEST222222222");
  } catch {
    console.log("putDb not implemented","DB not working!")
  }
}

initdb();
