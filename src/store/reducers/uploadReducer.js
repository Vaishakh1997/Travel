import * as types from '../actionTypes/upload';

const initialState = {
  uploadImage: null,
  uploadImageLoading: false,
  uploadImageError: null,
  uploadFile: null,
  uploadFileLoading: false,
  uploadFileError: null,
  uploadImageIdentifier: null,
  uploadImageIdentifierLoading: false,
  uploadImageIdentifierError: null,
  identifier: null
};

export const uploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.IMAGE_UPLOAD:
      return {
        ...state,
        uploadImageLoading: true,
      };
    case types.IMAGE_UPLOAD_SUCCESS:
      return {
        ...state,
        uploadImage: action.payload,
        uploadImageLoading: false,
      };
    case types.IMAGE_UPLOAD_FAIL:
      return {
        ...state,
        uploadImageLoading: false,
        uploadImageError: action.payload,
      };
    case types.FILE_UPLOAD:
      return {
        ...state,
        uploadFileLoading: true,
      };
    case types.FILE_UPLOAD_SUCCESS:
      return {
        ...state,
        uploadFile: action.payload,
        uploadFileLoading: false,
      };
    case types.FILE_UPLOAD_FAIL:
      return {
        ...state,
        uploadFileLoading: false,
        uploadFileError: action.payload,
      };
    case types.IDENTIFIER_IMAGE_UPLOAD:
      return {
        ...state,
        uploadImageIdentifierLoading: true,
        identifier: action.payload,
      };
    case types.IDENTIFIER_IMAGE_UPLOAD_SUCCESS:
      return {
        ...state,
        uploadImageIdentifier: action.payload,
        uploadImageIdentifierLoading: false,
      };
    case types.IDENTIFIER_IMAGE_UPLOAD_FAIL:
      return {
        ...state,
        uploadImageIdentifierLoading: false,
        uploadImageIdentifierError: action.payload,
      };
    case types.RESET_IMAGE_UPLOAD:
      return initialState;
    case types.RESET_FILE_UPLOAD:
      return initialState;
    default:
      return state;
  }
};

export default uploadReducer;
