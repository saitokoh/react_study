import React from "react";
import PostForm from "./Children";
const App = () => {
  const handleSave = () => alert("save");

  return (
    <PostForm onSave={handleSave} />
  );
};
export default App;