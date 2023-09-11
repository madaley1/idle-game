import React, {useEffect} from 'react';

import Layout from '@/components/Layout'

import styles from '@/styles/pages/index.module.scss'
import Clicker from '@/components/Clicker';

const Home = () => {

  useEffect(() => {
    if(localStorage.getItem('idle_valueData') === null) localStorage.setItem('idle_valueData', JSON.stringify({
      currentValue: 0,
      incrementRate: 0,
      incrementModifiers: [],
      decrementRate: 0,
      lastUpdated: Date.now(),
    }));
  }, []);
  
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