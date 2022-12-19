---
id: rest-api-basics
title: Rest API Basics
sidebar_label: Rest API Basics
---

# Rest API Basics

Before we dive into interacting with Prisma Cloud, let's cover some basics on **REST APIs, JSON,** and **curl**.  If you are already familiar with these, then jump straight to the next lab.  If not, make sure you understand these foundational concepts first, as they are important for effectively using REST APIs.

## What is a REST API?

An **API** is an application programming interface. It is a set of rules that allow programs to talk to each other. The developer creates the API on the server and allows the client to talk to it.

**REST** determines how the API looks like. It stands for **“Representational State Transfer”**. It is a set of rules that developers follow when they create their API. One of these rules states that you should be able to get a piece of data (called a resource) when you link to a specific URL.

Each URL is called a **request** while the data sent back to you is called a **response**.

### The Request

A request is made up of four things:

1. The endpoint
2. The method
3. The headers
4. The data (or body)
   
The **endpoint** (or route) is the url you request for such as:

```
https://api.github.com/users/jjchavanne
```

### The Method

The method is the type of request you send to the server. You can choose from these five types below:

- **GET** - used to get a resource from a server.
- **POST** - used to create a new resource on a server.
- **PUT** - used to update a resource on a server.  It updates the entire resource, effectively replacing it.
- **PATCH** - also used to update a resource on a server.  It updates only part of the data of the resource.
- **DELETE** - used to delete a resource from a server. 
   
### The Headers

Headers are used to provide information to both the client and server. It can be used for many purposes, such as authentication and providing information about the body content. 

### The Data 

The data (sometimes called “body” or “message”) contains information you want to be sent to the server. This option is only used with **POST, PUT, PATCH** or **DELETE** requests.

## Testing Endpoints

Endpoints can be tested using many programming languages.  In this tutorial however we will use **curl**.  It is argubaly the most common and easy to understand tools for interacting with REST APIs.


## What is curl?

[curl](https://curl.se/) (or sometimes seen as **cURL**), is a tool for transfering data from or to a server. It supports many protocols.  Most importantly for us, HTTP & HTTPS. The command is designed to work without user interaction.
   
Open up your Terminal and type `curl -version`. This command checks the version of cURL you have installed on your system.
```
curl --version
```

If you don’t have cURL installed, you’ll get a “command not found” error. If you get this error, you will need to install [curl](https://curl.se/download.html) before moving on.

Now, let's run the curl command on your github profile:
> **Example:**
```
curl https://api.github.com/users/jjchavanne
```
> **You should receive something back like this, noting that I've ommited some lines for brevity.**
```json
{
  "login": "jjchavanne",
  "id": 31355989,
  "node_id": "MDQ6VXNlcjMxMzU1OTg5",
  "avatar_url": "https://avatars.githubusercontent.com/u/31355989?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/jjchavanne",
  "html_url": "https://github.com/jjchavanne",
  "followers_url": "https://api.github.com/users/jjchavanne/followers",
  ...
}
```
  
The data we got back is JSON.

#### What is JSON?

[JSON (JavaScript Object Notation)](https://www.json.org/json-en.html) is a common format for sending and receiving data through a REST API.
   
A **JSON** object looks like a JavaScript Object. In JSON, each property and value must be wrapped with double quotation marks, like this:
```json
{
  "property1": "value1",
  "property2": "value2",
  "property3": "value3"
}
```

Getting back to our example.  If you paste your same GitHub API URL (without 'curl ') into a browser window you will get the same results, except this time displaying the JSON data in your browser.  Feel free to give that a try!
   
Let's next try to hit your Prisma Cloud API   

> **Example:**
```bash
curl https://api.prismacloud.io
```
   
You should receive a 404 Not Found error.  Why?

Unlike your Github user profile that is available to the public, the Prisma Cloud tenants are private.  They require authentication (we'll dive into that in the next lab!).
   
###  curl Command Options

Info in this section is all taken directly from the [curl MAN pages](https://curl.se/docs/manpage.html) (Manual).

#### Command Options Explained

Options start with one or two dashes. Many of the options require an additional value next to them.

The short "single-dash" form of the options, `-d` for example, may be used with or without a space between it and its value, although a space is a recommended separator. The long "double-dash" form, `-d, --data` for example, requires a space between it and its value.

Short version options that don't need any additional values can be used immediately next to each other, like for example you can specify all the options `-O`, `-L` and `-v` at once as `-OLv`.

#### Common and important command options.

| **Option** | **Description** |
| ------------------------ | -------------- | 
| `-X` or `--request` | Specifies a custom request method to use when communicating with the HTTP server. |
| `--url` | Specify a URL to fetch. This option is mostly handy when you want to specify URL(s) in a config file. |
| `-d` or `--data` | Sends data in a POST request to the HTTP server, same as submitting data in a web form. |
| `-H` or `--header` | Extra header to include in the request when sending HTTP to a server. |

Continue to explore the MAN pages for lots more detail and master ever command option there is.... or not (there's only over 200 hunderd or so)....   

### Progress Meter

curl normally displays a progress meter during operations, indicating the amount of transferred data, transfer speeds and estimated time left, etc. The progress meter displays number of bytes and the speeds are in bytes per second. The suffixes (k, M, G, T, P) are 1024 based. For example 1k is 1024 bytes. 1M is 1048576 bytes.

curl displays this data to the terminal by default, so if you invoke curl to do an operation and it is about to write data to the terminal, it disables the progress meter as otherwise it would mess up the output mixing progress meter and response data.

If you want a progress meter for HTTP POST or PUT requests, you need to redirect the response output to a file, using shell redirect (`>`), `-o, --output` or similar.

This does not apply to FTP upload as that operation does not spit out any response data to the terminal.

If you prefer a progress "bar" instead of the regular meter, *-#, --progress-bar* is your friend. You can also disable the progress meter completely with the `-s, --silent` option.  This is useful in automation.

### Additional output options

You may also want to test out some of these other output options.  These can be especially handy for troubleshooting and for when building scripts and automating API interactions.

| **Option** | **Description** |
| ---------------- | -------------- | 
| `-s` or `--silent` | Silent or quiet mode. Don't show progress meter or error messages. |
| `-o` or `--output /dev/null` | Hides successful output |
| `-v` or `--verbose` | Useful for debugging and seeing what's going on "under the hood" |
| `-S` or `--show-error` | Shows errors, even when silent mode is enabled |
| `-f` or `--fail` | Fail silently (no output at all) on server errors. |

## Learn More and other references

That is all for now.  If you are intersted learning more also see:
- [curl tutorial](https://curl.se/docs/manual.html) to learn more about using curl.
- [ReqBin](https://reqbin.com/) - online API testing tool (super handy and a great way to learn and do testing).
- [Understanding and Using REST APIs](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/) - where I sourced some of the info for this tutorial.  Excellent writeup.  Visit to read the entire article where there is some additional info on **basic authentication, HTTP Status Codes and Error Messages,** and **API Versions**.

## The End

**Congrats!**. You learned about **REST APIs, JSON** (standard data format used in REST APIs), how to use **curl** and some of its command options!   
   
Move on to the next lab to learn about using authentication in your requests to start interacting with the Prisma Cloud REST APIs!
