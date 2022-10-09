import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ThumbsUp, Trash } from 'phosphor-react';

import styles from './Comment.module.css';

import { Avatar } from '../Avatar';

interface CommentProps {
  content: string;
  onDeleteComment: () => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  const date = new Date(Date.now());

  const publishedDateFormatted = format(date, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleLikeComment() {
    setLikeCount((prevState) => {
      return prevState + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar 
        src="https://github.com/dbssy.png" 
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Debussy</strong>
              <time
                title={publishedDateFormatted}
                dateTime={date.toISOString()}
              >
                {publishedDateRelativeToNow}
              </time>
            </div>

            <button
              onClick={onDeleteComment}
              title="Deletar comentário"
            >
              <Trash size={24}/>
            </button>
          </header>
          
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}