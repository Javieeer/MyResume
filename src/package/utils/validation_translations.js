import { defineMessages } from 'react-intl';

export const validationTranslations = defineMessages({
    required: {
        id: 'Form.validation.global.mandatory',
        defaultMessage: 'This field is mandatory'
    },
    isAfter: {
        id: 'Form.validation.global.date.mustBeAfter',
        defaultMessage: 'Start date must be after end date'
    },
    min: {
        id: 'Form.validation.global.min',
        defaultMessage: 'This field must have at least {min} chars'
    },
    max: {
        id: 'Form.validation.global.max',
        defaultMessage: 'This field must have at most {max} chars'
    },
    minNumber: {
        id: 'Form.validation.global.number.min',
        defaultMessage: 'This field must be greater than {min}'
    },
    minEqNumber: {
        id: 'Form.validation.global.number.minEq',
        defaultMessage: 'This field must be greater or equal to  {min}'
    },
    maxEqNumber: {
        id: 'Form.validation.global.number.maxEq',
        defaultMessage: 'This field must be less or equal to {max}'
    },
    maxNumber: {
        id: 'Form.validation.global.number.max',
        defaultMessage: 'This field must be lower than {max}'
    },
    phoneNumber: {
        id: 'Form.validation.global.phoneNumber',
        defaultMessage: 'This field must be a phone number'
    },
    changeDefault: {
        id: 'Form.validation.global.changeNumber',
        defaultMessage: 'Please change this field default value'
    },
    url: {
        id: 'Form.validation.global.url',
        defaultMessage: 'This field must be a valid URL'
    },
    notUrl: {
        id: 'Form.validation.global.notUrl',
        defaultMessage: 'This field must a username and not an URL'
    }
});
