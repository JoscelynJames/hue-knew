export class ImageService {
  imageUrl
  context

  constructor(image, context) {
    this.validateImage(image)

    this.imageUrl = this.createImageUrl(image);
    this.context = context;
  }

  openFileExplorer() {
    document.getElementById("image-upload").click();
  }

  createImageUrl(image) { 
    return URL.createObjectURL(image);
  }

  validateImage(image) {
    // TODO: add better validation here and user feedback
    if (!image) throw Error('No image was provided')
  }

  drawImage() {
    return new Promise((res, rej) => {
      // create a new HTMLImageElement for drawImage
      const img = new Image(100, 100);
      img.src = this.imageUrl;
      // wait for the image to load otherwise it paints a blank img
      img.onload = () => {
        this.context.drawImage(img, 0, 0, 100, 100);
        const imageData = this.context.getImageData(0, 0, 100, 100);
        // Set time out is purely UX driven decision
        // all the stuff completes so fast that we want to give illusion we are doing stuff 
        setTimeout(() => res(imageData), 1000)
      }
    })
  }
}