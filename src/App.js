import React, { useState } from 'react';
import './CustomTable.css'; 

const data = [
  { title: 'ANNAI ERC-2', category: undefined, date: 'February 04, 2024, 11:26 AM', status: 'Publish', action: 'Edit' },
  { title: 'ANNAI ERC-2', category: undefined, date: 'February 04, 2024, 11:26 AM', status: 'Publish', action: 'Edit' },
  // ... more data
];

const CustomTable = () => {
  const [visibleColumns, setVisibleColumns] = useState({
    title: true,
    category: true,
    date: true,
    status: true,
    action: true,
  });

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleColumn = (column) => {
    setVisibleColumns((prev) => ({ ...prev, [column]: !prev[column] }));
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="custom-table">
      <div className="table-header">
        <div className="table-title">Table Title</div>
        <div className="table-menu">
          <span className="menu-icon" onClick={toggleSidebar}>☰</span>
        </div>
      </div>
      <div className="table-body">
        <div className="table-row header">
          {visibleColumns.title && <div className="cell">Title</div>}
          {visibleColumns.category && <div className="cell">Categories</div>}
          {visibleColumns.date && <div className="cell">Date</div>}
          {visibleColumns.status && <div className="cell">Status</div>}
          {visibleColumns.action && <div className="cell">Action</div>}
        </div>
        {data.map((item, index) => (
          <div className="table-row" key={index}>
            {visibleColumns.title && <div className="cell">{item.title || '---'}</div>}
            {visibleColumns.category && <div className="cell">{item.category || '---'}</div>}
            {visibleColumns.date && <div className="cell">{item.date || '---'}</div>}
            {visibleColumns.status && <div className="cell">{item.status || '---'}</div>}
            {visibleColumns.action && <div className="cell">{item.action || '---'}</div>}
          </div>
        ))}
      </div>
      {showSidebar && (
        <div className="sidebar right">
          <div className="sidebar-header">
            <div>Add or remove columns</div>
          </div>
          {/* Sidebar content and toggles for each column */}
          {Object.keys(visibleColumns).map((column) => (
            <div className="sidebar-column" onClick={() => toggleColumn(column)} key={column}>
              {column}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomTable;
