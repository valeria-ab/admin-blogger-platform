import React, {useEffect} from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import BlogPreview from './BlogPreview';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, AppStoreType} from '../../../store/store';
import {getBlogsTC} from '../../../store/blogsReducer';
import {BlogPreviewType} from '../../../utils/api';
import ShowMoreButton from '../../ShowMoreButton';
import Input from '../Input';
import Select from '../Select';


const cx = classNames.bind(styles);

const Blogs = () => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getBlogsTC())
    }, [])

    const blogs = useSelector<AppStoreType,
        Array<BlogPreviewType>>((state) => state.blogs.items);


    return (<div className={cx('blogs')}>
            {/*функциональность в разработке*/}
            {/*<div style={{*/}
            {/*    display: "flex",*/}
            {/*    justifyContent: "space-between"*/}
            {/*}}>*/}
            {/*    <Input/>*/}
            {/*    <Select/>*/}
            {/*</div>*/}
            {/*функциональность в разработке*/}

            {blogs?.map(blog => <BlogPreview key={blog.id}
                                     id={blog.id}
                                     name={blog.name}
                                     websiteUrl={blog.websiteUrl}
                                     description={blog.description}
            />)}
            {/*функциональность в разработке*/}
            {/*<ShowMoreButton />*/}
            {/*функциональность в разработке*/}

        </div>
    );
}

export default Blogs;
