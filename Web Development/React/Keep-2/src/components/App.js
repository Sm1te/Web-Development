import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map(noteItem => (
        <Note
        title = {noteItem.title}
        content = {noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
