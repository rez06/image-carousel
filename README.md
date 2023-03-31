In this challenge, I selected all the <img> elements inside the .carousel container using the document.querySelectorAll() method. 

I added a variable called currentIndex to keep track of which image is currently being displayed, and another variable called intervalTime that will define the duration of each image display.

Then I create a function that uses the setInterval() method to execute a function every intervalTime 1000 milliseconds. The  function first hides the current image by setting its display property to none. 

The next statement in the function updates the currentIndex variable to point to the next image in the array. currentIndex + 1 increments the current index, and % images.length makes sure that it wraps around to the beginning of the array if it goes past the end. 

The last statement shows the next image by setting its display property to block. This makes the image visible. The next time the function runs, it will hide this image and show the next one.
