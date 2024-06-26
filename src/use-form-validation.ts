import { z } from 'zod';
import type { ZodFormattedError, ZodType } from 'zod';

/**
 * This hook is used to validate form data using a Zod schema.
 * @param zodSchema The Zod schema to use for validation
 * @returns An object with a `validate` function that takes the form data and returns an object with the errors for each field, or null if the data is valid
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useFormValidation<TZod extends ZodType<any, any, any>>(
  zodSchema: TZod
) {
  type Data = z.infer<TZod>;
  return (data: Data): ZodFormattedError<Data> | null => {
    // Have to use a weird `as` hack here to get types working properly
    const result = (zodSchema as ZodType<Data>).safeParse(data);
    if (result.success) {
      // If the data is valid, return null
      return null;
    }

    // If the data is invalid, return an object with the errors for each field
    return result.error.format();
  };
}
