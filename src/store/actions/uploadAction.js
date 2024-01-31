import * as types from '../actionTypes/upload';

export const uploadImageAction = (formData) => {
  return {
    type: types.IMAGE_UPLOAD,
    payload: formData,
  };
};
export const uploadImageSuccessAction = (url) => {
  return {
    type: types.IMAGE_UPLOAD_SUCCESS,
    payload: url,
  };
};
export const uploadImageFailAction = (err) => {
  return {
    type: types.IMAGE_UPLOAD_FAIL,
    payload: err,
  };
};
export const resetImageUploadAction = () => {
  return {
    type: types.RESET_IMAGE_UPLOAD,
  };
};

export const uploadFileAction = (formData) => {
  return {
    type: types.FILE_UPLOAD,
    payload: formData,
  };
};
export const uploadFileSuccessAction = (url) => {
  return {
    type: types.FILE_UPLOAD_SUCCESS,
    payload: url,
  };
};
export const uploadFileFailAction = (err) => {
  return {
    type: types.FILE_UPLOAD_FAIL,
    payload: err,
  };
};
export const resetFileUploadAction = () => {
  return {
    type: types.RESET_FILE_UPLOAD,
  };
};

export const uploadImageIdentifierAction = (formData, identifier) => {
  return {
    type: types.IDENTIFIER_IMAGE_UPLOAD,
    payload: { formData, identifier }
  };
};
export const uploadImageIdentifierSuccessAction = (url) => {
  return {
    type: types.IDENTIFIER_IMAGE_UPLOAD_SUCCESS,
    payload: url,
  };
};
export const uploadImageIdentifierFailAction = (err) => {
  return {
    type: types.IDENTIFIER_IMAGE_UPLOAD_FAIL,
    payload: err,
  };
};