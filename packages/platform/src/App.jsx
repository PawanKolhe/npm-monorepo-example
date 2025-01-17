import { IntlProvider } from "react-intl";
import { Welcome } from "@certa/common/src/Welcome.jsx";

// Translated messages in French with matching IDs to what you declared
const messages = {
  myMessage: "Hello world, welcome to the Certa platform!"
};

export default function App() {
  return (
    <IntlProvider messages={messages} locale="fr" defaultLocale="en">
      <Welcome />
    </IntlProvider>
  );
}
