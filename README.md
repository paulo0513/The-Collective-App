# The-Collective-App

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

With the recent explosion in popularity, NFTs have now become hottest thing to own and create. Here at The Collective, we believe in creating a safe space for artists and collectors alike to experience the dynamic marketplace. Maybe you're a collector bringing NFTs from a different market or an artist that wants to redefine what digital art can be. Either way, The Collective is the most expansive collection of NFTs to date. 
  
As an artist, you can easily upload your NFTs to the market in seconds. As a collector, you can view the art and contact the artist for a direct sale.
  
Here's what you can expect from our product roadmap for the remainder of 2021:
  - Add shopping cart functionality for a quick transaction through the site rather than contacting the artist directly.
  - Create more categories and different NFT markets
  - Dynamic landing page that will show you the different markets and 

<br>

## MVP
Server (Back End)
    - Have a RESTful JSON API.
    - Build a Ruby on Rails server, exposing RESTful JSON endpoints.
        - Build a database with 3 tables: users, GIF NFTs, and comments (associations on comment table)
    - Utilize Rails to define models for interacting with the database.
    - Implement working generic controller actions for Full CRUD (index, show, create, update, delete) between your non-User tables.

Client (Front End)
    - Have a working, interactive React app
        - Have at least 8 separate, rendered components in an organized and understandable React file structure.
        - Utilize functional or class React components appropriately.
        - Utilize state and props in your components efficiently.
        - Use only React for DOM Manipulation.
    - Consume data from your Ruby on Rails API, and render that data in your components.
    - Utilize React Router, for client-side routing.
    - Demonstrate Full CRUD actions ( index, show, create, update, and delete ) on the front end.

Styling
    - Be styled with CSS Flexbox or Grid
    - Implement 2 media queries for responsive design: desktop (default), tablet, and mobile.

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|  Ruby on Rails   |  A model-view-controller server-side web application framework |
|  PostgreSQL      |  An open-source relational database management system |
|  React           |  A JavaScript library for building user interfaces |
|  React Router    |  A collection of navigational components that compose declaratively within the application |

<br>

### Client (Front End)

#### Wireframes

https://www.figma.com/file/B48oVwWCJlialLSqEhkbxv/Project-4?node-id=0%3A1

#### Component Tree

https://i.imgur.com/cju9Xe7.png

#### Component Architecture

``` structure

src
|__ App.js
|__ components/
     |__ Card/
          |__Card.jsx
          |__Card.css
     |__Layout/
          |__Layout.jsx
          |__Layout.css
     |__ Comments/
         |__Comments.jsx
         |__Comments.css
|__ containers/  
    |__MainContainer.jsx   
    |__MainContainer.css
|__ services/
    |__apiCongig.js
    |__auth.js
    |__nfts.js
|__ screens/
    |__ EditNFT/
        |__ EditNFT.jsx
        |__ EditNFT.css
    |__ PostNFT/
        |__ PostNFT.jsx
        |__ PostNFT.css
    |__ NFTs/
        |__ NFTs.jsx
        |__ NFTs.css
    |__ EditNFT/
        |__ EditNFT.jsx
        |__ EditNFT.css
    |__ SignIn/
        |__ SignIn.jsx
        |__ SignIn.css
    |__ SignUp/
        |__ SignUp.jsx
        |__ SignUp.css


```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Project Proposal    |    H     |     8 hrs      |     8 hrs     |     TBD     |
| Backend Framework   |    H     |     2 hrs      |     2 hrs     |     TBD     |
| Model Setup         |    H     |     1 hrs      |     2 hrs     |     TBD     |
| Route Setup         |    H     |     1 hrs      |     1 hrs     |     TBD     |
| Controller Setup    |    H     |     2 hrs      |     1 hrs     |     TBD     |
| Authentication      |    H     |     3 hrs      |     1.5 hrs     |     TBD     |
| Cors Setup          |    H     |     1 hrs      |     0 hrs     |     TBD     |
| Seed Data           |    H     |     3 hrs      |     0 hrs     |     TBD     |
| Backend Testing     |    H     |     1 hrs      |     0 hrs     |     TBD     |
| Frontend Framework  |    H     |     2 hrs      |     0 hrs     |     TBD     |
| Main Container/App.jsx |    H     |     2 hrs      |     0 hrs     |     TBD     |
| Services            |    H     |     3 hrs      |     0 hrs     |     TBD     |
| Home Screen - all NFTs |    H     |     2 hrs      |     0 hrs     |     TBD     |
| Detail Screen       |    H     |     2 hrs      |     0 hrs     |     TBD     |
| Edit Screen         |    H     |     2 hrs      |     0 hrs     |     TBD     |
| Sign In Screen      |    H     |     2 hrs      |     0 hrs     |     TBD     |
| Sign Up Screen      |    H     |     2 hrs      |     0 hrs     |     TBD     |
| NFT Cards           |    H     |     2 hrs      |     0 hrs     |     TBD     |
| Layout/Nav          |    H     |     2 hrs      |     0 hrs     |     TBD     |
| CSS                 |    H     |     16 hrs      |     0 hrs     |     TBD     |
| Deployment          |    H     |     2 hrs      |     0 hrs     |     TBD     |
| TOTAL               |          |     61 hrs      |     0 hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

https://i.imgur.com/hxMAyDA.png

<br>

***

## Post-MVP

- Landing Page with carousel of images and branding (new screen)
- Resource page to educate users on NFT (new screen)
- Add a filter table so users can assign NTFs a category
  - create clickable filters for easy navigation
- Add shopping cart
- Add rating system

***

## Code Showcase



## Code Issues & Resolutions

