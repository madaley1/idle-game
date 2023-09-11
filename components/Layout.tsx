// react imports
import React, {ReactNode} from "react";

// next imports
import Head from 'next/head';

//style imports
import styles from '@/styles/components/Layout.module.scss';

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
      <div className={styles.layout}>
        {props.children}
      </div>
  </>
)};

export default Layout;
