import React from "react";
import { Route } from "react-router-dom";
import CategoryPage from "../collection/collection.component";
import "./shop.style.scss";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
  </div>
);

export default ShopPage;
