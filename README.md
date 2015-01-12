# ng-boilerplate
ng-boilerplate project's with ionic and more featured.<br />
Full stack angular app using pouchDB/couchDB to store data and handle security. 

<h2>Installation</h2>

The core of the app is an angular&ionic app served by a minimal express app. 
To deploy the app, clone the repository:

<pre>git clone https://github.com/Gluri/ng-boilerplate/ your_dir</pre>


Navigate to the client directory and install the client dependencies:

<pre>
cd your_dir/client
bower install
npm install
</pre>

Navigate to the serverdirectory and install the server dependencies:

<pre>
cd ../server
npm install
</pre>
Serve the app using node or nodemon
<pre>
nodemon server.js
</pre>

<h2>Issue</h2>
The command line "bower install" on dir client install ionic v1.0.0-beta.5b, for resolve more issue the good one is v1.0.0-beta-14.

This project is heavily inspired by
<ul>
<li><a href="https://github.com/ngbp/ngbp">ngbp</a></li>
<li><a href="https://github.com/arnoutaertgeerts/ng-pouch" target="_blank">ng-pouch</a></li>
