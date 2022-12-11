import React, {useState} from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, AppStoreType} from '../../store/store';
import {setCurrentSection} from '../../store/appReducer';


const cx = classNames.bind(styles);

const SideBar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const currentSection = useSelector<AppStoreType, "Blogs" | "Posts">(
        ({ app }) => app.currentSection,
    );

    return (<div className={cx('sidebar')}>
            <div className={cx('sidebar_container')}>
                <NavLink to={'/blogs'} onClick={() => dispatch(setCurrentSection('Blogs'))}>
                    <div className={cx('sidebar_buttonWrapper sidebar_buttonWrapper_blogs', {
                        sidebar_buttonWrapper_blogs_active: currentSection === 'Blogs',
                        sidebar_buttonWrapper_active: currentSection === 'Blogs'
                    })}>
                        <div className={cx('sidebar_buttonWrapper_button')}>
                            Blogs
                        </div>
                    </div>
                </NavLink>
                <NavLink to={'/posts'} onClick={() => dispatch(setCurrentSection('Posts'))}>
                    <div className={cx('sidebar_buttonWrapper sidebar_buttonWrapper_posts', {
                        sidebar_buttonWrapper_posts_active: currentSection === 'Posts',
                        sidebar_buttonWrapper_active: currentSection === 'Posts'
                    })}>
                        <div className={cx('sidebar_buttonWrapper_button')}>
                            Posts
                        </div>
                    </div>
                </NavLink>
            </div>


        </div>
    )
        ;
}

export default SideBar;
