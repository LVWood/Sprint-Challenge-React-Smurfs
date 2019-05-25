1.  Explain the differences between `client-side routing` and `server-side routing`.

With server-side routing, all changes have to be passed through the server, which requires a refresh for every change. With client-side routing, renders are already coded within the page itself, so they happen internally without having to get a refresh from the server.

1.  What does HTTP stand for?

Hyper-text transfer protocol


1.  What does CRUD stand for?

Create Read Update Delete

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create => .post()
Read => .get()
Update => .put()
Delete => .delete()

1.  Mention three tools we can use to make AJAX requests

I'm not sure what is meant by "three tools" here... You can use using either fetch or the axios library by chaining your axios or fetch method().then( to handle the data ).catch( to handle errors )?