### In Socket io, you create certain events and you name those events. You can either listen to an event or emit an event.

### Emitting an event means to send data to all those people listening to that event.

### You cannot emit events directly betweeen two front-end(s). You can however emit an event from front end to backend. The backend then can emit the event to another frontend. So the backend is necessary as a layer to connect those events.
