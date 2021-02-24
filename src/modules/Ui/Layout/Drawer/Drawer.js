import React from "react";

// import Companies from './Companies.js'
// import New_Company from './new_company.js'

class Drawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
      slides: []
    };
  }

  render() {
    return (
      <section
        id="Drawer"
        className=" fixed sans-serif w-100  db bg-white flex-"
      >
        {this.props.children}
      </section>
    );
  }
}
export default Drawer;
