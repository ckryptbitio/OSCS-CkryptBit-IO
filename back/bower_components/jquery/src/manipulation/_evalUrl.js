import { ajax } from '../ajax';

/**
 * Evaluates a URL's script content.
 * @param {string} url - The URL to evaluate.
 * @returns {Promise} A Promise that resolves with the result of the evaluation.
 */
const _evalUrl = async (url) => {
  try {
    const response = await ajax({
      url,
      type: 'GET',
      dataType: 'script',
      cache: true,
      async: false,
      global: false,
      'throws': true,
    });
    return response;
  } catch (error) {
    // Handle error here, if needed.
    console.error(error);
    throw error;
  }
};

export default _evalUrl;
