import fetch from 'isomorphic-unfetch';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default fetcher;
