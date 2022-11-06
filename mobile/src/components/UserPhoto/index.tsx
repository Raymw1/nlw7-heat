import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import defaultAvatarImg from '../../assets/avatar.png';
import { colors } from "../../theme";

const sizes = {
  small: {
    containerSize: 32,
    avatarSize: 28,
  },
  default: {
    containerSize: 48,
    avatarSize: 42,
  },
}

const defaultAvatarUri = Image.resolveAssetSource(defaultAvatarImg).uri;

type UserPhotoProps = {
  imageUri?: string;
  size?: 'small' | 'default';
}

export function UserPhoto({ imageUri = defaultAvatarUri, size = 'default' }: UserPhotoProps) {
  const { containerSize, avatarSize } = sizes[size];

  return (
    <LinearGradient
      colors={[colors.pink, colors.yellow]}
      style={[styles.container, {
        width: containerSize,
        height: containerSize,
        borderRadius: containerSize / 2,

      }]}
      start={{ x: 0, y: 0.8 }}
      end={{ x: 0.9, y: 1 }}
    >
      <Image
        source={{ uri: imageUri }}
        style={[styles.avatar, {
          width: avatarSize,
          height: avatarSize,
          borderRadius: avatarSize / 2,
        }]}
      />
    </LinearGradient>
  );
}
