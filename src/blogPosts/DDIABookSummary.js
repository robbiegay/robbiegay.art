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
	Genome data: often needed to perform sequence-similarity searches which means taking a really long string (representing a DNA molecule) and matching it against a large database of strings that are similar but not identical. Specialized genome database software: GenBank
</p>

<p>
	Partial physicists have been doing Big Data-style large-scale data analysis for decades and the Large Hadron Collider (LHC) works with hundred of Petabytes. At such scale, custom solutions are needed.
</p>

<p>
	Full text search is arguably a kind of data model used alongside databases.
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
	Appending to a append-only log is faster than finding a file location and updating files at random.
</p>

<p>
	While checksums on the append-only log prevents corruption of partially written records, update in place can lead to corrupted data.
</p>

<p>
	Updating in place requires latches (lightweight locks) to prevent reads from seeing the database in an inconsistent state
</p>

<br />

<p>
	<b>Downsides to append-only log</b>:
</p>

<p>
	The hashtables that we use to index the database must fit in memory.
</p>

<p>
	Range queries are quite inefficient
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

<p>
	<quote>“The major difference between a thing that might go wrong and a thing that cannot possibly go wrong is that when a thing that cannot possibly go wrong goes wrong it usually turns out to be impossible to get at or repair.”</quote>
</p>

<p>
	- Douglas Adams, “Mostly Harmless” (1992)
</p>

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


<br />

<br />

<br />

<br />







<p>
    [Remaining chapters coming soon!]
</p>


<br />






                <br /><br /><br /><br /><br /><br /><br /><br />
            </article>
        </>
    );
}

export default DDIABookSummary;
