type Hello = {
  name: string;
  age: number;
  [index: string]: any;
}

const hi: Hello = {
  name: 'kk',
  age: 12,
  fav: 'fs'
};


console.log(hi?.name);

const getQuery = (url: string): Record<string, any> => {
  console.log('get query fn called..');
  const queryStr = url.split('?')[1];
  const result: {[index: string]: string} = {};
  queryStr.split('&').forEach(pair => {
    const [key, val] = pair.split('=')
    result[key] = val;
  })
  return result;
};

export default {
  getQuery
};

