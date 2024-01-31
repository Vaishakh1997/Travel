import axiosClient from './config';

export const uploadImageService = async (e) => {
  let formData = new FormData();
  if (e) {
    formData.append('image', e, e.name);
  }
  return await axiosClient.post(`/image-upload/`, formData);
};

export const uploadFileService = async (e) => {
  let formData = new FormData();
  if (e) {
    formData.append('file', e, e.name);
  }
  return await axiosClient.post(`/generic-file-upload/`, formData);
};

export const uploadImageServiceIdentifier = async (e, identifier) => {
  let formData = new FormData();
  if (e) {
    formData.append('image', e, e.name);
  }
  return await axiosClient.post(`/image-upload/`, formData);
};