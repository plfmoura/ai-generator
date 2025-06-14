// Mock de mensagens do chat para testar scroll e estados

export interface ChatMessage {
  id: string;
  prompt: string;
  status: 'loading' | 'done';
  imageUrl?: string;
}

export const chatMock: ChatMessage[] = [
  {
    id: '1',
    prompt: 'Um rato com mochila nas costas, estilo pintura fosca, realista',
    status: 'done',
    imageUrl: '/sample-mouse.webp',
  },
  {
    id: '2',
    prompt: 'Um dragão azul voando sobre montanhas, arte digital',
    status: 'done',
    imageUrl: '/sample-dragon.webp',
  },
  {
    id: '3',
    prompt: 'Cachorro astronauta explorando Marte, cartoon',
    status: 'loading',
  },
  {
    id: '4',
    prompt: 'Cidade futurista à noite, neon, cyberpunk',
    status: 'done',
    imageUrl: '/sample-city.webp',
  },
  {
    id: '5',
    prompt: 'Gato samurai em uma floresta de bambu, pintura detalhada',
    status: 'loading',
  },
]; 