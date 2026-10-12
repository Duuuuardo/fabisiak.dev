---
title: "Meu homelab: como parei de pagar assinatura"
date: "2026-07-22"
excerpt: "Cansei de pagar streaming que quase não usava e VPS cara pra rodar servidor de jogo. Reaproveitei um PC que estava parado, instalei Proxmox e trouxe tudo pra casa. Como está montado hoje."
tags: ["Homelab", "Proxmox", "Self-hosted"]
---

Um mês eu somei o que gastava de assinatura e vi que estava pagando caro por
serviço que quase não usava. Netflix, HBO, Disney, tudo junto, e na maioria dos
meses eu não abria metade. Fora isso, quando queria subir um servidor de jogo pros
amigos, uma VPS básica já saía cara e ainda travava por falta de recurso.

Eu tinha um computador parado em casa. Comprei ele um tempo atrás pra montar um
hackintosh, mas acabei migrando meu workflow pro Linux e a máquina ficou largada.
Instalei o Proxmox nela e o homelab nasceu daí.

O Proxmox roda várias máquinas virtuais e containers num hardware só, então cada
serviço fica isolado no seu lugar e eu ligo ou desligo o que quiser sem mexer no
resto.

## Mídia

No lugar do streaming, uso o Jellyfin pra servir filmes e séries pra qualquer
tela de casa. Por trás dele fica a arr stack, que cuida da biblioteca sem eu
precisar procurar nada na mão:

- **Prowlarr** concentra os indexadores num lugar só.
- **Radarr** cuida dos filmes e **Sonarr** das séries.
- **qBittorrent** faz o download.
- **Seerr** é onde eu, e quem eu liberar, peço um título novo. O resto do fluxo
  corre sozinho a partir dali.

Pra transcodificação joguei uma Radeon RX 5600 na máquina. Com o transcoding por
hardware, o Jellyfin converte o vídeo na hora pra vários aparelhos ao mesmo tempo
sem engasgar.

## Servidores de jogo

A parte de jogo roda no painel Pelican. Cada servidor fica no seu container, então
eu subo o jogo que a galera quer na hora e desligo depois.

## Acesso e resultado

Pra chegar em tudo de fora de casa eu uso a Tailscale. Meus amigos entram na minha
rede pra jogar como se estivessem na mesma LAN, e eu acesso os serviços de qualquer
lugar, com o DNS resolvido pela própria Tailscale em vez de decorar IP.

No fim, o hardware já era meu e a máquina gasta tão pouco que nem pesa na conta de
luz. Troquei um monte de assinatura mensal e uma VPS cara por um custo que, no dia
a dia, é quase zero. E a biblioteca é minha: não some quando um serviço resolve
tirar um título do catálogo.
