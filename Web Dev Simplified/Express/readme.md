# Express

<p>After app.listen(3000), once we open localhost:3000, we'll se Cannot GET /. This means that our application doesn't have any route setup, so when we try to get the index route which is the '/', it's saying that it can't find this route.</p>

<p>This is where express comes handy. We use express to setup different routes.</p>

<p>
    We need to have a view engine setup in order to render a file through our express server. Here we're using EJS, which stands for Embedded JavaScript templating.
</p>

<p>
    A router is essentially a way for you to create another instance of your application that is its own little mini application that has all of its own logic applied to it. Then we can just insert this into our main application.
</p>
