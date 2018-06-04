# BITMAP TRANSFORMER:
##### Travis TAG: <img src='https://travis-ci.com/Aaronmeade92/04-data-modeling-and-binary.svg?branch=josh-aaron'>

#### 04-LAB-AARON-JOSH

We followed a slightly modified Example strategy to attack our problem.

We still have to tackle the problem of exporting an edited bitmap file.

We also have as a stretch goal to write a CLI for our image transformer.

#### Example Strategy 
1. Read the input bitmap file using the fs module [x]
0. Parse the bitmap's buffer into object representing a bitmap (using a constructor) [x]
0. Using metadata from the parsed bitmap object run a transform on the buffer directly (mutate the color or raster data)[x]
0. Write the mutated buffer to the output file [ ]
0. _stretch goal_: Write CLI to gather user input (infile, outfile, and transform) [ ]

####Transform Ideas
* Color Pallet Transforms 
  * Invert [x]


##  Documentation

* Our App currently consists of **four modules**:
    <br>
    * The **readFile** module, which reads an input file path, and on success with an intact file path, strips out the buffer for access and returns it.
<br>

    * The **parsedBitmap** module, which takes the revealed buffer from the **readFile** module and parses out the sections of the bitmap header we want to have direct access to later on.
<br>

    * The **invert** module takes in the revealed data from the **parsedBitmap** module, and in the code are commented out multiple versions of FX to work with, not just invert.
<br>

    * The **writeFile** module takes in the buffer from the **invert** module, and writes a new file from that buffer info.
