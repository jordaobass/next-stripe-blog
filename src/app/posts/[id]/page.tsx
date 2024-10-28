import React from 'react';
import { PostService } from '@/app/services/post-service';

const Home = async () => {
    const posts = await PostService.getPosts(); // Chama a rota API

    return (
        <div>
            <h1>Blog Pessoal</h1>
            {posts.map((post: { id: number; title: string; content: string }) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Home;