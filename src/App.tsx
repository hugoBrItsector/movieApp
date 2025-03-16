import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { LandingPage } from "./components/landingPage";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LandingPage />
      </div>
    </Provider>
  );
}

export default App;
