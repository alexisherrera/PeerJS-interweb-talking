var peer = new Peer({
  key: '8d7triq4ddrnewmi'
});

//open up a connection for user
peer.on('open', function(id) {
  console.log('My peer ID is: ' + id);
});

//someone connects with user
peer.on('connection', function(conn) {
  console.log('connected')
  console.log(conn)
  console.log('open connection')
  // Receive messages
  conn.on('data', function(data) {
    console.log(data.text);
  });

  // Send messages
  conn.send('Hello!');
});

var connectButton = document.getElementById('connectButton');

connectButton.addEventListener('click', function() {
  var textInput = document.getElementById('connectionInput').value;

  console.log(textInput)
  if (textInput.length === 0) { alert('Not a valid connection!'); return; }

  //try and connect with someone
  var conn = peer.connect(textInput);
  console.log(conn)


  //lets send some data with
  conn.on('open', function() {
    // Receive messages
    conn.on('data', function(data) {
      console.log('Received', data);
    });
    // Send messages
    conn.send('Hello!');
    console.log('sent data');
  });
})
