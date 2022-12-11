import React, {useEffect} from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import Select from '../Select';
import PostPhotoPlaceholder from '../../PostPhotoPlaceholder/index.';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, AppStoreType} from '../../../store/store';
import {getPostsTC} from '../../../store/postsReducer';
import {PostResponse} from '../../../utils/api';
import ShowMoreButton from '../../ShowMoreButton';
import {NavLink} from 'react-router-dom';
import BlogAvatarMiniPlaceholder from '../../BlogAvatarMiniPlaceholder/index.';
import Button from '../../AccentButton';
import deleteEditIcon from '../../../assets/blogIcons/blogPreview/deleteEditIcon.png';


const cx = classNames.bind(styles);


const Posts = () => {
    const dispatch = useDispatch<AppDispatch>();
    const posts = useSelector<AppStoreType,
        Array<PostResponse>>((state) => state.posts.items);


    useEffect(() => {
        dispatch(getPostsTC())
    }, [])

    return (<div className={cx('postsPage')}>
            {/*функциональность в разработке*/}
            {/*<div className={cx('postsPage_selectBlock')}>*/}
            {/*    <Select/>*/}
            {/*</div>*/}
            {/*функциональность в разработке*/}
            <div className={cx('blogs_addBlogButton')}>
                <NavLink to={'create_post'}>
                    <Button title={'Add post'} />
                </NavLink>

            </div>
            <div className={cx('postsPage_posts')}>
                {posts?.map(post => <PostPreview title={post.title}
                                                 id={post.id}
                                                 key={post.id}
                                                 bloggerName={post.bloggerName}
                                                 createdAt={post.createdAt}
                                                 shortDescription={post.shortDescription}/>)}
            </div>
            {/*функциональность в разработке*/}
            {/*<ShowMoreButton/>*/}
            {/*функциональность в разработке*/}
        </div>
    );
}

export default Posts;

type PostPreviewPropsType = {
    title: string
    bloggerName: string
    shortDescription: string
    createdAt: string
    id: string
}
const PostPreview = ({title, id, bloggerName, shortDescription, createdAt}: PostPreviewPropsType) => {
    return <div className={cx('postPreview')}>
        <NavLink to={`/posts/${id}`}>
            <PostPhotoPlaceholder/>
            <div className={cx('postPreview_data')}>
                <BlogAvatarMiniPlaceholder/>
                <div>
                    <h3 className={cx('postPreview_data_heading')}>{title}</h3>
                    <button className={cx('blogPreview_data_headingContainer_deleteEditButton')}
                            // onClick={() => setEditDeleteTooltip(!editDeleteTooltip)}
                    >
                        <img src={deleteEditIcon}
                             alt="deleteEditIcon"
                             width={'4px'}
                             height={'16px'}
                        />
                    </button>
                    <div className={cx('postPreview_data_additionalInfo')}>{bloggerName}</div>
                    <div className={cx('postPreview_data_additionalInfo')}>{createdAt}</div>
                </div>
            </div>
        </NavLink>
    </div>
}
