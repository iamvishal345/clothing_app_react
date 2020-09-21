import React, { useEffect, lazy, Suspense } from "react";
//styles
import "./shop.style.scss";

//Routing
import { Route } from "react-router-dom";

import { WithSpinner } from "../../components/with-spinner/with-spinner-component";

//Redux
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
//Other Components
const CollectionPageContainer = lazy(() =>
  import("../collection/collection.container")
);
const CollectionsOverviewContainer = lazy(() =>
  import("../../components/collection-overview/collection-overview.container")
);
const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={WithSpinner("loading")({ isLoading: true })}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:categoryId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
