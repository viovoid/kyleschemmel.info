
const BASE_PATH = 'http://127.0.0.1:9090/api/v1';

const makeHeaders = (headers = {}) => {
  const token = localStorage.getItem('token');
  if (token) {
    headers['authorization'] = `Token ${token}`;
  }
  headers['content-type'] = 'application/json';
  return headers;
}

const makePath = (path) => {
  // append trailing slash to avoid 301
  return `${BASE_PATH}${path}/`;
}

export const get = async (path, opts = {}) => {
  try {
    opts.headers = makeHeaders(opts.headers);
    opts.method = 'GET';
    const res = await fetch(makePath(path), opts);
    const jres = await res.json();
    return jres;
  } catch (e) {
    console.warn(e);
  }
}

export const post = async (path, body, opts = {}) => {
  try {
    opts.headers = makeHeaders(opts.headers);
    opts.method = 'POST';
    opts.body = body;
    const res = await fetch(makePath(path), opts);
    const jres = await res.json();
    return jres;
  } catch (e) {
    console.warn(e);
  }
}

export const login = async (username, password) => {
  const body = new FormData();
  body.append('username', username);
  body.append('password', password);
  try {
    const res = await fetch(makePath('/auth/login'), { method: 'POST', body });
    const token = await res.json();
    localStorage.setItem('token', token.key || '');
    const auth = await get('/auth/user');
    return auth;
  } catch (e) {
    console.warn(e);
    return null;
  }
}

