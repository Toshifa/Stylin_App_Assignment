import React from 'react';

interface LocationModalProps {
  onClose: () => void;
}

const LocationModal: React.FC<LocationModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-[500px] md:w-[400px] sm:w-[90%] p-6">
        <h2 className="text-center text-2xl font-semibold mb-4">Set Location</h2>
        <p className="text-center text-gray-500 mb-4">
          To see a list of salons and professionals near you, please enter a location while you use Stylin.
        </p>

        <input
          type="text"
          placeholder="Location"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-black text-white rounded-lg px-6 py-2"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
