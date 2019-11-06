const fields = [
  'a', 'm', 'ln', 'fn', 's', 'e', 'ad', 'z', 'ci', 'co', 'custom_ref'
];

// A REMPLIR !!!!
const baseUrl = 'https://www.helloasso-dev.com/associations/test-gil/formulaires/2';

const mapFields = (form) => {
  return fields.reduce((acc, key) => {
    const value = form[key].value;
    if (value) {
      const updated = Object.assign({}, acc);
      updated[key] = value;
      return updated;
    }
    return acc;
  }, {});
};

const makeQuery = (fields) => {
  return Object.entries(fields).reduce((acc, [key, val]) => {
    return `${acc}${key}=${encodeURIComponent(val)}&`
  }, '?');
};

const redirect = (query) => {
  window.location.replace(`${baseUrl}${query}`);
  return false;
};

const onSubmit = (form) => {
  const fields = mapFields(form);
  const query = `${makeQuery(fields)}ft=0`;
  console.log(query);
  
  return redirect(query);
};