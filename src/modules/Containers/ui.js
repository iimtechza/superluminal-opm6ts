import React from "react";

class Ui extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      one: 0,
      two: 0,
      three: false,
      active: 0
    };
  }

  render() {
    return (
      <App.Provider
        value={{
          state: this.state,
          Ui: this
        }}
      >
        {this.props.children}
      </App.Provider>
    );
  }
}

export default Ui;
