import {blogsApi, BlogPreviewType, GetBlogsResponse, BlogResponseType, GetPostsResponse} from '../utils/api';
import {AppStoreType, AppThunk} from './store';

export type InitialBlogsStateType = {
    items: Array<BlogPreviewType>
    pageNumber: number
    pageSize: number
    pagesCount: number | null
    totalCount: number | null
    currentBlog: BlogResponseType
    postsForSpecifiedBlog: GetPostsResponse
};


export const setBlogs = (payload: GetBlogsResponse) => ({
    type: 'BLOGS/SET-BLOGS',
    payload,
} as const);

export const setBlog = (payload: BlogResponseType) => ({
    type: 'BLOGS/SET-CURRENT-BLOG',
    payload,
} as const);

export const setPostsForSpecifiedBlog = (payload: GetPostsResponse) => ({
    type: 'BLOGS/SET-POSTS-FOR-SPECIFIED_BLOG',
    payload,
} as const);

type ActionsType = ReturnType<typeof setBlogs>
    |ReturnType<typeof setBlog>
    |ReturnType<typeof setPostsForSpecifiedBlog>

const initialState: InitialBlogsStateType = {
    items: [],
    pageNumber: 1,
    pageSize: 15,
    pagesCount: null,
    totalCount: null,
    currentBlog: {} as BlogResponseType,
    postsForSpecifiedBlog: {} as GetPostsResponse
};

export const blogsReducer = (
    state: InitialBlogsStateType = initialState,
    action: ActionsType,
): InitialBlogsStateType => {
    switch (action.type) {
        case 'BLOGS/SET-BLOGS':
            return { ...state, ...action.payload };
        case 'BLOGS/SET-CURRENT-BLOG':
            return { ...state, currentBlog: action.payload };
        case 'BLOGS/SET-POSTS-FOR-SPECIFIED_BLOG':
            return {...state, postsForSpecifiedBlog: action.payload};

        default:
            return state;
    }
};

export const getBlogsTC = (): AppThunk => (dispatch,
                                                           getState: () => AppStoreType) => {
    // dispatch(setAppStatus({ status: 'loading' }));
    const {pageNumber, pageSize} = getState().blogs
    blogsApi
        .getBlogs(pageNumber, pageSize)
        .then((res) => {
            dispatch(setBlogs(res.data));
        })
        .catch((error) => {
            // dispatch(setAppError({ error: error.response.data.message }));
        })
        .finally(() => {
            // dispatch(setAppStatus({ status: 'idle' }));
        });
};

export const getBlogTC = (id: string): AppThunk => (dispatch,
                                           getState: () => AppStoreType) => {
    // dispatch(setAppStatus({ status: 'loading' }));

    blogsApi
        .getBlog(id)
        .then((res) => {
            dispatch(setBlog(res.data));
        })
        .catch((error) => {
            // dispatch(setAppError({ error: error.response.data.message }));
        })
        .finally(() => {
            // dispatch(setAppStatus({ status: 'idle' }));
        });
};

export const getPostsForSpecifiedBlogTC = (id: string): AppThunk => (dispatch,
                                                    getState: () => AppStoreType) => {
    // dispatch(setAppStatus({ status: 'loading' }));

    blogsApi
        .getPostsForSpecifiedBlog(id)
        .then((res) => {
            dispatch(setPostsForSpecifiedBlog(res.data));
        })
        .catch((error) => {
            // dispatch(setAppError({ error: error.response.data.message }));
        })
        .finally(() => {
            // dispatch(setAppStatus({ status: 'idle' }));
        });
};