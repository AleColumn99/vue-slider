const app = new Vue ({

  el: '#app',
  data: {

    isPlaying: false,
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
  mounted() {
    this.timer = setInterval(() => {
      this.nextPhoto();
    }, 3000);
    this.isPlaying = true;
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

    startSlide() {
      this.isPlaying = true;
      this.timer = setInterval(() => {
        this.nextPhoto();
      }, 3000);
    },

    stopSlide() {
      clearInterval(this.timer);
      this.isPlaying = false;
    }

  }

});