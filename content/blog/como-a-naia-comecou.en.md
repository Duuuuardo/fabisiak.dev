---
title: "How Naia started"
date: "2026-07-20"
excerpt: "In 2022 a friend needed to blast messages to groups and I built a tool for that. This year I went back to the project, started building a CRM on top of it, and founded Vianova to house it and the products that come next."
tags: ["Naia", "Vianova", "SaaS"]
---

Back in 2022 a friend of mine needed to send bulk messages to a bunch of groups
and couldn't find anything that worked the way he needed. I built him a simple
tool: he wrote the message, picked the groups, and sent it. He used it for a
while, and then the project sat idle.

This year I went back to that codebase. Just blasting messages had become too
little. Anyone who works with mass messaging, the companies that live off it,
needs more than sending. They need to know who received it, who replied, and
what to do with that contact afterwards. So I started building a CRM on top of
the sender. That's when the project became Naia: a WhatsApp and Telegram
campaign platform built for messaging companies. Sending is already in
production and the CRM is the part we're building now.

While building Naia, I ran into the same old problem: login, authentication and
billing, which I was rebuilding from scratch for every new product. Instead of
leaving that inside Naia, I pulled that part out and created Vianova. Vianova
handles the login and billing that Naia uses, but it's not just that. Vianova
is the company that will house the products, and Naia is the first of them.
Vianova is what I'm founding.

The idea is that every new product is born on top of this base, without
redoing login and billing every time. Naia is where that's being proven first.
