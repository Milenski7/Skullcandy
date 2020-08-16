import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { ToastContainer } from 'react-toastify';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import HomePage from './routes//HomePage/home';
import Login from './routes/User/Login/login';
import Register from './routes/User/Register/register';
import Logout from './routes/User/Logout/logout';
import Dashboard from './routes/User/Dashboard/dashboard';
import Shop from './routes/Shop/shop';
import IndyFuel from './routes/Products/IndyFuel/indyFuel';
import PushUltra from './routes/Products/PushUltra/pushUltra';
import StrongBundle from './routes/Products/StrongBundle/strongBundle';
import IndyEvo from './routes/Products/IndyEvo/indyEvo';
import SeshEvo from './routes/Products/SeshEvo/seshEvo';
import Indy from './routes/Products/Indy/indy';
import Hesh3 from './routes/Products/Hesh3/hesh3';
import IconWireless from './routes/Products/IconWireless/iconWireless';
import RiffWireless from './routes/Products/RiffWireless/riffWireless';
import MethodActive from './routes/Products/Method-Active/methodActive';
import InkdPlus from './routes/Products/InkdPlus/inkdPlus';
import InkdWireless from './routes/Products/InkdWireless/inkdWireless';
import Cart from './routes/Cart/cart';
import MoodBoost from './routes/MoodBoost/moodBoost';
import InsideSkullcandy from './routes/InsideSkullcandy/home';
import Mission from './routes/InsideSkullcandy/Mission/mission';
import Culture from './routes/InsideSkullcandy/Culture/culture';
import Partners from './routes/InsideSkullcandy/Partners/partners';
import Team from './routes/InsideSkullcandy/Team/team';
import Search from './components/searchBar/search';
import 'react-toastify/dist/ReactToastify.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './App.css';

function App() {
  const [curUser, setCurUser] = useState(null);
  const [x, setX] = useState(150);

  useEffect(() => {
    try {
      const token = localStorage.getItem('user-token');
      const cur = jwtDecode(token);
      setCurUser(cur);
    } catch (ex) {

    }
  }, []);

  return (
    <React.Fragment>
      <ToastContainer />
      <Navbar curUser={curUser} newSetX={setX} />
      <Search x={x} setX={setX} />
      <Switch>
        {!curUser && <Route path="/register" exact component={Register} />}
        {!curUser && <Route path="/login" exact component={Login} />}
        {curUser && <Redirect from="/login" to="/" />}
        {curUser && <Redirect from="/register" to="/" />}
        {curUser && <Route path="/logout" exact component={Logout} />}
        {curUser && <Route path="/user" exact render={props => <Dashboard {...props} curUser={curUser} />} />}
        {!curUser && <Redirect from="/user" to="/" />}
        <Route path="/shop" exact component={Shop} />
        <Route path="/shop/indy-fuel" exact component={IndyFuel} />
        <Route path="/shop/push-ultra" exact component={PushUltra} />
        <Route path="/shop/strong-bundle" exact component={StrongBundle} />
        <Route path="/shop/indy-evo" exact component={IndyEvo} />
        <Route path="/shop/sesh-evo" exact component={SeshEvo} />
        <Route path="/shop/indy" exact component={Indy} />
        <Route path="/shop/hesh-3" exact component={Hesh3} />
        <Route path="/shop/icon-wireless" exact component={IconWireless} />
        <Route path="/shop/riff-wireless" exact component={RiffWireless} />
        <Route path="/shop/method-active" exact component={MethodActive} />
        <Route path="/shop/inkd-plus-active-earbuds" exact component={InkdPlus} />
        <Route path="/shop/inkd-plus-wireless-earbuds" exact component={InkdWireless} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/mood-boost" exact component={MoodBoost} />
        <Route path="/inside-skullcandy" exact component={InsideSkullcandy} />
        <Route path="/inside-skullcandy/mission" exact component={Mission} />
        <Route path="/inside-skullcandy/culture" exact component={Culture} />
        <Route path="/inside-skullcandy/partners" exact component={Partners} />
        <Route path="/inside-skullcandy/team" exact component={Team} />
        <Route path="/" exact component={HomePage} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default App;
