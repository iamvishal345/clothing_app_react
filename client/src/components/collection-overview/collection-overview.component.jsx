import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collection-overview.style.scss";
import { selectCollections } from "../../redux/shop/shop.selector";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections
      ? Object.keys(collections).map((key) => {
          const { id, ...otherProps } = collections[key];
          return <CollectionPreview key={id} {...otherProps} />;
        })
      : ""}
  </div>
);

const mapStateToProps = () =>
  createStructuredSelector({
    collections: selectCollections,
  });
export default connect(mapStateToProps)(CollectionOverview);
