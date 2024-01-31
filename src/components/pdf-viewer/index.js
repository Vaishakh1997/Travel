import { Modal } from 'antd';
import React, { useState } from 'react';
import { BiFile } from 'react-icons/bi';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

function PDFViewer({ file }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <div
        onClick={() => setIsModalVisible(!isModalVisible)}
        className="flex items-center px-4 py-2 bg-blue-50 rounded my-4 border border-blue-500 max-w-sm"
      >
        <BiFile className="text-blue-link text-lg" />
        <p className="text-sm font-bold text-blue-link pl-2 truncate">
          File Attachment
        </p>
      </div>
      <Modal
        title="File Added"
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
      >
        <div className="pdf-viewer">
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      </Modal>
    </>
  );
}
export default PDFViewer;
