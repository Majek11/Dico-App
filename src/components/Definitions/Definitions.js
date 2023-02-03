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
              <div className="singlemean" style={{backgroundColor: 'white', color: 'black'}}>
                <b>{def.definition}</b>
                <hr style={{backgroundColor: 'black', width: '100%'}} />
                {
                  def.example && (
                    <span>
                      <b>Example : </b> {def.example}
                    </span>
                  )
                }
              </div>
            ))
        )))
      )}
    </div>
  );
};

export default Definitions;
