import { Route, Routes } from "react-router-dom";

import CounterRedux from "../components/counter/CounterRedux";
import CounterReduxThunk from "../components/counter/CounterReduxThunk";
import ErrorPage from "../components/errorPage/ErrorPage";
import { ROUTES } from "./routesConstant";

const { BASE, COUNTER_REDUX_THUNK } = ROUTES;

export const routes = () => {
  return (
    <Routes>
      <Route exact path={BASE} element={<CounterRedux />} />
      <Route exact path={COUNTER_REDUX_THUNK} element={<CounterReduxThunk />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
