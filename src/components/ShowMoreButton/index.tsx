import React from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import arrow from '../../assets/showMoreButton/arrow.png'


const cx = classNames.bind(styles);

const ShowMoreButton = () => {

    return (<div className={cx('showMoreButton')}>

            <button className={cx('showMoreButton_button')}>Show more
                <img src={arrow} className={cx('showMoreButton_button_iconArrow')}/>
            </button>

        </div>
    )
}

export default ShowMoreButton;
