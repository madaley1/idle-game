// react imports
import React, {MouseEventHandler, ReactNode} from "react";

// next imports
import Image from 'next/image';

// image import
import sword from '@/assets/images/sword.jpg'

//style imports
import styles from '@/styles/components/Clicker.module.scss';

//types
type Props = {
};

const manualIncrementer = () => {
  console.log('clicked');
  const valueData = localStorage.getItem('idle_valueData');
  if(!valueData || valueData === null) return new Error('data is null, please refresh the page');
};

const Clicker: React.FC<Props> = (props) => {
  return (
    <div onClick={manualIncrementer}>
      <Image id={styles.clickerImage} src={sword} alt="sword to click on" layout="responsive" />
    </div>
)};

export default Clicker;
