import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';

import {
  FaPlus,
  FaMinus,
  FaArrowLeft,
  FaArrowRight,
  FaExpand,
} from 'react-icons/fa';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';
import '../styles/style.scss';
import plLocalization from '../utils/plLocalization';
import { GrRefresh } from "react-icons/gr";

const PdfViewer = ({ fileUrl, onBack }) => {
  const zoomPluginInstance = zoomPlugin();
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const fullScreenPluginInstance = fullScreenPlugin();

  const { ZoomIn, ZoomOut } = zoomPluginInstance;
  const {
    GoToNextPage,
    GoToPreviousPage,
    CurrentPageLabel,
    NumberOfPages,
  } = pageNavigationPluginInstance;
  const { EnterFullScreen } = fullScreenPluginInstance;

  return (
    <div className="pdf-viewer-container">
      <div className="title-container">
        <h1 className="title">PDFViewer</h1>
      </div>

      <div className="pdf-controls">
        <ZoomOut>
          {(props) => (
            <button onClick={props.onClick} title="Oddal">
              <FaMinus />
            </button>
          )}
        </ZoomOut>

        <ZoomIn>
          {(props) => (
            <button onClick={props.onClick} title="Przybliż">
              <FaPlus />
            </button>
          )}
        </ZoomIn>

        <GoToPreviousPage>
          {(props) => (
            <button onClick={props.onClick} title="Poprzednia strona">
              <FaArrowLeft />
            </button>
          )}
        </GoToPreviousPage>

        <span className="page-label">
          <CurrentPageLabel /> z <NumberOfPages />
        </span>

        <GoToNextPage>
          {(props) => (
            <button onClick={props.onClick} title="Następna strona">
              <FaArrowRight />
            </button>
          )}
        </GoToNextPage>

        <EnterFullScreen>
          {(props) => (
            <button onClick={props.onClick} title="Pełny ekran">
              <FaExpand />
            </button>
          )}
        </EnterFullScreen>
      </div>

      <div className="pdf-preview">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer
            fileUrl={fileUrl}
            plugins={[
              zoomPluginInstance,
              pageNavigationPluginInstance,
              fullScreenPluginInstance,
            ]}
            localization={plLocalization}
          />
        </Worker>
      </div>

      <button className="back-button" onClick={onBack}>
        <GrRefresh style={{ marginRight: '8px' }}/> Wgraj inny plik
      </button>
    </div>
  );
};

export default PdfViewer;
