---
sidebar_position: 1
---

# Get Sensors

## 1 - [How to get an access token](../GetAccessToken.md)

  
## 2 - GraphQL Query (Simple)
**CURL Request**
```bash
curl --location --request POST 'https://api.butlr.io/api/v3/graphql' \
--header 'Authorization: Bearer INSERT_TOKEN_HERE' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"{\n    sensors {\n        data {\n            floor_id\n            room_id\n            hive_id\n            sensor_id\n            mac_address\n            name\n            is_online\n        }\n    }\n}","variables":{}}'
```
**GraphQL Query**
```graphql
{
    sensors {
        data {
            floor_id
            room_id
            hive_id
            sensor_id
            mac_address
            name
            is_online
        }
    }
}
```
**Response**
```json
{
    "data": {
        "sensors": {
            "data": [
                {
                    "floor_id": "space_xxx",
                    "room_id": "room_xxx",
                    "hive_id": "hive_xxx",
                    "sensor_id": "sensor_xxx1",
                    "mac_address": "00-00-00-00-00-00-00-01",
                    "name": "sensor1",
                    "is_online": true
                },
                {
                    "floor_id": "space_xxx",
                    "room_id": "room_xxx",
                    "hive_id": "hive_xxx",
                    "sensor_id": "sensor_xxx2",
                    "mac_address": "00-00-00-00-00-00-00-02",
                    "name": "sensor2",
                    "is_online": false
                }
            ]
        }
    }
}
```
