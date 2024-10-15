FROM php:8.2-fpm
WORKDIR /var/www/html
RUN pecl install redis
RUN docker-php-ext-enable redis
RUN docker-php-ext-install pdo pdo_mysql
EXPOSE 8000
CMD ["php", "artisan", "serve", "--host=0.0.0.0"]
