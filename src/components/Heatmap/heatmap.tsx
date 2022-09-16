import React, { useRef, useEffect } from 'react'

export const SampleSensorData =
	{
	"data": [
		{
			"time": "2021-06-22 22:35:10.655000+00:00",
			"detections_local": [
				[
					0,
					0
				]
			],
		"device_id": "00-17-0d-00-00-70-54-8a",
		"room_tag": "office"
		},
		{
			"time": "2021-06-22 22:35:10.655000+00:00",
			"detections_local": [
				[
					0.2,
					0.5
				]
			],
		"device_id": "00-17-0d-00-00-70-54-8a",
		"room_tag": "office"
		},
		{
			"time": "2021-06-22 22:35:10.655000+00:00",
			"detections_local": [
				[
					0.2,
					0.1
				]
			],
		"device_id": "00-17-0d-00-00-70-54-8a",
		"room_tag": "office"
		},
				{
			"time": "2021-06-22 22:35:10.655000+00:00",
			"detections_local": [
				[
					0.5,
					0.3
				],
								[
					0.1,
					0.9
				], 
				[
					0.2,
					0.5
				]
			],
		"device_id": "00-17-0d-00-00-70-54-8a",
		"room_tag": "office"
		},
	]
}

export function rotate(cx, cy, x, y, radians) {
	var cos = Math.cos(radians),
		sin = Math.sin(radians),
		nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
		ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return [nx, ny];
}

export const Canvas = props => {
  const canvasRef = useRef(null)
  let grid = [[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0]]
  const draw = (ctx, grid, max_int) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
	const height = ctx.canvas.height/grid.length
	const width = ctx.canvas.width/grid.length
	ctx.globalAlpha = 0.01;
	ctx.fillStyle = "red";
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
	for (var i = 0; i < grid.length; i++) { 
		for (var j = 0; j < grid[i].length; j++) { 
			ctx.beginPath()
			ctx.globalAlpha = 0.95 * (grid[i][j])/max_int;
			ctx.fillStyle = "red";
			ctx.fillRect(i*width, j*height, width, height)
		}
	}
  }
  const sensor = {height: 2.76, orientation: [0, 0, 0], coordinates: [2.5, 2.5]}
  const fov = 1.0472 // rad := 60 degrees
  const sensorSize =  Math.tan(fov/2)*sensor.height*2 // this gives us the sensor projected coverage in meters
  let sensorCenter = {X: sensorSize/2, Y: sensorSize/2}
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
	let frameMax = SampleSensorData.data.length
    let gridSize = {width: 5, height: 5} // meters
    //Our draw came here
	let maxInt = 0
    const render = () => {
		for (var i = 0; i < SampleSensorData.data.length; i++) {
			SampleSensorData.data[i].detections_local.forEach(function(item, index) {
				// Scale the detection to the sensor size, [0,0] is top left [x,y]
				const xLocal = item[0] * sensorSize
				const yLocal = item[1] * sensorSize
				// Then rotate the detection to the local frame, orientation is in terms of the center, so we need to rotate around the center
				// Note we only rotate around the z axis (roll)
				const rotated = rotate(sensorCenter.X, sensorCenter.Y, xLocal, yLocal, sensor.orientation[2])
				// Next we translate to the global frame, note coordinates are to the sensor center, so we need to subtract the sensor center
				const xGlobal = rotated[0] + sensor.coordinates[0] - sensorCenter.X
				const yGlobal = rotated[1] + sensor.coordinates[1] - sensorCenter.Y
				// Now we place this into the grid, we need to convert the meters to the grid size
				const xGrid = Math.floor((xGlobal/gridSize.width) * grid.length)
				const yGrid = Math.floor((yGlobal/gridSize.height) * grid.length)
				grid[xGrid][yGrid] += 1
				if (grid[xGrid][yGrid] > maxInt) {
					maxInt = grid[xGrid][yGrid]
				}
			})
		}
		draw(context, grid, maxInt)
	}
    render()
  }, [draw])
  return <canvas ref={canvasRef} {...props}/>
}

export const AnimatedCanvas = props => {
  const canvasRef = useRef(null)
  let grid = [[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0]]
  const draw = (ctx, grid, max_int) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
	const height = ctx.canvas.height/grid.length
	const width = ctx.canvas.width/grid.length
	ctx.globalAlpha = 0.01;
	ctx.fillStyle = "red";
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
	for (var i = 0; i < grid.length; i++) { 
		for (var j = 0; j < grid[i].length; j++) { 
			ctx.beginPath()
			ctx.globalAlpha = 0.95 * (grid[i][j])/max_int;
			ctx.fillStyle = "red";
			ctx.fillRect(i*width, j*height, width, height)
		}
	}
  }
  const sensor = {height: 2.76, orientation: [0, 0, 0], coordinates: [2.5, 2.5]}
  const fov = 1.0472 // rad := 60 degrees
  const sensorSize =  Math.tan(fov/2)*sensor.height*2 // this gives us the sensor projected coverage in meters
  const sensorCenter = sensorSize/2
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let animationFrameId
    let frameId = 0
	let frameMax = SampleSensorData.data.length
    let gridSize = {width: 5, height: 5} // meters
    //Our draw came here
	let lastTime = 0
	let maxInt = 0
	const FRAME_PERIOD = 500
    const render = () => {
		const time = new Date().getTime()
		// return if the desired time hasn't elapsed and request a render
		if ( (time - lastTime) < FRAME_PERIOD) {
		    animationFrameId = window.requestAnimationFrame(render)
			return;
		}
		lastTime = time;
		if (frameId >= frameMax) {
			frameId = 0
			maxInt = 0
			grid = [[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0]]
		}
		SampleSensorData.data[frameId].detections_local.forEach(function(item, index) {
			// Scale the detection to the sensor size, [0,0] is top left [x,y]
			const xLocal = item[0] * sensorSize
			const yLocal = item[1] * sensorSize
			// Then rotate the detection to the local frame, orientation is in terms of the center, so we need to rotate around the center
            // Note we only rotate around the z axis (roll)
            const rotated = rotate(sensorCenter, sensorCenter, xLocal, yLocal, sensor.orientation[2])
            // Next we translate to the global frame, note coordinates are to the sensor center, so we need to subtract the sensor center
            const xGlobal = rotated[0] + sensor.coordinates[0] - sensorCenter
            const yGlobal = rotated[1] + sensor.coordinates[1] - sensorCenter
            // Now we place this into the grid, we need to convert the meters to the grid size
            const xGrid = Math.floor((xGlobal/gridSize.width) * grid.length)
            const yGrid = Math.floor((yGlobal/gridSize.height) * grid.length)
			grid[xGrid][yGrid] += 1
			if (grid[xGrid][yGrid] > maxInt) {
				maxInt = grid[xGrid][yGrid]
			}
		})
		frameId++
		// Project into grid
		draw(context, grid, maxInt)
		animationFrameId = window.requestAnimationFrame(render)
	}
    render()
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  return <canvas ref={canvasRef} {...props}/>
}