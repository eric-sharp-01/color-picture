export default class Point {
    constructor(point){
      const {r, g, b} = point;
      this.r = r;
      this.g = g;
      this.b = b;
      this.avg = (r + g + b) / 3;
      this.euclideanDistance = Math.pow(r * r + g * g + b * b, 0.5)
      this.cosineSimilarity = ( r * 256 ) / (
        Math.pow(r * r + g * g + b * b, 0.5) * 
        Math.pow(256 * 256, 0.5)
      );
    }
  
    getValue(){
      return this.cosineSimilarity;
    }
  }