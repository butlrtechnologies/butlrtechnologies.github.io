---
sidebar_position: 1
---

## 1 - Get your access token
### 1.1 - Using your Username and Password
Get an access token using your username and password.  You can use the following command to get an access token:
```bash
curl --location --request POST 'https://api.butlr.io/api/v2/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "your@email.com",
    "password": "your_password"
}'
```
**Response**
```json
{
    "access_token": "your_access_token",
    "refresh_token": "your_refresh_token",
    "id_token": "your_id_token",
    "scope": "your_scopes",
    "expires_in": 1000,
    "token_type": "Bearer"
}
```

### 1.2 - Using your API Credentials
Another way to get an access token is by using your API credentials.  You can use the following command to get an access token:
```bash
curl --location --request POST 'https://api.butlr.io/api/v2/clients/login' \
--header 'content-type: application/json' \
--data-raw '{
    "client_id": "your_client_id",
    "client_secret": "your_client_secret"",
    "audience": "https://butlrauth/",
    "grant_type": "client_credentials"
}'
```
**Response**
```json
{
    "access_token": "your_access_token",
    "scope": "your_scopes",
    "expires_in": 3666,
    "token_type": "Bearer"
}
```