---
sidebar_position: 1
---

# GraphQL - Get Group

## 1. [Get Access Token](../GetAccessToken.md)

## 2 - GraphQL Query
**CURL Request**
```bash
curl --location --request POST 'https://api-dev.butlr.io/api/v3/graphql' \
--header 'Authorization: Bearer INSERT_TOKEN_HERE' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"{\n    groups {\n        data {\n            name\n            group_id\n            ids\n        }\n    }\n}","variables":{}}'
```
**GraphQL Query**
```graphql
{
    groups {
        data {
            name
            group_id
            ids
        }
    }
}
```
**Response**
```json
{
    "data": {
        "groups": {
            "data": [
                {
                    "name": "Random Sensor 01",
                    "group_id": "group_001",
                    "ids": [
                        "sensor_001",
                        "sensor_002"
                    ]
                }
            ]
        }
    }
}
```
