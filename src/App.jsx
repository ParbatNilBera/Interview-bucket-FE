import UserProvider from "./context/UserContext";
import Display from "./Display";

const App = () => {
  return (
    <div>
      <UserProvider>
        <Display />
      </UserProvider>
    </div>
  );
};

export default App;
