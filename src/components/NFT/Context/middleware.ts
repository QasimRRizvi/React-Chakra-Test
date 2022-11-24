import { INFTDetails } from '../../../@type/NFTDetails';

export default class ContextMiddleware {
  static fetchNFTData() {
    return new Promise<INFTDetails[]>((resolve, reject) => {
      fetch('data.json', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      })
        .then((res) => res.json())
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
