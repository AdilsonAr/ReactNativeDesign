import React from "react";
import { Image } from "react-native";
import estilos from '../../../assets/styles/Image.Component.Styles';
import imageService from '../../../assets/Services/Images';

const Avatar = () => {
    return (
        <Image style={estilos.imageDimention} source={{ uri: imageService.userAvatar }} />
    )
}

export default Avatar
