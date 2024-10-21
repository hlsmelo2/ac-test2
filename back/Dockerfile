FROM php:8.2-fpm
WORKDIR /www
RUN apt-get update && apt-get install -y zlib1g-dev libzip-dev
RUN pecl install redis
RUN docker-php-ext-install pdo pdo_mysql zip
RUN docker-php-ext-enable redis
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer
COPY . .
RUN composer install
RUN cp .env.example .env && php artisan key:generate
EXPOSE 8000
CMD ["php", "artisan", "serve", "--host=0.0.0.0"]
