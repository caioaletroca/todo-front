const specialCharsRegex = /^[A-Za-z0-9-áàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ ]*$/g;

const onlyNumbers = /^[0-9]*$/g;

const restrictedOnlyLetters = /^[A-Za-z]*$/g;

const onlyLetters = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ ]*$/g;

const oneUpperLetter = /^(?=.*[A-Z])[\s\S\d]*$/g;

const oneLowerLetter = /^(?=.*[a-z])[\s\S\d]*$/g;

const oneNumber = /^(?=.*[0-9])[\s\S\d]*$/g;

const agencyRegex = /^[0-9-]*$/g

export {
  specialCharsRegex,
  onlyNumbers,
  restrictedOnlyLetters,
  onlyLetters,
  oneUpperLetter,
  oneLowerLetter,
  oneNumber,
  agencyRegex
};