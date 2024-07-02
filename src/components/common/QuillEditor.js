import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import React from 'react';

const QuillEditor = ({ value, onChange, modules, formats, style }) => {
  const defaultModules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  };

  const defaultFormats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ];
  return (
    <div style={style}>
      <ReactQuill
        value={value}
        onChange={onChange}
        modules={modules || defaultModules}
        formats={formats || defaultFormats}
      />
    </div>
  );
};

export default QuillEditor;
