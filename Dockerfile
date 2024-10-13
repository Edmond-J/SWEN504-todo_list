FROM php:8.2-apache
RUN docker-php-ext-install mysqli pdo pdo_mysql
WORKDIR /var/www/html

# 使用 COPY 指令会让dockerignore生效，如果使用卷挂载则dockerignore不生效，但整个文件夹都同步更改
COPY . /var/www/html
RUN chown -R www-data:www-data /var/www/html
EXPOSE 80
CMD ["apache2-foreground"]