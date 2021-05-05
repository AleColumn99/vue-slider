const app = new Vue ({

  el: '#app',
  data: {

    imgCounter: 0,
    photos: [
      'assets/img/1.jpg',
      'assets/img/2.jpg',
      'assets/img/3.jpg',
      'assets/img/4.jpg',
      'assets/img/5.jpg',
      'assets/img/6.jpg'
    ]

  },
  methods: {

    nextPhoto() {
      this.imgCounter++;
      if (this.imgCounter === this.photos.length) this.imgCounter = 0;
    },

    prevPhoto() {
      this.imgCounter--;
      if (this.imgCounter < 0) this.imgCounter = this.photos.length - 1;
    },

  }

});