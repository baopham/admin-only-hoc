const urlParams = new URLSearchParams(window.location.search);

export default {
  isAdmin: urlParams.get('is-admin') === '1'
};
