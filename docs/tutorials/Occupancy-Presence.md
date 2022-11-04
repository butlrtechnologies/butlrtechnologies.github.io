---
sidebar_position: 2
---

# Current Occupancy - Presence Sensors
## Introduction
The way you calculate occupancy from presence sensors vs traffic sensors is different. Presence sensors measure the number of people under its field of view. For example, if you have a room with 10 people and 2 presence sensors, one sensor might capture 7 people and the other sensor will capture the remaining 3.  The occupancy is the Sum of presence sensors within a room.

## How to query occupancy for rooms with presence sensors
### 1 - Get your access token
#### 1.1 - Using your Username and Password
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

#### 1.2 - Using your API Credentials
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

### 2 - Query occupancy for rooms with presence sensors
#### 2.1 - Query `current` occupancy for all rooms
When you want to query the current occupancy for all rooms, you can use the following API call:
```bash
curl --location --request POST 'https://api.butlr.io/api/v3/reporting' \
--header 'Authorization: Bearer your_access_token' \
--header 'Content-Type: application/json' \
--data-raw '{
    "group_by": {
        "order": ["room_id", "mac_address"]
    },
    "window": {
        "every": "1s",
        "function": "max"
    },
    "filter": {
        "start": "-2m",
        "measurements": ["presence"],
        "value": {
            "gte": 0
        }
    }
}'
```
**Response**
```json
{
	"data": {
		"room_xxx1": {
			"00-00-00-00-00-00-00-00": {
				"sum": 71,
				"min": 1,
				"max": 2,
				"count": 69,
				"mean": 1.0289855072463767,
				"median": 1,
				"stddev": 0.16776575221435114,
				"first": 1,
				"last": 1
			},
			"00-00-00-00-00-00-00-01": {
				"sum": 68,
				"min": 1,
				"max": 3,
				"count": 27,
				"mean": 2.5185185185185186,
				"median": 3,
				"stddev": 0.7388865682688888,
				"first": 1,
				"last": 2
			}
		},
        "room_xxx2": {
			"00-00-00-00-00-00-00-02": {
				"sum": 52,
				"min": 1,
				"max": 1,
				"count": 52,
				"mean": 1,
				"median": 1,
				"stddev": 0,
				"first": 1,
				"last": 1
			},
			"00-00-00-00-00-00-00-03": {
				"sum": 127,
				"min": 1,
				"max": 2,
				"count": 93,
				"mean": 1.3655913978494623,
				"median": 2,
				"stddev": 0.481595605947499,
				"first": 1,
				"last": 1
			}
		}
	}
}
```

### 2.2 Let's break down the response:
Let's focus on 1 room
```json
{
    "room_xxx1": {
        "00-00-00-00-00-00-00-00": {
            "sum": 71,
            "min": 1,
            "max": 2,
            "count": 69,
            "mean": 1.0289855072463767,
            "median": 1,
            "stddev": 0.16776575221435114,
            "first": 1,
            "last": 1
        },
        "00-00-00-00-00-00-00-01": {
            "sum": 68,
            "min": 1,
            "max": 3,
            "count": 27,
            "mean": 2.5185185185185186,
            "median": 3,
            "stddev": 0.7388865682688888,
            "first": 1,
            "last": 2
        }
    }
}
```
* `room_xxx1` is the room ID
* `00-00-00-00-00-00-00-00` is the MAC address of the presence sensor
* `sum` is the `SUM(sensor.occupancy.value)` of presence events
* `min` is the `MIN(sensor.occupancy.value)` of presence events
* `max` is the `MAX(sensor.occupancy.value)` of presence events
* `count` is the `COUNT(sensor.occupancy.time)` of presence events
* `mean` is the `AVG(sensor.occupancy.value)` of presence events. This is the average occupancy of the room. `SUM(sensor.occupancy.value) / COUNT(sensor.occupancy.time)`
* `median` is the `MEDIAN(sensor.occupancy.value)` of presence events. In `chronological order`, this is the middle presence event. 
* `stddev` is the `STDDEV(sensor.occupancy.value)` of presence events
* `first` is the `FIRST(sensor.occupancy.value)` of presence events. In `chronological order` this is the first presence event.
* `last` is the `LAST(sensor.occupancy.value)` of presence events. In `chronological order` this is the last presence event.

## 3 - Calculate Room Occupancy based on a collection of presence sensors
Since our intention is to get the `current` occupancy, we can use the `last` value. This is the occupancy of the room at the moment of the query.

Let's assume we called the API and let `response` equal the response of the API call.
```javascript
function roomOccupancyByPresence(response) {
    let occupancy = {};

    // return 0 if no data is available
    if (!response?.data) {
        return occupancy;
    }

    // loop over all rooms
    // ex. { "room_xxx1": { ... }, "room_xxx2": { ... } }
    const data = response.data;
    for (const room_id in data) {
        // initialize room occupancy to 0
        occupancy[room_id] = 0;

        // 2nd level grouping is the MAC address of the presence sensor
        const mac_addresses = data[room_id];

        // skip if no presence sensors are available
        if (!mac_addresses) {
            continue;
        }

        // loop over all presence sensors
        // ex. { "00-00-00-00-00-00-00-00": { ... }, "00-00-00-00-00-00-00-01": { ... } }
        for (const mac_address in mac_addresses) {

            // get the metrics of the presence sensor
            const metrics = mac_addresses[mac_address];

            // skip if no metrics are available
            if (!metrics) {
                continue;
            }

            // aggregate the occupancy of the room
            // ex. { "sum": 71, "min": 1, "max": 2, "count": 69, "mean": 1.02898, "median": 1, "stddev": 0.1677, "first": 1, "last": 1 }
            occupancy[room_id] += metrics.last;
        }
    }

    return occupancy;
}
```
**Response**
```json
{
    "room_xxx1": 3,
    "room_xxx2": 2
}
```
### 4 - Closing Remarks
This is a very basic example of how to use the `/v3/reporting` API. There are many more things you can do with the API. For example, you can use the `max` to help you understand what's the maximum occupants that are under a field of view for a sensor.  If you capture a week's worth of data and see that the `max` for a sensor is `1`, then you can start to question if the space is too small for more than 2 people.  

The important thing here is understanding your data and what each metric means.  Before aggregating data, you have to ask yourself, "what am I trying to accomplish by aggregating a metric". For example, aggregating the `stddev` doesn't make any sense at the room level. The `stddev` is a measure of how spread out the data is.  If you aggregate the `stddev` of a room, you are aggregating the spread of the data.  

Further examples of what it would mean to aggregate different metrics
* If you aggregate the `max` of each sensor, you are aggregating the peak of each sensor.  
* If you aggregate the `mean` of each sensor, you are aggregating the average occupancy of each sensor.
* If you aggregate the `median` of each sensor, you are aggregating the middle occupancy of each sensor.
* If you aggregate the `sum` of each sensor, you are aggregating the total occupancy of each sensor.
* If you aggregate the `min` of each sensor, you are aggregating the minimum occupancy of each sensor.
* If you aggregate the `count` of each sensor, you are aggregating the number of presence events of each sensor.
* If you aggregate the `first` of each sensor, you are aggregating the first presence event of each sensor.  
* If you aggregate the `last` of each sensor, you are aggregating the last presence event of each sensor.  
* If you aggregate the `stddev` of each sensor, you are aggregating the spread of each sensor.