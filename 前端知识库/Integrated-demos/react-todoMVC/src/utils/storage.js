const storage ={
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  setParams(key, value) {
    localStorage.setItem(key, value);
    console.log(value)
  },
  get(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  getParams(key) {
    return localStorage.getItem(key);
  },
  delete(key) {
    localStorage.removeItem(key);
  },
}
export default storage;