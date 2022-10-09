import styles from './Avatar.module.css';

interface AvatarProps {
  src: string;
  hasBorder?: boolean;
}

export function Avatar({ src, hasBorder = true }: AvatarProps) {
  return (
    <img
      src={src}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  );
}