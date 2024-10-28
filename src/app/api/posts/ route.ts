import { NextResponse } from 'next/server';
import { PostService } from '@/app/services/post-service';

export async function GET() {
    try {
        const posts = await PostService.getPosts(); // Chama a função do serviço
        return NextResponse.json(posts);
    } catch (error) {
        console.error('Erro ao buscar posts:', error);
        return NextResponse.json({ error: 'Falha ao buscar posts' }, { status: 500 });
    }
}