import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss";
import SECTION_DATA from "../../utils/section.data";
class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: SECTION_DATA,
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...sections }) => (
          <MenuItem key={id} {...sections} />
        ))}
      </div>
    );
  }
}

export default Directory;
