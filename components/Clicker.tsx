// react imports
import React, {ReactNode} from "react";

// next imports
import Image from 'next/image';

// image import
import sword from '@/assets/images/sword.jpg'

//style imports
import styles from '@/styles/components/Clicker.module.scss';

//types
type Props = {
};

const Clicker: React.FC<Props> = (props) => {
  return (
    <div>
      <Image id={styles.clickerImage} src={sword} alt="sword to click on" layout="responsive" />
    </div>
)};

export default Clicker;
