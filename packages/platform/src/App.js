import { formatDate } from "@certa/common";

export default function App() {
  return <h1>Print date: {formatDate(new Date())}</h1>;
}
