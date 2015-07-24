
//function takes values from page and sends them to mongodb via node server
(function() {
		var getNode = function(s) {
			return document.querySelector(s);
		},

		//Get required nodes
		textarea = getNode('.chat textarea');
		chatName = getNode('.chatName');

		try {
			var socket = io.connect('http://127.0.0.1:8080');
		} catch(e) {
			//set status to warn user
		}
		if(socket !== undefined) {
			
			//listen to text area
			textarea.addEventListener('keydown', function(event) {
				var self = this,
					name = chatName.value;

				if(event.which === 13 && event.shiftKey === false) {
					socket.emit('input', {
						name: name,
						message: self.value
					});

					event.preventDefault();
				}
			});
		}
	})