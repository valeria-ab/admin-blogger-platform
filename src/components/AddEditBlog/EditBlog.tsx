import React, {useState} from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, useParams} from 'react-router-dom';

import arrowBack from '../../assets/common/arrowBack.png';
import {AppDispatch, AppStoreType} from '../../store/store';
import {createNewBlogTC} from '../../store/blogsReducer';
import WallpaperPlaceholder from '../WallpaperPlaceholder/index.';
import {BlogResponseType, PostResponse} from '../../utils/api';
import Button from '../AccentButton';


const cx = classNames.bind(styles);


const AddBlog = () => {


    const dispatch = useDispatch<AppDispatch>();
    const [blogName, setBlogName] = useState('')
    const [websiteAddress, setWebsiteAddress] = useState('')
    const [blogDescription, setBlogDescription] = useState('')
    const params = useParams()

    const currentBlog = useSelector<AppStoreType, BlogResponseType>(
        ({blogs}) => blogs.currentBlog,
    );
    const postsForSpecifiedBlog = useSelector<AppStoreType, Array<PostResponse>>(
        ({blogs}) => blogs.postsForSpecifiedBlog.items,
    );

    // const textarea = document.querySelector('#textarea');

    // textarea?.addEventListener('keyup', function(){
    //     if(this.scrollTop > 0){
    //         this.style.height = this.scrollHeight + "px";
    //     }
    // });

    return (<div className={cx('blogPage')}>

            <NavLink to={'/blogs'}>
                <div className={cx('blogPage_navigationButton')}>
                    <img src={arrowBack} alt="arrowBack"/>
                    <span>Back to blogs</span>
                </div>
            </NavLink>

            <WallpaperPlaceholder/>

            <div className={cx('blogPage_inputContainer')}>
                <label className={cx('blogPage_inputContainer_inputName')}>Blog Name</label>
                <input className={cx('blogPage_inputContainer_inputField', {
                    blogPage_inputContainer_inputField_warning: blogName.length >= 15
                })}
                       type="text"
                       value={blogName}
                       maxLength={15}
                       onChange={(e) => setBlogName(e.currentTarget.value)}
                />
            </div>
            <div className={cx('blogPage_inputContainer')}>
                <label className={cx('blogPage_inputContainer_inputNa' +
                    'me')}>Website</label>
                <input className={cx('blogPage_inputContainer_inputField')}
                       type="text"
                       value={websiteAddress}
                       onChange={(e) => setWebsiteAddress(e.currentTarget.value)}
                />
            </div>
            <div className={cx('blogPage_inputContainer')}>
                <label className={cx('blogPage_inputContainer_inputName')}>Blog Description</label>
                <textarea className={cx('blogPage_inputContainer_inputField blogPage_inputContainer_blogDescription', {
                    blogPage_inputContainer_blogDescription_warning: blogDescription.length >= 500
                })}
                          maxLength={500}
                          value={blogDescription}
                          onChange={(e) => setBlogDescription(e.currentTarget.value)}
                />
            </div>
            <div className={cx('blogPage_buttonBlock')}
                 onClick={() => dispatch(createNewBlogTC({
                     description: blogDescription,
                     name: blogName,
                     websiteUrl: websiteAddress
                 }))}>
                <Button title={'Add blog'}/>
            </div>

        </div>
    );
}


export default AddBlog;
