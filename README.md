# labone
CS4032 Lab for creating a client to send a simple request to php server.

With regards to this lab execution will only work on TCD OpenNebula network.

The PHP default echo server requires authentication and therefore blocks my client, however
I have the same PHP code live on another debian wheezy node which the client code points 
to by default.

| Name             | StudentID  |
| ---------------- |:----------:|
| Conor O'Flanagan | 13323109   |

####Setup/Install

**THIS HAS ONLY BEEN TESTED ON DEBIAN BASED SYSTEMS**


In order to run the `./compile.sh` you need `sudo`. 
Some debian machines don't come installed with `sudo` so install it via `apt-get install sudo`.


If you dont have Node.js on your machine run the command `$ ./compile.sh`
This will install node.js and then run the server.	
If you've already installed node, then just run the command `node server.js`
