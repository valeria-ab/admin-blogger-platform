import React from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';



const cx = classNames.bind(styles);

const Header = () => {
  return (<div className={cx('header')}>

    <div className={cx('headerContainer')}>
        <h1 className={cx('heading')}> Blogger Platform</h1>
    </div>

      </div>
  );
}

export default Header;
