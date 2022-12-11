import React from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import blogAvatarPlaceholder from '../../assets/common/avatarPlaceholder.png';

const cx = classNames.bind(styles);

const WallpaperPlaceholder = () => {
    return <div className={cx('wallpaperPlaceholder')}>
        <img src={blogAvatarPlaceholder}
             alt="wallpaperPlaceholder"
             className={cx('wallpaperPlaceholder_avatarPlaceholder')}
        />
    </div>
}

export default WallpaperPlaceholder;