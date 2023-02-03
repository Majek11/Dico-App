import React from "react";
import "./Definitions.css";

const Definitions = ({ word, category, meanings }) => {
  return (
    <div className="meanings">
      {word === "" ? (
        <span className="subtitle">Start by typing a word in the search</span>
      ) : (
        meanings.map((mean) => mean.meanings.map((item) => (
            item.definitions.map((def) => (
              <div className="singlemean" style={{backgrounColor: 'white', color: 'black'}}>
                <b>{def.definition}</b>
              </div>
            ))
        )))
      )}
    </div>
  );
};

export default Definitions;
