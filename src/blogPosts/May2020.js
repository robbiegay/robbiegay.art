import React from "react";
import { Table } from "react-bootstrap";

function May2020() {
    return (
        <>
            <article className="text-justify">

                <br /><br />

                <p>
                    Since graduating from
                    the <a href="https://www.awesomeinc.org/bootcamp">Awesome Inc Bootcamp</a> in
                    December, I have been trying to fill in some of my computer science knowledge gaps —
                    things I would have learned had I gotten a CS Degree. In mid-May, I found
                    two really promising resources. The first was CS50, an entry level CS course
                    taught by Harvard and offered for free online. The course is really well done
                    and is incredibly popular, being both the most popular on campus course and the
                    most popular digital course. The second resource is a list of self-taught CS
                    resources and a learning roadmap. I plan on using this list over the next several
                    months to continue filling in my CS knowledge gaps.
                </p>

                <p>
                    <ul>
                        <li>
                            Harvard's CS50 Course: <a href="https://cs50.harvard.edu/x/2020/">CS50</a>
                        </li>
                        <li>
                            Computer Science Roadmap: <a href="https://teachyourselfcs.com/">Teach Yourself CS</a>
                        </li>
                    </ul>
                </p>

                <h3 className="text-center">CS50</h3>

                <p>
                    CS50 is taught by
                    Professor <a href="https://github.com/dmalan">David Malan</a>. From
                    the onset, I was incredibly impressed by the course’s high production
                    value and how entertaining Professor Malan makes what could easily be
                    difficult and dry subjects. I planned on working through the course
                    in a matter of weeks. Instead, I binged it over the course of 7 days.
                    I guess all that practice binge watching shows on Netflix paid off…
                </p>

                <p>
                    Feel free to briefly (or in its entirety) check out the first CS50 lecture:
                </p>

                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/jjqgP9dpD1k" title="CS50 2019 - Lecture 0 - Computational Thinking, Scratch" allowfullscreen></iframe>
                </div>

                <br />

                <p>
                    The course is divided into 9 weeks of lectures, a “Tracks” project, and a final project:
                    <ol>
                        <li>
                            Scratch
                        </li>
                        <li>
                            C
                        </li>
                        <li>
                            Arrays
                        </li>
                        <li>
                            Algorithms
                        </li>
                        <li>
                            Memory
                        </li>
                        <li>
                            Data Structures
                        </li>
                        <li>
                            Python
                        </li>
                        <li>
                            SQL
                        </li>
                        <li>
                            Information
                        </li>
                    </ol>
                    You then have an option to work through projects in
                    one of the following learning tracks: Android, Games, iOS, Web.
                    The course then cumulates with a final project.
                </p>

                <p>
                    CS50 taught me more than I could put in a single blog post,
                    so instead I want to focus on a few main points that I learned.
                    Additionally, I want to encourage you to take CS50 if you find any of this interesting :)
                </p>

                <h3 className="text-center">Bit, Bytes, and Binary Code</h3>

                <p>
                    Although I had a basic understanding of binary, I
                    wasn’t sure what steps allowed 1’s and 0’s transform
                    into the multifaceted application I am used to using.
                </p>

                <p>
                    Binary is a Base-2 system of counting, where you have two
                    digits: 0 and 1. Similar to our Base-10 system (0-9), when
                    you reach the terminal number (1) and want to continue counting,
                    you add a digit to the left. Here is an example of counting 0-10:
                </p>

                <Table>
                    <thead>
                        <tr>
                            <th>Decimal</th>
                            <th>Binary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">0</th>
                            <td><code>0000</code></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td><code>0001</code></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td><code>0010</code></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td><code>0011</code></td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td><code>0100</code></td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td><code>0101</code></td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td><code>0110</code></td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td><code>0111</code></td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td><code>1000</code></td>
                        </tr>
                        <tr>
                            <th scope="row">9</th>
                            <td><code>1001</code></td>
                        </tr>
                        <tr>
                            <th scope="row">10</th>
                            <td><code>1010</code></td>
                        </tr>
                    </tbody>
                </Table>

                <p>
                    Why is binary useful to computers? A useful way to send a signal through 
                    a computer is using electrical impulses. Impulse off: 0. Impulse on: 1. 
                    A <a href="https://en.wikipedia.org/wiki/Transistor">transistor </a> in 
                    a computer can store billions of these impulses, allowing the computer 
                    to store large amounts of information.
                </p>

                <p>
                    A group of 8 bits is called a byte. When you hear about your computer 
                    having 1 Gigabyte (Gb) of memory, this means that it can store 1 billion 
                    bytes (or 8 billion bits). 
                </p>

                <p>
                    Since a byte contains 8 bits, it can store values from 0 
                    (00000000) up to 255 (11111111). Since 8 digits are hard to 
                    read and write, computer scientists often use a Base-16 system 
                    of counting called Hexadecimal, using the digits 0-9 A-F. The is 
                    useful because a byte can now be expressed with just two digits. 
                    To notate Hexadecimal, it is useful to prefix it with 0x:
                </p>

                <Table>
                    <thead>
                        <tr>
                            <th>Decimal</th>
                            <th>Binary</th>
                            <th>Hexadecimal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">0</th>
                            <td><code>00000000</code></td>
                            <td><code>0x00</code></td>
                        </tr>
                        <tr>
                            <th scope="row">10</th>
                            <td><code>00001010</code></td>
                            <td><code>0x0A</code></td>
                        </tr>
                        <tr>
                            <th scope="row">15</th>
                            <td><code>00001111</code></td>
                            <td><code>0x0F</code></td>
                        </tr>
                        <tr>
                            <th scope="row">255</th>
                            <td><code>11111111</code></td>
                            <td><code>0xFF</code></td>
                        </tr>
                    </tbody>
                </Table>

                <p>
                    You can begin building text documents and images using binary.
                </p>

                <br /><br />

                <h3 className="text-center">Text From Binary</h3>

                <p>
                    You create text from binary using a character encoding standard 
                    called <a href="http://www.asciitable.com/">ASCII (American Standard Code for Information Interchange)</a>. An 
                    ASCII character can be expressed using a single byte. When a computer is sent the following values: 72 73 33, 
                    it can interpret them as “HI!”. In binary, this looks something like 
                    this: <code>01001000 01001001 00100001</code>
                </p>

                <p>
                    A text message or word document could be created by using single bytes to 
                    represent each character.
                </p>

                <h3 className="text-center">Images From Binary</h3>

                <p>
                    Images seem like a complex item to render using only one’s and zero’s. 
                    An image, however, can be broken down into smaller components. If you 
                    zoom in enough on a digital image, you will eventually see pixilation, 
                    where the photo starts to look blurry as individual pixels appear. Each 
                    pixel is a single color, which combined with many many other pixels, can 
                    create the illusion of a high definition image. Each pixel on its own though, 
                    can be declared by how much of the primary colors Red, Green, or Blue you 
                    add to it. You can therefore tell a computer to display primary color values 
                    from 0-255 of intensity for each color.
                </p>

                <Table>
                    <thead>
                        <tr>
                            <th>Red</th>
                            <th>Green</th>
                            <th>Blue</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>0xFF</code> (256)</td>
                            <td><code>0x00</code> (0)</td>
                            <td><code>0x00</code> (0)</td>
                            <th scope="row">Red</th>
                        </tr>
                        <tr>
                            <td><code>0xFF</code> (256)</td>
                            <td><code>0xFF</code> (256)</td>
                            <td><code>0xFF</code> (256)</td>
                            <th scope="row">White</th>
                        </tr>
                        <tr>
                            <td><code>0x00</code> (0)</td>
                            <td><code>0x00</code> (0)</td>
                            <td><code>0x00</code> (0)</td>
                            <th scope="row">Black</th>
                        </tr>
                    </tbody>
                </Table>

                <h3 className="text-center">Compiling</h3>

                <p>
                    How does code written in a higher level language like C# get converted 
                    into one’s and zero’s? Compiling. 
                </p>

                <p>
                    There are 4 steps to take code written by humans in a higher 
                    level programing language and turn it into something readable by the machine:
                    <ol>
                        <li>
                            Preprocessing: Statements like <code>import</code> imports in all code 
                            from the imported file.
                        </li>
                        <li>
                            Compiling: The source code is converted into assembly language, a 
                            language much closer to Binary, and a language that can be understood by CPUs.
                        </li>
                        <li>
                            Assembling: The assembly code is converted into machine code.
                        </li>
                        <li>
                            Linking: All separate binary files  are combined into one large, single 
                            file for the computer to run.
                        </li>
                    </ol>
                </p>

                <p>
                    This entire, 4 part process is called compiling.
                </p>

                <h3 className="text-center">Memory</h3>

                <p>
                    A final topic from CS50 that I want to touch on is how bits and bytes 
                    are stored in memory. A computer’s RAM (random access memory) might have 
                    16Gb of memory. This means there are 16 billion empty bytes that can store 
                    information. Different data types take up different amounts of space:
                </p>

                <Table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Definition</th>
                            <th>Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">int</th>
                            <td>Whole numbers</td>
                            <td>4 bytes</td>
                        </tr>
                        <tr>
                            <th scope="row">double</th>
                            <td>Floating point numbers</td>
                            <td>8 bytes</td>
                        </tr>
                        <tr>
                            <th scope="row">bool</th>
                            <td>true or false</td>
                            <td>1 <strong>bit</strong></td>
                        </tr>
                        <tr>
                            <th scope="row">char</th>
                            <td>Individual ASCII character</td>
                            <td>2 bytes</td>
                        </tr>
                        <tr>
                            <th scope="row">string</th>
                            <td>A string of characters</td>
                            <td>2 bytes <strong>per</strong> character</td>
                        </tr>
                    </tbody>
                </Table>

                <p>
                    When you tell the computer: <code>int x;</code> the computer 
                    stores 4 bytes in RAM and names it <code>x</code>. When you 
                    assign <code>x</code> a value (ex. <code>x = 52;</code>), that 
                    value is stored in those 4 bytes of memory.
                </p>

                <h3 className="text-center">Closing</h3>

                <p>
                    I highly recommend Harvard’s CS50 course. David Malan 
                    does a great job explaining technical topics in an entertaining 
                    and easily understandable manner. Even if you have no background in 
                    computer science or programming, Professor Malan starts the series by 
                    explaining that 2/3rds of students in the class have no technical 
                    background. You can find the CS50 course 
                    here: <a href="https://cs50.harvard.edu/x/2020/">CS50</a>
                </p>

                <br />
                <br /><br /><br /><br /><br /><br /><br /><br />
            </article>
        </>
    );
}

export default May2020;
