---
sidebar_position: 1
---

# Current Occupancy - Traffic Sensors
## Introduction
Traffic sensors are often placed at the door line of a room. They measure the number of people entering and exiting the field of view. When calculating occupancy for rooms with traffic sensors, this measurement is often referred to as `estimated occupancy`. Traffic sensors cannot explicitly tell you how many people are in the room, but they can tell you how many people are entering and exiting the room. The occupancy for a room (`estimated occupancy`) with traffic sensors is the sum of enters minus the sum of exits since the start of the day.

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

## 2 - Query occupancy for rooms with traffic sensors
It's important to start the query from the beginning of the day, since you want to capture traffic from the start. 

**Note**: The `filter.start` request parameter is in `UTC` time.  It's important to know your timezone to get the right start of the day.
```bash
curl --location --request POST 'https://api.butlr.io/api/v3/reporting' \
--header 'Authorization: Bearer your_access_token' \
--header 'Content-Type: application/json' \
--data-raw '{
    "group_by": {
        "order": ["room_id", "field"]
    },
    "window": {
        "every": "1h",
        "function": "sum"
    },
    "filter": {
        "start": "2022-11-04T00:00:00Z",
        "measurements": ["traffic"]
    }
}'
```
**Response**
```json
{
	"data": {
		"room_xxx1": {
			"in": {
				"sum": 10,
				"min": 4,
				"max": 6,
				"count": 2,
				"mean": 5,
				"median": 6,
				"stddev": 1,
				"first": 4,
				"last": 6
			},
			"out": {
				"sum": 11,
				"min": 1,
				"max": 5,
				"count": 3,
				"mean": 3.6666666666666665,
				"median": 5,
				"stddev": 1.8856180831641267,
				"first": 1,
				"last": 5
			}
		},
		"room_xxx2": {
			"in": {
				"sum": 10,
				"min": 2,
				"max": 6,
				"count": 3,
				"mean": 3.3333333333333335,
				"median": 2,
				"stddev": 1.8856180831641267,
				"first": 6,
				"last": 2
			},
			"out": {
				"sum": 7,
				"min": 1,
				"max": 3,
				"count": 5,
				"mean": 1.4,
				"median": 1,
				"stddev": 0.8,
				"first": 1,
				"last": 1
			}
		}
	}
}
```
## 3 - Calculate Estimated Occupancy based on traffic sensors
Our intention is to estimate the occupancy of a room based on number of enters and exits.  We can do this by subtracting the sum of exits from the sum of enters. The following code snippet shows how to calculate the estimated occupancy for each room.
```javascript
function estOccupancyByTraffic(response) {
    let occupancy = {};

    // return empty if no data is available
    if (!response?.data) {
        return occupancy;
    }

    // loop over all rooms
    // ex. { room_xxx1: { in: { sum: 10, ... }, out: { sum: 11, ... } }, room_xxx2: { in: { sum: 10, ... }, out: { sum: 7, ... } } }
    const data = response.data;
    for (const room_id in data) {
        const enters = data[room_id]?.in?.sum || 0;
        const exits = data[room_id]?.out?.sum || 0;

        // we cannot have negative occupancy
        occupancy[room_id] = exits > enters ? 0 : enters - exits;
    }

    return occupancy;
}
```
**Response**
```json
{
    "room_xxx1": 0,
    "room_xxx2": 3
}
```
## Closing Remarks
This is a very basic example of how to use the `/v3/reporting` API to calculate `estimated occupancy`. If you have any questions, please reach out to us at support@butlr.io.