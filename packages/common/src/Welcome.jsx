import { useIntl } from "react-intl";

export const Welcome = () => {
  const intl = useIntl();

  return (
    <h1>
      {intl.formatMessage({
        id: "myMessage",
        defaultMessage: "Hello world"
      })}
    </h1>
  );
};

