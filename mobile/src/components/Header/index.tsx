import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import LogoSvg from '../../assets/logo.svg';

import { UserPhoto } from "../UserPhoto";

export function Header() {
  return (
    <View style={styles.container}>
      <LogoSvg />
      <View style={styles.logoutButton}>

        <TouchableOpacity>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
        <UserPhoto imageUri='https://github.com/Raymw1.png' />
      </View>
    </View>
  );
}
