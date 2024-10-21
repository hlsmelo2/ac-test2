#!/bin/bash

if (test $1 = "--seed"); then
    seed=$1;
else
    seed='';
fi

sh -c "docker container exec acobuccio_back php artisan migrate:fresh ${seed}";
