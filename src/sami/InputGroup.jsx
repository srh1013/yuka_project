import React, { useState } from "react";

import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

const homePageStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh"
};

export default class InputGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div style={homePageStyle}>
      
        <SearchInput onChange={inputValue => this.setState({ inputValue })} />
        <SearchButton barcode={inputValue} />
        
      </div>
    );
    
  }
}

// --------------------------------------------
// VERSION avec hooks
// --------------------------------------------
// export default function HomePage() {
//   const [inputValue, setInputValue] = useState("");
//   return (
//     <div style={homePageStyle}>
//       <SearchButton filter={inputValue} />
//       <SearchInput onChange={inputValue => setInputValue(inputValue)} />
//     </div>
//   );
// }
