// react imports
import React, {ReactNode} from "react";

// next imports
import Head from 'next/head';

//types
type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  return (
  <>
    <Head>
      <title>Idle Game</title>
    </Head>
    <div>
      <div className="layout">
        {props.children}
      </div>
    </div>
  </>
)};

export default Layout;
