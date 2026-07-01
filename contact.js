(function () {
  const CONTACT = {
    email: 'administracion@hostaledmond.com'
  };

  function applyPlaceholders(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/\{\{EMAIL\}\}/g, CONTACT.email);
  }

  window.HOSTAL_CONTACT = Object.assign({}, CONTACT, { applyPlaceholders });
})();
