import React from "react";
import { Carousel } from "react-bootstrap";

function HowTheInternetReallyWorksBookReview() {
    return (
        <>
            <article className="text-justify">
                <br /><br />

                <p>
                    <b>Title</b>: "How The Internet Really Works" by Article 19 and Catnip
                </p>

                <p>
                    <b>Rating</b> &#11088; &#11088; &#11088; &#11088; &#9733;
                </p>

                <p>
                    <b>Readability</b>: HTIRW is a fun, quick, and informative read about the workings of the internet. Chapters 1-5, cover the technical details of internet networking and protocols while the later half (chapters 6-12) talk about privacy, ethics, and how you can participate in various engineering groups that shape policy for the internet.
                </p>

                <p>
                    <b>Length</b>: At around 100 pages, HTIRW could be read in a day or two.
                </p>

                <p>
                    <b>Foundational/How-To</b>: HTIRW is foundational but fairly brief. It explains many important concepts briefly but a more in-depth book on networking and the internet might be useful.
                </p>

                <p>
                    <b>Overall</b>: HTIRW is fun, informative, and short -- well worth a read!
                </p>

                <br />

                <hr />

                <br />

                <h3> Some interesting things that I learned </h3>

                <br />
                <br />

                <p>
                    <b>How devices connect to a network</b>: Devices have a network card that handles network connections. Each device has a Media Access Control (MAC) Address that is used by the network's router to remember what hardware device it is talking to (sometimes called the 'device id'). The router assigns a device a local IP address and uses that address to facilitate communication both on the local network and with the public internet. To communicate with the internet, the router performs Network Address Translation (NAT). This is where the router rewrites the packet's address tags. For example, a packet from device 1.2.3.4 with a destination on the public internet of 8.8.8.8, might be rewritten to come from the router's public IP address of 5.6.7.8. When the router receives a response from 8.8.8.8, it translates the response packet to be addressed to 1.2.3.4.
                </p>

                <p>
                    <b>Packets</b>: Network traffic is sent as packets. Packets have a header which includes things like: to and from IP addresses and a body that contains the packet's data. Data can be split across multiple packets. Packets can be thought of as envelopes: 'to' and 'from' addresses on the front, and a body consisting of the letter you put in the envelope. 
                </p>

                <p>
                    <b>Packet Transport Protocols</b>: Some packet transmission protocols include:
                    <ul>
                        <li>
                            <b>Transmission Control Protocol (TCP)</b>: TCP ensures ordered delivers of packets. TCP has built-in retry logic to ensure that your packets arrive at their destination when transmitting over an unreliable network (which is what the internet inherently is).
                        </li>
                        <li>
                            <b>User Datagram Protocol (UDP)</b>: By removing retry logic, UDP packets can arrive at their destination much faster. UDP is used for applications where speed is more important than accuracy: video calls, Voice-over-IP, etc. In these cases, delayed data is useless. This is one cause of dropped audio in a VoIP call or frozen screens on a video call. Instead of retry logic at the packet level, the logic is moved to the human level: a caller asks the person they are talking with to repeat themselves.
                        </li>
                    </ul>
                </p>

                <p>
                    <b>Hypertext Transfer Protocol (HTTP)</b>: HTTP is an application level transmission protocol for transmitting data. HTTP is transmitted over plaintext and therefore most internet traffic today uses the encrypted version of HTTP: HTTPS (S standing for secure).
                </p>

                <p>
                    <b>Internet Protocol (IP) Addresses</b>: IP addresses are how packets know where to go on a network. 
                    <ul>
                        <li>
                            <b>IPv4</b>: IPv4 stores addresses as 32-bit values. Each byte (values from 0 to 255) is separated by a dot. Example: 255.0.128.32. Since IP addresses must be globally unique, and with there being many many many devices on the public internet, IPv4 address exhaustion is a real concern as there are only 4.3 billion unique IPv4 addresses. This has been mitigated somewhat by techniques such as: ISP's using NAT to assign all nodes on their network a private (and therefore not globally unique) IP address and only exposing a single IP address to the public internet.
                        </li>
                        <li>
                            <b>IPv6</b>: IPv6 stores addresses as 128-bit values. IPv6 is the answer to IPv4 address exhaustion. IPv6 uses 8 groups of 4 hexadecimal characters, each separated by a ':'. IPv6 can be shortened by omitting any groupings of '0000' with '::'. Each section of IPv6 can have a value from 0 (0x0) to 65,536 (0xf). The total number of IPv6 addresses is a vast number: 340,282,366,920,938,463,463,374,607,431,768,211,456. IPv6 will require widespread adoption before it can fully replace IPv4.Currently, IPv4 and IPv6 are often used side-by-side.
                        </li>
                    </ul>
                </p>

                <p>
                    <b>Domain Name System (DNS)</b>: IP addresses are easy for machines to remember and hard for humans. To fix this, DNS servers translate human readable URLs into IP addresses. For example, when you enter a memorable name like wikipedia.org into your web browser, your browser will query a DNS server that looks for the IP address associated with wikipedia. The following image shows more detail of how DNS queries are resolved.
                </p>

                <br />

                <div className="text-center">
                    <figure className="figure">
                        <img className="img-fluid" src="/blogAssets/img/2023/dns-server.jpg" alt="DNS Servers" />
                        <figcaption className="figure-caption text-center"></ figcaption>
                    </figure>
                </div>

                <br />

                <p>
                    <b>URL Parsing</b>: The following URL can be broken down as follows: en.wikipedia.org
                    <ul>
                        <li>
                            <b>Top Level Domain (TLD)</b>: .org
                        </li>
                        <li>
                            <b>Domain</b>: .wikipedia
                        </li>
                        <li>
                            <b>Subdomain</b>: en -- There can be multiple subdomains (<b>my.website.en</b>.wikipedia.com)
                        </li>
                    </ul>

                    TLDs and domains are administered by organizations such as <a href="https://www.icann.org/">ICANN</a> and domain registries. Subdomains are controlled by the owner of the domain. For example, Google might register google.com. Google can then host subdomains like mail.google.com and translate.google.com. Each of these subdomains can have their own server (or servers) that server completely different applications than other subdomains. The following image further explains URL parsing.
                </p>

                <br />

                <div className="text-center">
                    <figure className="figure">
                        <img className="img-fluid" src="/blogAssets/img/2023/url-parsing.jpg" alt="URL Parsing" />
                        <figcaption className="figure-caption text-center"></ figcaption>
                    </figure>
                </div>

                <br />

                <p>
                    <b>Content Delivery Networks (CDN)</b>: It used to be the a website on the internet might be served from a single computer. Today's website content might include things like: embedded video, social media feeds, and ad content. To compile a webpage like this, content is pulled from various servers called CDNs. These CDNs are replicated around the globe for resiliency and to server content to users from a geographically close location, thus reducing latency.
                </p>

                <p>
                    <b>Privacy</b>: The book ends with some sections on privacy. I won't review too much other than to say its a little scary. One thing that stood out: The NSA spends $250 million per year to insert backdoors into software and hardware [<a href="https://archive.nytimes.com/www.nytimes.com/interactive/2013/09/05/us/documents-reveal-nsa-campaign-against-encryption.html" title="New York Times">source</a>]. The cryptographic algorithm Daul_EC_DRBG has been known to contain several backdoors that the NSA knew about. The International Standards Organization (ISO) rejected two NSA encryption algorithms (SIMON and SPECK) for this reason.
                </p>

                <p>
                    <b>Open Systems Interconnection (OSI) Model</b>: Although not covered too in-depth, the following image is a useful model of the layers of infrastructure used to run the internet.
                </p>

                <br />

                <div className="text-center">
                    <figure className="figure">
                        <img className="img-fluid" src="/blogAssets/img/2023/osi-model.jpg" alt="OSI Model" />
                        <figcaption className="figure-caption text-center"></ figcaption>
                    </figure>
                </div>

                <br />
                <br />
                <hr />
                <br />
                <br />

                <h3>Packet Demo</h3>

                <br />
                <br />


                <p>
                    I wanted to get hands-on with some of the concepts covered in HTIRW. I was particularly curious to see some packets in action! I thought it would be interesting to compare secure (HTTPS) and non-secure (HTTP) network traffic.
                </p>

                <p>
                    To view network packets, I did the following
                    <ul>
                        <li>
                            Used a packet sniffer (<a href="https://www.wireshark.org/">Wireshark</a>), to view packets sent over my local network.
                        </li>
                        <li>
                            Used <a href="https://www.postman.com/">Postman</a> to send HTTP and HTTPS Post requests.
                        </li>
                        <li>
                            Used the free API <a href="http://httpbin.org/">HTTP Bin</a> as a destination for network data.
                        </li>
                    </ul>
                </p>

                <p>
                    I sent the following test data via Postman using HTTP and HTTPS:
                    <ul>
                        <li>
                            <b>POST</b>: http://httpbin.org/post
                        </li>
                        <li>
                            <b>Body</b>: {'{ "myBankingPassword": "password1" }'}
                        </li>
                    </ul>
                </p>

                <p>
                    Using Wireshark, I located a packet used in my API call, and right-clicked into: Follow > TCP Stream.
                </p>

                <p>
                    When making an unencrypted HTTP request, I was able to view my 'sensitive' data as plaintext. This made me much more aware of how important HTTPS is and how visible your traffic might be on a public wifi network.
                </p>

                <br />

                <div className="text-center">
                    <figure className="figure">
                        <img className="img-fluid" src="/blogAssets/img/2023/http-request.png" alt="HTTP Request" />
                        <figcaption className="figure-caption text-center"></ figcaption>
                    </figure>
                </div>

                <br />

                <p>
                    When making a HTTPS request, I had a little more trouble tracking down which packet I had actually sent! The image below contains what I think is the same POST request sent using HTTPS. Since it is encrypted, I can't really confirm this... but I guess neither can you!
                </p>

                <br />

                <div className="text-center">
                    <figure className="figure">
                        <img className="img-fluid" src="/blogAssets/img/2023/https-request.png" alt="HTTPS Request" />
                        <figcaption className="figure-caption text-center"></ figcaption>
                    </figure>
                </div>

                <br /><br /><br /><br /><br /><br /><br /><br />
            </article>
        </>
    );
}

export default HowTheInternetReallyWorksBookReview;
