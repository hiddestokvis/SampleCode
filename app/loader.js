/*
*
* Asset loader
*
*/

export default class Loader {

  constructor(...folders) {
    this.folders = folders;
  }

  noConversion(no) {
    let digits = no.toString().length;
    let returnString = '';
    for(let i=0; i  < (5-digits); i++) {
      returnString += '0';
    }
    returnString += no;
    return returnString;
  }

  loadImage(folder,no=0) {
    let self = this;
    return new Promise(function(resolve,reject) {

      let img = new Image();
      img.onload = function() {
        resolve();
      }
      img.onerror = function() {
        reject();
      }
      img.src = folder + self.noConversion(no) + '.jpg';

    });
  }

  loadFolder(folder,skip) {

    let self = this;

    if(folder.loaded < folder.no) {
      self.loadImage(folder.src,folder.loaded).then(function() {
        folder.loaded += skip;
        self.loadFolder(folder,skip);
      },function() {
        console.error('Error fetching image');
      });
    }

  }

  load(skip=3) {

    let self = this;
    this.folders.forEach(function(folder) {

      self.loadFolder(folder,3);

    });
  }

}
