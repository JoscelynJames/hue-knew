const SVG_NAMESPACE = "http://www.w3.org/2000/svg"
const RGBA_REGEX = /\d+/g
const COUNT_MIN = 10
const COLOR_DIFF = 20

export class ColorService {
  /** 
   * array of numbers corresponding to all RGBA colors in the image
   * [255, 255, 255, 255]
   */ 
  imageData 
  // number value of the window height
  windowHeight
    // number value of the window width
  windowWidth

  constructor(imageData) {
    this.imageData = imageData
    this.windowHeight = window.innerHeight
    this.windowWidth = window.innerWidth
  }

  // Loops over the color data returned from getImageData - https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData
  // Returns a map of rgba values that store a number of time this color occurs
  formatAndGroupColors() {
    const colorsArray = new Map()
    // we will increase by 4 indexes each time
    // this is because we work with 4 indexes at a time to get the complete RGBA value
    for (let i = 0; i < this.imageData.length; i += 4) {
      const r = this.imageData[i]
      const g = this.imageData[i + 1]
      const b = this.imageData[i + 2]
      const a = this.imageData[i + 3]
      const rgba = `rgba(${r}, ${g}, ${b}, ${a})`
      const count = colorsArray.get(rgba) | 0

      colorsArray.set(`rgba(${r}, ${g}, ${b}, ${a})`, count + 1)
    }

    return colorsArray
  }

  generateSVG() {
    this.combineSimilarColors().forEach((value, key) => {
      if (value < COUNT_MIN) return

      const svg = document.getElementById('generated-svg')
      const circle = document.createElementNS(SVG_NAMESPACE, 'circle');
      const randomX = Math.random() * this.windowWidth
      const randomY = Math.random() * this.windowHeight

      circle.setAttribute('r', value)
      circle.setAttribute('cx', randomX)
      circle.setAttribute('cy', randomY)
      circle.setAttribute('fill', key)  

      svg.appendChild(circle)
    })
  }

  combineSimilarColors() {
    const combinedColorMap = new Map()
    
    let previousColor, previousCount
    this.formatAndGroupColors().forEach((currentCount, currentColor) => {

      if (!previousColor) {
        previousColor = currentColor
        previousCount = currentCount
        return 
      }

      const currentRgbaValues = this.parseColorString(currentColor)
      const previousRgbaValues = this.parseColorString(previousColor)
      
      if (!previousRgbaValues || !currentRgbaValues) return

      const colorsAreSimilar = this.compareColorValues(currentRgbaValues, previousRgbaValues)
      let count = currentCount

      if (colorsAreSimilar) count = previousCount + currentCount

      if (count < COUNT_MIN) return
      combinedColorMap.set(currentColor, count)
      previousColor = currentColor
      previousCount = currentCount
      return
    })
    console.log(combinedColorMap)
    return combinedColorMap
  }

  // returns an object the the rgba values as keys on that object
  parseColorString(colorString) {
    if (!colorString.includes('rgba')) throw Error('Invalid rgba color provided')

    const rgba = colorString.match(RGBA_REGEX);
    if (rgba) return { 
      r: rgba[0], 
      g: rgba[1], 
      b: rgba[2], 
      a: rgba[3]
    };

    throw Error(`Error happened while parsing color string. No RGBA returned for value: ${colorString}`)
  }

  compareColorValues(current, prev) {
    let rDiff = Math.abs(current.r - prev.r)
    let gDiff = Math.abs(current.g - prev.g)
    let bDiff = Math.abs(current.b - prev.b)
    let aDiff = Math.abs(current.a - prev.a)

    return rDiff > COLOR_DIFF || gDiff > COLOR_DIFF || bDiff > COLOR_DIFF || aDiff > COLOR_DIFF
  }
}