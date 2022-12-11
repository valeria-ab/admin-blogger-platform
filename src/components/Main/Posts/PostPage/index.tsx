import React, {useEffect} from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import {NavLink, useParams} from 'react-router-dom';
import arrowBack from '../../../../assets/common/arrowBack.png';
import WallpaperPlaceholder from '../../../WallpaperPlaceholder/index.';
import BlogAvatarMiniPlaceholder from '../../../BlogAvatarMiniPlaceholder/index.';
import {getPostTC} from '../../../../store/postsReducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, AppStoreType} from '../../../../store/store';
import {PostResponse} from '../../../../utils/api';


const cx = classNames.bind(styles);

const PostPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const params = useParams()

    const currentPost = useSelector<AppStoreType, PostResponse>(
        ({posts}) => posts.currentPost,
    );


    useEffect(() => {
        params.id && dispatch(getPostTC(params.id))
    }, [params.id])


    return (<div className={cx('postPage')}>
            <NavLink to={'/posts'}>
                <div className={cx('postPage_navigationButton')}>
                    <img src={arrowBack} alt="arrowBack"/>
                    <span>Back to posts</span>
                </div>
            </NavLink>
            <div className={cx('postPage_blogName')}>
                <BlogAvatarMiniPlaceholder/>
                <h4 className={cx('postPage_blogName_heading')}>
                    {currentPost?.bloggerName}
                </h4>
            </div>
            <div className={cx('postPage_postData')}>
                <div className={cx('postPage_postData_headingBlock')}>
                    <h3 className={cx('postPage_postData_headingBlock_heading')}>{currentPost?.title}</h3>
                    <span className={cx('postPage_postData_additionalInfo')}>(for public posts)</span>
                </div>

                <p className={cx('postPage_postData_additionalInfo')}>{currentPost?.createdAt}</p>
            </div>
            <WallpaperPlaceholder/>
            <p className={cx('postPage_content')}>
                {currentPost?.content}
            </p>

        </div>
    );
}

export default PostPage;
