// Verify token is still valid by making a test request
fetch('/api/portfolio/summary', {
  headers: {
    'Authorization': `Bearer ${token}`,
  },
})
  .then(response => {
    if (response.ok) {
      setAuthState('authenticated');
    } else {
      // Token is invalid, clear storage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setCurrentUser(null);
      setAuthState('landing');
    }
  })
  .catch((error) => {
    // Network error, clear storage
    console.error('Auth check failed:', error);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setCurrentUser(null);
    setAuthState('landing');
  });
} else {
  // No token or user, start at landing
  setAuthState('landing');
}