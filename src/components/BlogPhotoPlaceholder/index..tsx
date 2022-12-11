import React from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import avatarPlaceholder from '../../assets/common/avatarPlaceholder.png';

const cx = classNames.bind(styles);

const BlogPhotoPlaceholder = () => {
    return <div className={cx('blogPhotoPlaceholder')}>
        <img src={avatarPlaceholder}
             alt="avatarPlaceholder"
             className={cx('blogPhotoPlaceholder_avatarPlaceholder')}
        />
    </div>
}

export default BlogPhotoPlaceholder;