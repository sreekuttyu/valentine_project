import configData from '../config.json';

export const config = configData;

export const getConfig = () => {
  return config;
};

export const getNames = () => config.names;
export const getContent = () => config.content;
export const getCouplePhotos = () => config.couplePhotos;
export const getSongs = () => config.songs;
export const getGift = () => config.gift;
export const getTheme = () => config.theme;
