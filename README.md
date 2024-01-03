<!DOCTYPE html>
<html>
<head>
</head>
<body>

<h1>Speer_Backend_Assignment</h1>
<h1>Your Note App</h1>
Demo link- https://www.loom.com/share/b62f6837485a4fe086f074c07999b0b6?sid=3665cd7b-12ff-42cc-b4fc-60f9448ae62a
<p>Your Note App is a secure and scalable RESTful API that allows users to create, manage, and share notes. Users can also search for notes based on keywords. This project is built with Node.js, Express.js, MongoDB, and JWT for authentication.</p>

<h2>Table of Contents</h2>

<ul>
  <li><a href="#features">Features</a></li>
  <li><a href="#getting-started">Getting Started</a>
    <ul>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#installation">Installation</a></li>
    </ul>
  </li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#api-endpoints">API Endpoints</a></li>
  <li><a href="#authentication">Authentication</a></li>
  <li><a href="#testing">Testing</a></li>
  <li><a href="#license">License</a></li>
</ul>

<h2>Features</h2>

<ul>
  <li>User registration and authentication with JWT</li>
  <li>Create, read, update, and delete notes</li>
  <li>Share notes with other users</li>
  <li>Search for notes based on keywords</li>
  <li>Rate limiting and request throttling for high traffic</li>
</ul>

<h2>Getting Started</h2>

<h3>Prerequisites</h3>

<p>Before you begin, ensure you have met the following requirements:</p>

<ul>
  <li>Node.js and npm installed</li>
  <li>MongoDB installed and running</li>
  <li>Git (optional)</li>
</ul>

<h3>Installation</h3>

<ol>
  <li>Clone the repository (if you haven't already):
    <pre>git clone https://github.com/AbhinawRatan/Sheer-backend-assignmnet.git</pre>
  </li>
  <li>Navigate to the project directory:
    <pre>cd your-note-app</pre>
  </li>
  <li>Install project dependencies:
    <pre>npm install</pre>
  </li>
  <li>Create a .env file based on the provided .env.example and set your environment variables.</li>
</ol>

<h2>Usage</h2>

<p>To run the project locally, use the following command:</p>

<pre>npm start</pre>

<h2>API Endpoints</h2>

<h3>Authentication Endpoints</h3>

<ul>
  <li>POST /api/auth/signup: Create a new user account.</li>
  <li>POST /api/auth/login: Log in to an existing user account and receive an access token.</li>
</ul>

<h3>Note Endpoints</h3>

<ul>
  <li>GET /api/notes: Get a list of all notes for the authenticated user.</li>
  <li>GET /api/notes/:id: Get a note by ID for the authenticated user.</li>
  <li>POST /api/notes: Create a new note for the authenticated user.</li>
  <li>PUT /api/notes/:id: Update an existing note by ID for the authenticated user.</li>
  <li>DELETE /api/notes/:id: Delete a note by ID for the authenticated user.</li>
  <li>POST /api/notes/:id/share: Share a note with another user for the authenticated user.</li>
</ul>

<h3>Search Endpoint</h3>

<ul>
  <li>GET /api/search?q=:query: Search for notes based on keywords for the authenticated user.</li>
</ul>

<h2>Authentication</h2>

<p>User registration is done using the /api/auth/signup endpoint.</p>
<p>User login is performed using the /api/auth/login endpoint, and an access token is provided.</p>

<h2>Testing</h2>

<p>To run tests, use the following command:</p>

<pre>npm test</pre>



<h2>License</h2>

<p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>

</body>
</html>
