const users = [
           
            // Add more users as needed
        ];

        document.getElementById('loginForm').addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;

            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                alert('Login successful!');
            } else {
                alert('Login failed. Invalid username or password.');
            }
        });

        document.getElementById('signupForm').addEventListener('submit', function (event) {
            event.preventDefault();
            const newUsername = document.getElementById('signupUsername').value;
            const newPassword = document.getElementById('signupPassword').value;

            const existingUser = users.find(u => u.username === newUsername);
            if (existingUser) {
                alert('Username already exists. Please choose a different username.');
            } else {
                users.push({ username: newUsername, password: newPassword });
                alert('Sign up successful!');
            }
        });