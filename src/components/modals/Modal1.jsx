import React from 'react';
import { createPortal } from 'react-dom';

const Modal1 = ({ onClose, onConfirm }) => {
  return createPortal(
    <div className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
      <div
        className="bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px]
            py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8
            "
      >
        <h2 className="text-lg font-bold text-accent">Dispare as tags abaixo!</h2>
        <ul className="list-disc list-inside space-y-2 text-foreground">
          <li>Dynamic Option 1</li>
          <li>Dynamic Option 2</li>
          <li>More Options...</li>
        </ul>
        <h2 className="text-lg font-bold text-accent mt-6">Fancy Cards</h2>
        <div className="flex justify-around space-x-4">
          <div className="bg-background rounded-lg p-4 shadow-lg hover:bg-accent/10 transition-all duration-300">
            <h3 className="text-md font-semibold">Google Analytics</h3>
            <p>Detailed description or information.</p>
          </div>
          <div className="bg-background rounded-lg p-4 shadow-lg hover:bg-accent/10 transition-all duration-300">
            <h3 className="text-md font-semibold">Google Ads</h3>
            <p>Another piece of content or data.</p>
          </div>
          <div className="bg-background rounded-lg p-4 shadow-lg hover:bg-accent/10 transition-all duration-300">
            <h3 className="text-md font-semibold">Facebook API Conversion</h3>
            <p>Additional details or features.</p>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={onConfirm}
            className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded mr-2"
          >
            Confirm
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('my-modal')
  );
};

export default Modal1;
