# Hoxton – Assessment (Laravel/Angular)

## System requirements 
* `git`  installed
* `docker` installed 
* `docker compose` installed 
* `node` installed

## Install the Application

You should start by cloning the repository into your local machine.

```bash
git clone https://github.com/itarafath/hoxton
```

## Backend

```bash
cd  hoxton/backend
./vendor/bin/sail up -d
./vendor/bin/sail artisan migrate:fresh --seed
```


## Frontend

```bash
cd  hoxton/frontend
npm install
npm run start
```
Go to your browser and hit following URL. "localhost" or 127.0.0.1