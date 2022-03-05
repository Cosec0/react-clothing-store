import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import './App.css';
import { GlobalStyle } from './global.styles';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Checkout from './pages/checkout/checkout.component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import CollectionsOverviewContainer from './components/collections-overview/collection-overview.container';
import CollectionPageContainer from './pages/collection/collection.container';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selector';

import { checkUserSession } from './redux/user/user.action';


const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/shop' element={<ShopPage/>} >
          <Route path='/shop' element={<CollectionsOverviewContainer/>} />
          <Route path='/shop/:collectionId' element={<CollectionPageContainer/>} />
        </Route>
        <Route path='/signIn' element={
          currentUser ? 
          <Navigate replace to='/'/> :
          <SignInSignUpPage/>
        } />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
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
