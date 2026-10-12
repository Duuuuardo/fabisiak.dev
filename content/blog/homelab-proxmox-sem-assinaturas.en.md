---
title: "My homelab: how I stopped paying for subscriptions"
date: "2026-07-22"
excerpt: "I got tired of paying for streaming I barely used and an expensive VPS just to run game servers. I reused a PC that was sitting idle, installed Proxmox and brought everything home. This is the current setup."
tags: ["Homelab", "Proxmox", "Self-hosted"]
---

One month I added up what I was spending on subscriptions and realized I was
paying a lot for services I barely used. Netflix, HBO, Disney, all of it, and
most months I didn't even open half of them. On top of that, whenever I wanted
to spin up a game server for friends, a basic VPS was expensive and still
struggled for resources.

I had a computer sitting idle at home. I had bought it a while back to build a
hackintosh, but I ended up moving my workflow to Linux and the machine was left
collecting dust. I installed Proxmox on it and the homelab was born.

Proxmox runs multiple virtual machines and containers on a single piece of
hardware, so each service stays isolated in its own place and I can turn
whatever I want on or off without touching the rest.

## Media

Instead of streaming, I use Jellyfin to serve movies and shows to any screen in
the house. Behind it sits the arr stack, which takes care of the library
without me having to hunt anything down by hand:

- **Prowlarr** concentrates all the indexers in one place.
- **Radarr** handles movies and **Sonarr** handles shows.
- **qBittorrent** does the downloading.
- **Seerr** is where I, and anyone I grant access, request a new title. The
  rest of the flow runs by itself from there.

For transcoding I threw a Radeon RX 5600 into the machine. With hardware
transcoding, Jellyfin converts video on the fly to multiple devices at once
without choking.

## Game servers

The gaming side runs on the Pelican panel. Each server lives in its own
container, so I spin up whatever game the crew wants on the spot and shut it
down afterwards.

## Access and results

To reach everything from outside the house I use Tailscale. My friends join my
network to play as if they were on the same LAN, and I can access the services
from anywhere, with DNS resolved by Tailscale itself instead of memorizing IPs.

In the end, the hardware was already mine and the machine draws so little power
it barely shows on the electric bill. I traded a pile of monthly subscriptions
and an expensive VPS for a cost that, day to day, is close to zero. And the
library is mine: it doesn't vanish when a service decides to pull a title from
its catalog.
