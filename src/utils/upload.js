import { message } from 'antd';
import {
  uploadFileAction,
  uploadImageAction,
  uploadImageIdentifierAction
} from '../store/actions/uploadAction';
import { store } from '../store/store';
import { isEmpty } from './generic';

export const imageUploadHandler = (e) => {
  let files = e.target.files[0];
  const imageSize = e?.target?.files[0]?.size;
  const img = new Image();
  img.src = URL.createObjectURL(files);
  if (!isEmpty(files)) {
    imageSize < 1024 * 1024 * 1.5 //&& img.naturalWidth === 800 && img.naturalHeight === 450
      ? store.dispatch(uploadImageAction(files))
      : message.error('Image should be less than 1MB and 800x450px');
  } else {
    message.warning('No image selected');
  }
};
export const fileUploadHandler = (e) => {
  const fileSize = e?.target?.files[0]?.size;
  let files = e.target.files[0];
  if (!isEmpty(files)) {
    fileSize < 2098000
      ? store.dispatch(uploadFileAction(files))
      : message.error('File should be less than 2MB');
  } else {
    message.warning('No file selected');
  }
};

export const imageUploadHandlerIdentifier = (e, identifier) => {
  let files = e.target.files[0];
  const imageSize = e?.target?.files[0]?.size;
  const img = new Image();
  img.src = URL.createObjectURL(files);
  if (!isEmpty(files)) {
    imageSize < 1024 * 1024 * 1.5 //&& img.naturalWidth === 800 && img.naturalHeight === 450
      ? store.dispatch(uploadImageIdentifierAction(files,identifier))
      : message.error('Image should be less than 1MB and 800x450px');
  } else {
    message.warning('No image selected');
  }
};
