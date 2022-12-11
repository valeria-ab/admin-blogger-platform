import React from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import {Navigate, Route, Routes} from 'react-router-dom';
import Blogs from './Blogs';
import Posts from './Posts';
import BreadCrumbsPanel from './BreadCrumbsPanel';
import BlogPage from './Blogs/BlogPage';
import PostPage from './Posts/PostPage';


const cx = classNames.bind(styles);

const Main = () => {

    return (<div className={cx('main')}>

            <BreadCrumbsPanel/>

            <Routes>
                <Route path={'/'} element={<Navigate to="/blogs"/>}/>
                <Route path={'/blogs/'} element={<Blogs/>}/>
                <Route path={'/posts/*'} element={<Posts/>}/>
                <Route path={'/posts/:id'} element={<PostPage/>}/>
                <Route path={'/blogs/:id'} element={<BlogPage />}/>

                <Route path={'404'} element={<div>404</div>}/>
                <Route path={'*'} element={<Navigate to="/404"/>}/>
            </Routes>

        </div>
    );
}

export default Main;
