import { Link } from 'react-router-dom';
function Dashboard() {
  return (
    <div className="App">
      <header className="App-header">
        <Link style={{color: '#2F5082',margin: '1rem'}} to="/account">
             Create Account
        </Link>
      </header>
    </div>
  );
}

export default Dashboard;
