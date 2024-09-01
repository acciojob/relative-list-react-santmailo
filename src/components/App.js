import React from "react";

const App = () => {
  const relatives = ["Relative1", "Relative2", "Relative3"]; // add your relatives' names here

  return (
    <div id="main">
      {/* Do not remove the main div */}
      <ol key="relativeList" id="relativeList">
        {relatives.map((relative, index) => (
          <li
            id={`relativeListItem${index + 1}`}
            key={`relativeListItem${index + 1}`}
          >
            {relative}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;
