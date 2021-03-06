import React, {useState, useEffect} from 'react'
import axios from 'axios';


const App = function () {
	const [users, setUsers] = useState(null);

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	useEffect(() => {
		axios
			.get("/api/users")
			.then((users) => setUsers(users))
			.catch((err) => console.log(err));
	}, []);

	function submitForm() {
		console.log('email start function submitForm === ', email);
		console.log('username start function submitForm === ', username);
		if (username === "") {
			alert("Please fill the username field");
			return;
		}
		if (email === "") {
			alert("Please fill the email field");
			return;
		}
		console.log('email === ', email);
		console.log('username === ', username);
		alert('email === ', email);
		
		axios
			.post("/api/users", {
				username: username,
				email: email,
			})
			.then(function () {
				alert("Account created successfully");
				window.location.reload();
			})
			.catch(function () {
				alert("Could not creat account. Please try again");
			});
	}
	return (
		<div>
			<h1>My Project1721</h1>
			{ console.log('users === ',users) }
			{/* {users === null ? (
				<p>Loading...</p>
			) : (
				<p>No user available</p>
			)

			} */}
			
			{users === null ? (
				<p>Loading...</p>
			) : users.length === 0 ? (
				<p>No user available</p>
			) : (
				<div>
					<h2>Available Users</h2>
					<ol>
						{users.data.map((user, index) => (
							<li key={index}>
								Name: {user.name} - Email: {user.email}
							</li>
						))}
					</ol>
				</div>
			)}
			
			<form onSubmit={submitForm}>
				<input
					onChange={(e) => setUsername(e.target.value)}
					type="text"
					placeholder="Enter your username"
				/>
				<input
					onChange={(e) => setEmail(e.target.value)}
					type="text"
					placeholder="Enter your email address"
				/>
				<input type="submit" />
			</form>
		 
		</div>
	);
};
export default App