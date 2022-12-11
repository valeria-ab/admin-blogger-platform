import React from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import {BlogPreviewType} from '../../../../utils/api';
import {getBlogTC} from '../../../../store/blogsReducer';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../../../store/store';
import {NavLink} from 'react-router-dom';
import BlogPhotoPlaceholder from '../../../BlogPhotoPlaceholder/index.';
import {setSectionTitle} from '../../../../store/appReducer';


const cx = classNames.bind(styles);

type BlogPropsType = BlogPreviewType & { key?: string }

const BlogPreview = ({
                         id,
                         name,
                         description,
                         websiteUrl,
                     }: BlogPropsType) => {

    const dispatch = useDispatch<AppDispatch>();


    return (<div className={cx('blogPreview')}
                 onClick={() => {
                     dispatch(setSectionTitle({sectionTitle: name}))
                     dispatch(getBlogTC(id))
                 }}>
            <NavLink to={`/blogs/${id}`}>
                <BlogPhotoPlaceholder/>
            </NavLink>
            <div className={cx('blogPreview_data')}>
                <NavLink to={`/blogs/${id}`}>
                    <h3 className={cx('blogPreview_data_heading')}>{name}</h3>
                </NavLink>
                <div className={cx('blogPreview_data_website')}>Website &nbsp;
                    <a href="https://www.youtube.com/">
                        {websiteUrl}
                    </a>
                </div>
                <p className={cx('blogPreview_data_description')}>{description && description}
                </p>
            </div>


        </div>
    );
}


export default BlogPreview;
