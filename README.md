# RESTful API implementation in PHP

Simple REST API Server written in PHP, accepting CORS Requests and designed with MVC Pattern.

## Getting Started

### Prerequisites

To run this project you need the **LAMP** server to be installed on your machine (See this [guide](http://www.mattiacorvaglia.com/install_lamp.html)).  
You need also to enable the use of **htaccess** files, in order to make it possible follow these simple steps:

1. First enable the module **rewrite** using this command: `sudo a2enmod rewrite`
2. Go into the **sites-available** folder: `cd /etc/apache2/sites-available`
3. Edit the Apache configuration (e.g. `default.conf`) by setting **AllowOverride** to **All**.  
    BEFORE
    ```
    <Directory /var/www/html/>
      # ...
      AllowOverride None
      # ...
    </Directory>
    ```
    AFTER
    ```
    <Directory /var/www/html/>
      # ...
      AllowOverride All
      # ...
    </Directory>
    ```

4. Restart Apache: `sudo service apache2 restart`

### Alternatives

You can avoid using htaccess by configuring directly the Apache configuration.

1. Go into the **sites-available** folder: `cd /etc/apache2/sites-available`
2. Edit the Apache configuration (e.g. `default.conf`)
    AFTER
    ```
    <Directory "/var/www/html/">

      # ...

      AllowOverride None

      <IfModule mod_rewrite.c>

        RewriteEngine On

        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d

        RewriteRule ^api/v1/foo/* /routes/foo.php [QSA,L]
        RewriteRule ^api/v1/bar/* /routes/bar.php [QSA,L]

      </IfModule>

    </Directory>
    ```
3. Restart Apache: `sudo service apache2 restart`


## Authors

**Mattia Corvaglia** - [corvagliamattia@gmail.com](mailto:corvagliamattia@gmail.com) - [mattiacorvaglia.com](http://mattiacorvaglia.com)
