import React, { Component, useContext, useReducer } from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import PersonList from "./components/PersonList";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";
import "./components/appStyles.css";
import styles from "./components/appStyles.module.css";
import Form from "./components/Form";
import LifeCycleA from "./LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import ClassCounter from "./components/hooks/useState/ClassCounter";
import FunctionCounter from "./components/hooks/useState/FunctionCounter";
import ObjectState from "./components/hooks/useState/ObjectState";
import ArrayState from "./components/hooks/useState/ArrayState";
import UpdateTitle from "./components/hooks/useEffect/UpdateTitle";
import RunEffectOnce from "./components/hooks/useEffect/RunEffectOnce";
import CleanupDemo from "./components/hooks/useEffect/CleanupDemo";
import IntervalCounter from "./components/hooks/useEffect/IntervalCounter";
import DataFetching from "./components/hooks/useEffect/DataFetching";
import FetchSinglePost from "./components/hooks/useEffect/FetchSinglePost";
import PropDrilling from "./components/hooks/useContext/PropDrilling";
import ContextApi from "./components/hooks/useContext/ContextApi";
import SimpleStateAction from "./components/hooks/useReducer/SimpleStateAction";
import ComplexStateAction from "./components/hooks/useReducer/ComplexStateAction";
import MultipleUseReducers from "./components/hooks/useReducer/MultipleUseReducers";
import ComponentA from "./components/hooks/useReducer/ComponentA";
import DataFetching1 from "./components/hooks/useReducer/DataFetching1";
import DataFetching2 from "./components/hooks/useReducer/DataFetching2";
import { Routes, Route } from "react-router-dom";
import Home from "./components/react-router/Home";
// import About from "./components/react-router/About";
import Navbar from "./components/react-router/Navbar";
import OrderSummary from "./components/react-router/OrderSummary";
import NoMatchRoute from "./components/react-router/NoMatchRoute";
import Products from "./components/react-router/Products";
import FeaturedProducts from "./components/react-router/FeaturedProducts";
import NewProducts from "./components/react-router/NewProducts";
import Users from "./components/react-router/Users";
import UserDetails from "./components/react-router/UserDetails";
import Admin from "./components/react-router/Admin";
import About from "./components/react-router/About";
// const LazyAbout = React.lazy(() => {
//   import("./components/react-router/About");
// });

const CounterContext = React.createContext();

// !initialState
const initialState = 0;

// !reducer
const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const App = () => {
  // !useReducer
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <div>
        {/* TODO: ===== BASICS OF REACT =====*/}
        {/* <Greet name="John" gender="male">
          <p>This is children</p>
        </Greet> */}
        {/* <Greet name="Jane" gender="female" /> */}
        {/* <Welcome name="Peter" gender="male" /> */}
        {/* <Welcome name="Maya" gender="female" /> */}
        {/* <Hello /> */}

        {/* <Message /> */}

        {/* <Counter/> */}

        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}

        {/* <EventBind /> */}

        {/* <ParentComponent /> */}

        {/* <UserGreeting/> */}
        {/* <NameList /> */}

        {/* <PersonList /> */}

        {/* <StyleSheet primary={true}/> */}
        {/* <Inline /> */}
        {/* <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1> */}

        {/* <Form/> */}

        {/* <LifeCycleA /> */}

        {/* <FragmentDemo /> */}
        {/* <Table /> */}

        {/* <ParentComp /> */}

        {/* TODO: ===== HOOKS ===== */}

        {/* ===== useState ===== */}
        {/* <ClassCounter/> */}
        {/* <FunctionCounter /> */}
        {/* <ObjectState/> */}
        {/* <ArrayState /> */}

        {/* ===== useEffect ===== */}
        {/* <UpdateTitle /> */}
        {/* <RunEffectOnce /> */}
        {/* <CleanupDemo/> */}
        {/* <IntervalCounter /> */}
        {/* <DataFetching /> */}
        {/* <FetchSinglePost /> */}

        {/* ===== useContext ===== */}
        {/* <PropDrilling /> */}
        {/* <ContextApi /> */}

        {/* ===== useReducer ===== */}
        {/* <SimpleStateAction/> */}
        {/* <ComplexStateAction /> */}
        {/* <MultipleUseReducers /> */}
        {/* 
            {state}
            <ComponentA /> 
        */}

        {/* ===== data fetching with useReducer ===== */}
        {/* <DataFetching1 /> */}
        {/* <DataFetching2 /> */}

        {/* TODO: ===== react-router ===== */}
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="about"
            element={
              <About />
              // <React.Suspense fallback="Loading...">
              //   <LazyAbout />
              // </React.Suspense>
            }
          />

          <Route exact path="order-summary" element={<OrderSummary />} />

          <Route path="*" element={<NoMatchRoute />} />

          <Route path="products" element={<Products />}>
            {/* specifying that a route should be rendered at the parent URL */}
            <Route index element={<FeaturedProducts />} />

            {/* child elements/rendered using <Outlet/> */}
            {/* /products/featured */}
            <Route path="featured" element={<FeaturedProducts />} />
            {/* /products/new */}
            <Route path="new" element={<NewProducts />} />
          </Route>

          {/* nested */}
          <Route path="users" element={<Users />}>
            {/*  dynamic routes*/}
            <Route path=":userId" element={<UserDetails />} />
            {/* rendered/more specific */}
            <Route path="admin" element={<Admin />} />
          </Route>
        </Routes>

        {/* ===== useCallback ===== */}
      </div>
    </CounterContext.Provider>
  );
};

export default App;

// !useGlobalContext: to be used anywhere
export const useGlobalContext = () => {
  return useContext(CounterContext);
};

// TODO: steps when using useContext hook include:
// React.createContext()
// wrap return of root Component in CounterContext.Provider
// pass in value attribute
// export useGlobalContext
// const {dispatch} = useGlobalContext()
