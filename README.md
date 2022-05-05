# BkC Discussion Thumbnail

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/block-cat/discussion-thumbnail.svg)](https://packagist.org/packages/block-cat/discussion-thumbnail)

**Extensia nu este publicată pe [Packagist](https://packagist.org/)!**

Aceasta este o extensie [Flarum](https://flarum.org/) care inlocuiește imaginea din avatar pentru un articol cu prima imagine detectată în primul comentariu al articolului, exact ca extensia originală, `fof/discussion-thumbnail`.

`BkC Discussion Thumbnail` a fost realizată pe baza extensie `fof/discussion-thumbnail`. Schimbarea pe care o aduce noua extensie este modificarea dimensiunii imaginii încărcate din *imgur*. Aceasta este necesar pentru a micșora timpul de încărcare a conținutului în pagină.

## Compatibilitate

Această extensie este compatibilă cu versiunea `1.2.1` de [Flarum](https://flarum.org/).

## Instalare

Pentru instalarea extensiei trebuie executată următoarea comandă Composer:

```sh
composer require block-cat/discussion-thumbnail *@dev
```

## Actualizare

Pentru actualizarea extensiei trebuie executată următoarea comandă Composer:

```sh
composer update block-cat/discussion-thumbnail
php flarum migrate
php flarum cache:clear
```

## Dezinstalare

Pentru dezinstalarea extensiei trebuie executată următoarea comandă Composer:

```sh
composer remove block-cat/discussion-thumbnail
php flarum cache:clear
```

## Link-uri utile

- [Cod sursă pe GitHub](https://github.com/block-cat/discussion-thumbnail)
- [Changelog](CHANGELOG.md)