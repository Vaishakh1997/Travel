import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function QuillEditor({
  placeholder = 'Type here...',
  onChange,
  value,
  maxWordCount = 3000,
}) {
  const reactQuillModules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
    ],
  };
  const reactQuillFormats = ['bold', 'italic', 'underline', 'list', 'bullet'];
  const [wordLimitWarning, setWordLimitWarning] = useState(false);
  const initialWordCount = value?.replace(/<\/?[^>]+(>|$)/g, '')?.length;
  const [wordCount, setWordCount] = useState(initialWordCount || 0);
  const quillHandler = (content, delta, source, editor) => {
    const slicedContent = content === '<p><br></p>' ? '' : content.trim();
    const editorContent = editor.getText();
    if (editorContent.length <= maxWordCount + 1) {
      onChange(slicedContent);
    } else {
      onChange(`<p>${editorContent.slice(0, maxWordCount)}</p>`);
    }
    const characterCount = editor.getLength() - 1;
    setWordCount(characterCount);
    if (characterCount <= maxWordCount) {
      setWordLimitWarning(false);
    } else {
      setWordLimitWarning(true);
    }
  };
  // const onKeyDown = (e) => {
  //   let allowedKeyPress = [8, 13, 16, 17, 18, 36, 37, 38, 39, 40, 45, 46];
  //   if (wordCount >= maxWordCount) {
  //     if (!allowedKeyPress.includes(e.keyCode)) {
  //       e.preventDefault();
  //     }
  //   }
  // };
  return (
    <div className="relative">
      <ReactQuill
        theme="snow"
        modules={reactQuillModules}
        formats={reactQuillFormats}
        placeholder={placeholder}
        onChange={quillHandler}
        // value={value}
        // onKeyDown={onKeyDown}
        defaultValue={value}
      />
      <div className="flex items-center justify-end absolute right-0">
        <div className="text-red-500 text-xs mr-4">
          {wordLimitWarning && 'Character limit exceeded!'}
        </div>
        <div className="text-grey-500 text-sm">
          <span className={`${wordLimitWarning ? 'text-red-500' : ''}`}>
            {wordCount}
          </span>
          /{maxWordCount} characters
        </div>
      </div>
    </div>
  );
}

export default QuillEditor;
