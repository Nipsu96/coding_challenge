--------------------------------------
About Project

So, this is the code for my scoreboard. The assignment was to create a scoreboard for a game which shows the username of the player and the "Points" that they have scored. The list had to be sortable by the score. You were allowed to make only the frontend or just the backend, but I decided to do both. 

--------------------------------------
Live version

Live version can be tested at http://scoreboard.nodeeli1.net/

--------------------------------------
Installation Guide (Windows)

Folder structure (locations of folders needed in install)

├── back
│   ├──database
│
└── front

Clone this repositary to your local device and run npm install in both front and back folders with Command Prompt to install depencies. After that run npm run build in front folder and moved the created build folder into the root of the back. Navigate inside of the database folder and run migrations and seeds with following commands: npx knex migrate:latest & npx knex seed:run (You have to first set up SQL-database and configurate settings in knexfile.js). Finally create a .env file in the root of the back-folder and fill it with the following information: 
<br>
DB_HOST = localhost<br>
DB_USER = root<br>
DB_PASS = phpmyadminpassword<br>
DB_DATABASE = scoreboard_db<br>
DB_TYPE = mysql<br>
PORT = 3001<br>
SECRET = mysecretsecret<br>

Now you can start the application by running the command npm run watch in the back-folder 
