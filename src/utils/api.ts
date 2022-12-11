import axios from 'axios';


export const instance = axios.create({
    baseURL: 'https://backend-incubator-sbow.vercel.app/'
});

export const blogsApi = {
    getBlogs(pageNumber: number, pageSize: number) {
        return instance.get<GetBlogsResponse>(`blogs?pageNumber=${pageNumber}&pageSize=${pageSize}`);
    },
    getBlog(id: string) {
        return instance.get<BlogResponseType>(`blogs/${id}`);
    },
    getPostsForSpecifiedBlog(id: string) {
        return instance.get<GetPostsResponse>(`blogs/${id}/posts`);
    },
}

export const postsApi = {
    getPosts(pageNumber: number, pageSize: number)  {
        return instance.get<GetPostsResponse>(`posts?pageNumber=${pageNumber}&pageSize=${pageSize}`);
    },
    getPost(id: string) {
        return instance.get<PostResponse>(`posts/${id}`);
    },

}

export type GetBlogsResponse = {
    items: Array<BlogPreviewType>
    page: number
    pageSize: number
    pagesCount: number
    totalCount: number
}
export type PostType = {
    id: string
    title: string
    shortDescription: string
    content: string
    blogId: string
    blogName: string
};

export type BlogPreviewType = {
    id: string,
    name: string,
    description?: string,
    websiteUrl: string,
}

export type BlogResponseType = {
    createdAt: string
    id: string
    name: string
    websiteUrl: string
    description: string
}

export type GetPostsResponse = {
    items: Array<PostResponse>
    page: number
    pageSize: number
    pagesCount: number
    totalCount: number
}

export type PostResponse = {
    id: string,
    title: string,
    shortDescription: string,
    content: string,
    blogId: string,
    bloggerName: string,
    createdAt: string,
    extendedLikesInfo: {
        likesCount: number,
        dislikesCount: number,
        myStatus: string,
        newestLikes: []
    }
}