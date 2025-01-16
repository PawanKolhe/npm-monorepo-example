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
 *
 * Removing `cypress` from root `package.json` will change
 * the version of `date-fns` being used here to v2.
 */
import { format } from "date-fns";

// date-fns v1 format
export const DATE_FORMAT = "DD/MM/YYYY";

export const formatDate = (date) => {
  return format(date, DATE_FORMAT);
};
