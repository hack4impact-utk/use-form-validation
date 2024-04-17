export { default as useFormValidation } from './use-form-validation';

export type ValidationErrors<T> = Record<keyof T, string>;
