import { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from "./routers/app.routes";

export default function App() {
  return (
    <Fragment>
      <Routes/>
      <StatusBar style="dark" />
    </Fragment>
  );
}
