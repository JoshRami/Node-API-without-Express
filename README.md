# Blog JSON API

**This repo contains the solution for the week 3 assignment, the task is to build an API that manage blogs and comments that are scoped per blogs**

<img src="https://www.ixon.cloud/media/ciqpa3f3/api-2x.png" alt="drawing" width="200"/>

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/1266f12a32bd32ae428e)
[![Watch API Docs](https://dabuttonfactory.com/button.png?t=Check+API+Docs&f=Open+Sans-Bold-Italic&ts=16&tc=fff&hp=45&vp=20&w=155&h=32&c=6&bgt=unicolored&bgc=15d798&be=1)](https://app.swaggerhub.com/apis-docs/JoshRami/Blogs/1.0.0)

## Requiriments

**Create a JSON API using the HTTP module that handles a server for a blog.**
The API should be able to handle:

- [x] Creating a blog post.
- [x] Updating a blog post
- [x] Deleting a blog post
- [x] Retrieving a single blog post based on an identifier.
- [x] Retrieve a list of blog posts ordered from most recent to older.
- [x] MongoDB must be used as storage solution.
- [x] All post must be stored to database.
- [x] No authentications or security restrictions are needed..

As an extra point add a way to add comments to each publication.

The API should be able to handle the same use cases for a comment as a blog post, the difference is that comments are scoped per blog post.

## Project Setup

**Mongodb is required, API and Db run on a local server, there is no need to make further steps than ports or connection URI**

.env file is not supposed to contain secrets, it contains a port, and connection URI variables that may matter to you when running the API locally

## Run the project

From project's root execute: `ts-node src/index.ts`
