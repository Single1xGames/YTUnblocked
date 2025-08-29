import { Gitlab } from 'gitlab';

const api = new Gitlab({
  host: 'https://gitlab.com',   // Always just the base URL
  token: '4115290ac77a1e02203bafaeb365d8412999d626', // your PAT
});
