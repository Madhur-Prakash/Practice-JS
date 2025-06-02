const insert = document.getElementById('insert');

// Create the initial table and append it to the insert div
insert.innerHTML = `
  <div class='color'>
    <table id="keyTable">
      <thead>
        <tr>
          <th>Key</th>
          <th>Code</th>
        </tr>
      </thead>
      <tbody id="tableBody">
      </tbody>
    </table>
  </div>
`;

const tableBody = document.getElementById('tableBody');

// Append a new row on each keydown event
window.addEventListener('keydown', (e) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.code}</td>
  `;
  tableBody.appendChild(row);
});
