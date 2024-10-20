#!/bin/bash

docker container exec acobuccio_back php artisan migrate:fresh --seed
