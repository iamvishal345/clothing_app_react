import React, { useEffect, lazy, Suspense } from "react";
import "./App.scss";

//Router
import { Switch, Route, Redirect } from "react-router-dom";

//Components
import Header from "./components/header/header.component";
import { WithSpinner } from "./components/with-spinner/with-spinner-component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
//Redux
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
//Pages
const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const CheckoutPage = lazy(() =>
  import("./pages/checkout/checkout.component.jsx")
);
const SignInAndSignUp = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);
const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <div>
      <ErrorBoundary>
        <Header />
        <Suspense fallback={WithSpinner("loading")({ isLoading: true })}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
              }
            />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
