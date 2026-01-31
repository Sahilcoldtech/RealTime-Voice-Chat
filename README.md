<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Real-Time Voice Chat Application</title>
</head>
<body>

  <h1>🎙️ Real-Time Voice Chat Application</h1>
  <h2>Full Stack Intern Assignment</h2>

  <hr/>

  <h2> Overview</h2>
  <p>
    This project is a real-time voice chat application that allows two users
    (<strong>Customer</strong> and <strong>Agent</strong>) to connect through their browser,
    communicate using voice, and exchange text messages in real time.
  </p>

  <p>
    The application demonstrates understanding of real-time communication,
    WebRTC-based voice calling, and Socket.io-based signaling.
  </p>

  <hr/>

  <h2>Tech Stack</h2>
  <ul>
    <li><strong>Frontend:</strong> React.js</li>
    <li><strong>Backend:</strong> Node.js</li>
    <li><strong>Real-time Communication:</strong>
      <ul>
        <li>Socket.io (signaling and messaging)</li>
        <li>WebRTC (voice communication)</li>
      </ul>
    </li>
  </ul>

  <hr/>

  <h2>Features Implemented</h2>

  <h3>Basic Voice Call</h3>
  <ul>
    <li>Start a voice call directly from the browser</li>
    <li>Two users can hear each other in real time</li>
    <li>Connection status display (Connecting, Connected, Disconnected)</li>
    <li>End call functionality</li>
    <li>Mute and Unmute controls</li>
  </ul>

  <h3>Real-Time Chat / Transcript</h3>
  <ul>
    <li>Text messages exchanged during the call</li>
    <li>Messages appear instantly for both users</li>
    <li>Displays sender name and timestamp</li>
  </ul>

  <h3>Connection Handling</h3>
  <ul>
    <li>If one user disconnects, the call ends for both users</li>
    <li>Displays <em>"Call Ended"</em> message</li>
    <li>Handles page refresh gracefully</li>
    <li>Shows error messages when connection fails</li>
  </ul>

  <h3>User Interface</h3>
  <ul>
    <li>Simple and clean UI</li>
    <li>Displays connected user role (Customer / Agent)</li>
    <li>Shows call duration</li>
    <li>Basic call controls (Mute, Unmute, End Call)</li>
  </ul>

  <hr/>

  <h2>Project Structure</h2>
  <pre>
RealTime-Voice-Chat/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── node_modules/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── .gitignore
└── README.md
  </pre>

  <hr/>

  <h2>Installation & Setup</h2>

  <h3>1.Clone the Repository</h3>
  <pre>
git clone https://github.com/Sahilcoldtech/RealTime-Voice-Chat.git
cd RealTime-Voice-Chat
  </pre>

  <h3>2.Backend Setup</h3>
  <pre>
cd backend
npm install
npm start
  </pre>
  <p>Backend runs on <strong>http://localhost:5000</strong></p>

  <h3>3.Frontend Setup</h3>
  <pre>
cd frontend
npm install
npm start
  </pre>
  <p>Frontend runs on <strong>http://localhost:3000</strong></p>

  <hr/>

  <h2>How to Use</h2>
  <ol>
    <li>Open the application in two different browsers or tabs</li>
    <li>Join as <strong>Customer</strong> in one and <strong>Agent</strong> in the other</li>
    <li>Start the voice call</li>
    <li>Communicate using voice and real-time chat</li>
    <li>End the call from either side</li>
  </ol>

  <hr/>

  <h2>Challenges Faced & Solutions</h2>

  <h3>WebRTC Connection Setup</h3>
  <p>
    <strong>Problem:</strong> Difficulty in establishing peer-to-peer connections.<br/>
    <strong>Solution:</strong> Implemented Socket.io signaling for offer, answer,
    and ICE candidate exchange.
  </p>

  <h3>Handling Disconnections</h3>
  <p>
    <strong>Problem:</strong> Call not ending properly when a user refreshes the page.<br/>
    <strong>Solution:</strong> Added socket disconnect listeners to notify the other user.
  </p>

  <h3>Real-Time Message Sync</h3>
  <p>
    <strong>Problem:</strong> Messages were not appearing instantly.<br/>
    <strong>Solution:</strong> Centralized real-time events using Socket.io.
  </p>

  <hr/>

  <h2>Screenshots</h2>
  <p>(Add screenshots of the working application)</p>
  <ul>
    <li>Call connected screen</li>
    <li>Real-time chat during call</li>
    <li>Call ended state</li>
  </ul>

  <hr/>

  <h2>Assignment Requirements Covered</h2>
  <ul>
    <li>Real-time voice communication</li>
    <li>Real-time text chat</li>
    <li>Connection handling and error management</li>
    <li>Clean and simple UI</li>
    <li>Proper documentation</li>
  </ul>

  <hr/>

  <h2>Author</h2>
  <p>
    <strong>Sahil Mayekar</strong><br/>
    GitHub:
    <a href="https://github.com/Sahilcoldtech">
      https://github.com/Sahilcoldtech
    </a>
  </p>

</body>
</html>
