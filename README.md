# RESTful API implementation in PHP

Simple PHP web service implementation with client interaction using AJAX requests.

## Getting Started

### Prerequisites

To run this project you need the **LAMP** server to be installed on your machine (See this [guide](http://www.mattiacorvaglia.com/install_lamp.html)).  
You need also to enable the use of **htaccess** files, in order to make it possible follow these simple steps:

1. First enable the PHP module **rewrite** using this command: `sudo a2enmod rewrite`
2. Restart Apache: `sudo service apache2 restart`
3. Go into the **sites-available** folder: `cd /etc/apache2/sites-available`
4. Edit the configuration of your VirtualHost (e.g. `default.conf`) by changing `AllowOverride None` to `AllowOverride All`.  
   There are two lines where this change has to be made.

### Installing

To get the project on your machine use the git command:
```
git clone https://github.com/mattiacorvaglia/php_restful_api.git
```
And execute the script `DB_INITIALIZATION.sql` with your MySQL client to setup the database.

## Authors

**Mattia Corvaglia** - [corvagliamattia@gmail.com](mailto:corvagliamattia@gmail.com) - [mattiacorvaglia.com](http://mattiacorvaglia.com)
