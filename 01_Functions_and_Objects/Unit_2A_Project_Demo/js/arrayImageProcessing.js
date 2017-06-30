// This code is modified from Larry's assignment code 
// to include only the Original image, and a new Green Only image.

/* CSCI E-3 Introduction to Web Programming Using Javascript
 *
 *
 * Homework Unit #2a
 *
 *
 */

/********************************************************************
 *
 * Image processing by way of arrays:  This assignment is designed to
 * give you a chance to work with arrays. The fact that we're processing images
 * makes the example interesting, but no prior knowledge of image processing
 * or understanding of the setup for this in hw2ArrayImageProcessingSetup.js
 * is required (though you're welcome to study that if you like!).
 *
 * In each of these functions, you'll be reading the parameter 'original',
 * which is an array of pixel data.  Each array contains four numeric elements to
 * describe each pixel in the image (red, green, blue, alpha).  The
 * data looks like this:
 *   original[0];  // pixel 0 red value
 *   original[1];  // pixel 0 green value
 *   original[2];  // pixel 0 blue value
 *   original[3];  // pixel 0 alpha value
 *   original[4];  // pixel 1 red value
 *   original[5];  // pixel 1 green value
 *   original[6];  // pixel 1 blue value
 *   original[7];  // pixel 1 alpha value
 *     etc...
 *
 * Essentially, your job is to read
 * data from the original array, and copy it to the output array, making
 * certain modifications along the way. It might be a good idea to start by
 * iterating over the original array and copying its data unmodified into the
 * output array. Once you have that working, you can try the data changes
 * required to make the output correct.
 *
 ********************************************************************/


/*
 * makeGreen - Reads data from an image bitmap array and writes new image data to another array object
 *            The output data should contain only green pixel data, with other red and blue color values set to 0.
 *
 *            @original {array} - the source bitmap data, an array of integers from 0-255
 *                         each pixel is represented by four consecutive array elements (r, g, b, a)
 *                         (red, green, blue, alpha), so the array has 4x elements as the image has pixels
 *            @output {array} - the bitmap data array to which the output image is written.
 *
 **/
function makeGreen(original, output) {
    var len = original.length;
    // start i at 2nd index in Array
    // (0 = red, 1 = green, 2 = blue)
    for (var i = 1; i < len; i += 4) {
        // Note: we don't need to do anything with the Red or Blue values,
        //       as they are already = 0 in output.

        // carry the green value over
        output[i] = original[i];

        // now carry the alpha value over
        output[i + 2] = original[i + 2];
    }
}
