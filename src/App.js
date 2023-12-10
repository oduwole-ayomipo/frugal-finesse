import "./App.css";
import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <div
      className="text-purple-dark mx-auto max-w-7xl"
      data-testid="app-container"
    >
      <Landing />
    </div>
  );
}

export default App;
