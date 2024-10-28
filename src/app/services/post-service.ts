import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export const PostService = {
    getPosts: async () => {
        const response = await axios.get(`${API_URL}/posts`);
        return response.data;
    },
    getPostById: async (id: string) => {
        const response = await axios.get(`${API_URL}/posts/${id}`);
        return response.data;
    },
};
