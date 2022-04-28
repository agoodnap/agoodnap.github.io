---
layout: projectpage
title: SmashCombos
projectname: SmashCombos
screenshot1: smashcombos_screenshot1.png
screenshot2: smashcombos/usage.gif
screenshot3: smashcombos/combos.gif
---

## The Project

[https://smash-combos.com/](https://smash-combos.com/){:target="_blank"}

SmashCombos is an open-source community site for the game Super Smash Brothers Ultimate, where users can upload and
discuss their favorite characters' combos and strategies. It was launched in 2020
by [Kento Kawakami](https://github.com/Breadkenty){:target="_blank"}, and I have since teamed up with him to work on the project.

The repository can be found [here](https://github.com/Breadkenty/SmashHub){:target="_blank"}.

**Note:** We are currently undergoing changes as
we are refactoring the front-end, adding new features, and moving things around.

## My Responsibilities

I implemented and maintain the backend of SmashCombos, and am responsible for:

- Setting up and maintaining the Backend API (AspNetCore REST Service)
- Maintaining the code-first database implementation (EF Core, PostgreSQL)
- Implementing a CQRS pattern for all API actions such as submitting and editing combos/comments, reading from the
  database, etc.