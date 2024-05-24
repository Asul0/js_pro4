async function getUserData(userId) {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`; // Используем публичный API для тестирования
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error(`User with ID ${userId} not found. Status: ${response.status}`);
      }
      const userData = await response.json();
      return userData;
  } catch (error) {
      return Promise.reject(error);
  }
}

// Пример использования:
getUserData(1)
  .then(user => {
      console.log('User data:', user);
  })
  .catch(error => {
      console.log('Error:', error.message);
  });
