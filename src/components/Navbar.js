import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const Navbar = ({
  searchHandler,
  searchQuery,
  setSearchQuery,
  inputField,
  savedItems,
}) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const db = getFirestore();
        const userRef = doc(db, 'users', user.uid);
        getDoc(userRef)
          .then((docSnap) => {
            if (docSnap.exists()) {
              const userData = docSnap.data();
              setUsername(userData.username);
            } else {
              console.log('User data not found in Firestore.');
            }
          })
          .catch((error) => {
            console.error('Error fetching user data:', error);
          });
      } else {
        console.warn('User not signed in.');
      }
    });
  }, []);

  const navActive = ({ isActive }) => ({
    color: isActive ? '#f43f5e' : null,
  });

  const signInHandler = () => {
    window.location.href = 'signin.html';
  };

  const createAccountHandler = () => {
    // Redirect to login.html when "Create Account" button is clicked
    window.location.href = 'login.html';
  };

  const buttonStyles = {
    backgroundColor: 'transparent',
    color: '#f43f5e',
    padding: '10px 20px',
    borderRadius: '5px',
    border: '1px solid #f43f5e',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
  };

  const buttonHoverStyles = {
    backgroundColor: '#f43f5e',
    color: '#ffffff',
  };

  return (
    <div className="navbar flex justify-between items-center container mx-auto py-8 gap-5 lg:gap-0">
      <h2 className="logo text-2xl font-bold lowercase italic">
        <img src="/logo.png" width={350} alt="error" />
      </h2>
      <form className="search-bar" onSubmit={searchHandler}>
        <input
          ref={inputField}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="search"
          placeholder="Search recipe..."
          required
          className="bg-white/75 p-3 px-8 lg:w-96 rounded-full outline-none shadow-lg shadow-rose-100 focus:shadow-rose-200 duration-300"
        />
      </form>
      <ul className="menu flex gap-5 items-center">
        <li>
          <NavLink
            style={navActive}
            end
            to="/"
            className="text-gray-400 hover:text-gray-600 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={navActive}
            to="/favourites"
            className="text-gray-400 hover:text-gray-600 duration-300 relative"
          >
            Favourites
            <span className="favourites-count font-bold text-sky-400">
              ({savedItems.length})
            </span>
          </NavLink>
        </li>
        {username ? (
          <li>
            <span className="text-gray-400">Hello, {username}!</span>
          </li>
        ) : (
          <>
            <li>
              <button
                style={{ ...buttonStyles, ...buttonHoverStyles }}
                onClick={signInHandler}
                className="text-f43f5e hover:bg-f43f5e hover:text-white duration-300 rounded-lg p-2"
              >
                Sign In
              </button>
            </li>
            <li>
              <button
                style={{ ...buttonStyles, ...buttonHoverStyles }}
                onClick={createAccountHandler}
                className="text-gray-400 hover:text-gray-600 duration-300 relative"
              >
                Create Account
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
