import { message } from 'antd';

export function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  message.success('Copied to clipboard');
}
