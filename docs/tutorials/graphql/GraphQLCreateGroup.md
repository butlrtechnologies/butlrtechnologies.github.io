---
sidebar_position: 1
---

# GraphQL - Create Group

## 1. [Get Access Token](../GetAccessToken.md)

## 2 - GraphQL Mutation
**CURL Request**
```bash
curl --location --request POST 'https://api.butlr.io/api/v3/graphql' \
--header 'Authorization: Bearer INSERT_TOKEN_HERE' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"mutation{\n   createGroups(groups: [{ \n       name: \"Random Group Name 01\", \n       ids: [\"sensor_001\", \"sensor_002\", \"room_000\"]}]) {\n       group_id\n       name\n       ids\n   }\n}","variables":{}}'
```
**GraphQL Mutation**
```graphql
mutation{
   createGroups(groups: [{ 
       name: "Random Group Name 01", 
       ids: ["sensor_001", "sensor_002", "room_000"]}]) {
       group_id
       name
       ids
   }
}
```
**Response**
```json
{
    "data": {
        "createGroups": [
            {
                "group_id": "group_001",
                "name": "Random Group Name 01",
                "ids": [
                    "sensor_001",
                    "sensor_002",
                    "room_000"
                ]
            }
        ]
    }
}
```
