import '../styles/global.css';
import styles from '../styles/App.module.css';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post, PostProps } from './components/Post';

interface Post extends PostProps {
  id: number;
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/dbssy.png',
      name: 'João Debussy',
      role: 'Junior Web Dev',
    },
    publishedAt: new Date('2022-10-09 08:00:00'),
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare', },    
    ],
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO at @Rocketseat',
    },
    publishedAt: new Date('2022-10-08 20:00:00'),
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare', },    
    ],
  },
];

export function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          {posts.map(post => (
            <Post 
              key={post.id}
              author={post.author}
              publishedAt={post.publishedAt}
              content={post.content}
            />
          ))}
        </main>
      </div>
    </>
  );
}
