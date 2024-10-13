FROM php:8.2-apache
RUN docker-php-ext-install mysqli pdo pdo_mysql
WORKDIR /var/www/html

# 使用 COPY 指令会让dockerignore生效，如果使用卷挂载则dockerignore不生效，但整个文件夹都同步更改
COPY . /var/www/html
RUN chown -R www-data:www-data /var/www/html
#在yml中已经映射了端口，所以EXPOSE不是严格要求的

# 设置时区
ENV TZ=Pacific/Auckland
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# 更新 Apache 配置以使用新的时区
RUN sed -i 's/;date.timezone =/date.timezone = Pacific\/Auckland/' /usr/local/etc/php/php.ini-production \
    && sed -i 's/;date.timezone =/date.timezone = Pacific\/Auckland/' /usr/local/etc/php/php.ini-development \
    && cp /usr/local/etc/php/php.ini-production /usr/local/etc/php/php.ini
    
EXPOSE 80
CMD ["apache2-foreground"]