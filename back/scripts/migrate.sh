#!/bin/bash

docker container exec ac-test2_back_1 php artisan migrate:fresh --seed
