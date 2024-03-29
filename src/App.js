import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { GlobalStyle } from './global.styles';

import ShopPage from './pages/shop/shop.component';
// import Checkout from './pages/checkout/checkout.component';

import CollectionsOverviewContainer from './components/collections-overview/collection-overview.container';
import CollectionPageContainer from './pages/collection/collection.container';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { selectCurrentUser } from './redux/user/user.selector';

import { checkUserSession } from './redux/user/user.action';


const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const SignInSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const Checkout = lazy(() => import('./pages/checkout/checkout.component'))


const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Header/>
      <ErrorBoundary>
        <Routes>
          <Route path='/' element={
            <Suspense fallback={<Spinner/>}>
              <HomePage/>
            </Suspense>
          } />
          <Route path='/shop' element={<ShopPage/>} >
            <Route path='/shop' element={<CollectionsOverviewContainer/>} />
            <Route path='/shop/:collectionId' element={<CollectionPageContainer/>} />
          </Route>
          <Route path='/signIn' element={
            currentUser ? 
            <Navigate replace to='/'/> :
            <Suspense fallback={<Spinner/>}>
              <SignInSignUpPage/>
            </Suspense>
          } />
          <Route path='/checkout' element={
            <Suspense fallback={<Spinner/>}>
              <Checkout/>
            </Suspense>
          } />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collections: selectShopCollectionsPreview
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
