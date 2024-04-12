document.getElementById('registration').addEventListener('click', function() {
  window.location.href = 'login.html';
})
document.getElementById("myButton").addEventListener("click", function() {
    // Redirect to the next page
    window.location.href = "signin.html";
});
document.getElementById('.btn').addEventListener('click', function() {
    window.location.href = 'user.html';
});
document.addEventListener("DOMContentLoaded", function() {
  // Main function
  async function main() {
      try {
          // Fetch and display existing profiles when the page loads
          const data = await fetchProfiles();
          console.log(data);
          displayProfiles(data);
      } catch (error) {
          console.error('Error:', error);
      }
  }

  // Function to fetch profiles from the db.json file
  async function fetchProfiles() {
    const response = await fetch('db.json'); // Fetch the db.json file
    const data = await response.json(); // Parse JSON response
    return data.users; // Return the array of users
}


  // Function to display profiles
  function displayProfiles(users) {
    let userContainer = document.getElementById('userContainer');
    if (!userContainer) {
        console.error('Error: Element with ID "userContainer" not found.');
        return; // Exit the function if userContainer is not found
    }

    userContainer.innerHTML = ''; // Clear previous content

    if (!Array.isArray(users)) {
        console.error('Error: Data is not in the expected format.');
        return; // Exit the function if data is not an array
    }

    users.forEach(user => {
        let userDiv = document.createElement('div');
        userDiv.classList.add('user');

        let userHTML = `
            <h2>${user.name}</h2>
            <p>Age: ${user.age}</p>
        `;
        if (user.hobbies) {
            userHTML += `<p>Hobbies: ${user.hobbies.join(', ')}</p>`;
        }

        userDiv.innerHTML = userHTML;
        userContainer.appendChild(userDiv);
    });
}


  // Call the main function
  main();
});

// Sample JSON data
const users = [
  {
      "id": 1,
      "name": "John",
      "age": 30,
      "gender": "male",
      "hobby": "reading"
  },
  {
      "id": 2,
      "name": "Jane",
      "age": 28,
      "gender": "female",
      "hobby": "cooking"
  },
  // Add more user objects here...
];

// Function to find potential matches based on age compatibility
function findMatches(user) {
  const minAge = user.age - 5; // Minimum age difference allowed
  const maxAge = user.age + 5; // Maximum age difference allowed

  // Filter potential matches based on age compatibility
  const matches = users.filter(match => 
      match.id !== user.id && // Exclude the user itself
      match.age >= minAge && match.age <= maxAge // Check if age is within the allowed range
  );

  return matches;
}

// Example usage
const userJohn = users.find(user => user.name === 'John'); // Get user John
const potentialMatchesForJohn = findMatches(userJohn); // Find potential matches for John

console.log('Potential matches for John:', potentialMatchesForJohn);


 // Function to fetch user data
 function fetchUsers() {
  // Fetch user data from JSON file or API endpoint
  const users = []; // Replace this with actual fetching logic
  return users;
}

// Function to render user list
function renderUsers(users) {
  const userList = document.getElementById('userList');
  userList.innerHTML = '';
  users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.innerHTML = `
      <p>Name: ${user.name}</p>
      <p>Age: ${user.age}</p>
      <p>Gender: ${user.gender}</p>
      <p>Hobby: ${user.hobby ? user.hobby : 'N/A'}</p>
      <button onclick="editUser(${user.id})">Edit</button>
      <button onclick="deleteUser(${user.id})">Delete</button>
    `;
    userList.appendChild(userDiv);
  });
}

// Function to add a new user
function addUser(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const hobby = document.getElementById('hobby').value;
  // Add new user to the user list and update UI
}

// Function to edit user
function editUser(id) {
  // Implement edit functionality
}

// Function to delete user
function deleteUser(id) {
  // Implement delete functionality
}

// Initialize admin page
document.addEventListener('DOMContentLoaded', () => {
  const users = fetchUsers();
  renderUsers(users);
  document.getElementById('addUserForm').addEventListener('submit', addUser);
});

