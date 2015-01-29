/**
* Create an object literal with the following key value pairs:
* type: {string} 'Goldfish'
* brand: {string} 'Pepperidge Farm'
* flavor: {string} 'Cheddar'
* count: {number} 2000
* It should be returned directly by the following function
* @return {object} - the object literal
*/

function returnObjectLiteral() {
  //your code here
	var obj = {
		type: "Goldfish",
		brand: "Pepperidge Farm",
		flavor: "Cheddar",
		count: 2000
	}
	return obj;
  //end your code
}

/**
* Create a constructor function for a `MessageLog` object.
* @constructor
* @param {string} user - The user associated to the message log
* The string indicating the user should be stored in the user property of the
* object instances.
*
* In addition, the following methods should be
* callable on a MessageLog object:
* logMessage( {string} messageText, {number} direction) - This should log a
* message
* as either being sent or received. A direction of 0 indicates it is a message
* the user sent. A direction of 1 indicates it is a message the user received.
* Behavior for other numbers is undefined.
* getSentMessage({number} n) - returns as a string, the content of the nth most
* recently sent message. To conserve memory, the object should only keep the
* last 5 message. n=0 retrieves the most recent n=4 retrieves the least recent
* of the 5.
* totalSent() - returns an integer indicating the total number of messages sent
* totalReceived() - returns an integer indicating the total number of messages
* received
*/

//your code here
var MessageLog = function(user) {
	this.user = user;
	this.messageBox = [];								//store user messages. 0 = most recent message
	this.messageBoxCount = 0;							//total stored messages	
	this.sentTotal = 0;									//total sent messages
	this.receivedTotal = 0;								//total received messages
	this.messLastReceived;								//last received message
	this.messLastSent;									//last sent message
	
	this.logMessage = function(message, status) {
		if(status == 1) {											//status 1 = received messages
			this.messageBox.unshift([message, status]);
			this.messLastReceived = message;
			this.receivedTotal++;
			this.messageBoxCount++;
		}
		else if(status == 0) {										//status 0 = sent messages
			this.messageBox.unshift([message, status]);			
			this.messLastSent = message;
			this.sentTotal++;
			this.messageBoxCount++;			
		}
		else {
			this.messageBox.push(undefined);
			this.messageBoxCount++;			
		}
		
		//Only store 5 messages
		if(this.messageBoxCount == 6) {										
			this.messageBox.pop();
			this.messageBoxCount--;
		}	
	}

	this.getSentMessage = function(n) {
		return this.messageBox[n][0];
	}	
	
	this.totalSent = function() {
		return this.sentTotal;
	}
	
	this.totalReceived = function() {
		return this.receivedTotal;
	}
}

//end your code

/**
* Add a method to the MessageLog prototype:
* lastReceivedMessage() - returns the message text of the last message the user
* received.
*/
//your code here
MessageLog.prototype.lastReceivedMessage = function() {
	return this.messLastReceived;
}
//end your code

/**
* Create an instance of a `MessageLog` for the user "BlackHatGuy". Have the
* instance receive 3 messages: "foo", "bar" and "baz", received in that order.
* Assign it to the variable myLog.
*/

//your code here
var myLog = new MessageLog("BlackHatGuy");
myLog.logMessage("foo", 1);
myLog.logMessage("bar", 1);
myLog.logMessage("baz", 1);
//end your code
