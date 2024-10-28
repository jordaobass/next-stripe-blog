'use client'
import React, {useState, useEffect} from 'react';
import {PostService} from '@/app/services/post-service';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await PostService.getPosts(); // Chama a rota API
                setPosts(data);
            } catch (err) {
                setError('Falha ao carregar os posts:' +  err);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Blog Pessoal</h1>
            {error && <p style={{color: 'red'}}>{error}</p>}
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
