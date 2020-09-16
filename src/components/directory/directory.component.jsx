import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectory } from "../../redux/directory/directory.selector";

const Directory = ({ directory }) => (
  <div className="directory-menu">
    {directory.map(({ id, ...sections }) => (
      <MenuItem key={id} {...sections} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  directory: selectDirectory,
});
export default connect(mapStateToProps)(Directory);
