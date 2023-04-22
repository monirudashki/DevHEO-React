import React from "react";
import "./App.css";

import { AuthProvider } from "./Contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">Hello world</div>
    </AuthProvider>
  );
}

export default App;
