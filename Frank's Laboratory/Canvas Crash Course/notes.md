# Notes

Canvas is used to draw interactive graphics with JavaScript.
By default, canvas is transparent, so you can layer multiple canvas elements on top of each other.

getContext only works when called on variable that refers to a canvas element.
getContext returns a reference to building canvas 2d(in our case) drawing api object.
Other argument that can be passed to getContext is webgl.
`getContext("webgl")`
