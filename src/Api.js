
const BASE_PATH = 'http://bringer:9090/api/v1';

export const get = async (path, opts) => {
    try {
      const res = await fetch(BASE_PATH + path, { credentials: 'include' });
      console.log(res);
      const jres = await res.json();
      console.log(jres);
      return jres;
    } catch (e) {
      console.warn(e);
    }
  }

export const login = async (username, password) => {

    try {
      const headers = new Headers();
        headers.set('Authorization', 'xBasic');
        headers.set('WWW-Authenticate', 'xBasic realm=mirrod.in');
        headers.set('X-Requested-With', 'XMLHttpRequest');
      const body = new FormData();
      body.append('username', username);
      body.append('password', password);
      const res = await fetch(BASE_PATH + '/auth/login/', { method: 'POST', body, headers });
      const jres = await res.json();
      console.log(jres);
//      return res;
    } catch (e) {
      console.warn(e);
    }
    // xhr to establish session
    const xhr = new XMLHttpRequest();                        
    xhr.open('get', BASE_PATH + '/auth/user/', false, username, password);
    try {
    xhr.send('');
    }catch(e){ console.warn(e)}
    if (xhr.status === 200) {
        console.log(xhr);
        //location.href = authUrl;
    } else {
        alert("⚠️ Authentication failed.");
    }
  }

