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
