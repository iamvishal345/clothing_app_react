import React from "react";

import "./shop.style.scss";
import SHOP_DATA from "../../utils/shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
class ShopPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      collection: SHOP_DATA,
    };
  }
  render() {
    const { collection } = this.state;
    return (
      <div className="shop-page">
        {collection.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
