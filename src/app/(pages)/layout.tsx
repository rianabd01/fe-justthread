"use client";
import { Provider } from "react-redux";
import store from "../../states";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import Navigation from "../../components/Navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Header />
          <Loading />
          <div className="container contents-wrap">
            <Navigation />
            <main>{children}</main>
          </div>
        </Provider>
      </body>
    </html>
  );
}
