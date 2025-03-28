import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface CustomAvatarProps {
  src?: string;
  avatarClass?: string;
  fallback?: string;
  fallBackClass?: string;
}

function CustomAvatar({
  src = "",
  fallBackClass,
  fallback,
  avatarClass,
}: CustomAvatarProps) {
  return (
    <Avatar className={avatarClass}>
      <AvatarImage src={src} />
      <AvatarFallback className={fallBackClass}>{fallback}</AvatarFallback>
    </Avatar>
  );
}

export default CustomAvatar;
