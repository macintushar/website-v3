---
title: My Home Server Setup
description: A look into the machine, software, and configurations I use on my home server.
date: '2024/11/25'
categories:
  - linux
  - server
published: true
---

I have been obsessed with setting up my home server for the past few years. Ever since I learned about Plex, I started to get more and more into home servers. I learned more about Linux, and found out more about Open Source projects that you could run on your own machines and not pay for it.

I started off with my old Dell Insiron 3521 which has a 2 core Pentium from 2013. It used to run Ubuntu 22.04 and I had it run Plex. I then learned about Jellyfin and then set it up and migrated my library from Jellyfin to Plex. I then needed a way to access my media on my home server. This was when I found out about Tailscale and how I could access my server from anywhere. I then set up Tailscale and even installed Immich, but that was the end of it because that laptop stopped working.

I then started working and then eventually got a laptop from work so I could convert my personal laptop into my current home server. I still wanted to be able to play games off of it so it currently sits under my desk and still runs Pop OS 22.04. It also runs Jellyfin and Ollama, all of which I access via Tailscale.

## Specs and Software

Current Server / Personal Laptop (Dell G15 5515):

- CPU: Ryzen 7 5800H
- GPU: RTX 3060 Mobile / Max-Q
- RAM: 16GB (probably will update this to 32GB soon)
- Storage:
  - SSD1: Kioxia 512GB M.2 (came with the laptop, probably will update this to 2TB)
  - SSD2: Crucial P3 512GB M.2 (added this for some extra storage but hopefully I'll update it to 1TB soon)

This makes it good enough for me to play games while having Jellyfin stream a movie (harware accelerated transcoding comes in super clutch with the 3060).
Ollama also runs pretty well. I currently run Llama 3.1 8B, Llama 3.2 3.2B, Mistral 7b, and Dolphin-Mixtral 8x7b.

My experience having this all run on Pop OS has been pretty smooth, especially comparing it to when I used to run it off of Ubuntu 24.04. Though, Ubuntu will always be my favourite UI, Pop's DE is a little bit too much for me. I'm looking forward to the Pop OS 24 since the beta with their new DE looked quite good.
