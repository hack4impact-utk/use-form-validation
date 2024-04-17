# useFormValidation

This package contains a single React hook for implementing form validation using Zod in React applications.

## Installation

```bash
npm install @hack4impact-utk/use-form-validation
```

## Usage

In a component, you can simply import the `useFormValidation` hook, and call it with the Zod schema you are going to use to validate the form.

```tsx
import { useFormValidation } from '@hack4impact-utk/use-form-validation';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

function MyComponent() {
  const validate = useFormValidation(schema);

  ...

  return (...)
}
```

## TODO

- [ ] Add tests
- [ ] Add examples
- [ ] Add documentation
