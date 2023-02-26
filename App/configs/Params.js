module.exports = {
  rowCategories: `*[_type == 'contentrow'] {...,restaurants[]->{...,dishes[]->}}`,
  categories: `*[_type == 'category']`,
};
