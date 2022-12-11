import React, {useEffect} from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import PostPhotoPlaceholder from '../../../PostPhotoPlaceholder/index.';
import ShowMoreButton from '../../../ShowMoreButton';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, AppStoreType} from '../../../../store/store';
import {NavLink, useParams} from 'react-router-dom';
import {getBlogTC, getPostsForSpecifiedBlogTC} from '../../../../store/blogsReducer';
import {BlogResponseType, PostResponse} from '../../../../utils/api';
import BlogPhotoPlaceholder from '../../../BlogPhotoPlaceholder/index.';
import arrowBack from '../../../../assets/common/arrowBack.png';
import WallpaperPlaceholder from '../../../WallpaperPlaceholder/index.';

const cx = classNames.bind(styles);


const BlogPage = () => {

    const dispatch = useDispatch<AppDispatch>();
    const params = useParams()

    const currentBlog = useSelector<AppStoreType, BlogResponseType>(
        ({blogs}) => blogs.currentBlog,
    );
    const postsForSpecifiedBlog = useSelector<AppStoreType, Array<PostResponse>>(
        ({blogs}) => blogs.postsForSpecifiedBlog.items,
    );


    useEffect(() => {
        params.id && dispatch(getBlogTC(params.id))
        params.id && dispatch(getPostsForSpecifiedBlogTC(params.id))
    }, [params.id])

    return (<div className={cx('blogPage')}>

            <NavLink to={'/blogs'}>
                <div className={cx('blogPage_navigationButton')}>
                    <img src={arrowBack} alt="arrowBack"/>
                    <span>Back to blogs</span>
                </div>
            </NavLink>

            <WallpaperPlaceholder/>


            <div className={cx('blogPage_infoBlock')}>
                <BlogPhotoPlaceholder/>

                <div className={cx('blogPage_infoBlock_data')}>
                    <h3 className={cx('blogPage_infoBlock_data_heading')}>{currentBlog.name}</h3>
                    <div className={cx('blogPage_infoBlock_data_additionalBlogInformation')}>
                        Blog creation date: &nbsp;
                        <span>{currentBlog.createdAt}</span>
                    </div>
                    <div className={cx('blogPage_infoBlock_data_additionalBlogInformation')}>Website &nbsp;
                        <a href="https://www.youtube.com/">
                            {currentBlog.websiteUrl}
                        </a>
                    </div>
                    <p className={cx('blogPage_infoBlock_data_description')}>{currentBlog?.description}
                    </p>
                </div>
            </div>


            <div className={cx('blogPage_posts')}>
                {
                    postsForSpecifiedBlog?.length > 0
                        ? postsForSpecifiedBlog.map(i => <BlogPagePostPreview
                            key={i.id}
                            id={i.id}
                            date={i.createdAt}
                            description={i.shortDescription}
                            title={i.title}/>)
                        : <div>There are no posts yet</div>
                }

            </div>
            <ShowMoreButton/>

        </div>
    );
}


export default BlogPage;

type BlogPagePostPreviewPropsType = {
    title: string
    description: string
    date: string
    id: string
}

const BlogPagePostPreview = ({date, description, title, id}: BlogPagePostPreviewPropsType) => {
    return (
        <div className={cx('blogPage_posts_post')}>
            <NavLink to={`/posts/${id}`}>
                <PostPhotoPlaceholder/>
                <h3 className={cx('blogPage_posts_post_heading')}>{title}</h3>
                <p className={cx('blogPage_posts_post_description')}>{description}</p>
                <p className={cx('blogPage_posts_post_date')}>{date}</p>
            </NavLink>
        </div>
    )
}