import React from 'react';

function Dashboard() {
  const summaryData = [
    { amount: '$145', id: 1 },
    { amount: '$213', id: 2 },
    { amount: '$814', id: 3 },
  ];

  const handleApprove = (id) => {
    alert(`Approved transaction ${id}`);
  };

  const handleDeny = (id) => {
    alert(`Denied transaction ${id}`);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar is-light" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item has-text-weight-bold" href="/">
            MyApp
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-light" href="/">
                Dashboard
              </a>
              <a className="button is-light" href="/">
                Sign Out
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="columns">
        {/* Sidebar */}
        <div className="column is-2">
          <aside className="menu">
            <p className="menu-label">Menu</p>
            <ul className="menu-list">
              <li><a href="/">Orders</a></li>
              <li><a href="/">Shipments</a></li>
              <li><a href="/">Accounts</a></li>
              <li><a href="/">Invoices</a></li>
            </ul>
          </aside>
        </div>

        {/* Main Content */}
        <div className="column">
          <div className="columns">
            {/* Placeholder for Charts */}
            <div className="column is-6">
              <div className="box has-text-centered">
                <span className="icon is-large">
                  <i className="fas fa-chart-pie fa-3x"></i>
                </span>
                <p className="title is-4 mt-3">$915</p>
              </div>
            </div>
            <div className="column is-6">
              <div className="box has-text-centered">
                <span className="icon is-large">
                  <i className="fas fa-chart-line fa-3x"></i>
                </span>
                <p className="title is-4 mt-3">123%</p>
              </div>
            </div>
          </div>

          {/* Summary Table */}
          <div className="box">
            <h2 className="subtitle">Summary</h2>
            <table className="table is-fullwidth is-striped">
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {summaryData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.amount}</td>
                    <td>
                      <button
                        className="button is-success is-small mr-2"
                        onClick={() => handleApprove(item.id)}
                      >
                        Approve
                        </button>
                      <button
                        className="button is-danger is-small"
                        onClick={() => handleDeny(item.id)}
                      >
                        Deny
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;