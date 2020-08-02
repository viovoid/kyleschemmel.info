
const BASE_PATH = 'http://bringer:9090/api/v1';

const authHeaders = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return { Authorization: `Token ${token}` };
  } else {
    return {};
  }
}

const makePath = (path) => {
  // append trailing slash to avoid 301
  return `${BASE_PATH}${path}/`;
}

export const get = async (path, opts) => {
    try {
      const headers = authHeaders();
      const res = await fetch(makePath(path), { headers });
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
    const res = await fetch(makePath('/auth/login/'), { method: 'POST', body });
    const token = await res.json();
    localStorage.setItem('token', token.key || '');
    const auth = await get('/auth/user/');
    return auth;
  } catch (e) {
    console.warn(e);
  }
}

