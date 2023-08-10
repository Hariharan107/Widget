import { WalletCards } from "./components/WalletCards/WalletCards";
import Users from "./data/users.json";
const App = () => {
  return <WalletCards {...Users} />;
};

export default App;
