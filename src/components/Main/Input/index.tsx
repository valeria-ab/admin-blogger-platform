import React from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';



const cx = classNames.bind(styles);

const Input = () => {

    return (<div className={cx('inputWrapper')}>

<input className={cx('inputWrapper_input')}
       placeholder={"Search"}
/>

        </div>
    );
}

export default Input;
