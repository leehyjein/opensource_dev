import React from "react";
import Input from "./components/Input";
import List from "./components/List";
import Footer from "./components/Footer";
import { DataProvider } from "./components/DataProvider";
function App() {
  return (
    <DataProvider>
      <div className="Wrapper">
        <h1> TO DO LIST</h1>
        <Input />
        <List />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
