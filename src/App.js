import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Checkout from './pages/checkout/checkout.component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import CollectionsOverviewContainer from './components/collections-overview/collection-overview.container';
import CollectionPageContainer from './pages/collection/collection.container';

import Header from './components/header/header.component';

import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';
// import { selectShopCollectionsPreview } from './redux/shop/shop.selector';
// import { createCollection } from './firebase/firebase.utils';

const App = ({ setCurrentUser, currentUser/*, collections*/ }) => {
  // let unsubscribeFromAuth = null;

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        })
      }
      else {
        setCurrentUser(userAuth);
      }
    });

    // createCollection('collections', collections.map(({ title, items }) => ({ title, items })));

    return () => {
      unsubscribeFromAuth();
    }
  }, []);

  return (
    <div>
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
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
