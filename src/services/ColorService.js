export class ColorService {
  imageData // array of numbers corresponding to all RGBA colors in the image

  constructor() {}

  setImageData(data) {
    this.imageData = data;
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
}