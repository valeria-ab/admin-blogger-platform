import React, {useEffect, useState} from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import avatarPlaceholder from '../../assets/common/avatarPlaceholder.png'
import {AppDispatch, AppStoreType} from '../../store/store';
import {createNewBlogTC, getBlogsTC} from '../../store/blogsReducer';
import {BlogPreviewType, BlogResponseType} from '../../utils/api';
import Button from '../AccentButton';
import {Editor, EditorState} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import Select from '../Main/Select';
import {createNewPostTC} from '../../store/postsReducer';
import arrow from '../../assets/select/arrow.png';
import cancel from '../../assets/warningModalWindow/cancel.png';


const cx = classNames.bind(styles);

type AddPostPropsType = {
    closeModalWindow: () => void
}

const AddPost = ({closeModalWindow}: AddPostPropsType) => {

    const blogs = useSelector<AppStoreType, Array<BlogPreviewType>>(
        ({blogs}) => blogs.items,
    );
    const dispatch = useDispatch<AppDispatch>();
    const [postName, setPostName] = useState('')
    const [postDescription, setPostDescription] = useState('')

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [options, setOptions] = useState(blogs)
    const [chosenBlog, setChosenBlog] = useState<BlogPreviewType>()
    const [blogId, setBlogId] = useState('')
    const params = useParams()

    const currentBlog = useSelector<AppStoreType, BlogResponseType>(
        ({blogs}) => blogs.currentBlog,
    );

    const createNewPost = () => {
        dispatch(createNewPostTC({
            title: postName,
            blogId: blogId,
            content: postDescription,
        }))
    }


    // const textarea = document.querySelector('#textarea');

    // textarea?.addEventListener('keyup', function(){
    //     if(this.scrollTop > 0){
    //         this.style.height = this.scrollHeight + "px";
    //     }
    // });

    useEffect(() => {
        dispatch(getBlogsTC())
    }, [])

    useEffect(() => {
        setOptions(blogs)
    }, [blogs])

    return (<div className={cx('modal')}>
            <div className={cx('addPost')}>

                <div className={cx('warningModalWindow_header')}>Delete a post
                    <img src={cancel}
                         alt="cancel"
                         width={'14px'}
                         height={'14px'}
                        onClick={closeModalWindow}
                    />
                </div>

                <div className={cx('addPost_contentContainer')}>
                    <div className={cx('addPost_contentContainer_avatarPlaceholder')}>
                        <img src={avatarPlaceholder} alt="avatarPlaceholder" width={'55px'} height={'45px'}/>
                    </div>
                    <div className={cx('addPost_contentContainer_inputContainer')}>
                        <label className={cx('addPost_contentContainer_inputContainer_inputName')}>Post Name</label>
                        <input className={cx('addPost_contentContainer_inputContainer_inputField')}
                               type="text"
                               value={postName}
                               onChange={(e) => setPostName(e.currentTarget.value)}
                        />
                    </div>

                    <div className={cx('addPost_contentContainer_inputContainer')}>
                        <label className={cx('addPost_contentContainer_inputContainer_inputName')}>Blog</label>
                        <div className={cx('addPost_contentContainer_inputContainer_select', {
                            addPost_inputContainer_select_active: isOpen
                        })}>

                            <div className={cx('addPost_contentContainer_inputContainer_select_header')}
                                 onClick={() => setIsOpen(!isOpen)}>
                 <span>
            {chosenBlog ? chosenBlog.name : 'Choose a blog'}
         </span>
                                <img className={cx('addPost_contentContainer_inputContainer_select_arrow', {
                                    addPost_inputContainer_select_arrow_active: isOpen
                                })}
                                     src={arrow} alt=""/>

                            </div>
                            <div className={cx('addPost_contentContainer_inputContainer_select_body', {
                                addPost_inputContainer_select_body_active: isOpen
                            })}>
                                {options?.filter(blog => blog.id !== chosenBlog?.id)
                                    .map((blog, index) => <div
                                        className={cx('addPost_contentContainer_inputContainer_select_body_option')}
                                        key={index}
                                        onClick={() => {
                                            setChosenBlog(blog)
                                            setBlogId(blog.id)
                                        }}>
                                        {blog.name}
                                    </div>)}
                            </div>
                        </div>
                    </div>

                    <div className={cx('addPost_contentContainer_inputContainer')}>
                        <label className={cx('addPost_contentContainer_inputContainer_inputName')}>Description</label>
                        {/*<textarea className={cx('addPost_inputContainer_inputField addPost_inputContainer_blogDescription', {*/}
                        {/*    // blogPage_inputContainer_blogDescription_warning: postDescription.length >= 1000*/}
                        {/*})}*/}
                        {/*          maxLength={1000}*/}
                        {/*          // value={postDescription}*/}
                        {/*// onChange={(e) => setPostDescription(e.currentTarget.value)}*/}
                        {/*/>*/}
                        {/*<Editor*/}
                        {/*    editorState={postDescription}*/}
                        {/*    toolbarClassName="toolbarClassName"*/}
                        {/*    wrapperClassName="wrapperClassName"*/}
                        {/*    editorClassName="editorClassName"*/}
                        {/*    onEditorStateChange={setPostDescription}*/}
                        {/*/>*/}
                    </div>
                    <div className={cx('addPost_contentContainer_buttonBlock')}
                        // onClick={() => dispatch(createNewPostTC({
                        //     title: postName,
                        //     blogId,
                        //     shortDescription: postDescription,
                        //     content: postDescription
                        // }))}
                    >
                        <Button title={'Publish'} disabled={postName.length <= 0
                            // && postDescription
                            // && chosenBlog
                        }
                                callback={createNewPost}/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AddPost;

