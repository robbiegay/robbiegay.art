import React from "react";
import { Carousel } from "react-bootstrap";

function DDIABookSummary() {
    return (
        <>
            <article className="text-justify">
                <br /><br />

                <p>
                    <b><u>Rating</u></b>:
</p>

                <p>
                    &#11088; &#11088; &#11088; &#11088; &#11088;
</p>

                <p>
                    <b>Readability</b>: DDIA is a technical read, but is engaging and fairly easy to follow. On my first attempt as a new QA, this was over my head. With a little bit of Dev experience, I think it is informative and easy to read.
</p>

                <p>
                    <b>Length</b>: At 550 pages, it is a long book.
</p>

                <p>
                    <b>Foundational/How-To</b>: DDIA cover high-level topics. I think this is more of a theory/foundational book, as opposed to something like <a href="https://www.manning.com/books/asp-net-core-in-action-third-edition">ASP.NET Core in Action</a> which I would consider a “How-to”, as it cover specific technologies and walks you through hands-on exercises.
</p>

                <p>
                    <b>Overall</b>: DDIA is probably the best technical book I have read. So much so, that when I finished it in February of 2023, I immediately started going through it again to take detailed notes which I have written out below.
</p>

                <br />

                <hr />

                <br />


                <p>
                    <b><u>Summary/Notes</u></b>:
</p>

                <p>
                    <i>Note: DDIA felt like an important book, and I wanted to re-read it chapter-by-chapter, summarizing the topics covered. I tried to put some parts in my own words, while at other times, Martin Kleppmann said it best and I simply copied down what he wrote verbatim.</i>
                </p>

                <br />

                <p>
                    Designing Data-Intensive Applications is probably the best technical book I have ever read. To quote a few people:
</p>

                <p>
                    “This book should be a required reading for software engineers. Designing Data Intensive Applications is a rare resource that connects theory and practice to help developers make smart decisions”
</p>

                <p>
                    - Kevin Scott CTO of Microsoft.
</p>

                <p>
                    Jay Kreps (creator of Apache Kafka) says it “bridges a huge gap between distributed system theory and practical engineering.” Finally, <a href="https://teachyourselfcs.com/">teach yourself cs</a>, names it as one of two technical books that give readers the most return on time invested (the other book being <a href="https://csapp.cs.cmu.edu/">Computer Systems: A Programmer's Perspective</a>).
</p>

                <p>
                    The book can be a little heavy. This was my second attempt reading it, the first being a few months into my QA job at OldCo and I got lost pretty quickly. If you pick this up and do find it challenging, I suggest that you at least read his closing essay in chapter 12 titled “Doing the right thing” (pages 533-43 in my print version). This is higher level (read: easier) from a technical standpoint and is a strong review of the ethics of big data ethics (or “big surveillance” as the author might call it).
</p>

                <p>
                    I am going to try to summarize some key points from each of the 12 chapters.
</p>

                <br />
                <br />

                <hr />

                <br />

                <h3 className="text-center">Preface</h3>

                <br />

                <p>
                    Data-intensive vs compute-intensive: Data-intensive applications are where data not compute is the challenge: the quantity of data, the complexity, and the speed at which it changes.
</p>

                <br />


                <hr />

                <br />

                <h3 className="text-center">Part I: Foundations of Data Systems</h3>

                <br />

                <p>
                    Part I discusses the fundamental ideas that apply to all data systems, regardless of if they are running on a single machine or distributed across a cluster of machines.
</p>

                <br />
                <hr />
                <br />

                <h3 className="text-center">Chapter 1: Reliable, Scalable, and Maintainable Applications</h3>

                <br />

                <p>
                    Data-intensive applications are typically built from standard building blocks:
</p>

                <p>
                    <ul><li>Store information (databases)</li><li>Remember the result of expensive operations to speed up future reads (caches)</li><li>Search by keyword or filter (search indexes)</li><li>Send a message to another process to be handled asynchronously (stream processing)</li><li>Periodically crunch large amount of accumulated data (batch processing)</li></ul>
                </p>

                <br />

                <p>
                    Applications all have:
</p>

                <p>
                    <ul><li>Functional requirements: what it should do such as storing and processing data</li><li>Nonfunctional requirements: security, reliability, compliance, scalability, compatibility, maintainability</li></ul>
                </p>

                <br />

                <p>
                    This chapter introduces 3 of the most important nonfunctional requirements for data-intensive applications:
</p>

                <br />

                <p>
                    <b>Reliability</b>:
</p>

                <p>
                    The system should work correctly even in the face of adversity.
</p>

                <p>
                    Reliability is about making the system work correctly even in the presence of faults. Faults can be hardware (typically random and uncorrelated. Although hardware can be generally very reliable, even low failure rates add up when you are dealing with large amounts of hardware – example: hard disks are reported to have a mean time to failure (MTTF) of 10 to 50 years. In a large storage cluster with 10,000 disks, you should expect an average of one failure per day), software (bugs are systematic and typically harder to deal with), or human (human error – a study of large internet service providers found that most outages were caused by operator error). Fault-tolerance techniques can hid certain types of faults from the end user.
</p>

                <p>
                    Reducing human errors:
</p>

                <p>
                    <ul><li>Make it easy to do the right thing (well designed APIs and admin UIs)</li><li>Decouple the places where people make the most mistakes (sandbox and dev/testing environments separated from pod)</li><li>Test thoroughly at all levels</li><li>Allow quick rollback from human errors (easy to rollback config changes)</li><li>Setup detailed and clear monitoring (telemetry) so that you can see problems coming</li><li>Implement good management practices and training</li></ul>
                </p>

                <br />

                <p>
                    <b>Scalability</b>:
</p>

                <p>
                    The system should have reasonable ways of dealing with growth.
</p>

                <p>
                    The goal of scalability is to keep performance good even when load increases. To talk about this, we first need ways to describe load and performance quantitatively. Numbers that we use for describing load are called “load parameters”. Examples: requests per second to a web server, ratio of read to writes in a database, number of simultaneously active users, hit rate on a cache. Depending on your needs, you may care more about average load or bottlenecks.
</p>

                <p>
                    Typically, percentiles are better than average because the average (mean) is not what most users experience – instead the median (halfway) is often better. Percentiles: the median user (50th percentile, or p50) and also the outliers (p95, p99, p999). Higher percentiles are known as tail latencies
</p>

                <p>
                    SLA (service level agreements) talk in these terms. For example, a SLA may say: a service is considered up if it has a median response time of 200ms or less and a 99th percentile of under 1s, and is required to be up (per the previously stated parameters) 99.9%
</p>

                <p>
                    <ul><li>Scaling up: upgrade to more powerful machines</li><li>Scaling out: add more of the same machines. </li></ul>
                </p>

                <p>
                    Some systems are “elastic” – they can add and remove resources based on changing load.
</p>
                <br />

                <p>
                    <b>Maintainability</b>:
</p>

                <p>
                    Many different people work on a system, they should be able to work on it productively.
</p>

                <p>
                    Maintainability is about making life easier for the engineering and operations team. Good abstractions make the system easier to modify and adapt to new use cases. Good operability means having ways to easily visualize the system's health and having effective ways for managing said system health.
</p>

                <br />
                <hr />
                <br />

                <h3 className="text-center">Chapter 2: Data Models and Query Languages</h3>
                <br />

                <p>
                    We have to model real world information in terms of objects and data structures.
</p>

                <br />

                <p>
                    <b>Data Modeling</b>:
</p>

                <p>
                    Historically, data was represented in one big tree (hierarchical data models) but that wasn’t good at representing many-to-many relationships so the relation data model was developed. Although relational database are very popular, some data still isn't modeled well this way, so two types of nonrelational (NoSQL) data models have been developed:
</p>

                <p>
                    <ul><li>Document DBs: The data coming in is self-contained documents and relationships between documents is rare.</li><li>Graph DBs: Opposite direction – target situation is where anything is potentially related to anything else. Graph DBs consist of a series of vertexes (data) and edges (connections between data).</li></ul>
                </p>

                <p>
                    All three – document, relational, and graph – are widely used today.
</p>

                <p>
                    Document and graph DBs don't enforce a schema – not to say there isn't one, just not required. This is the difference between explicit schema (enforced on write – if you don’t match the schema, your write will fail) and implicit (schema is assumed on read).
</p>

                <br />

                <p>
                    <b>Query Languages</b>:
</p>

                <p>
                    Imperative languages – many programing languages are imperative – give a list of steps to achieve a goal. Ie. make a sandwich: get out bread loaf, slice two slices, get out peanut butter…
</p>

                <p>
                    Declarative languages: you just give the desired result. SQL is declarative: you give a pattern (I want all records where Location is “USA”) and the database engine optimizes and determines the steps needed to reach that goal. This hides complex implementation details from the user. Declarative languages often lend themselves to parallel execution via only giving a requested outcome. This means that optimization can be made behind the scenes. This is good as modern computers are getting faster by added more cores (parallel processing power) rather than running higher clock speeds.
</p>

                <br />

                <p>
                    <b>MapReduce</b>:
</p>

                <p>
                    MapReduce is a programming model for processing large amount of data in bulk across many machines. It was popularized by Google.
</p>

                <p>
                    Map (also known as collect) and reduce (also known as fold or inject) are similar to functions that exist in many functional programming languages. In the style of functional programming, the map and reduce functions must be pure: they only use the data passed in as input, no additional internal database calls, and they must not have any side effects. Map gathers the data you need and reduce does processing on that data.
</p>

                <p>
                    More details on MapReduce can be found in chapter 10 summary.
</p>

                <br />

                <p>
                    Some interesting research is ongoing on other data models:
</p>

                <p>
                    <ul>
                        <li>
                            Genome data: often needed to perform sequence-similarity searches which means taking a really long string (representing a DNA molecule) and matching it against a large database of strings that are similar but not identical. Specialized genome database software: GenBank
        </li>
                        <li>
                            Partial physicists have been doing Big Data-style large-scale data analysis for decades and the Large Hadron Collider (LHC) works with hundred of Petabytes. At such scale, custom solutions are needed.
</li>
                        <li>
                            Full text search is arguably a kind of data model used alongside databases.
</li>
                    </ul>
                </p>

                <br />


                <br />
                <hr />
                <br />


                <br />

                <h3 className="text-center">Chapter 3: Storage and Retrieval</h3>

                <br />

                <p>
                    Chapter 3 covers how to store and retrieve information via databases.
</p>

                <br />

                <p>
                    <b>Append-only databases</b>:
</p>

                <p>
                    A naïve implementation of a database could be as simple as a text file that has information added to the end of the file. Adding new data to the end of a text file is fast, making database writes very efficient! Unfortunately, reads are slow, as the database must be scanned from beginning to end looking for requested data – a O(n) time operation.
</p>

                <p>
                    An optimization we can make is to add indexes to our database. Indexes are metadata added to the data that tells us where to efficiently find it. This could be a simple hashtable. To do this, we would give each piece of data a key, and the matching value is an offset in our file of where to find the data.
</p>

                <br />

                <p>
                    <b>Example</b>:
</p>

                <p>
                    <code>
                        Data File:
    </code>
                </p>

                <p>
                    <code>
                        [location 0] (key: 123, value: dog) (key: 456, value: fish)
    </code>
                </p>

                <p>
                    <code>
                        [location 12] (key: 789, value: cat) (key: 000, value: mouse)
    </code>
                </p>

                <br />

                <p>
                    <code>
                        Hashtable:
    </code>
                </p>

                <p>
                    <code>
                        key: 123, value: 0
    </code>
                </p>

                <p>
                    <code>
                        …
    </code>
                </p>

                <p>
                    <code>
                        Key 789, value: 12

	</code>
                </p>

                <br />

                <p>
                    When we query for a key with an index on it, our hash function quickly gives us the offset of where to find out data, and we have optimized to O(1) reads!
</p>

                <br />

                <p>
                    You can add multiple indexes to a dataset. Each additional index adds processing time to your write operations – you are making a tradeoff between efficient writes and efficient reads. This could be a good time to think about the use case of your database. If your application expected to have frequent writes but few reads, you might want to optimize for writes (this includes optimizations beyond our simple indexing optimization). Likewise, a database receiving frequent reads could consider optimizing for that use case.
</p>

                <p>
                    Continuing with our append-only log implementation, adding a new data entry is as simple as appending to the end of the file. To update data, we append a new entry, and on reads, we take only the most recent entry matching a given key – old data is still in the database but the user only sees the most recent entry. We also overwrite any indexes that point to old data and we make sure that it points to the most recent entry. To delete data, we append a special entry that saying the something to the effect of: “this item has been deleted”. Reads for that data will now give the same result as if the entry did not exist in the database (ie returning no result). These special “delete” entries are sometimes known as tombstones.
</p>

                <p>
                    As we continue to add data to our append-only log, our log will likely grow too large given enough use. To combat this, we can implement a process called compaction. Compaction will scan through the database and delete all duplicate entries except for the most recent one. For tombstone entries, all entries for that data could be deleted. Compaction keeps our read only log at a manageable size.
</p>

                <br />

                <p>
                    We have now built a simple and efficient read and write database. A few details to round out our database implementation:
</p>

                <p>
                    Indexes are often kept in memory to improve performance. If the database crashes, these would be lost. You could rescan the database when you restart the database but this could be time intensive. A better solution would be to occasionally save a snapshot of the indexes that can be used to rebuild the indexes quickly if the database crashes.
</p>

                <p>
                    Database files are often kept in a non-human readable, binary format to improve performance.
</p>

                <p>
                    Crashes can lead to a partially written entry. To avoid database corruption, the database should include checksums that show that certain entries are corrupted. These entries remain in the log but are ignored by the system. When compaction runs, they are removed from the database.
</p>

                <p>
                    It is common to implement multiple read threads and a single write thread, to avoid complications around concurrent writes.
</p>

                <br />

                <p>
                    <b>Update in place databases</b>:
</p>

                <p>
                    An alternative to the append-only log is the update in place implementation. Rather than appending to the end of the file, if an entry already exists, it is updated. Only one copy of each entry exists in the database. There is no need for a compaction process.
</p>

                <br />

                <p>
                <b>Advantages of append-only log over update in place</b>:

                </p>

                <p>

                    <ul>
                        <li>
                        Appending to a append-only log is faster than finding a file location and updating files at random.

                        </li>
                        <li>
                    While checksums on the append-only log prevents corruption of partially written records, update in place can lead to corrupted data.
                            
                        </li>
                        <li>
                    Updating in place requires latches (lightweight locks) to prevent reads from seeing the database in an inconsistent state
                            
                        </li>
                    </ul>
  
</p>

                <br />

                <p>
                    <b>Downsides to append-only log</b>:
</p>

                <p>
                    <ul>
                        <li>
                        The hashtables that we use to index the database must fit in memory.

                        </li>
                        <li>
                    Range queries are quite inefficient
                            
                        </li>
                    </ul>

</p>

                <br />

                <br />

                <br />

                <p>
                    <b>SSTables and LSM-Trees</b>:
</p>

                <p>
                    A way to continue to improve our append-only log is to store keys in a Sorted String Table or SSTable. Rather than keeping a full index of entry in the database, we can keep a much sparser data structure while still maintaining constant time lookups. The way this works is similar to a physical dictionary that keeps the starting word at the top of the page. We can keep a list of the starting words for each page, and once we get close enough to the word we are looking for (ie the correct page) we can quickly scan through that page manually. In practice, this looks like one entry for every kilobyte of data.
</p>

                <br />

                <div className="text-center">
                    <figure className="figure">
                        <img className="img-fluid" src="/blogAssets/img/2023/SSTable.png" alt="SSTables" />
                        <figcaption className="figure-caption text-center"></ figcaption>
                    </figure>
                </div>

                <br />

                <p>
                    <b>How to construct and maintain an SSTable</b>:
</p>

                <p>
                    When a new write comes in, keep it in an in-memory sorted data structure like a balanced tree (sometimes referred to as the memtable). When the memtable exceeds a certain size (usually a few MBs), write it to disk as a new segment. Since the memtable is already sorted, we can just write it as is. While writing the old memtable, writes can continue on a new memtable. In order to perform a read, first check the memtable, then the segments on disk from newest to oldest. From time to time, run compaction on the segments as a background task. For crash safety, keep an append-only log of all writes in the memtable. If a crash occurs, all the writes are not lost and con be recovered from the log. When the memtable is committed to disk, discard the append only log.
</p>

                <br />

                <p>
                    The algorithm we have described for creating a SSTable is essentially a Log-Structured Merge-Tree (LSM Tree). LSM-Trees can be slow to lookup data as checking first a memtable and then every segment in storage just to determine that some piece of data does not exist is very inefficient. A bloom filter – a memory efficient data structure for approximating the contents of a dataset – can be helpful here.
</p>

                <p>
                    LSM-Trees are gaining acceptance but are still not the most common indexing structure – the most common indexing structure is still the binary tree (B-Tree) which is used in almost all relational databases and many non-relation databases.
</p>

                <br />

                <p>
                    <b>B-Trees</b>:
</p>

                <p>
                    B-Trees break data down into fixed page sizes (usually 4KB). The page contains either references to more pages or data (a page with data is called a “leaf page”). The number of references to child pages is called a branching factor. This is a very efficient way to index. Most databases only contain 3 or 4 levels of binary tree branches. A 4-level index with 4kb pages and a branching factor of 500 can store up to 250TB!
</p>

                <p>
                    B-Trees often use a write ahead log (WAL) – an append-only log that is kept in case of a database crash.
</p>

                <br />

                <br />

                <div className="text-center">
                    <figure className="figure">
                        <img className="img-fluid" src="/blogAssets/img/2023/BTree.png" alt="BTree" />
                        <figcaption className="figure-caption text-center"></ figcaption>
                    </figure>
                </div>

                <br />

                <p>
                    <b>A random note from the chapter that I wanted to include</b>:
</p>

                <p>
                    Fuzzy indexes: fuzzy indexes are used to include index matches that are close but not exact, like misspellings.
</p>

                <br />

                <br />

                <p>
                    <b>In-memory databases</b>:
</p>

                <p>
                    The reasons to save data to disk in a database is: storage is cheaper than memory (RAM) and disk storage is stable (not lost on power failure). As RAM has grown cheaper, in-memory databases have been developed. These can be made stable via: special hardware (battery powered RAM), WAL, periodic snapshots to disk, or replicating in-memory databases across multiple nodes for redundancy.
</p>

                <br />

                <br />

                <p>
                    <b>Database use cases – OLTP vs OLAP</b>:
</p>

                <p>
                    There are typically two use cases for stored information: OLTP and OLAP
</p>

                <br />

                <br />

                <div className="text-center">
                    <figure className="figure">
                        <img className="img-fluid" src="/blogAssets/img/2023/OLTP-vs-OLAP.png" alt="" />
                        <figcaption className="figure-caption text-center"></ figcaption>
                    </figure>
                </div>

                <br />

                <p>
                    <b>OLTP: Online Transaction Processing</b>:
</p>

                <p>
                    Some databases are user facing. In these databases, users are sending really high volumes of reads and writes to small sections of data. Ie viewing and creating social media posts, viewing and purchasing items on online retails. Each user action touches only a small subset of data but there are many users creating many queries so the bottleneck is disk seek time as a large volume of these small queries run.
</p>

                <br />

                <p>
                    <b>OLAP: Online Analytics Processing</b>:
</p>

                <p>
                    Some databases are business facing – they are used for business information and decision making.  Businesses need to draw conclusions from large volumes of data. This is different from OLTP with small, frequent changes (involving both reads and writes) to relatively infrequent read operations over very large volumes of data. These large queries can be performance intensive and could degrade the OLTP database performance.  This is especially bad as user facing systems like OLTP typically need to be performant, where business analysts would typically tolerate relatively longer processing times. Because of these different use cases, OLAP database solutions are often different and entirely separate from OLTP.
</p>

                <br />

                <div className="text-center">
                    <figure className="figure">
                        <img className="img-fluid" src="/blogAssets/img/2023/ETL.png" alt="" />
                        <figcaption className="figure-caption text-center"></ figcaption>
                    </figure>
                </div>

                <br />

                <p>
                    A typical system could involve several different user facing applications, each with its own OLTP database. In the above image, customers, warehouse workers, and truck drivers are all working with their own apps. An ETL process is run on these databases: extracting the data from each, transforming it into a format that is useful for the OLAP database, and then loading it into the OLAP database. This could be done in several large batches (perhaps once per day) or streamed into the OLAP as new data arrives. The OLAP data is held in a data warehouse which is optimized for OLAP queries.
</p>

                <br />

                <div className="text-center">
                    <figure className="figure">
                        <img className="img-fluid" src="/blogAssets/img/2023/Fact-Table.png" alt="" />
                        <figcaption className="figure-caption text-center"></ figcaption>
                    </figure>
                </div>

                <br />

                <p>
                    Many data warehouses use a star schema – a central “fact” table with branches off of it in the shape of a star. Each fact represents a thing that happened: a purchase, a click, etc. This contains both attributes (values) and foreign key references to dimension tables (the branches off of the central star). Each fact is an event, each dimension is a who, what, when, where, why. Fact tables can be big (10s of PBs for big enterprise like Apple, Walmart, eBay).
</p>

                <br />

                <p>
                    <b>Column oriented storage</b>:
</p>

                <p>
                    Facts can be very large and often we will query against a large volume of facts but only need a few pieces of information from each fact. Pulling up each fact (which could contain hundreds of pieces of information) only to select a small subset of that fact’s information, is very inefficient. A solution to this is column oriented storage.
</p>

                <p>
                    Instead of storing facts as one unit, you store each attribute of a fact as its own data entry. This means that if there is a “purchase date” attribute, rather than having each purchase data as a part of a fact, you group all of the purchase dates on their own. Now when you need to query all purchase dates, you only have to look in one place.
</p>

                <p>
                    This is often implemented by adding all data in the same order. So fact #12354 could have the 1005th purchase-date and the 1005th total-tax-amount. Ordering is very important in column oriented storage.
</p>


                <br />
                <hr />
                <br />

                <h3 className="text-center">Chapter 4: Encoding and Evolution</h3>

                <br />

                <p>
                    Chapter 1 introduced the concept of “evolvability”: we should aim to build systems that make it easy to adapt to change. In most cases, this involves changes to the data that a system stores.
</p>

                <br />

                <p>
                    <b>Adapting to changes</b>:
</p>

                <p>
                    Relational databases typically enforce a schema that can be changed through migrations. Only one schema is enforced at any time. Schema-on-read (schemaless) databases don’t enforce a schema so there is a mixture of old and new data within the database.
</p>

                <p>
                    When you make changes, you may not want to roll out everything all at once as this creates more risk. Likewise, when updates are on user devices, you can’t typically control when they will be updated. All of this means that you will have old and new versions of the software running at the same time, and therefore old and new data coming into and being read out of you application.
</p>

                <p>
                    To ensure your application continues to run smoothly, you need:
</p>

                <p>
                    <ul><li><b>Backward compatibility</b>: Newer code can read data that was written by older code.</li><li><b>Forward compatibility</b>: Older code can read data that was written by newer code.</li></ul>
                </p>

                <p>
                    Backward compatibility is typically not hard to achieve as you have the benefit of knowing what that older code looks like when you write the newer code. Forward compatibility is a little but trickier and often involves your application code ignoring additions or changes made by newer versions of the code.
</p>

                <br />

                <p>
                    <b>Formats for Encoding Data</b>:
</p>

                <p>
                    Programs typically work with two representation of data:
</p>

                <p>
                    <ul><li><b>In memory</b>: objects, structs, lists, arrays, etc. that are typically accessed via pointers.</li><li><b>Sequence-of-byte representations</b>: when you write data to a file or send it over a network, you have to encode it to some sort of self-contained sequence of bytes. Since a pointer would not make sense to another process (as they do not share memory), this looks quite different from the data structures you typically use. </li></ul>
                </p>

                <p>
                    To work with these two different representations, we need a translation process. Translating from in-memory to a byte sequence is called encoding (also called: serialization, marshalling) and the reverse is called decoding (parsing, deserialization, unmarshalling).
</p>

                <br />

                <p>
                    <b>Language Specific Encodings</b>:
</p>

                <p>
                    Most languages come with built in encoding. Unfortunately, these built in encoders come with several problems: you are now tightly coupled to one programming language (and if you want backwards computability, then you are tightly coupled forever!), they can come with security concerns, and many of them are notoriously slow.
</p>

                <br />

                <p>
                    <b>JSON, XML, Binary Variants</b>:
</p>

                <p>
                    Standardized encodings can be used by many programming languages. JSON, XML, and CSV have the benefit of being human readable. All 3 have some issues around encoding numbers (the difference between a number and a string that happens to contain all numbers is ambiguous in XML and CSV; issues with large numbers), lack of support for binary strings, and schema issues (optional in XML and JSON, not supported in CSV). Despite these flaws, these are widely used, standardized formats and the flaws are greatly outweighed by the difficulty it takes to get different organizations to agree on a standard.
</p>

                <p>
                    For internal use, you don’t need the overhead or baggage that comes with standardized encodings. Instead, it can be convenient to use binary encodings of your data. Options for this include:
</p>

                <p>
                    <ul><li>Schemaless: your binary encoding with have to include key-value pairs, but won’t be tied to a schema.</li><li>Schema: your binary encodings will be more compact. Rather then including keys, you can include a schema version and perhaps afield tag (as used in Thrift’s BinaryProtocol). Avro is even more compact and includes no filed tags, instead requiring values to be in the same order as they appear in the schema.</li></ul>
                </p>

                <p>
                    Enforcing schemas also has the benefit of being a form of documentation – one that you are required to update, unlike the stuff that ends up in places like your ReadMe.
</p>

                <br />

                <p>
                    <b>Dataflows</b>:
</p>

                <p>
                    <u>Databases</u>:
</p>

                <p>
                    Writes encode the data and reads decode it. You can think of writes as sending a message to your future self – and your future self better believe in backwards compatibility if they want to be able to read that message in the future. As mentioned earlier, you will likely have older and newer versions of your code running at once. You will need backwards and forwards compatibility to be able to function smoothly. There are additional issues: A newer version writes some data that includes a new field (we will call it X), an older version then accesses this data entry and updates it. The desired outcome would be for X to not get overwritten, even though the older version of the code doesn’t even know that an X field exists. This is often handled at the database level but it can be good to be aware of this (and consider handling it) at the application code level as well.
</p>

                <p>
                    Code will often change, while there could be data in your database that is years old: data outlives code.
</p>

                <br />

                <p>
                    <u>Services – REST and RPC</u>:
</p>

                <p>
                    Data needs to be communicated over a network. The most common arrangement is to have two roles: <b>clients</b> and <b>servers</b>. Servers expose an API over the network and clients connect and make requests to that server. The API exposed by the server is known as a <b>service</b>. While databases allow for arbitrary queries based on a query language, services restrict consumers to only what is allowed via the API.
</p>

                <p>
                    Servers can even be clients to other servers: in service-oriented architecture (SOA) (or microservices architecture), you decompose your application into smaller services. This might include servers that call other servers during the lifecycle of a request.  A benefit or microservices is to make different parts of the application independently deployable, allowing for rapid change. Typically, one team would own its own microservice.
</p>

                <p>
                    When HTTP is used as the underlying protocol for talking to a service, it is called a web service (though they are not only used on the web). There are two popular approaches to web services: <b>REST</b> and <b>SOAP</b>. REST is not a protocol but rather a design philosophy built on HTTP: simple data formats, URLs for identifying resources, authentication, content type negotiation. An API designed according to REST principles is RESTful.
</p>

                <p>
                    SOAP is XML-based protocol for web requests and aims to be independent of HTTP. The API of a SOAP web service is described in an XML-based language called the Web Services Description Language (WSDL). WSDL is not designed to be human readable.
</p>

                <p>
                    REST is more popular for cross-organization communication and microservices. Although it is still used at many large enterprises, it has fallen out of favor at many smaller companies.
</p>

                <br />

                <br />

                <p>
                    Remote Procedure Call (RPC) has been around since the 1970s. RPC tries to make a request to a remote network service look the same as calling a function in your programming language. Although convenient at first, this is fundamentally flawed as making a network request is very different from making a local function call:
</p>

                <p>
                    <ul><li>A local function call is predictable (fails or succeeds), a network call is unpredictable: the request or response may be lost or delayed; the remote machine may be slow or unavailable.</li><li>Retrying a failed network call may actually be the same as rerunning it if the first request succeeded but the response was lost.</li><li>Latency is widely variable on a network call while local calls are typically similar in runtime.</li><li>You need to encode parameters for a network call, while a local call can accept pointers.</li></ul>
                </p>

                <p>
                    REST does not try to hide the fact that it is a network protocol. REST is the predominant style for public APIs. RPC frameworks are often used between services owned by the same organization.
</p>

                <p>
                    gRPC is a RPC implementation using Protocol Buffers.
</p>

                <br />

                <p>
                    <u>Message-Passing</u>:
</p>

                <p>
                    REST and RPC:
</p>

                <p>
                    One process sends a request and another tries to respond as quickly as possible.
</p>

                <p>
                    Databases:
</p>

                <p>
                    One process writes data and another process might read it sometime in the future.
</p>

                <p>
                    Asynchronous message passing systems are somewhere in between RPC and databases. A message is delivered to a client, typically with low latency (similar to RPC). The message does not go directly to the server, but rather to a message broker (also called: message queue, or message-oriented middleware) (similar to a database).
</p>

                <p>
                    Benefits of a message broker:
</p>

                <p>
                    <ul><li>Can help with load if messages are arriving too fast</li><li>Can redeliver messages if server has crashed.</li></ul>
                </p>

                <p>
                    Typically a message is sent to a queue or topic, and those messages are delivered to all subscribers of that topic. There can be multiple producers and consumers of the same topic. The dataflow is one way and there is typically no enforced schema.
</p>

                <br />


                <br />
                <hr />
                <br />


                <br />


                <h3 className="text-center">Part II: Distributed Data</h3>


                <br />

                <p>
                    Part II takes us from data systems that store data on a single machine, to multiple machines that store and retrieve data. There are various reasons for doing this:
</p>

                <p>
                    <ul>
                        <li>
                            <b>Scalability</b>: Having data on multiple machines allows you to spread the load between machines.
        </li>
                        <ul>
                            <li>
                                <b>Scaling up</b>: The simplest approach to scalability is to scale up (aka vertical scaling): buy a more powerful machine. Many CPUs, RAM chips and discs can be joined together under a single operating system and this allows any CPU to access any part of memory: shared-memory architecture – all components are treated as a single machine. The problem is that a machine twice as powerful usually costs more than twice as much. Scaling up offers some fault tolerance (hot swappable components) but data is still tied to one geographical location.
                </li>
                            <li>
                                <b>Shared-disk architecture</b>: Several machines with independent CPUs and RAM but a shared memory over a fast network. Typically used for data warehousing workloads.
                </li>
                            <li>
                                <b>Scaling out: Shared-nothing architecture</b> (horizontal scaling or scaling out): independent machines or virtual machines called <b>nodes</b>. Coordination between nodes is done on the software level over a traditional network. No special hardware required, you can use cheaper machines and with cloud deployments of virtual machines, you don’t even need to be a huge company to take advantage of multi-region distributed architecture.
                </li>
                        </ul>
                        <li>
                            <b>Fault tolerance/high availability</b>: Multiple machines provides redundancy and allows you to keep running even if single nodes go down.
        </li>
                        <li>
                            <b>Latency</b>: Servers around the world can be closer to users and therefore speed up response times.
        </li>
                    </ul>
                </p>

                <br />

                <p>
                    Two common ways to distribute data across multiple nodes:
</p>

                <p>
                    <ul><li><b>Replication</b>: The same data copied on different nodes. Provides redundancy. Can also improve performance as load can be spread out and data can be geographically closer to users.</li><li><b>Partitioning</b>: Splitting a large database into smaller subsets called partitions (also called sharding).</li></ul>
                </p>

                <p>
                    You can both replicate and shard your data.
</p>


                <br />
                <hr />
                <br />


                <h3 className="text-center">Chapter 5: Replication</h3>

                <br />

                <blockquote class= "blockquote">
  <p class="text-muted">
    <small>
      "The major difference between a thing that might go wrong and a thing that cannot possibly go wrong is that when a thing that cannot possibly go wrong goes wrong it usually turns out to be impossible to get at or repair."
    </ small>
  </ p>
  <footer class="blockquote-footer"> Douglas Adams, <cite title="“Mostly Harmless” (1992)">“Mostly Harmless” (1992)</ cite></ footer>
</ blockquote>



                <br />

                <p>
                    Redundancy means keeping a copy of the same data on multiple machines that are connected via a network.
</p>

                <p>
                    <ul><li>To keep data geographically close, thus reducing latency</li><li>To allow the system to work even if some parts go down, thus increasing availability</li><li>To scale out the number of machines serving read queries, thus increasing read throughput</li></ul>
                </p>

                <br />

                <p>
                    All of the difficulty in replication lies in handling changes to replicated data. Popular algorithms include:
</p>

                <p>
                    <ul><li>Single-leader</li><li>Multi-leader</li><li>Leaderless replication.</li></ul>
                </p>

                <br />

                <br />

                <br />

                <p>
                    <b>Single Leader Replication</b>:
</p>

                <p>
                    Each node that stores a copy of the data is called a <b>replica</b>. With each write, we need to ensure that each replica receives those changes to the data. The most common solution is called <b>leader-based replication</b> (aka active/passive, master-slave replication). Here’s how it works:
</p>

                <p>
                    <ol><li>One replica is designated as the <b>leader</b> (master, primary). New writes are directed to the leader which first updates its local copy of the data.</li><li>The other replicas are known as followers (read replicas, slaves, secondaries, hot standbys). Whenever the leader writes new data to its local storage, it also sends the data change to all of its followers via a <b>replication log</b> or change stream. Each follower takes those changes and applies them to their local storage in the same order as the leader.</li><li>When a client wants to read from the database, they can query the leader or any of its followers.</li></ol>
                </p>

                <br />

                <p>
                    Follower updates can be <b>synchronous</b> or <b>asynchronous</b>. Synchronous means that when a write comes in the following happens:
</p>

                <p>
                    <ul><li>The leader updates its local storage and sends out a change stream</li><li>The followers must then all successfully update their local storage and send back a response before the leader will report to the client that the write was successful. </li></ul>
                </p>

                <p>
                    This has the advantage that all copies of the data are always up to date. The major disadvantage is that a single node going down can grind the whole system to a stop (a follower not being able to acknowledge an write prevents writes from succeeding). For this reason, many systems that are synchronous really just mean that at least one follower is synchronous. If that follower goes down, another replica is made synchronous. This is sometimes known as <b>semi-synchronous</b>. This ensures that if the leader goes down, at least one other replica has the most recent writes.
</p>

                <p>
                    Often though, leader-based replication is completely asynchronous. If the leader fails and is not recoverable, and has not yet been replicated, this means that writes are lost even if they have been confirmed to the client. This means that a write is not guaranteed to be <b>durable</b>, even if it has been confirmed to the client. For example, a user performs an action that updates a page. The user expects that change to be durable (i.e. to persist). Due to an outage on the leader node, that update is lost and when the user checks again, their changes seem to have disappeared. The advantage of asynchronous replication is that the leader can continue to process writes even if many or all of the followers have fallen behind or gone down.
</p>

                <br />

                <p>
                    When choosing between synchronous and asynchronous replication, you have to take into consideration <b>replication lag</b>. If you are reading from a follower, you might get data that is not as up to date as data in the leader or some of the other followers. There are several situations that should be considered when discussing replication lag:
</p>

                <p>
                    <ul><li><b>Read-after-write consistency</b>: Users should always see the data they submitted themselves.<ul><li>If the user submits a write that goes to the leader and then attempts to read the data they just submitted, the read request might go to a follower node that does not yet have that data. This will make it appear to the user that data is lost.</li><li>It might be that if the user refreshes the page, their data may be there. For some use cases, this is enough. For others, users may not be pleased with their data appearing to be gone.</li><li>Solutions: If this data is on a user’s personal profile, a simple solution would be to have all personal profile reads served from the leader. Another option is to track the last user update time and if there has been an update, to make all user reads from leader for one minute.</li></ul></li><li><b>Monotonic reads</b>: After a user has seen the data at one point in time, they shouldn’t later see the data from some earlier point in time.<ul><li>This could occur when the user makes two subsequent read requests: the first sees updated data and the second sees data that has not yet been fully updated from the leader. This will give the appearance of moving back in time.</li><li>To solve this, you can require that each client pick a follower and always read from that follower (if that follower fails, the client will be reassigned). This does not mean that the client will always see the most up-to-date date, but it does ensure that the data moves in a linear time direction.</li></ul></li><li><b>Consistent prefix reads</b>: Users should see the data in a state that makes causal sense: for example, only seeing a reply after first seeing the question.</li></ul>
                </p>

                <br />

                <br />

                <p>
                    Adding a new follower:
</p>

                <p>
                    <ul><li>Snapshot the leaders data</li><li>Copy the snapshot to the new replica</li><li>Connect the follower to the leader and request changes since the snapshot occurred</li><li>Process the backlog of changes and come online.</li></ul>
                </p>

                <br />

                <br />

                <br />

                <p>
                    <b>Handling Node Outages</b>:
</p>

                <p>
                    Nodes can go down unexpectedly or for planned maintenance.
</p>

                <p>
                    <ul><li>Follower failure: Followers that go down and come back online can recover easily via <b>catch-up recovery</b>. When the node recovers from crash, it will request all changes that it missed and apply those to its local data.</li><li>Leader failure: Leader failure is a bit trickier and is addressed via <b>failover</b>. When the leader fails, a follower needs to be promoted to be the new leader. Then, all of the clients need to be reconfigured to point to the new leader and all of the followers need to consume changes from the new leader.</li></ul>
                </p>

                <br />

                <p>
                    Detailed failover steps:
</p>

                <p>
                    <ol><li><b>Determine the leader has failed</b>: No foolproof way to detect a failure so often just use a simple timeout.</li><li><b>Choose a new leader</b>: A new leader can be chosen through an election (chosen by majority of remaining nodes) or appointed by a previously elected controller node. The best candidate is usually the node with the most up to date data changes from the old leader as this will minimize data loss. Getting all nodes to agree on a new leader is a <b>consensus problem</b>.</li><li><b>Reconfigure the system to use the new leader</b>: Clients now send write requests to the new leader. If the old leader comes back online, it might believe that it is still the leader. The system needs to ensure that the old leader becomes a follower and recognizes the new leader.</li></ol>
                </p>

                <br />

                <p>
                    There are many things that can go wrong with failover:
</p>

                <p>
                    <ul><li>If asynchronous replication is used, and the old leader had some unreplicated writes when it went down, what should happen to those writes? The most common solution is that they should be discarded (which reduces durability of the system’s data).</li><li>In certain fault scenarios, it is possible for two nodes to believe that they are the leader (a leader appears down because it has exceeded its timeout. A new leader is selected. The old leader recovers and comes back online). This is a situation known as <b>split brain</b>. If both nodes accept writes and there is no process for resolving conflicts, then this can lead to lost or corrupted data. As a safety catch, some systems have a means to shutdown a node if two are detected as being leaders.</li><li>There are tradeoffs when seeing a leader timeout. Too long of a timeout causes unnecessary downtime: nodes may be waiting on a leader that will not recover. Too short of a timeout causes too many failovers: leader nodes may routinely experience high load or slow networks and will violate there timeout when they are still online and healthy.</li></ul>
                </p>

                <p>
                    All of these issues are in fact the fundamental problems of distributed systems: node failures, unreliable networks, and tradeoffs around replication consistency, durability, availability, and latency.
</p>

                <br />

                <p>
                    <b>Replication Logs</b>:
</p>

                <p>
                    A common way of doing replication logs is <b>write ahead logs (WAL)</b>: The leader creates a write ahead log of all the data changes and sends that log out to its followers to run.
</p>

                <br />

                <br />

                <p>
                    <b>Multi-leader Replication</b>:
</p>

                <p>
                    Single-leader replication is a common choice because it is fairly easy to reason about and understand. Multi-leader and leaderless replication can be more robust in the presence of faults, at the cost of being more difficult to reason about and only providing weak consistency guarantees.
</p>

                <p>
                    Multi-leader replication is where multiple nodes are designated as leaders, and send updates to followers as well as other leaders.
</p>

                <br />

                <p>
                    A major downside of single leader replication is that if you can’t access the leader for writes, everything goes down – this makes your leader a single point of failure. It rarely makes sense to use multileader within a single data center because the added complexity outweighs the benefits. If you have multiple data centers, having a leader in each can be a good idea.
</p>

                <br />

                <div className="text-center">
                    <figure className="figure">
                        <img className="img-fluid" src="/blogAssets/img/2023/Multi-leader-replication.png" alt="Multi-leader replication" />
                        <figcaption className="figure-caption text-center"></ figcaption>
                    </figure>
                </div>

                <br />

                <p>
                    <b>Offline Leaders</b>:
</p>

                <p>
                    One use case for multileader replication is clients that need to work offline. Each user device has a copy of the data, and when that device goes offline, it becomes its own leader. When it comes back online, it transmits its changes to the other leaders just like a datacenter leader would.
</p>

                <br />

                <br />

                <p>
                    <b>Handling Write Conflicts</b>:
</p>

                <p>
                    A major downside of multileader replication is that the same data may be concurrently modified in two different data centers and that those conflicts then must be resolved.
</p>

                <p>
                    <ul><li><b>Conflict avoidance</b>: The simplest strategy is to avoid write conflicts. If you can ensure that all writes to a certain piece of data go to the same leader, then there is no need for additional conflict resolution.</li><li><b>Converging towards a consistent state</b>: One way to converge towards a consistent state is to take the most recent update to the data: last write wins (LWW). Although popular, LWW is dangerously prone to data loss. Another approach is to keep conflicts and prompt the user to resolve them via application code (the application could display a prompt to the user such as: “there is a conflict in the data, choose which result to keep”). Converging towards a consistent state means that the data will eventually get updated across all replicas. This is known as <b>eventual consistency</b>.</li></ul>
                </p>

                <br />

                <p>
                    You can resolve conflicts on write or on read. On read keeps both pieces of conflicting data until the data is accessed. This would be a situation where you could ask the user to resolve the conflict. On write conflict resolution is handled pragmatically, via solutions such as LWW or merging the conflicting data together.
</p>

                <br />

                <p>
                    <b>Replication Topography</b>:
</p>

                <p>
                    Replication topography describes the communication paths along which writes are propagated from one node to another.
</p>

                <br />

                <div className="text-center">
                    <figure className="figure">
                        <img className="img-fluid" src="/blogAssets/img/2023/Replication-topographies.png" alt="Replication topographies" />
                        <figcaption className="figure-caption text-center"></ figcaption>
                    </figure>
                </div>

                <br />

                <p>
                    <ul><li><b>All-to-all</b>: The most general replication topography. Every leader sends its writes to every other leader.</li><li><b>Circular</b>: Each node receives writes from another node, and then forwards those along to the next node, including any additional writes that it might have.</li><li><b>Star</b>: A designated root node forwards writes to all other nodes. Each node gives their individual writes to that node and it distributes them.</li></ul>
                </p>

                <p>
                    Circular topographies can suffer from fault tolerance issues as a node failure can interrupt the flow of updates. The more densely connected a topography is (like all-to-all topographies), the more fault tolerant it is as updates can travel down different paths if some nodes have failed.
</p>

                <br />

                <p>
                    <b>Leaderless Replication</b>:
</p>

                <p>
                    Leaderless replication abandons the idea of a leader and instead users write to many or all of the replicas. This was one of the earliest methods for distributed databases and one that has recently come back in favor with Amazon’s in-house Dynamo database (and those modeled after it).
</p>

                <br />

                <div className="text-center">
                    <figure className="figure">
                        <img className="img-fluid" src="/blogAssets/img/2023/Read-Write-Quorum.png" alt="Read/Write Quorum" />
                        <figcaption className="figure-caption text-center"></ figcaption>
                    </figure>
                </div>

                <br />

                <p>
                    This image shows an example of a leaderless database. The client sends writes to as many of the nodes as it can. One node is offline so it does not receive the update. When a client reads a value, it attempts to read from as many nodes as possible. The previously offline node has come online so we now have one node with stale data and two nodes with current data. The read checks for a quorum – for a certain (often majority) of node having the same value. In this case, the quorum shows our new value. This is what is returns to the client.
</p>

                <p>
                    When writing, the client will also check for a write quorum – a threshold of successful writes that must be present for the write to be considered successful.
</p>

                <br />

                <p>
                    The quorum value for reads and writes is configurable. Sometimes it is a simple majority for both reads and writes. One possible configuration is to require that all nodes confirm a write for it to be successful. You then only need to check a single node for reads. This makes reads very fast and allows many nodes to go down before reads are affected. This works well for datasets with low writes and high reads. The tradeoff is that a single failed node prevents writes.
</p>

                <br />

                <p>
                    When nodes come online, they need to self repair in order to get caught up on what they missed. There are two often used approaches:
</p>

                <p>
                    <ol><li><b>Read repair</b>: When a client reads for a value, it may find several stale values (as in our above example). When this happens, it updates those stale values to match its quorum. This approach works well for values that are read often. Data that is not frequently read could remain stale for extended periods of time.</li><li><b>Anti-entropy process</b>: A background process that runs and checks for and  subsequently updates stale data.</li></ol>
                </p>

                <br />

                <p>
                    Sloppy quorums ask the question: if enough nodes are down that you can’t form a quorum, should you return an error or accept the write onto the nodes that are still online. By still accepting writes, you increase availability as you can continue to accept writes when a high number of nodes are offline or unavailable. The downside is that you lose the guarantee that your reads will always have up to date values.
</p>

                <br />

                <p>
                    <b>Dealing with concurrency</b>:
</p>

                <p>
                    Concurrency does not mean that two events occurred at exactly the same time but rather that they were unaware of each other. In fact, due to issues with clocks in distributed data systems, it can be quite challenging to determine exactly what time two events occurred.
</p>

                <p>
                    <b>Last Write Wins (LWW)</b>: A popular choice for conflict resolution where you discard all but the most recent update. The downside is that a user who saw an old value and wrote at almost the same time as someone else, might be surprised when the other user’s value appears instead of their own.
</p>


                <br />
                <hr />
                <br />



                <h3 className="text-center">Chapter 6: Partitioning</h3>

                <br />

                <p>
                    Chapter 5 discussed having multiple copies of the data across multiple nodes. With large enough datasets, you will need to break data into <b>partitions</b> (a process known as <b>sharding</b>).
</p>

                <p>
                    Each piece of data should appear on only one partition – although there is likely still replication (multiple copies of each partition). The main reason for shading your dataset is scalability as a large dataset can be distributed across many disks and the query load can be distributed across many processors.
</p>

                <p>
                    A node may store more than one partition and each node may be the leader for some partitions and a follower for others.
</p>

                <br />

                <div className="text-center">
                    <figure className="figure">
                        <img className="img-fluid" src="/blogAssets/img/2023/replication-and-partitioning.png" alt="Replication and partitioning" />
                        <figcaption className="figure-caption text-center"></ figcaption>
                    </figure>
                </div>

                <br />

                <p>
                    The goal of partitioning is to spread the load evenly, avoiding hotspots (nodes with disproportionally high loads). This requires choosing a partitioning schema that fits your data. You will likely need to rebalance partitions when nodes are added or removed from the cluster.
</p>

                <p>
                    Two approaches for partitioning:
</p>

                <p>
                    <ul><li><b>Key range partitioning</b>: Keys are sorted and a partition owns all keys from a minimum to a maximum. This is similar to how an encyclopedia is split into separate books by alphabetic range.</li><ul><li>Efficient range quires are possible, but you run the risk of hot spots if the application often access keys that are close together in the sorted order.</li></ul><li><b>Hash partitioning</b>: A hash function is applied to each key and each partition owns a range of hashes.</li><ul><li>This method destroys the ordering of keys, making range quires inefficient but distributing load evenly.</li></ul></ul>
                </p>

                <p>
                    Datasets that are not partitioned in a way that avoids hot spots are said to be <b>skewed</b>.
</p>

                <br />

                <p>
                    Even if using hashing, it may still not be possible to avoid hot spots. If a given piece of data is quired more often than other data, then this will still result in a hotspot. A common example of this is celebrity profiles on social media applications. The celebrity profile might have millions of followers compared to hundreds or thousands of followers for the average user. When the celerity makes a post, there will now be a large number of writes and reads to the same key. Most data systems are not able to automatically account for hot keys like this, and this sort of load balancing will have to be handled via application code or manual database administration.
</p>

                <br />

                <br />

                <p>
                    <b><u>Secondary Indexes</u></b>:
</p>

                <p>
                    Secondary indexes are commonly used to quickly search databases. These present problems in partitioned databases as secondary indexes do not map neatly between partitions. There are two common approaches to secondary indexes in partitioned datasets:
</p>

                <p>
                    <ul><li><b>Document partitioned indexes (local indexes)</b>: the secondary indexes are stored in the same partition as the primary key and value. Only a single partition needs to be updated on write but reads require a <b>scatter/gather</b> approach: check all partitions and gather the results.</li></ul>
                </p>

                <br />

                <div className="text-center">
                    <figure className="figure">
                        <img className="img-fluid" src="/blogAssets/img/2023/document-partitioning.png" alt="Document partitioning" />
                        <figcaption className="figure-caption text-center"></ figcaption>
                    </figure>
                </div>

                <br />

                <p>
                    In the above image, each partition has a copy of all of the secondary indexes. This means that when a new car is added with the color: red, only the secondary index on that partition needs to be updated. This makes writes efficient. When reading from the database for red cars, the query will now have to check all partitions for secondary indexes on red cars. This makes writes inefficient.
</p>

                <br />

                <br />

                <p>
                    <ul><li><b>Term-partitioned indexes (global indexes)</b>: Secondary indexes are partitioned separately, using the indexed values. Writes require accessing several partitions but reads can come from a single partition.</li></ul>
                </p>

                <br />

                <div className="text-center">
                    <figure className="figure">
                        <img className="img-fluid" src="/blogAssets/img/2023/term-partitioning.png" alt="Term partitioning" />
                        <figcaption className="figure-caption text-center"></ figcaption>
                    </figure>
                </div>

                <br />

                <p>
                    In the above image, secondary indexes are split across partitions: partition 0 owns all of the red and black car secondary indexes, and partition 1 owns secondary indexes on silver and yellow cars. This makes writes more challenging, are you may have a car that is silver colored but that has been assigned to partition 0. After writing to partition 0, the database must now search through partitions until it finds the one that stores the color silver. There may even be additional secondary indexes stored on other partitions. Writes are inefficient on global indexes.
</p>

                <p>
                    This approach does make reads efficient. If searching for red cars, you only need to access partition 0 which stores the red car secondary indexes. You now know which keys the other red cars are paired with an can quickly access the appropriate partitions.
</p>

                <br />

                <br />

                <p>
                    <b>Rebalancing Partitions</b>:
</p>

                <p>
                    Over time, changes occur to the database:
</p>

                <p>
                    <ul><li>Query throughput increases, so you add more CPUs to handle the load.</li><li>The dataset size increases, so you add more disks and RAM to store it.</li><li>A machine fails, and other machines need to take over that machine's responsibilities.</li></ul>
                </p>

                <p>
                    All of these changes require that data and requests be moved from one node to another. The processes of moving load from one node to another is known as <b>rebalancing</b>.
</p>

                <p>
                    <ul>
                        <li>
                            <b>Fixed number of partitions</b>: Create many more partitions than there are nodes.
        </li>
                        <ul>
                            <li>
                                Example: 10 nodes, 1,000 partitions. This means that if you add a node, it can steal a few partitions from each of the other nodes. You can account for mismatched hardware by giving more partitions to more powerful machines. Only entire partitions are moved between nodes. Typically, the number of partitions does not change, so you should initially create enough partitions that can accommodate growth.
            </li>
                        </ul>
                        <li>
                            <b>Dynamic partitioning</b>:
        </li>
                        <ul>
                            <li>
                                Key range partitioned databases do not work well with a fixed number of partitions. When you create your database, you have to decide where to create key range boundaries. If you get these wrong initially (which you likely will, as you can’t predict what data will be ingested into your data system), then you will have some partitions with high volumes of data and some that might be empty. Dynamic partitioning is often used in key range partitioned databases for this reason.
            </li>
                            <li>
                                Dynamic partitioning works by splitting partitions into two partitions when it grows past a configurable size. Likewise, if it shrinks below a configured threshold, it can be merged with an adjacent partition.
            </li>
                            <li>
                                A downside is that an empty database starts with one partition, meaning that all requests will be served from a single node until the databases grows beyond a certain size (In HBase, the default is 10GB – so this could take a while). To address this, some databases offer <b>pre-splitting</b> where your empty database starts with some initial partitioning. This requires you to have a pretty good knowledge of where to divide you partition key boundaries.
            </li>
                        </ul>
                    </ul>

            Rebalancing can be automatic or manual, with a gradient of options in between. Some databases will suggest partition rebalances, but require administrative approval to proceed. Automatic rebalancing can reduce operational costs but can cause performance degradations as rebalancing is expensive and without user oversight, could be done too frequently or at inopportune times. In general, having a human in the loop for rebalancing can prevent operational surprises.
</p>

                <br />

                <br />

                <p>
                    <b><u>Request Routing</u></b>:
</p>

                <p>
                    When a client wants to make a request, how does it know which node to connect to? As partitions are rebalanced, data may not live at the same location throughout its lifetime. This is related to a more general problem call <b>service discovery</b>. There are generally three approaches:
</p>

                <p>
                    <ul><li>Allow the client to connect to any node. If that node happens to have the requested data, return that data. If not, forward the request to the appropriate node.</li><li>Send all client requests to a routing tier first, which determines which node to send the request to.</li><li>Require that clients be aware of the partitioning and assignments of nodes. This means that clients will select the correct node on their own.</li></ul>
                </p>

                <br />

                <div className="text-center">
                    <figure className="figure">
                        <img className="img-fluid" src="/blogAssets/img/2023/partition-routing.png" alt="Partition routing" />
                        <figcaption className="figure-caption text-center"></ figcaption>
                    </figure>
                </div>

                <br />

                <p>
                    Most distributed systems rely on a separate coordination service such as ZooKeeper to keep track of cluster metadata.
</p>


                <br />
                <hr />
                <br />


                <h3 className="text-center">Chapter 7: Transactions</h3>

<br />

<p>
	In data systems, many things can go wrong:
</p>

<p>
	<ul><li>Database software or hardware can fail at any time (including in the middle of a write operation)</li><li>The application may crash at anytime (including halfway through a series of operations)</li><li>Interruptions in the network can unexpectedly cut the application off from the database or one database node from another.</li><li>Several clients may write to the database at the same time, overwriting each other’s changes</li><li>A client may read data that doesn’t make any sense because it has only been partially updated.</li><li>Race conditions between clients can cause surprising bugs.</li></ul>
</p>

<p>
	In order to be reliable, a system has to deal with these faults and ensure that they don’t cause a catastrophic failure.
</p>

<p>
	For decades, <b>transactions</b> have been the mechanism of choice for simplifying these issues. A transaction is a way to group several reads and writes into a logic unit. Either the entire operation succeeds (<b>commit</b>) or fails (<b>abort rollback</b>) and can be retried again safely. There are no partial failures. By using transactions, the application is free to ignore certain error scenarios (these are called <b>safety guarantees</b>). 
</p>

<p>
	Not every application needs transactions and sometimes there are reasons to abandon them completely such as higher performance or availability, or if an application is simple enough to not need the added complexity.
</p>

<br />

<p>
	The safety guarantees provided by transactions are said the be <b>ACID</b>:
</p>

<p>
	<ul><li><b>Atomicity</b>: Atomic refers to something that cannot be broken down further. This means that a transaction cannot be broken down – it cannot partially complete or partially fail. It either works fully (commit) or fails completely (abort).</li><li><b>Consistency</b>: Consistency means that you have certain statements about your data that must always be true (<b>invariants</b>). For example: in accounting systems, credits and debits must always be balanced. Consistency is more a property of the application than the database. Joe Hellerstein remarked that “C” was tossed in to make the acronym work.</li><li><b>Isolation</b>: Isolation means that concurrently executing transactions are isolated from each other – they cannot step on each other’s toes.</li><li><b>Durability</b>: Durability means that once a transaction has been committed, any data written will not be forgotten. In a distributed database, this means that the data must be replicated to a certain number of nodes before being deemed successful. Perfect durability is not possible – there is always a chance that all of your nodes will be destroyed at once. There are only risk-reduction techniques.</li></ul>
</p>

<p>
	ACID databases are based on the philosophy: if the database is in danger of violating its guarantee of atomicity, isolation or durability, it would rather abandon the transaction entirely that allow it to remain half finished.
</p>

<p>
	In some ways, “ACID compliant” has become more of a marketing term. Systems that are not ACID are sometimes referred to as <b>BASE</b>: <b>B</b>asically <b>A</b>vailable, <b>S</b>oft state, and <b>E</b>ventual consistency.
</p>

<p>
	Although retrying failed transactions is simple and effective, it can cause problems:
</p>

<p>
	<ul><li>If the transaction actually succeeded but the network failed when the server tried to acknowledge the successful commit to the client, the client will think it failed and will try to run the transaction again resulting in duplicated transactions.</li><li>If the error is due to overload, retrying will make things worse.</li><li>It is only worth retrying on transient errors as a permeant error will continue to fail each time.</li><li>If the transaction has side effects outside of the database, those side effects may happen even if the transaction is aborted. Example: you wouldn’t want to send an email each time you try to run the transaction to update the mailbox count.</li><li>If the client process fails while retrying, the data it is trying to write will be lost.</li></ul>
</p>

<br />

<p>
	<b>Weak Isolation Levels</b>
</p>

<p>
	If two transactions don’t touch the same data, they can be safely run in parallel. Concurrency issues (race conditions) only come into play when one transaction reads data that is concurrently modified by another transaction or when two transactions try to modify the same data at the same time.
</p>

<p>
	Concurrency bugs are hard to find by testing as they are only triggered when you get very unlucky with timing. Such timing issues might occur very rarely and can be difficult to reproduce.
</p>

<p>
	<b>Serializable isolation</b> means that the database guarantees that transactions have the same effect as if they were run serially (one after the other). Serializable isolation has a performance cost and many databases don’t want to pay this price. It is common for systems to use weaker levels of isolation that protect against some but not all concurrency issues.
</p>

<p>
	The most basic level of transaction isolation is <b>read committed</b> which makes two guarantees:
</p>

<p>
	<ol><li>When reading from the database, you will only see data that has been committed (no dirty reads)</li><li>When writing to the database, you will only overwrite data that has been committed (no dirty writes)</li></ol>
</p>

<br />

<div className="text-center">
	<figure className="figure">
		<img className="img-fluid" src="/blogAssets/img/2023/dirty-reads.png" alt="Dirty reads" />
		<figcaption className="figure-caption text-center"></ figcaption>
	</figure>
</div>

<br />

<p>
	Read committed prevent dirty writes. In the above image, User 2 will continue to get x = 2 until the transaction from User 1 is committed.
</p>

<br />

<div className="text-center">
	<figure className="figure">
		<img className="img-fluid" src="/blogAssets/img/2023/dirty-writes.png" alt="Dirty writes" />
		<figcaption className="figure-caption text-center"></ figcaption>
	</figure>
</div>

<br />

<p>
	The above image shows how a dirty write can occur: the same Listing and Invoice objects are written to at the same time with unexpected results.
</p>

<br />

<p>
	Read committed is a very popular isolation level. A common implementation is for the database to prevent dirty reads by using row-level locks: when a transaction wants to modify a particular object (row or document) it acquires a lock on that object. It must hold the lock until the transaction is completed or aborted. This approach does not work well in practice as a long running write can force many other transactions to wait, even if they are read only and not attempting to do any writing. A better approach is for the database to remember the old value for any locked object, and to return the old value until the lock is released.
</p>

<p>
	<b>Read skew</b> is when you read data being updated while a transaction is running. For example, one transaction updates two objects and you read the database when one object has updated and the other has not. This creates a <b>nonrepeatable read</b>: reading the database again will produce a different (and likely more accurate) result. 
</p>

<p>
	Read skew is considered acceptable in read committed isolation – in most cases, the user will be okay with reloading the page and seeing the correct result.
</p>

<p>
	There are a few instances where read skew can cause a problem:
</p>

<p>
	<ul><li><b>Backups</b>: Backups over large datasets may take several hours, during which time writes will continue to be made. This could cause the backup to contain read skew and restoring from the backup will make those inconstancies permanent.</li><li><b>Analytical queries and integrity checks</b>: Large queries that scan over the database will return nonsensical results if they observe parts of the database at different points in time.</li></ul>
</p>

<p>
	Snapshot isolation is the most common solution to this problem as this provides backups and analytical queries with a consistent snapshot of the database.
</p>

<p>
	Implementing snapshot isolation involves requiring locks for writes but not reads. This leads to a key principle of snapshot isolation: <b>readers never block writers, and writers never block readers</b>. The database will keep several committed versions of the objects, known as multi-version concurrency control (MVCC).
</p>

<br />

<div className="text-center">
	<figure className="figure">
		<img className="img-fluid" src="/blogAssets/img/2023/snapshot-iso.png" alt="Snapshot isolation" />
		<figcaption className="figure-caption text-center"></ figcaption>
	</figure>
</div>

<br />

<p>
	<b>Lost Updates</b>
</p>

<p>
	When two transactions write concurrently, this can cause one write to override the other one (sometimes known as <b>clobbering</b>). Writes typically follow a <b>read-modify-write cycle</b>.
</p>

<p>
	There are serval solutions to this problem: atomic write (operations taking an exclusive lock on every read), explicit locking in application code if database atomic reads are not available, automatically detect lost updates and abort the transaction.
</p>

<p>
	Distributed database replications make lost writes more challenging as the conflicting writes may be occurring in different datacenters. A common solution is to allow all conflicting writes to survive (known as <b>siblings</b>) and to use application code to resolve these conflicts.
</p>

<br />

<p>
	<b>Write Skew and Phantoms</b>
</p>

<p>
	Write skew occurs when application code checks multiple objects before making a decision, and then updates one of the objects. While updating one object, the other object gets updated and makes the previous precondition no longer true. One of the best solution is to add a serializable isolation guarantee, as this causes the updates to act as if they were executed one after another. Another, less optimal solution is to use <b>materializing conflicts</b> – you add additional information to lock multiple objects when an update needs to occur.
</p>

<br />

<p>
	<b>Serializability</b>
</p>

<p>
	Serializability is regarded as the strongest level of isolation. Most database provide serializability through one of three methods:
</p>

<p>
	<ol><li><b>Executing in serial order</b>. Executing in serial order was not an option for many years, but as RAM has become cheap and OLTP transactions short, running as a single thread can be feasible. If you can make transactions very fast, and the transaction throughput is low enough to execute on a single core, then this can be an effective and simple solution.</li><li><b>Two-phase locking (2PL)</b>: In 2PL, multiple transactions can read an object but if a write is attempted, a lock is acquired. The write must wait for the read to finish, then the write is processed. All reads must wait for the write to finish. Readers do not block each other but a write must wait for reads to finish, write, and then release its lock. 2PL is called two phase locking because all objects in the database have a lock that can either be in shared or exclusive more. If two objects get stuck waiting for each other (<b>deadlock</b>), the database will detect this situation and abort one of the transactions.</li><li><b>Serializable snapshot isolation (SSI)</b>: 2PL does not perform well and Serial Execution does not scale well. Weak isolation levels perform well but are prone to various race conditions. SSI is very promising and relatively new (2008) algorithm. It provides full serializability with only a small performance penalty. 2PL is a <b>pessimistic</b> concurrency control mechanism – things could go wrong so it always acts like they will and protects against them every time. SSI is an <b>optimistic</b> concurrency control mechanism, allowing transactions to proceed unblocked until it is time to commit at which time they are checked for concurrency issues and aborted if issues are found. In most cases, cases where there are not issues, this lack of locking allows for a performance increase.</li></ol>
</p>

<br />

<p>
	Summary of race condition issues:
</p>

<p>
	<ul><li><b>Dirty reads</b>: One client reads another client's writes before they have been committed.</li><li><b>Dirty writes</b>: One client overwrites another client's writes before they have been committed. Almost all transaction implementations prevent dirty writes.</li><li><b>Read skew</b>: A client sees different parts of the database at different points in time. Snapshot isolation: a client reads the database at a particular point in time.</li><li><b>Lost updates</b>: Two clients concurrently perform a read-modify-write cycle. One overwrites the other's write without incorporating changes.</li><li><b>Write skew</b>: A client reads information and makes a write based on that info. By the time its write completes, the read info is no longer true. Only serializable isolation prevents this.</li><li><b>Phantom reads</b>: A transaction reads objects that match a search condition. Another client makes a write that affects the result of the search.</li></ul>
</p>

<p>
	Only serializable isolation protects against all race conditions.
</p>

<br />

<p>
	This chapter explored transactions in the context of a database running on a single machine, distributed databases and transactions are next.
</p>


<br />
<hr />
<br />


<h3 className="text-center">Chapter 8: The Trouble with Distributed Systems</h3>

<br />

<p>
	A lot of things can go wrong in distributed systems. Our task as engineers is to build systems that do their jobs in spite of everything going wrong.
</p>

<br />

<p>
	Buggy software can give the appearance that a computer is “having a bad day” but this is almost always the result of software not hardware issues. If a hardware issue occurs (memory corruption, loose connector), the results is usually a <b>total system failure</b>. This is a deliberate choice – a computer is designed to work correctly or not at all – total failure is better than an incorrect result. This is called <b>always-correct computation</b>.
</p>

<p>
	Software running on a single machine should be <b>deterministic</b> – it should return the same result each time.
</p>

<p>
	In a distributed system, some components could be broken while others may be working fine. These <b>partial failures</b> can cause nondeterministic results. Partial failures and nondeterminism is what makes distributed systems hard to work with.
</p>

<br />

<br />

<p>
	<b>Cloud Computing and Super Computing</b>
</p>

<p>
	There is a spectrum of philosophies of how to build large-scale computing systems:
</p>

<p>
	<ul><li><b>High-performance computing (HPC)</b>: Supercomputers with thousands of CPUs typically used for computationally intense scientific tasks such as weather forecasting or molecular dynamics.</li><li><b>Cloud computing</b>: Not very well defined but usually associated with multi-tenet data centers, commodity computers connected over IP networks (Ethernet), elastic/on-demand resource allocation, and metered billing.</li><li>Traditional enterprise data centers lie somewhere in the middle.</li></ul>
</p>

<p>
	Supercomputers will typically save a snapshot of their work to storage from time to time. If a component fails, the entire system will crash. The component can then be replaced and computation resumes from the last checkpoint. Due to this, supercomputers often behave similarly to single machines.
</p>

<p>
	Many distributed systems are online – and have users that expect low latency, always-on response times. Taking the entire system down for repairs is not an option. 
</p>

<p>
	Supercomputers are built from specialized, reliable hardware. Distributed computing relies on cheap, commodity machines. The bigger a distributed system gets, the more likely it is that among its thousands of nodes, at least one thing is broken and being repairs at all times. If a system can tolerate failed nodes and still keep working as a whole, this can be very useful for operation and maintenance: You can perform a rolling upgrade, restarting one node at a time while the others continue to function. In distributed systems, you must build a reliable system out of unreliable components.
</p>

<p>
	Shared nothing systems are the dominant way of building distributed data systems because they don't require specialized hardware and instead can use commodity computing machines.
</p>

<p>
	The internet and most networks in datacenters (often ethernet) are <b>asynchronous packet networks</b>, meaning that one node can send a message to another node but the network gives no guarantees when it will arrive or if it will arrive at all. If you send a request to a node and don’t receive a reply, it is impossible to known why.
</p>

<p>
	<ul><li>The request may have been lost (perhaps someone unplugged a network cable).</li><li>Your request may be waiting in a queue (perhaps the network or recipient is overloaded).</li><li>The remote node may have crashed.</li><li>The remote node may have stopped responding (perhaps due to a long running garbage collection) but may start responding later.</li><li>The remote node may have processed your request but the response got lost.</li><li>The remote node may have processed your request but the response has been delayed and will be delivered later.</li></ul>
</p>

<p>
	The usual way of handling these issues is with a <b>timeout</b>. Timeouts still do not tell you if the remote node get your request or not.
</p>

<br />

<p>
	<b>Network Faults</b>
</p>

<p>
	Network problems can be surprisingly common, even in controlled environments like a data center. Even redundant hardware doesn’t guard against human error, which is a major cause of outages. Wild things can happen to the network ranging from bad network config changes to sharks biting undersea internet cables.
</p>

<p>
	Handling network faults doesn't always mean tolerating them – sometimes showing the user an error screen and forcing them to wait for the network to come back online is acceptable. It may make sense to deliberately trigger network problems and test the systems response. This is the idea behind chaos monkey.
</p>

<p>
	From the Wikipedia article on <a href="https://en.wikipedia.org/wiki/Chaos_engineering">chaos engineering</a>:
</p>

<blockquote class= "blockquote">
  <p class="text-muted">
    <small>
      "While overseeing Netflix's migration to the cloud in 2011 Nora Jones, Casey Rosenthal, and Greg Orzell expanded the discipline while working together at Netflix by setting up a tool that would cause breakdowns in their production environment, the environment used by Netflix customers. The intent was to move from a development model that assumed no breakdowns to a model where breakdowns were considered to be inevitable, driving developers to consider built-in resilience to be an obligation rather than an option"
    </ small>
  </ p>
</ blockquote>




<br />

<p>
	<b>Detecting Faults</b>
</p>

<p>
	Many systems need to detect faulty nodes:
</p>

<p>
	<ul><li>A load balancer needs to stop sending requests to a node that is dead.</li><li>In distributed databases with single-leader replication, if the leader fails, one of the followers must be promoted to be the new leader.</li></ul>
</p>

<p>
	Rapid feedback that a node is down is useful (sometimes you can get these from the machine the node was running on), but you can’t count on it. If you want to be sure that a request was successful, you need a positive response from the application itself.
</p>

<br />

<p>
	<b>Timeouts and Unbounded Delays</b>
</p>

<p>
	How long should the timeout be? Too long and you cause users to wait for the timeout to elapse. Too short and you may prematurely declare nodes dead that are only delayed. The latter is problematic because the node that timed out but was still alive may process the request. Meanwhile, the application assumes that it is dead and sends the request to a new node, resulting in the request being processed twice.
</p>

<p>
	Most networks have unbounded delays – they will try to deliver a packet as quickly as possible, but there is no upper limit on how long this could take.
</p>

<br />

<br />

<p>
	<b>TCP vs UDP</b>
</p>

<p>
	Some latency-sensitive application such as videoconferencing and Voice over IP (VoIP) use <b>UDP (User Datagram Protocol)</b> rather than <b>TCP (Transmission Control Protocol)</b>. This is a tradeoff between reliability and variability of delays: UDP does not retransmit lost packets so it does not suffer as much from delays. This is at the expense of lost data. UDP is a good choice in situations where delayed data is worthless. On voice and video calls, there likely isn’t enough time to retransmit the data before it is due to be transmitted over the speaker. Instead, the missing data is just dropped, causing the call to drop for a second or the video to lag. The retry layer is instead transferred to the human: “Could you repeat that please? The sound just cut out for a moment.”
</p>

<br />

<p>
	On a public cloud or multi-tenet datacenter, you have no control or insight into how much load other users are putting on the shared network. A <b>noisy neighbor</b> could use a lot of resources, causing performance to degrade for you. Due to this, you may want to continually measure the difference in delays (<b>jitter</b>) and automatically adjust timeouts.
</p>

<br />

<br />

<p>
	<b>Synchronous vs Asynchronous Networks</b>
</p>

<p>
	Fixed-line telephone networks (non-cellular, non-VoIP) are extremely reliable. When a call is made, the network establishes a <b>circuit</b>: a fixed guaranteed amount of bandwidth allocated for the call. This is because the data requirements are known: a certain amount of bandwidth is needed for audio and audio is transmitted for the entire length of the call.
</p>

<p>
	Internet traffic is not like this. It is <b>bursty</b>, having varying data sizes. TCP dynamically adapts the rate of data transfer to the available network capacity.
</p>

<p>
	Another way to look at this: Since the amount of data needed for a call in known, you can known the maximum bandwidth of a wire – for example: 10,000 calls. The wire is divided up statically with each call receiving the same amount of bandwidth.
</p>

<p>
	By contrast, the internet shares bandwidth dynamically. Senders push and jostle each other over to wire as quickly as possible and the network switch's decide which packets to send. This approach has the downside of queueing but the advantage of maximum utilization of the wire.
</p>

<br />

<br />

<p>
	<b>Unreliable Clocks</b>
</p>

<p>
	We can measure durations (How long did the user spend on the site? Has the request timed out? What is the 99th percentile response time of the service?) and points in time (When was the article published? When does the cache entry expire? What is the timestamp on the log message?). In distributed systems, time is a tricky subject. This is because the communication from A to B travels over an unreliable and unbounded network. In addition, each machine has its own clock that are not perfectly accurate, so each machine has its own notion of time. 
</p>

<p>
	It is possible to synchronize clocks to some degree. The most common mechanism is <b>Network Time Protocol (NTP)</b> which allows the computer clock to be adjusted according to the time reported by a group of servers. The servers in turn get their time from a more accurate device such as a GPS receiver.
</p>

<br />

<br />

<p>
	<b>Monotonic vs Time-of-Day Clocks</b>
</p>

<p>
	Time-of-day clocks report the date and time (also known as <b>wall-clock time</b>). Time-of-day clocks are often synchronized to NTP. Time-of-day clocks can have various oddities such as: if they fall to far out of sync with NTP, they are forcibly set forward or back in time. These jumps make time-of-day clock unsuitable for measuring elapsed time. Historically, time-of-day clocks have coarse grained resolution, moving forward in steps of 10ms on older windows computers. Recent systems have less of an issue with time resolution.
</p>

<br />

<p>
	<b>Monotonic</b> clocks are guaranteed to always move forwards. Their actual value is meaningless - it may be the number of nanoseconds since the computer was restarted. It makes no sense to compare the monotonic time between two computers. Monotonic clocks have good resolution and can typically measure time in microseconds.
</p>

<br />

<br />

<p>
	<b>Clock Synchronization and Accuracy</b>
</p>

<p>
	<ul><li>The quartz crystal used in computer clocks is not very accurate: it <b>drifts</b> (runs faster or slower) depending on machine temperature. Google assumes a clock drift of 6ms for machines that are resynced via NTP every 30 seconds and 17 seconds for machines that resynced once per day.</li><li>NTP can only be as accurate as the network delay. In one study, this was a maximum of 35ms.</li><li>NPT servers can sometimes be wrong. There is robustness – NPT clients query several servers and ignore outliers but it is still a little scary to get your time from a stranger on the internet.</li><li>Leap seconds (minutes with 59 or 61 seconds) can crash systems. The best way to handle this is to make the NTP servers “lie” and spread the leap second out over the course of a day (known as <b>smearing</b>).</li><li>In virtual machines, the hardware clock is virtualized. When a CPU core is shared between multiple VMs, each VM is paused for tens of milliseconds while another VM is running. From the application’s point of view, this manifests itself as the clock suddenly jumping forward.</li><li>If you run software on devices you don’t control (i.e. mobile or embedded devices) you probably cannot trust the hardware clock at all. Some users deliberately set their clock to an incorrect time – for example to circumvent timing limitations on games.</li></ul>
</p>

<p>
	It is possible to achieve very good clock accuracy if you are willing to invest significant resources. For example, MiDID II European regulation for financial institutions requires that high-frequency trading funds synchronize their clocks to within 100 microseconds of UTC, in order to help debug market anomalies such as “<a href="https://en.wikipedia.org/wiki/Flash_crash">flash crashes</a>” and to help detect market manipulation. Such accuracy can be achieved via GPS receivers, the <b>Precision Time Protocol (PTP)</b>, and careful deployment and monitoring. It requires significant expense and expertise.
</p>

<br />

<br />

<p>
	<b>Relying on Synchronized Clocks</b>
</p>

<p>
	If you use software the relies on synchronized clocks, it is essential that you carefully monitor offsets between all machines and declare a node dead if it drifts too far in clock time from the other nodes.
</p>

<p>
	You may use timestamps to determine the ordering of events. In the following image, the skew between node 1 and 3 is less than 3ms (probably better than you can expect in practice) and yet the ordering of events is wrong. This can cause unexpected situations such as: database writes mysteriously disappearing (a node with a lagging clock is unable to overwrite values previously written by a node with a faster clock because it always looks like its values are coming in <b>before</b> the fast clock node), LWW cannot distinguish writes that occurred sequentially in fast succession.
</p>

<br />

<div className="text-center">
	<figure className="figure">
		<img className="img-fluid" src="/blogAssets/img/2023/time-issues.png" alt="Time issues" />
		<figcaption className="figure-caption text-center"></ figcaption>
	</figure>
</div>

<br />

<p>
	Clocks can have a confidence interval, which may look something like: we are 95% confidant that it is 10.3 and 10.5 seconds past the minute. Google’s TrueTime API explicitly reports the confidence interval on the local clock, giving you an earliest and latest possible time that it could currently be. You can calculate an uncertainty bound by combining: quartz drift since last sync with NTP server + NPT server’s uncertainty + network round trip time to the server.
</p>

<br />

<br />

<p>
	<b>Process Pauses</b>
</p>

<p>
	<b>Garbage Collection</b> stops all running threads known as a <b>"stop-the-world” pause</b>. Garbage Collection can be known to last for up to several minutes!
</p>

<p>
	VMs can be <b>suspended</b> (pausing all processes and saving state to disk) and resumed at a later time. This can be for an indefinite period of time, and is sometimes used to migrate the VM to a new host. This can happen at any point during your application execution.
</p>

<p>
	On end-user devices, execution may also be paused when the user closes the laptop.
</p>

<br />

<p>
	Some software runs in an environment where a failure to respond within a specific time cam cause serious damage: rockets, robots, cars. These are called <b>hard real-time</b> systems. A <b>real-time operating system (RTOS)</b> allow processes to be scheduled with guaranteed CPU time. Libraries must document their worst-case execution times. Garbage collection must be tightly controlled or not used at all.
</p>

<br />

<br />

<p>
	<b>Knowledge, Truth, and Lies</b>
</p>

<p>
	So far in chapter 8, we have looked at how distributed systems differ from programs running on a single computer: there is no shared memory, messages pass through an unreliable network with variable delays. Systems may suffer from partial failures, unreliable clocks, and processing pauses. Because of this, a node can never know anything for sure – it can only make guesses based on the messages it receives (or doesn't receive). It can only get information from other nodes by exchanging messages with them and if the other node does not respond, it cannot know if it is a network or a node issue.
</p>

<br />

<p>
	<b>The Truth is defined by the majority</b>
</p>

<p>
	A node cannot trust its own judgement of a situation. For example: it may be receiving messages and processing them, but all of its responses are being lost. It thinks it is operating correctly while the rest of the system thinks it is in a failed state. To solve this, distributed algorithms rely on a <b>quorum</b> – a minimum number of voting nodes that reduces the dependency on a single node. Most commonly, the quorum is an absolute majority of more than half the nodes. This prevents conflicting quorum votes (cannot have multiple greater-than-half majorities).
</p>

<br />

<p>
	<b>Fencing</b>
</p>

<br />

<div className="text-center">
	<figure className="figure">
		<img className="img-fluid" src="/blogAssets/img/2023/fencing.png" alt="Fencing" />
		<figcaption className="figure-caption text-center"></ figcaption>
	</figure>
</div>

<br />

<br />

<p>
	<b>Fencing</b> tokens are used to make locks safe in a distributed system. Without a fencing token in the above image, when client 1 resumes after GC, it thinks it still has a valid lock and would attempt to write to the Storage database, creating a duplicate write. With the ever increasing fencing token, an older write cannot be performed. The lock service serves a lock with an ever increasing fencing token and writes with lower tokens are not accepted.
</p>

<br />

<p>
	<b>Byzantine Faults</b>
</p>

<p>
	In this book, we assume that nodes are <b>unreliable but honest</b>. I.e. that a node would not deliberately send writes with fake fencing tokens. Distributed systems become harder if there is a risk that nodes “lie” (send arbitrary faulty or corrupted messages). <b>Byzantine faults</b> are where nodes behavior is no longer honest and they send corrupted data or intentionally lie (possibly lying at a human request). Examples include:
</p>

<p>
	<ul><li>In aerospace, data in memory or CPU can be corrupted by radiation. Flight control systems must be byzantine fault tolerant.</li><li>In a system with multiple participants, some organizations may attempt to cheat or defraud others. In such situations, it may not be safe to trust messages from other nodes as they may have been sent with malicious intent. An example is peer-to-peer blockchain technology as a way to get mutually untrusting parties to agree on transaction states.</li></ul>
</p>

<p>
	Most byzantine fault systems require a supermajority of more than 2/3rds for a quorum. Although full byzantine fault tolerance is expensive and likely not practical for must systems, there are still some safeguards you can implement:
</p>

<p>
	<ul><li>Checksums for corrupted network packets at the application level (though these are usually caught by TCP and UDP).</li><li>Sanitizing input from users of a publicly accessible application.</li></ul>
</p>

<br />

<br />

<p>
	<b>System Model and Reality</b>
</p>

<p>
	A <b>system model</b> is an abstraction that describes what things an algorithm may assume.
</p>

<p>
	Timing assumptions:
</p>

<p>
	<ul><li><b>Synchronous Model</b>: Assumes bounded network delay, bounded process pauses, and bounded clock error. This does not mean that these timing issues do not occur, just that there is an upward limit on how long they are. This is not a realistic model for most systems.</li><li><b>Partially Synchronous Model</b>: Behaves like a synchronous model most of the time but occasionally violates the upper bound. This is realistic for must systems as it assumes that things usually work, but is prepared for when they don’t.</li><li><b>Asynchronous  Model</b>: An algorithm is not allowed to make timing assumptions and does not even have a clock. This is a very restrictive model.</li></ul>
</p>

<br />

<p>
	Node failure models:
</p>

<p>
	<ul><li><b>Crash-stop faults</b>: Assumes a node can only fail one way, by crashing. A node that crashes never comes back.</li><li><b>Crash-recovery faults</b>: Nodes may fail at any time and possibly recover later. Nodes are assumed to have stable storage and volatile memory that is lost on crash. This is a commonly used model.</li><li><b>Byzantine (arbitrary) faults</b>: Nodes may do absolutely anything, including trying to trick and deceive other nodes.</li></ul>
</p>

<p>
	Most distributed systems use the partially synchronous and crash-recovery models.
</p>

<br />

<br />

<p>
	<b>Correctness of an algorithm</b>
</p>

<p>
	To describe what it means for an algorithm to be <b>correct</b>, we must describe its <b>properties</b>. An algorithm is correct in some system model if it always satisfies the properties in all situations than may occur in that system model.
</p>

<p>
	<ul><li><b>Safety and Liveness</b>: <b>Liveness</b> properties often include the word “eventually” (eventual consistency is one). <b>Safety</b> is “<b>nothing bad happens</b>”, liveness is “<b>something good eventually happens</b>”. Safety properties must never be violated while liveness properties can have caveats like: only require a response if a majority of the nodes eventually recover or if the network comes back online.</li></ul>
</p>

<br />

<br />

<p>
	<b>Chapter Summary</b>
</p>

<p>
	A wide range of problems can occur in distributed systems:
</p>

<p>
	<ul><li>When you try to send a packet over the network, it may be lost or arbitrarily delayed. Likewise, the response may be lost or delayed. So if you don’t get a reply, you don’t know if the message went through.</li><li>A node’s clock may be significantly out of sync with other nodes (despite your best efforts to set up NTP). It may suddenly jump forward or backward in time.</li><li>A processor may pause for a significant amount of time (perhaps due to a stop-the-world garbage collection), be declared dead by other nodes, and then come back to life with no idea that it was paused.</li></ul>
</p>

<p>
	The fact that such partial failures can occur is the defining characteristic of distributed systems. Whenever software tries to do anything involving other nodes, there is a chance that it may occasionally fail, randomly go slow, or not respond at all.
</p>

<p>
	To tolerate faults, the first step is to detect them, but even that is hard. Most systems rely on failures, but these cannot detect between network and node failures and variable network delays can sometimes cause a node to be falsely suspected of crashing. Moreover, sometimes a node can be in a degraded state. Such a node that is “<b>limping</b>” but not dead can be even more difficult to deal with.
</p>

<p>
	Once a fault is detected, getting the system to tolerate it is not easy either. There are no global variables, no shared memory, no common knowledge among the machines. Nodes cannot even agree what time it is, let alone anything more significant. The only way nodes can communicate is over an unreliable network. Major decisions cannot be made by one node, so we must use protocols to enlist help from other nodes and try to get a quorum.
</p>

<p>
	If you can solve problems on a single machine, do it. Distributed computing is hard and you can do a lot on a single machine these days. However, scalability, fault tolerance, and low latency (data close to users around the world) cannot be solved on a single machine.
</p>

<p>
	Tangent on time: Is the unreliable nature or networks, clocks, and processes inevitable? No, it is possible to give hard real-time response guarantees and bounded delays in networks, but doing so is very expensive and results in lower hardware utilization. Most non-safety-critical systems choose cheap and unreliable over expensive and reliable.
</p>

<p>
	Super computers: Supercomputers assume reliable components and must be stopped and restarted when a component fails. By contrast, distributed systems can run forever without being interrupted at the service level, because all faults and maintenance can be handled at the node level. In practice, however, a bad configuration change rolled out to all nodes could bring the entire system down.
</p>

<br />

<p>
	This chapter was all about problems, the next will focus on solutions :)
</p>


<br />
<hr />
<br />


<br />

<br />

<br />

<br />




<h3 className="text-center">Chapter 9: Consistency and Consensus</h3>

<br />

<p>
	In previous chapters, we discussed how a lot of things can go wrong in a distributed system. If a system encounters a failure and cannot simply fail and display an error message, then we must make the system fault-tolerant. The best way of introducing fault tolerance is to find general-purpose abstractions with useful guarantees and implement them once, letting the application depend on those guarantees. We used this approach with reads and writes to the database, making them fault tolerant by using transactions. We now want to find a way to make similar guarantees for distributed datasets. We want to seek abstractions that make it so that our application can safely ignore many of the problems that come with distributed systems.
</p>

<br />

<br />

<p>
	<b>Consistency Guarantees</b>
</p>

<p>
	If you look at two replicas of a database at the same time, you are likely to see different data, as the nodes are receiving different writes at different times (both from clients and update writes from other nodes). With <b>eventual consistency</b> (which could also be called <b>convergence</b>), if we stopped all writes, after an undefined amount of time, all data replicas would become the same. This provides only a very weak guarantee. You could write a value, and immediately try to read it only to get a different value as your read request had been routed to a yet-to-update node. This can be very confusing to application developers who want to treat database calls like variable: there is an expectation from single-threaded applications that a variable can read and write values in a logical manner. In this chapter, we will develop strong consistency guarantees, but at a cost: these systems may perform worse or be less fault-tolerant. We will explore the following:
</p>

<p>
	<ul><li><b>Linearizability</b>: One of the strongest consistency models.</li><li><b>Ordering guarantees</b>: Ordering events in a distributed system, particularly causality and total ordering.</li><li><b>Atomic commits</b>: Atomic commits in a distributed system and solutions to the problem of consensus.</li></ul>
</p>

<br />

<br />

<p>
	<b>Linearizability</b>
</p>

<p>
	With linearizability (aka atomic consistency, strong consistency, immediate consistency, or external consistency), you make the system appear as if there were only one copy of the data. Once a client completes a write, all clients must be able to read the value just written. Linearizability is a <b>recency guarantee</b>.
</p>

<p>
	When reads occur during a write, for the duration of the write, it is unknown if the read will return the old or new value. In a linearizable system, once <b>one</b> read has returned the new value, <b>all</b> reads after that must also return the new value.
</p>

<p>
	Linearizable and serializable can sound similar: serializable has to do with transactions on objects in a database – it makes them appear as if they had occurred sequentially and prevents things like write skew. Linearizable is a recency guarantee on objects in a register. A database that provides both can be said to have: <b>strict serializability</b> or <b>strong one-copy serializability</b>. 
</p>

<p>
	Linearizability can be required in situations such as: nodes picking a leader – one way to do this is to have every node attempt to acquire a lock, the one that succeeds is the leader. Another is uniqueness constraints in a database – such as only one user can register the same username.
</p>

<br />

<p>
	Some methods that do and don’t work for implementing linearizability:
</p>

<ul><li><b>Single copy</b>: A single copy of the data is the simplest way to implement linearizability. If you can get by without replicated data, do it.</li><li><b>Single Leader Replication</b>: Can be linearizable but has some issues:</li><ul><li>Bugs such as split brain.</li><li>By design: snapshot isolation allows each transaction to work on its own snapshot of the database, which can cause write skew, stale reads, and lack of total order.</li></ul><li><b>Consensus Algorithms</b>: Consensus algorithms can implement linearizability.</li><li><b>Multi-leader Replication</b>: As multiple leaders each accept their own writes, and resolve them later, multi-leader is pretty much the opposite of linearizable.</li><li><b>Leaderless Replication</b>: Some people claim that leaderless databases can be made linearizable via quorum writes but clock skew on last write wins conflict resolution violates total ordering and sloppy quorums are certainly not linearizable.</li></ul>

<br />

<br />

<p>
	Since linearizability requires that all databases be synchronized, if a network interruption separates nodes from each other, a choice must be made between <b>linearizability</b> and <b>availability</b>: to maintain linearizability, the system will have to wait for the network fault to be resolved. If using single-leader replication, the non-leader cannot make any writes and it cannot make any linearizable reads because it has lost the guarantee that those reads are up to date with the leader. Conversely, the system could abandon linearizability and use multi-leader replication which would allow both data centers to continue to operate and to sync up later.
</p>

<br />

<p>
	Linearizability is a useful guarantee but surprisingly few systems use it. Even RAM on a modern, multi-core machine is not linearizable: Every CPU has its own memory cache and store buffer. It first checks its cache before going to a register. This means that data can be stored in the cache and register, and that the values may be different at different times.
</p>

<br />

<br />

<p>
	<b>Ordering Guarantees</b>
</p>

<p>
	Ordering is important because it helps preserve <b>causality</b>. Examples of causality: question followed by answer, cause followed by effect, row created before being updated, a message being sent before it is received, i.e. one thing leads to another. If a system obeys the ordering imposed by causality, it is said to be <b>causally consistent</b>.
</p>

<br />

<p>
	<b>Total order</b> is different than causality. Total order means that two elements can be compared. Natural numbers have total order: you can say that 5 is less than 7. Mathematical sets do not have total order: you cannot say that {'{ a , b }'} is less than {'{ b, c }'} as one is a subset of the other and they are incomparable – though they can be partially ordered if one set contains a full subset of the other.
</p>

<br />

<p>
	Linearizability gives total order because the dataset behaves as if there is only a single copy, and therefore, we can always tell if one thing comes before another. Causality only gives us partial order as some events have a <b>happens-before</b> relationship while others are <b>incomparable</b> (they occurred concurrently).
</p>

<br />

<p>
	Linearizability is a stronger form of consistency as any system that is linearizable is also casually consistent. That said, linearizable systems take a performance hit. Casual consistency is the strongest possible consistency model that does not slow down due to network delays and remains available in the presence of network failures. Many systems that think they require linearizability could really use causal consistency instead.
</p>

<br />

<p>
	Sequence numbers or timestamps are one way to create total order. Timestamps do not have to be time-of-day timestamps as those can be unreliable. Instead, a logical clock can be used, which might be as simple as a number that increments on each operation.
</p>

<br />

<p>
	With multi-leader replication, sequence numbers become more problematic. You cannot have different leader nodes generating the same timestamps. Way to address this:
</p>

<ul><li>One node could generate only even timestamps and another only odd.</li><li>You could switch to using time-of-day timestamps with a high enough resolution.</li><li>You could allocate blocks of timestamps to different nodes. </li></ul>

<p>
	These methods do not protect causality: the odd timestamps could fall behind the even; time-of-day clocks could become skewed.
</p>

<br />

<br />

<p>
	<b>Lamport timestamps</b> solve this issue by using a pair of values: a counter and a node id. Each node keeps track of the greatest counter that it has seen so far and, when it receives requests from other nodes, if their counter is even higher, it jumps its counter to that value. Timestamps are compared first via counter and second via node id.
</p>

<br />

<p>
	Timestamps do not solve concurrency issues where decisions need to be made immediately. For example, if there is a uniqueness constraint on usernames, timestamps could resolve which username was created last, but in reality you need to prevent that second username from being created at all. Timestamps can only be used after the uniqueness constraint has already been violated.
</p>

<br />

<br />

<p>
    <b>Total order broadcast</b> is what is really needed for database replication. It requires two safety properties:
</p>
    

<ol><li>
	Reliable delivery: No messages are lost. If a message is delivered to one node, it must be delivered to all nodes.
    </li><li>Totally ordered delivery: Messages are delivered to all nodes in the same order.
    </li></ol>

<br />

<br />

<p>
	<b>Distributed Transactions and Consensus</b>
</p>

<p>
	Consensus is one of the most important and fundamental problems in distributed computing. Getting all the nodes to agree on something is required in situations such as: leader election and atomic commit (all nodes must commit or rollback).
</p>

<br />

<p>
	<b>Two-phase commit (2PC)</b> is a way to create atomic commits across multiple nodes. A <b>coordinator</b> (also known as a transaction manager) is used – often implemented in the same library within the application process requesting the transaction. 
</p>

<br />

<p>
In phase 1, the coordinator sends a <b>prepare</b> message to all nodes (<b>participants</b>), asking them if they are ready to commit:</p>

<ol><li>
	If all respond “yes”, the coordinator sends out a <b>commit</b> request in phase 2.</li><li>If any of the participants respond “no”, the coordinator sends out an <b>abort</b> request in phase 2.
</li></ol>

<br />

<p>
	In phase 1, each node does all the work to ensure that it can commit no matter what (including a crash, power failure, or running out of memory). This means that whatever crash recover mechanism is in place (such as a WAL) has already prepared the transaction. By voting “yes”, the participant has passed the first point-of-no-return: it must now be prepared to commit <b>no matter what</b> if it receives a commit message in phase 2. 
</p>

<p>
	The second point-of-no-return is when the coordinator sends out its <b>commit</b> or <b>abort</b> message. Once it has written that decision to disk, it must attempt to send commit/abort messages to all nodes. If it receives a timeout from any node, it must retry indefinitely – there is no going back.
</p>

<br />

<p>
	Once a node votes “yes” it cannot commit or abort until it hears from the coordinator in phase 2. If the coordinator where to crash, the node is now stuck. This is called being <b>in doubt</b> or <b>uncertain</b>. This means that the coordinator is a single-node atomic commit that can block all other nodes from proceeding on a given transaction. For this reason, 2PC is sometimes called a <b>blocking atomic commit</b>.
</p>

<br />

<p>
	A <b>three-phase commit (3PC)</b> is <b>nonblocking</b> and has been proposed but assumes bounded network delays and bounded node response times. In addition, it requires a <b>perfect failure detector</b> – a reliable way to tell if a node has crashed or not. Because this is not possible on an internet with unbounded delays, 2PCs continue to be used. 
</p>

<br />

<p>
	If the coordinator is not replicated and runs on a single node, it becomes a single point of failure for distributed atomic transactions. There are ways around such as:
</p>

<ul><li>Having administrators manually resolve orphaned transactions (transactions that are stuck “in doubt” because of coordinator failure).</li><li>Creating a heuristic for resolving orphaned transactions – though this likely breaks atomicity.</li></ul>

<br />

<br />

<br />

<p>
	<b>Chapter 9 Summary</b>:
</p>

<p>
	<b>Linearizability</b>: A popular consistency model with the goal of making replicated data appear as though it were only a single copy, and to make all operations act on it atomically. Linearizability is appealing because it is easy to understand (it makes the database behave like a variable in a single-threaded program). It has the downside of being slow, especially in environments with large network delays.
</p>

<p>
	<b>Causality</b>: Imposes ordering on events in a system (what happened before what, based on cause and effect). Unlike linearizability, which puts all operations in a single, ordered timeline, causality provides a weaker consistency model: some things can be concurrent and some things have happened-before relationships. The version history is like a timeline with branching and merging. Casual consistency does not have the coordination overhead of linearizability and is much less sensitive to network delays.
</p>

<p>
	Causal ordering (for example, with <a href="https://en.wikipedia.org/wiki/Lamport_timestamp">Lamport timestamps</a>) is sometimes not enough. If a process that cannot be duplicated (such as registering a new username) occurs concurrently with another process writing the same value, that system needs to ensure that one process does not succeed. This leads to <b>consensus</b>. Consensus is getting all of the nodes to agree on what was decided. This can solve several problems:
</p>

<ul><li><b>Linearizable compare-and-set registers</b>: The register needs to automatically decide whether to sets its value, based on whether its current value equals the parameter of a given operation.</li><li><b>Atomic transaction commit</b>: A database must decide to commit or abort a distributed transaction.</li><li><b>Total order broadcast</b>: The messaging system must decide on the order in which to deliver messages.</li><li><b>Locks and leases</b>: When several clients are racing to grab a lock or a lease, the lock decides which one successfully acquired it.</li><li><b>Membership/coordination service</b>: Given a failure detector (e.g. timeouts), the system must decide which nodes are alive, and which should be considered dead.</li><li><b>Uniqueness constraint</b>: When several transactions try to concurrently create conflicting records with the same key, the constraint must decide which to allow and which to fail.</li></ul>

<p>
	All of these are straightforward if you have a single node or assign decision making to a single node. This can result in blockages if that leader node fails. There are several options when the leader fails:
</p>

<ul><li>Wait for it to recover – if it does not, the system could be blocked indefinitely.</li><li>Have humans choose a new leader – considered an “act of god”, as the change occurs via manual intervention outside of the system. Limited by how quickly the humans respond.</li><li>Use an algorithm to select a new leader. This requires a consensus algorithm.</li></ul>

<p>
	A single-leader database can provide linearizability with a consensus algorithm, but it still requires consensus to choose a new leader – in effect just kicking the need for consensus down the road.
</p>

<p>
	Tools like <a href="https://zookeeper.apache.org/">ZooKeeper</a> provide an “outsourced” consensus, failure detection, and membership service. It is not easy to use but much better than trying to develop your own algorithms.
</p>

<p>
	Leaderless and multi-leader replication systems do not typically use global consensus. The conflicts that occur here a result of not having consensus across different leaders and maybe it is okay to do without linearizability in this way – maybe we can learn to work with data that has branching and merging version histories.
</p>

<br />

<br />
<hr />
<br />

<h3 className="text-center">Part III: Derived Data</h3>

<br />

<p>
	In parts I and II, we discussed the major considerations that go into distributed databases, from the layout of data on disk all the way to the limits of distributed consistency in the presence of faults. All of this, however, assumed that there was only one (distributed) database.
</p>

<br />

<p>
	In the real world, systems are often much more complex. Different databases are optimized for different access patterns. Database vendors will claim that their solution can fulfill all of your needs but this is usually not the case. In the final part of DDIA, we will review the issues around integrating multiple different data systems.
</p>

<br />

<p>
	On a high level, systems that store and process data can be grouped into two categories:
</p>

<ol><li><b>Systems of record</b>: Also known as <b>source of truth</b>. These hold the authoritative version of your data. When new data arrives (e.g. as user input), it is first written here. Each fact is represented exactly once (the data is <b>normalized</b>: split out into many small tables to reduce data duplication).</li><li><b>Derived data systems</b>: Data that is the result of taking existing data from somewhere else (a system of record, or maybe another derived data set) and transforming or processing it in some way. If you lose derived data, you can recreate it by running the processing step again. <b>Denormalized</b> data (joins of small tables into a single query), indexes, and materialized views all fall under this category. In recommendation systems, predictive summary data is often derived from usage logs. A cache is also an example of derived data as the data still exists somewhere else, it is just faster to access it in a cache. </li></ol>

<br />

<p>
	Not all architectures make a clear distinction between systems of record and derived data. Most databases, storage engines, and query languages are not inherently systems of record or derived data either – they are just tools.
</p>

<br />

<p>
	<b>Chapter 10</b>: We examine how batch-oriented dataflow systems such as MapReduce gives us good tools and principles for building large scale data systems.
</p>

<p>
	<b>Chapter 11</b>: We explore how we can do the same thing with lower delays using streams.
</p>

<p>
	<b>Chapter 12</b>: We explore how we might use these tools to build reliable, maintainable, and scalable applications in the future.
</p>


<br />
<hr />
<br />


<h3 className="text-center">Chapter 10: Batch Processing</h3>

<br />

<p>
	Let’s define 3 different systems:
</p>

<ol><li><b>Services (online systems)</b>: Waits for a request to come in and then attempts the handle that request as quickly as possible, sending a response to the requester. Speed is typically the main measure of performance. Services are expected to have high availability.</li><li><b>Batch Processing systems (offline systems)</b>: Takes a large amount of data, runs a <b>job</b> to process it, and produces an output. Jobs can take a while: from several minutes to several days – there normally isn’t a user waiting for the job to finish. Instead, jobs are often scheduled to run on an defined interval (e.g. once per day). Performance is measured in <b>throughput</b>, how long it takes to crunch through an input dataset of a certain size.</li><li><b>Stream processing systems (near-real-time systems)</b>: Somewhere in between online (real time) and offline/batch processing. Stream processing acts on events shortly after they happen, while a batch job operates on a fixed dataset.</li></ol>

<br />

<br />

<p>
	<b>Batch processing with Unix Tools</b>
</p>

<p>
	<code>
	cat var/log/nginx/access.log | # cat: read the log file. The pipe (|) operator chains outputs to inputs
    </code>
</p>

<p>
<code>
	  awk {'{print $7}'} |           # Split each line into fields by whitespace, keep only 7th field
      </code>
</p>

<p>
<code>
	  sort                         # Alphabetically sort the lines
      </code>
</p>

<p>
<code>
	  uniq -c                      # Check neighbors. -c: add a counter for repeats
      </code>
</p>

<p>
<code>
	  sort -r -n                   # Sorts based on the (-n) number at the start of each line (added by uniq), -r: returns in reverse order
      </code>
</p>

<p>
<code>
	  head -n 5                    # Returns just the first 5 lines
      </code>
</p>

<p>
	Unix tools are very powerful – the above example can sort through gigabytes of data in a matter of seconds!
</p>

<p>
	You can use replit to play around with Bash in your browser. You can even add text files to a mock file system: <a href="https://replit.com/new/bash">link</a>
</p>

<br />

<p>
	Unix commands are so efficient in part because they follow the Unix design philosophy (1978):
</p>

<ol><li><i>Make each program do one thing well. To do a new job, build afresh rather than complicate old programs by adding new "features".</i></li><li><i>Expect the output of every program to become the input to another, as yet unknown, program. Don't clutter output with extraneous information. Avoid stringently columnar or binary input formats. Don't insist on interactive input.</i></li><li><i>Design and build software, even operating systems, to be tried early, ideally within weeks. Don't hesitate to throw away the clumsy parts and rebuild them.</i></li><li><i>Use tools in preference to unskilled help to lighten a programming task, even if you have to detour to build the tools and expect to throw some of them out after you've finished using them.</i></li></ol>

<p>
	The Unix philosophy is similar today to Agile and DevOps – these ideas have endured over 40+ years.
</p>

<br />

<p>
	To chain inputs and outputs together, you need a uniform interface. By convention, many (but not all) Unix commands treat a sequence of bytes as ASCII text – a list of records separated by a newline (\n).
</p>

<br />

<p>
	Unix tools use standard input (<b>stdin</b>) and standard output (<b>stdout</b>). If not specified, stdin comes from the keyboard and stdout goes to the screen. <b>Pipes</b> (this character: | ) allow you to attach the stdout of one process to the stdin of another.
</p>

<br />

<p>
	Some things that make Unix tools successful:
</p>

<ul>
	<li>Input files are normally treated as immutable: you can run the commands as many times as you want without risk of damaging your input.</li><li>You can end the pipeline at any point and view the output. This makes debugging easy.</li><li>You can write the output of one stage to a file and read the file for a later stage. This allows you to restart the pipeline with some sort of checkpoints.</li>
    </ul>

<br />

<p>
	The biggest limitation of Unix tools is that they run on a single machine.
</p>

<br />

<br />

<p>
	<b>MapReduce and Distributed Filesystems</b>
</p>

<p>
	MapReduce (published by Google in 2004) is like Unix tools but distributed across potentially thousands of machines. MapReduce takes one or more inputs and produces one or more outputs. Like Unix tools, it is blunt, brute-force, but very effective. MapReduce does not normally modify the input or have any side effects besides the output.
</p>

<br />

<p>
	While Unix tools use stdin and stdout, MapReduce reads and writes files on a distributed filesystem. In the Hadoop implementation, that filesystem is called <b>HDFS (Hadoop Distributed File System)</b>, an open source reimplementation of the Google File System (GFS). Other implementations include: Amazon S3 and Azure Blog Storage.
</p>

<br />

<p>
	HDFS works like this: each machine has a daemon running on it, exposing a network service that allows other nodes to access files stored on that machine. A central server called the NameNode keeps track of which file block is stored on which machine. HDFS conceptually creates a big filesystem that can use the space of all machines running that daemon. 
</p>

<br />

<p>
	For fault tolerance, data is replicated on multiple nodes. HDFS scales well with some of the biggest deployments running on tens of thousands of machines with a storage capacity of hundreds of PBs!
</p>

<br />

<p>
	MapReduce itself is a programming framework that allows you to write code to process large datasets in a distributed filesystem. 
</p>

<p>
	MapReduce works like this:
</p>

<ul><li>Read a set of input files. Break them up into <b>records</b>.</li><li>Call the mapper function to extract a key and value from each record.</li><li>Sort all key/value pairs by key.</li><li>Call the reducer function over the sorted key/value pairs and combine those values.</li></ul>

<p>
	Steps 2 (mapper) and 4 (reducer) are where you write your custom code.
</p>

<br />

<p>
	Since the data is divided up between machines, a mapper runs on each machine, processing that section of the data. This is known as <b>putting the computation near the data</b> – which save having to transport the data over a network connection.
</p>

<br />

<p>
	MapReduce is limited in its ability to process data on a single job. Often MapReduce jobs need to be chained together in what is known as a <b>workflow</b>. There is no direct support in the Hadoop framework. Instead, the output of the first MapReduce job is configured to be the input of the next one. Each MapReduce must wait for the job before it to complete successfully (unsuccessful jobs are discarded). In a recommendation system, it would be common to chain 50 to 100 MapReduce jobs together.
</p>

<p>
	A log of things a user did on a website: <b>activity events</b> or <b>clickstream data</b>.
</p>

<br />

<p>
	Uses for MapReduce: Google originally used 5-10 MapReduce jobs to index its search results. Another use is to build machine learning systems such as classifiers (e.g. spam filters, anomaly detection, image recognition) and recommendation systems (e.g. people you may know, products you may be interested in).
</p>

<br />

<br />

<p>
	<b>Philosophy of Batch Process Outputs</b>
</p>

<p>
	The Unix philosophy encourages very explicit dataflow: The input is immutable, the process has no side effects, and the output completely overwrites any previous output. Benefits of this include:
</p>

<ul><li>If you introduce a bug that creates incorrect or corrupted data, you can roll back and rerun the job as this will overwrite the corrupted data. If you job had a side effect like writing to a database, rolling back and rerunning would do nothing to fix your bad data.</li><li>Being able to rollback quickly allows for rapid prototyping and development. The concept of <b>minimizing irreversibility</b> is beneficial for Agile software development.</li><li>If a map or reduce task fails, the job can be automatically rerun. If the failure was due to a bug, the attempts will stop after a few more failures. If, however, the failure is due to a transient bug, the re-runs will succeed, allowing your MapReduce jobs to tolerate transient faults.</li><li>The same set of input files can be used for different jobs as they are immutable.</li><li>Like Unix tools, we separate the logic from the wiring. This allows one team to focus on implementing a job that does one thing well and another team can focus on where and how to use that job.</li></ul>

<br />

<br />

<p>
	<b>Comparing Hadoop to Distributed Databases</b>
</p>

<ul><li><b>Diversity of storage</b>: Databases that do jobs similar to the HDFS have been around for a while and are known as <b>massively parallel processing (MPP) databases</b>. The main different difference between HDFS and MPP is that MPP, like all databases, has to structure the data before it can store it. HDFS can accept data without any schema, allowing you to dump large amounts of unstructured data into the HDFS and figure out what to do with it later. This approach has been dubbed the <b>sushi principle</b>: raw data is better. Data processing still occurs using MapReduce jobs: raw data is taken from the HDFS, processed, and dumped into a MPP database. This decouples data collection from data modeling.</li><li><b>Diversity of Processing Models</b>: MPP databases couple you to certain technologies like SQL. HDFS allows you to use a variety of different processing models when working with your data.</li><li><b>Designing for Frequent Faults</b>: MapReduce jobs are eager to write to disk. Between each job in a workflow, the data is written out. This means that the job can resume at any of these checkpoints if the next job fails. This has the benefit of optimizing your compute resources. It is likely that you will not have all of your compute being used by your MapReduce jobs so you can make your MapReduce jobs lower priority and allow your compute to be used by other tasks. This will sometimes mean that a MapReduce job gets kicked. Not a problem, though, as the job can start over at its last checkpoint when compute resources free up again.</li></ul>

<br />

<br />

<p>
	<b>Beyond MapReduce</b>
</p>

<p>
	Although MapReduce is very popular, there are other models for distributed systems. MapReduce has the benefit of being easy to understand, but is actually quite hard to implement. This has led to various higher-level programing models being developed: Pig, Hive, Cascading, Crunch.
</p>

<br />

<p>
	<b>Materialization of Intermediate State</b>: When one MapReduce job outputs to a file directory, that data can be used by anyone or even multiple anyones. If, however, the output is only used as the input for the next job in the workflow, then it is known as <b>intermediate state</b>. The process of writing intermediate state is known as <b>materialization</b>. It means to eagerly compute the result of some operation and write it out, rather than computing it on demand. Unix pipes do not materialize their intermediate state and instead use a small memory buffer to store the result of one operation before streaming it to the next one.
</p>

<p>
	Some downsides of materialization:
</p>

<ul><li>The next job can only start when the previous one has finished writing. If the job takes in multiple inputs, it must wait for all of those inputs to complete. Unix pipes on the other hand start all processes at once and data is consumed by one as soon as it is processed by the other (i.e. it will immediately process any partial data via streaming).</li><li>Storing intermediate state in a distributed database often means that intermediate state is copied on several nodes. This could be seen as overkill as this intermediate data is only needed during processing.</li></ul>

<br />

<br />

<p>
	<b>Dataflow Engines</b>
</p>

<p>
	To fix problems with MapReduce, several new execution engines were developed: Spark, Tez, Flink. They each have design differences but have one thing in common: they handle the entire workflow as one job, rather then several independent sub-jobs. Like MapReduce, they work by repeatedly calling a user-defined function to process one record at a time on a single thread. They parallelize work by partitioning inputs, and they copy the output of one function over the network to become the input for another function. Unlike MapReduce, they do not strictly separate into Map and Reduce. Each function is called an <b>operator</b>.
</p>

<br />

<p>
	Dataflow engines have several advantages over MapReduce:
</p>

<ul><li>Expensive operations like sorting are only done when actually needed.</li><li>No unnecessary map work as the work done by the mapper can often be incorporated into the previous reduce operator.</li><li>No need to write intermediary to a HDSF between each operator.</li><li>Operators can begin processing data as it arrives (streaming) rather than waiting for the previous operator to complete.</li></ul>

<br />

<p>
	MapReduce is still more fault tolerant because it materializes intermediate state. To address this, data engines will recompute any missing pieces of data after a crash. When recomputing data, it is desirable to have operators be <b>deterministic</b> (running multiple times has the same result). Since some data may already be being processed by downstream operators, if operators are non-deterministic then downstream operators will need to be stopped as well, causing cascading faults.
</p>

<br />

<br />

<br />

<p>
	<b>Chapter 10 Summary</b>:
</p>

<p>
	In this chapter we explored batch processing and started by looking at <b>Unix tools</b> (such as: <b>awk, grep, sort</b>) and how the <b>design philosophy</b> of these tools carried forward into <b>MapReduce</b> and more recent dataflow engines. Some of those design principles include:
</p>

<ul><li><b>Immutable inputs</b>: Running a tool on a dataset (input) will not affect or damage that dataset.</li><li><b>Outputs are meant to be inputs</b>: Outputs are meant to be inputs for another (yet unknown) tool.</li><li><b>Small tools that do one thing well</b>: Complex problems are solved by composing small tools that do one thing well.</li></ul>

<p>
	In Unix, the uniform interface that allows one program to be composed with another is <b>files</b> and <b>pipes</b>. In MapReduce, the interface is a <b>distributed filesystem</b>. Dataflow systems add their own pipe-like data transport mechanism to avoid materializing intermediate state to the distributed file system. The initial input and final output are still typically files in the <b>HDFS</b>.
</p>

<br />

<p>
	Two main problems that distributed batch processing frameworks need to solve:
</p>

<ol><li><b>Partitioning</b>: In MapReduce, mappers are partitioned according to input file blocks. The output of mappers is repartitioned, sorted, and merged into a configurable number of reducer partitions. The purpose of this is to bring all the related data (records wit the same key) together in one place.</li><li><b>Fault tolerance</b>: MapReduce frequently writes to disk which makes it easy to recover from a crash but slower to process data. Dataflow engines perform less materialization and keep more intermediate state in memory. In the event of a crash, this means that nodes must do more work to recompute state but that nodes are faster when they remain failure-free.</li></ol>

<br />

<p>
	We discussed several join algorithms used by MapReduce, and that are typically used internally by MPP databases and dataflow engines:
</p>

<ul><li><b>Sort-merge joins</b>: Each of the inputs being joined goes through a mapper that extracts the join key. By partitioning, sorting, and merging, all records with the same key end up going to the same reducer.</li><li><b>Broadcast hash joins</b>: One of the two joins is small and it is not partitioned so it can be entirely loaded into a hash table. You start the mapper on each partition of the large join input, and for each entry, you load and compare it to the hash table.</li><li><b>Partitioned hash joins</b>: If the two join inputs are partitioned in the same way (same key, same hash function, and same number of partitions), then the hash table approach can be used independently for each partition.</li></ul>

<br />

<p>
	Distributed batch processing engines have a deliberately restricted programming model: callback functions (such as mappers and reducers) are assumed to be stateless and to have no side effects other than their designated output. This hides many of the harder problems of distributed computing: in the face of crashes and network issues, tasks can be safely retried as the input was never changed and the output of failed tasks can be safely discarded.
</p>

<br />

<p>
	The distinguishing feature of batch processing jobs is that it reads some input data, and produces some output data without modifying the input data. The output is <b>derived</b> from the input. The input is batch jobs is <b>bounded</b> – it has a fixed size and the task will known when it has finished reading the data. In the next chapter, we will discuss stream jobs, in which the input is <b>unbounded</b> – the data is a never-ending stream of information. In streaming, the job is never complete.
</p>

<br />


<br />
<hr />
<br />


<br />

<br />



<h3 className="text-center">Chapter 11: Stream Processing</h3>

<br />

<blockquote class= "blockquote">
	<p class="text-muted">
		<small>
			"A complex system that works is invariably found to have evolved from a simple system that worked. A complex system designed from scratch never works and cannot be patched up to make it work. You have to start over with a working simple system."
		</ small>
	</ p>
	<footer class="blockquote-footer"> John Gall, <cite title="Systemantics (1975)">Systemantics (1975)</ cite></ footer>
</ blockquote>

<br />

<p>
	<i>The above quote is known as Gall’s Law. Interestingly, Gall did not work in computers but was a Pediatrician and, in addition to his work on systems theory, also write a book on an ancient Egyptian queen.</i>
</p>

<br />

<br />

<p>
	<b>Stream Processing</b>
</p>

<p>
	Batch processing processes data in fixed increments: every minute, once per day, etc. Stream processing processes data continuously. This reflects the way that many data sources produce data: a user produced data yesterday, will produce data today, and will likely produce more data tomorrow. A <b>stream</b> refers to data that is incrementally made available over time.
</p>

<br />

<br />

<p>
	<b>Transmitting Event Streams</b>
</p>

<p>
	In stream processing, a record is known as an <b>event</b>. An event is a small, self-contained, immutable object that contains the details of something that happened and a timestamp (usually a time-of-day clock). An event could record an action a user took on a website or could be a sensor reading from a scientific probe. 
</p>

<br />

<p>
	An event is generated by a <b>producer</b> (<b>publisher, sender</b>) and potentially processed by multiple <b>consumers</b> (<b>subscribers, recipients</b>). In streaming systems, events are usually grouped together by <b>topic</b> or <b>stream</b>.
</p>

<br />

<p>
	One way to notify consumers of a new event is to have them <b>poll</b> (periodically check) an event source such as a database. This is expensive and it is better for consumers to be notified when a new event is added.
</p>

<br />

<br />

<p>
	<b>Messaging Systems</b>
</p>

<p>
	A common approach to notifying consumers of a new event is through a <b>messaging system</b>. 
</p>

<ol><li>What happens if producers send messages faster than consumers can process them. Three options: drop the messages, buffer the messages in a queue, apply <b>back pressure</b> (block the producer from sending more messages).</li><li>What happens if nodes go offline? Are any messages lost? Durability requires some combination of writing to disk and/or replication. If you can afford to lose messages, you can get higher throughput and lower latency on the same hardware.</li></ol>

<p>
	Some methods of notifying consumers are: UDP and making direct HTTP or RPC calls to the consumer (this is how WebHooks work).
</p>

<br />

<br />

<p>
	<b>Message Brokers</b>
</p>

<p>
	An alternative to messaging systems is the use a <b>message broker</b> (<b>message queue</b>) which is a kind of database optimized for handling message streams. This moves the question of durability to the message broker. Although a message broker is a kind of database, it has several difference compared to using a traditional database:
</p>

<ul><li>Databases keep data until it is explicitly deleted. After delivering a message, the broker deletes it.</li><li>Databases have secondary indexes and ways to arbitrarily query data. Brokers only have ways to subscribe and unsubscribe to topics.</li></ul>

<br />

<p>
	When multiple consumers subscribe to the same topic, two patterns are used:
</p>

<ol><li><b>Load balancing</b>: Messages are delivered to <b>one</b> of the consumers.</li><li><b>Fan-out</b>: Each message is delivered to <b>all</b> of the consumers.</li></ol>

<br />

<p>
	In order to delete a message, the broker has to ensure that the consumer has fully processed it. To do this, the broker will only delete a message after it receives an <b>acknowledgment</b>.
</p>

<br />

<p>
	Since messages are deleted after being acknowledged, a new consumer will only process streams that occurred after it was added. There are hybrid approaches that combine the durable storage approach of databases with the low-latency notifications of messaging. This is the idea behind <b>log-based message brokers</b>.
</p>

<br />

<p>
	A log is an append-only file on disk. A consumer receives a message by reading the log file from start to end and then watches the log to wait for new messages to be added. A simple implementation is to use the Unix tool “tail -f” which watches the end of a file for any data being appended. 
</p>

<br />

<p>
	Logs will eventually grow too large so a process is used to delete or move older log to long term storage. The buffer can typically be quite large, allowing the log to hold hours or days of messages depending on message throughput. The bounded-size buffer is known as a <b>circular buffer</b> or <b>ring buffer</b>. If a consumer falls too far behind, it could fall behind this cutoff point. It can therefore be useful to set up alerts if a consumer fall too far behind.
</p>

<br />

<p>
	Logs allow for both message durability and for messages to be replayed to get the same results – a benefit that batch processing already provided.
</p>

<br />

<br />

<p>
	<b>Change Data Capture</b>
</p>

<p>
	Most database replication logs are not public APIs. There is growing interest in <b>change data capture (CDC)</b> that allows you to track changes to a database. This allows you to use those changes on derived data systems to keep them up to date when data in your system of record database changes.
</p>

<br />

<br />

<p>
	<b>Event Sourcing</b>
</p>

<p>
	<b>Event sourcing</b> is a technique developed in the <b>domain-driven design (DDD)</b> community. Similar to change data capture, event sourcing involves storing all changes to the application state in a log of change events. Events are designed to capture high-level application changes. 
</p>

<br />

<p>
	Events are immutable and cannot be deleted. If a user action involves deleting something like a course enrollment, that does not mean that the enrollment never happened but rather that it happened and was later deleted. In order to keep an accurate history of application events, both the create and delete event are retained.
</p>

<br />

<p>
	Event sourcing can be useful because it decouples events from logic that processes them. If we have a log of all the events that occurred at the application level, at means that we can later make changes to how we want to handle events and can retroactively process old events. For example, if an airline wants to add a rewards program, it can process old flights because it has a record of all application level activity and only has to change the logic that processes these events. Events are like a history of facts, and as long as we have a comprehensive and accurate history, we can make sense of those facts at a later date.
</p>

<br />

<br />

<p>
	<b>Commands and Events</b>
</p>

<p>
	An initial request is known as a <b>command</b>. A command can fail and it is, therefore, only after it is successfully processed that it becomes an <b>event</b>. At the point when an event is generated, it becomes a <b>fact</b> and cannot later be deleted. A consumer of an event stream cannot reject an event. If something needs to be rejected, it needs to happen at the command level.
</p>

<br />

<br />

<p>
	<b>State, Streams, and Immutability</b>
</p>

<p>
	No matter how the state changes, there are always a sequence of events that caused those changes. Even as things are done and undone, the fact remains that those changes occurred. The changelog represents the evolution of state over time. The application state is what you get when you integrate an event stream over time.
</p>

<br />

<p>
	A database can be viewed as a cache of the application state at the current time – a cache of the latest values from the changelog.
</p>

<br />

<p>
	Immutable events have several advantages. If you deploy buggy code and it makes database changes, it becomes hard to revert those changes. If events are immutable, any change events can be reverted by adding the inverse of those events to the eventing system (e.g. a create event is undone by a delete event). Additionally, there are use cases where you may want to know that an event that would otherwise be undone was taken: a customer adds and then removes an item from their shopping cart. Having a record of this series of events can be useful for analytical purposes (perhaps to offer ads or discounts to that consumer to persuade them to come back and purchase that item). 
</p>

<br />

<p>
	There are times when you may need to actually delete events from an immutable collection:
</p>

<ul><li>Datasets with high churn may grow too large over time and a compaction or garbage collection processes may be needed.</li><li>Legal reasons such as EU privacy laws that require user data to be deleted upon request. In this case, it is not enough to append a “delete” entry onto the log, the history must be rewritten as if certain events belonging to that user never occurred.</li></ul>

<br />

<p>
	Deletes are surprisingly hard to implement. Filesystems, storage engines, and SSDs often write to a new location rather than overwriting in place – this means that deleted data may still be recoverable for a time. Backups are deliberately immutable to prevent corruption and user data could continue to live on in backups. Deletion often comes down to making it harder to retrieve the data rather than ensuring that no trace of it remains.
</p>

<br />

<br />

<p>
	<b>Processing Streams</b>
</p>

<p>
	There are three things that you can do with an event stream:
</p>

<ol><li><b>Send it to a database</b>: This is a good way to keep a database up to date.</li><li><b>Send it to a human</b>: update a dashboard, send an email, etc.</li><li><b>Send it to another event stream</b>: Streams form a pipeline creating derived datasets.</li></ol>

<br />

<p>
	A piece of code that processes an event stream is knowns as a <b>job</b> or an <b>operator</b>. A stream processor consumes an input of streams as read-only and writes an output to a different location in an append-only fashion. 
</p>

<br />

<p>
	This all sounds very similar to batch processing but there are some differences: 
</p>

<ul><li>Streams operate on unbounded inputs.</li><li>Without a bounded input, the sort function common in batch processing does not make much sense.</li><li>Batch jobs that run for minutes or hours can be easily restarted. A stream job that has been running for years likely cannot be restarted.</li></ul>

<br />

<br />

<p>
	<b>Uses of Stream Processing</b>
</p>

<p>
	<b>Complex Event Processing (CEP)</b>: These type of systems use a high-level declarative query language like SQL or a GUI to describe patterns that events should match. Databases store data and allow transient queries to be run against them. CEP engines work in reverse: they store queries and when events come in, they are matched against stored queries . When a match is found, a <b>complex event</b> is emitted.
</p>

<br />

<p>
	<b>Stream Analytics</b>: Stream analytics are similar to CEP but more focused on aggregations and statistical metrics over time. The time interval over which you aggregate is known as a <b>window</b>.
</p>

<br />

<br />

<p>
	<b>Reasoning About Time</b>
</p>

<p>
	Stream processors often have to deal with time. Clock time is often used as it is simpler to deal with. Event time (time at which the event occurred) and processing time (time at which it was processed by the stream processor) are different and should not be mixed. 
</p>

<br />

<p>
	Sometimes an event processor will processes windows of time. If it is processing the 37th minute of the hour, when can it be sure that all events for that minute have arrived and been processed? What if a <b>straggler</b> event comes in several minutes or hours later?
</p>

<ol><li><b>Ignore the straggler</b>: They are probably small in number. You can track the number that have been ignored as a metric and fire an alert if the number starts spiking.</li><li><b>Publish a correction</b>: A correction is an updated window with the straggler added.</li></ol>

<br />

<p>
	By tracking the times at which: an event occurred (device clock), event was sent to the server (device clock) and event was received (server clock), you can estimate the offset between device and server clock.
</p>

<br />

<p>
	<b>Time Windows</b>
</p>

<p>
	There are several types of time windows:
</p>

<ul><li><b>Tumbling window</b>: A tumbling window with a fixed length with each event belong to exactly one window. For example, a 1-minute tumbling window would store events as follows: 10:<b>03:00</b>-10:<b>03:59</b>, and 10:<b>04:00</b>-10:<b>04:59</b>.</li><li><b>Hopping window</b>: A hopping window also has a fixed length but overlaps by a <b>hop</b> amount to provide smoothing of events. For example, a 5-minute tumbling window with a hop of 1-minute would store events as follows: 10:<b>03</b>:00-10:<b>07</b>:59, 10:<b>04</b>:00-10:<b>08</b>:59. Notice how each new window only <b>hops</b> forward by <b>1 minute</b>.</li><li><b>Sliding window</b>: A sliding window includes all events that happened within a certain interval of each other. For example, a 5-minute sliding window would include all events within 5 minutes of each other, which would place 10:<b>03:39</b> and 10:<b>08:12</b> in the same window.</li><li><b>Session window</b>: A session window has no time limit and instead groups all events by the same user that occur before the user becomes inactive (timeout). Sessionization is a common requirement for website analytics.</li></ul>

<br />

<br />

<p>
	<b>Stream Joins</b>
</p>

<ul><li><b>Stream-stream join (window join)</b>: For example, you may want to compare searches and clicks to get a click-through rate. The search stream and click stream will need to maintain state for an interval of time (say, 1 hour), and any matches between searches and clicks are emitted as a click-through event.</li><li><b>Stream-table join (stream enrichment)</b>: A stream can be enriched by adding user from a database. For example: an event with a user could be enriched with information from a user database.</li><li><b>Table-table join</b></li></ul>

<br />

<br />

<p>
	<b>Fault Tolerance</b>
</p>

<ul><li><b>Microbatching</b>: Break the stream into small blocks and treat each block like a mini-batch. Microbatches are typically around 1-second in length.</li><li><b>Checkpointing</b>: Generate periodic, rolling checkpoints of state and write them to durable storage.</li><li><b>Idempotence</b>: Make it so that even if you rerun some action, the results stays the same. This can either be because an action is naturally idempotent, or because it was made to be so via something like monotonically increasing id’s that will only be applied if it is greater than the current id in the target system.</li></ul>

<br />

<br />

<br />

<br />

<p>
	<b>Chapter Summary</b>:
</p>

<p>
	Streaming is similar to batch processing in many ways except that is done continuously and on an unbounded (never ending) dataset. While batch processing uses a distributed filesystem, streaming uses message brokers and event logs.
</p>

<p>
	Two types of message brokers:
</p>

<ol><li><b>AMQP/JMS-style message broker</b>: The broker assigns messages to individual consumers, and consumers acknowledge the messages when they have been successfully processed. Messages are deleted from the broker once the have been acknowledged. This is useful when exact ordering of messages is not important and when there is no need to go back and read old messages.</li><li><b>Log-based message broker</b>: The broker assigns all messages in a partition to the same consumer node and always delivers messages in the same order. The broker retains messages on disk and it is possible to read old messages.</li></ol>

<br />

<p>
	Where streams come from: user activity events, sensors providing periodic readings, data feeds (e.g., market data in finance). Writes to a database can also be thought of as a stream: we can capture the changelog (history of changes to the database) either explicitly through event sourcing or implicitly through change data capture.
</p>

<br />

<p>
	Time in a stream processor can be difficult to deal with, particularly dealing with straggler events that arrive after you thought a window was complete.
</p>

<br />

<p>
	Three types of joins in a stream processor:
</p>

<ol><li><b>Stream-stream</b>: A join operator searches for events that match within two streams in a window of time (or the same stream in a self-join).</li><li><b>Stream-table</b>: One input is a stream of events and the other is a changelog of a database. The changelog keeps the local database up to date.</li><li><b>Table-table</b>: Both input streams are database changelogs, and a change on one side is updated to the other. The result is a stream of changes to the materialized view of the join between the two tables.</li></ol>

<br />

<p>
	Fault tolerance and exactly-once semantics must be achieved in a stream processor.
</p>

<br />

<p>
	As with batch processing, we need to discard any partial or failed tasks, but because the streams run continuously, we cannot discard the entire results. Instead, a finer-grained set of tools must be used: micro batching, checkpointing, transactions, or idempotent writes.
</p>

<br />

<br />


<br />
<hr />
<br />


<br />

<br />

<br />

<br />

<h3 className="text-center">Chapter 12</h3>

<br />

<p>
	In chapter 12, Martin Kleppmann switches from discussing the current state of distributed systems to proposing ideas and approaches that he believes will improve how we build and design applications.
</p>

<br />

<p>
	This section is more speculative and I have decided not to go too in-depth with the final chapter summary as this information is likely still rapidly changing. Instead, I recommend that you read chapter 12 if you want to know about exciting new developments in distributed systems!
</p>

<br />

<br />

<p>
	<b>Data Integration</b>
</p>

<p>
	The data you use in your application can have many uses: “The range of different things you might want to do with data is dizzyingly wide”. It is unlikely that you will find a single tool or technology that is well suited for all of these uses.
</p>

<br />

<p>
	If it is possible for you to funnel all user data through a single system that decides on the ordering of writes, it then becomes simpler for your derived systems to process writes in a consistent order. Deciding on the order of events is known as <b>total order broadcast</b> and can be challenging to do right. The most straight forward way is to use a single leader node, but this brings issues with availability (the leader node is a single point of failure) and with geographically distributed data sources having to route traffic through a node that is potentially located across the globe. The current application patterns for addressing this problem are not the best but over time there may be advances in was to capture casual dependencies effectively and allow derived state to be maintained accurately without going through the bottleneck of total order broadcast.
</p>

<br />

<br />

<p>
	<b>Batch and Stream Processing</b>
</p>

<p>
	The goal of data integration is for the right data to end up in the right form in the right places. To achieve this, you need to build data systems that: consumes inputs; performs transforms, joins, filtering, aggregating, trains models, and evaluates data; and eventually writes it to various outputs. Batch and stream processors are tools for this job.
</p>

<br />

<p>
	Batch processing has a strong functional flavor: deterministic, pure functions whose output depends only on its input and that has no side effects. Inputs are treated as immutable and outputs are written in an append only manner.
</p>

<br />

<p>
	Batch processing allows large amounts of data to be reprocessed to derive new views from existing data. Stream processing allows new data to be processed with minimal delay.
</p>

<br />

<p>
	One benefit of being able to reprocesses data via batch processing is schema migration. Derived views allow you to do a gradual schema migration. You can create two views: one matches your old schema, and one matches your new schema. You can then slowly switch clients over to the new schema. If something wrong, you can easily switch a client back to the old schema. Once all clients have been switched over, you can depreciate the old view that matches your old schema.
</p>

<br />

<br />

<p>
	<b>The Lambda Architecture</b>
</p>

<p>
	If batch processing is used to process historical data and stream processing is used to process recent updates, how do you combine the two? Lambda architecture is a proposal that is gaining a lot of attention. 
</p>

<br />

<p>
	<b>Lambda architecture</b> works by: incoming data is recorded into an immutable, append only dataset. Both a stream and batch processor run in parallel to process data from this immutable dataset. Stream processing is faster but seen as more error prone. The stream processor provides results quickly but with a chance of errors. A batch processor later processes that same data and provides a more updated result. This gives you quick results that are mostly correct and later a form of “eventual correctness” from batch processing.
</p>

<br />

<p>
	Some issues with the Lambda architecture include:
</p>

<ul><li>Having to maintain duplicated logic in both the batch and stream processor.</li><li>Having to merge results from the batch and stream processor to respond to user requests.</li><li>Running a batch process frequently can be expensive on large datasets.</li></ul>

<br />

<br />

<p>
	<b>Unbundling Databases</b>
</p>

<p>
	Databases and operating systems can be viewed as doing similar things: they both store data and allow a user to access that data. A database stores data in a data model while an operating system stores data in a file system. Both are <b>information management systems</b>.
</p>

<br />

<p>
	There are some practical differences: file systems do not respond well to a directory containing 10 million small files while databases do that quite efficiently. Unix tools present programmers with logical but fairly low level tools over a hardware abstraction. Databases provide a high level query language that don’t require the user to know the implementation details that occur as the query is optimized.
</p>

<br />

<br />

<p>
	<b>Composing Data Storage Technologies</b>
</p>

<p>
	There are several features provided by a database:
</p>

<ul><li><b>Secondary Indexes</b>: Efficient search for records based on the value of a field.</li><li><b>Materialized Views</b>: A precomputed cache of query results.</li><li><b>Replication Logs</b>: Keeps copies of the data on other nodes up to date.</li><li><b>Full-test search indexes</b>: Allow keyword search in text.</li></ul>

<br />

<p>
	Full text searches, materialized views, and replicating database changes are all tasks that we have tried to do with batch and streaming jobs.
</p>

<br />

<p>
	Database do a lot of things that we would like to do with distributed systems. These database functionalities are not public APIs so we cannot take advantage of these functionality easily. Instead, it is possible to build data systems that operate like a database. 
</p>

<br />

<ul><li><b>Federated databases (unifying reads)</b>: It is possible to provide a unified query interface to a wide variety of underlying storage engines and processing methods, an approach known as a <b>federated database</b> or <b>polystore</b>. This allows you to use a high level query language to query across a variety of systems, hiding complicated system implementation details.</li><li><b>Unbundled databases (unifying writes)</b>: Writes on a unified system are harder to implement. </li></ul>

<br />

<p>
	This processes of unbundling database systems and composing specialized storage and processing systems is known as the <b>database inside-out</b> approach. Composing your own database-like system out of various tools can be advantageous but should only be undertaken if current tools do not already meet your needs.
</p>

<br />

<br />

<br />

<p>
	<b>Designing Applications Around Dataflow</b>
</p>

<p>
	Web applications often separate stateless servers from state stored in a database. The values in the database are treated like a mutable variable but without implementing the observer pattern, there is no built-in way to know when your variables have changes other then periodically checking. Rather, we can have our stateless application subscribe to a stream of changes. Our application will receive a notification when data they rely on changes.
</p>

<br />

<p>
	<b>Miscellaneous Note</b>
</p>

<p>
	Test your backups BEFORE you need them. If you create backups regularly, but only attempt to restore from them in an emergency, you could be in for an unpleasant surprise.
</p>

<br />

<br />

<p>
	<b>Chapter Summary</b>
</p>

<p>
	There is no one tool to solve distributed system problems and instead multiple tools should be composed together. One way to solve this data integration problem is by using batch processing and event streams to allow data changes to flow between different systems. Certain systems are designated as systems of record and other data is derived through transformations. By making these derived datasets and transformations asynchronous and loosely coupled, we can prevent problems in one part of the system from spreading to another part. You can derive new data or fix corrupted data by rerunning transformations on your system of record.
</p>

<br />

<p>
	These processes are quite similar to what databases already do internally and we can recast the idea of dataflow applications as an unbundling of the components of a database, and building an application by composing these loosely coupled components.
</p>

<br />

<p>
	<b>Ethics</b>
</p>

<p>
	The book closes with a section on data ethics: Data applications can seriously affect people’s lives, making decisions that are difficult to appeal (<b>algorithmic prison</b>), leading to discrimination and exploitation, the normalization of surveillance, and exposing intimate information. With the risk of data breaches and changing governing bodies (a government that supports data privacy might change to one that does not; a company can change ownership), even once well intentioned data can be used in unethical ways.
</p>

<br />

<p>
	As a thought experiment, Kleppmann suggests replacing the word “data” with “surveillance” when talking about big <s>data</s> surveillance companies. As such, you might hear a company say: “<i>We collect real-time surveillance and store it in our surveillance warehouse.</i>” Even this book might be renamed: <i>Designing Surveillance Intensive Applications.</i>
</p>

<br />

<p>
	Some critics have pointed out that user data should be handled carefully, as if it were a <b>hazardous</b> or <b>toxic asset</b>. Since data is the result of interaction with many applications, it is sometimes called <b>data exhaust</b>.
</p>

<br />

<p>
	Even though companies may currently protect user data, change of ownership could result in data being sold later. Likewise, a company that never intends to share user data may be forced to if a police state comes to power. Even the most extreme governments used to only be able to dream about putting a microphone and camera in every home and now we do it willingly. We are lucky that these spying devices have not already been put to bad use.
</p>

<br />

<br />

<p>
	<b>Closing Remarks</b>
</p>

<p>
	Kleppmann closes by saying this:
</p>

<p>
	“<i>As software and data are having such a large impact on the world, we engineers must remember that we carry a responsibility to work toward the kind of world that we want to live in: a world that treats people with humanity and respect. I hope that we can work together toward that goal.</i>”
</p>

<br />

<br />

<br />

<p>
	<b>Code of Ethics Resource</b>
</p>

<p>
	ACM Code of Ethics and Professional Conduct: <a href="https://www.acm.org/code-of-ethics">Code of Ethics</a> 
</p>

<br />

<br />

<br />

<br />

<br />

<br />














                <br /><br /><br /><br /><br /><br /><br /><br />
            </article>
        </>
    );
}

export default DDIABookSummary;
