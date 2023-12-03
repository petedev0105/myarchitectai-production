import React from 'react';

const FeatureItem = ({ icon, text }) => (
    <div className="flex space-x-3 items-center border-b py-2">
      <div>
        <img src={icon} height={20} width={20} style={{ minWidth: "20px", minHeight: "20px", width: "20px" }} />
      </div>
      <div>
        <span className="text-sm">
          {text}
        </span>
      </div>
    </div>
  );
  

export default FeatureItem;
