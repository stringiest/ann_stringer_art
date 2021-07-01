# Ann Stringer Art

## Background
I have been commissioned to create a website showcasing Ann Stringer's Art.

## Research
I have reviewed the websites for [Surrey Hills Artists](http://surreyhillsartists.co.uk/), [Ashtead Art Group](http://www.ashteadartgroup.co.uk/), [Liz Knox](https://www.lizknox.com/), [Lisa Riemers](http://lisariemersart.com/) and [David Napp](http://www.davidnappfineart.com/) to get a feel for the pages usually contained in this type of website.

The consensus is that the website should contain the following pages:
* Home
* About - containing bio, etc
* Gallery - this is sometimes split into separate pages for different categories of picture, e.g. Still Life, Portrait, Landscape, etc
* Exhibitions
* Contact - simple form, emailed to Ann

As Ann has an Instagram account, I'll include a live feed to that on the home page.

Some sites also have a Links page, linking to other selected artists/art groups.

## Planning Notes

As this is an art website, design is very important. Previously I have used Bootstrap to create simple layouts for websites, but I will also investigate other options.

I haven't made a website for a specific domain before, and Ann doesn't currently have a domain reserved, so part of my learning journey will be understanding how to do that. (Update, 18/06/2021 - [annstringerart.com](www.annstringerart.com) domain reserved.)

I've chosen to build the website using React, as I've not used that for a whole website before. 

I will need to decide how to deploy the website (e.g. AWS, Heroku, GitHub Pages), and how to store the images of the paintings. 

Whilst it is possible to build a contact form in ReactJS, that form will not be able to send an email. I'm currently intending to use EmailJS to email the contact forms to Ann. I'll start by looking at this [blog](https://dev.to/allanmelo/send-emails-from-a-contact-form-in-react-with-emailjs-and-recaptcha-1oc)

There is a [node package](https://www.npmjs.com/package/react-instagram-embed) for embedding an Instagram feed into a webpage.

## Website Layout


## Notes 23/06/21
Created React App
Successfully created a 'Hello, Ann' page on App.js, but when tried to move that to HomePage, and to link to HomePage from App it didn't work. Currently debugging that!