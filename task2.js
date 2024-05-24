async function saveUserData(user) {
  const url = 'https://jsonplaceholder.typicode.com/posts'; // Используем публичный API для тестирования
  try {
      const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
      });
      if (!response.ok) {
          throw new Error(`Failed to save user data. Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
  } catch (error) {
      return Promise.reject(error);
  }
}

// Пример использования:
const user = {
  name: 'John Smith',
  age: 30,
  email: 'john@example.com'
};

saveUserData(user)
  .then(response => {
      console.log('User data saved successfully:', response);
  })
  .catch(error => {
      console.log('Error:', error.message);
  });
