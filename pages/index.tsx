import React from 'react';

import Layout from '@/components/Layout'

import styles from '@/styles/pages/index.module.scss'
import Clicker from '@/components/Clicker';

const Home = () => {
  return(
    <Layout>
      <div
        className={styles.home}
      >
        <div className={styles.clicker}>
          <h3 className='text-center'>The Clicker</h3>
          <Clicker />
        </div>
        <div className={styles.menu}>
          <h3 className='text-center'>The Menu</h3>
        </div>

      </div>
    </Layout>
  )
}

export default Home