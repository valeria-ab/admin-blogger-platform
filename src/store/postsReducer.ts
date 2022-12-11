import {BlogResponseType, blogsApi, GetPostsResponse, PostResponse, postsApi} from '../utils/api';
import {AppStoreType, AppThunk} from './store';
import {setBlogs} from './blogsReducer';

export type InitialPostsStateType = {
    items: Array<PostResponse>
    pageNumber: number
    pageSize: number
    pagesCount: number
    totalCount: number
    currentPost: PostResponse
};


export const setPosts = (payload: GetPostsResponse) => ({
    type: 'POSTS/SET-POSTS',
    payload,
} as const);

export const setCurrentPost = (payload: PostResponse) => ({
    type: 'POSTS/SET-CURRENT-POST',
    payload,
} as const);

type ActionsType = ReturnType<typeof setPosts> | ReturnType<typeof setCurrentPost>;

const initialState: InitialPostsStateType = {
    items: [],
    pageNumber: 1,
    pageSize: 15,
    pagesCount: 10,
    totalCount: 1000,
    currentPost: {} as PostResponse,
};

export const postsReducer = (
    state: InitialPostsStateType = initialState,
    action: ActionsType,
): InitialPostsStateType => {
    switch (action.type) {
        case 'POSTS/SET-POSTS':
            return {...state, ...action.payload};

        case 'POSTS/SET-CURRENT-POST':
            return {...state, currentPost: action.payload};

        default:
            return state;
    }
};

export const getPostsTC = (): AppThunk => (dispatch,
                                           getState: () => AppStoreType) => {
    // dispatch(setAppStatus({ status: 'loading' }));
    const {pageNumber, pageSize} = getState().posts
    postsApi
        .getPosts(pageNumber, pageSize)
        .then((res) => {
            dispatch(setPosts(res.data));
        })
        .catch((error) => {
            // dispatch(setAppError({ error: error.response.data.message }));
        })
        .finally(() => {
            // dispatch(setAppStatus({ status: 'idle' }));
        });
};

export const getPostTC = (id: string): AppThunk => (dispatch,
                                                    getState: () => AppStoreType) => {
    // dispatch(setAppStatus({ status: 'loading' }));

    postsApi
        .getPost(id)
        .then((res) => {
            dispatch(setCurrentPost(res.data));
        })
        .catch((error) => {
            // dispatch(setAppError({ error: error.response.data.message }));
        })
        .finally(() => {
            // dispatch(setAppStatus({ status: 'idle' }));
        });
};