class DB {

  /**
   * Update
   *
   */
  static update(id, key, item) {
    const val = key.replace(`uie${id}`, '');
    const db = JSON.parse(localStorage.getItem('uie-db'));
    const data = db[id].data;

    for (let i = 0; i < data.length; i++) {
      if (val === data[i].el) {
        Object.assign(data[i], item);
        break;
      }
    }

    db[id].data = data;
    localStorage.setItem('uie-db', JSON.stringify(db));
  }

  /**
   * Add Record From DB
   */
  static add(id, key, item) {
    const db = JSON.parse(localStorage.getItem('uie-db'));
    const data = db[id].data;
    let unique = true;

    for (let i = 0; i < data.length; i++) {
      const item = data[i];

      if (item.el === key || item.name === key) {
        unique = false;
        break;
      }
    }

    if (unique) {
      data.push(item);
      db[id].data = data;
      localStorage.setItem('uie-db', JSON.stringify(db));
    }
  }

  /**
   * Remove Record From DB
   */
  static remove(id, key) {
    const val = key.replace(`uie${id}`, '');
    const db = JSON.parse(localStorage.getItem('uie-db'));
    const data = db[id].data;

    for (let i = 0; i < data.length; i++) {
      const item = data[i];

      if (item.el === val) {
        data.splice(i, 1);
        break;
      }

    }

    db[id].data = data;
    localStorage.setItem('uie-db', JSON.stringify(db));
  }

  /**
   * Initialize database
   */
  static init({ data }) {
    const db = localStorage.getItem('uie-db');
    if (!db) {
      localStorage.setItem('uie-db', JSON.stringify(data));
    }
  }

  static get(key) {
    const data = JSON.parse(localStorage.getItem('uie-db'));
    if (key) {
      return data[key];
    }

    return data;
  }

};

export default DB;
