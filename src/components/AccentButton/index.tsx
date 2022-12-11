import React from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';



const cx = classNames.bind(styles);

const Header = () => {
  return (<div className={cx('header')}>

    <div className={cx('header_headerContainer')}>
      <div className={cx('header_headerContainer_heading')}>
        <h1 className={cx('header_headerContainer_heading_mainHeading')}> Blogger Platform</h1>
        <span className={cx('header_headerContainer_heading_superadmin')}>Superadmin</span>
      </div>
        </div>

      </div>
  );
}

export default Header;
