import ky from 'ky';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35608601-7cda014b012f6d1bf4756c5e4';

async function onSearch(search) {
  const options = {
    searchParams: {
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40,
      page: 1,
      q: search
    }
  };

  try {
    const gallery = await ky.get(BASE_URL, options).json();
    return gallery;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default onSearch;
