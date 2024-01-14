import validator from 'validator';

export default (phone) => {
  return validator.isMobilePhone(`${phone.replace(/\(|\)|-|_|\s/g, '')}`, 'ru-RU');
};
