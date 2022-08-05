import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Account from "components/Account";
import { Layout} from "antd";
import "antd/dist/antd.css";
import "./style.css";
import Main from "components/Main"
const { Header} = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
          <Logo />
          <div style={styles.headerRight}>
            <Account />
          </div>
        </Header>
        <div style={styles.content}>
          <Switch>
            <Route path="/main">
                <Main/>
            </Route>
            <Route path="/nonauthenticated">
            <h3>Please login using the "Authenticate" button<br>
                <?xml version="1.0" encoding="UTF-8"?>
                  <svg version="1.1" viewBox="0 0 194.21 221" xmlns="http://www.w3.org/2000/svg">
                    <path d="M96.853 20.5l74.531 127.929L22.321 72.57 96.853 200.5l74.531-127.929L22.321 148.43 96.853 20.5z" fill="none" stroke="#000" stroke-width="10"/>
                  </svg>
            </svg></h3>
            </Route>
          </Switch>
          {isAuthenticated ? <Redirect to="/main" /> : <Redirect to="/nonauthenticated" />}
        </div>
      </Router>
    </Layout>
  );
};

export const Logo = () => <h4>TiFi</h4>

export default App;
