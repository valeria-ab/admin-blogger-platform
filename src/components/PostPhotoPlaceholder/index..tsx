import React from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import avatarPlaceholder from '../../assets/common/avatarPlaceholder.png';

const cx = classNames.bind(styles);

const PostPhotoPlaceholder = () => {
    return <div className={cx('postPhotoPlaceholder')}>
        <img src={avatarPlaceholder}
             alt="avatarPlaceholder"
             className={cx('postPhotoPlaceholder_avatarPlaceholder')}
        />
    </div>
}

export default PostPhotoPlaceholder;