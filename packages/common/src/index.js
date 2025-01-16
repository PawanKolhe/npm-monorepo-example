/**
 * This is a phantom dependency because it is not listed 
 * in the package.json of this package.
 * 
 * This `date-fns` is being used from root `node_modules` 
 * directory which contains `date-fns` v1, a transitive
 * dependency of `cypress` package. 
 * 
 * This is bad because the version of `date-fns` being used
 * here is currently dependent on `cypress` package.
 */
import { format } from "date-fns";

export const formatDate = (date) => {
  return format(
    date,
    // date-fns v1 format
    "DD/MM/YYYY"
  );
};
