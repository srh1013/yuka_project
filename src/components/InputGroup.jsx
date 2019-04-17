import React from "react";

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
      <div style={homePageStyle} className="w-80 p-3" style={{backgroundColor:"rgb(247, 211, 6)"}}>
      
        <SearchInput onChange={inputValue => this.setState({ inputValue })} />
        <SearchButton barcode={inputValue} />
        
      </div>
    );
    
  }
}

