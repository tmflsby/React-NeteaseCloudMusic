import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './App';
import store from "./store";

import { fetchList } from "./api/user";

const TestComp = () => {
  useEffect(() => {
    fetchList().then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })

    return () => {}
  }, [])

  return <div>测试组件</div>
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <TestComp/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
