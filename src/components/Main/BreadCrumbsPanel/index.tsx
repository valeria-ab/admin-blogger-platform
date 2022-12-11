import React from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../../store/store';
import arrowIcon from '../../../assets/breadCrumbs/arrowIcon.png';


const cx = classNames.bind(styles);

const BreadCrumbsPanel = () => {
    const currentSection = useSelector<AppStoreType, 'Blogs' | 'Posts'>(
        ({app}) => app.currentSection,
    );
    const sectionTitle = useSelector<AppStoreType, string | null>(
        ({app}) => app.sectionTitle,
    );

    return (<div className={cx('breadCrumbsPanel')}>
            <h3 className={cx('breadCrumbsPanel_heading')}>{currentSection}</h3>
            {sectionTitle && <>
                <img src={arrowIcon}
                     className={cx('breadCrumbsPanel_arrowIcon')}
                     alt="arrowIcon"/>
                <span className={cx('breadCrumbsPanel_sectionTitle')}>{sectionTitle}</span>
            </>
            }
        </div>
    );
}

export default BreadCrumbsPanel;
