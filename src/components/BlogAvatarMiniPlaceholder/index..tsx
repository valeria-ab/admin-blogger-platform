import React from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import avatarPlaceholder from '../../assets/common/avatarPlaceholder.png';

const cx = classNames.bind(styles);

const BlogAvatarMiniPlaceholder = () => {
    return <div className={cx('blogAvatarMiniPlaceholder')}>
        <img src={avatarPlaceholder}
             alt="avatarPlaceholder"
             className={cx('blogAvatarMiniPlaceholder_avatarPlaceholder')}
        />
    </div>
}

export default BlogAvatarMiniPlaceholder;