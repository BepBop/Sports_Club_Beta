import fullPage_url from '../lib/fullPage/js/fullPage.js';

import animateValue from "../js/animation-with-vanilla.js";

import(fullPage_url).then(() => {
  new fullpage('#fullPage', {
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    verticalCentered: false,

    onLeave: function (origin, destination, direction, trigger) {
      // var leavingSection = this;

      //after leaving section 1
      if (origin.index == 0 && direction == 'down') {
        // document.getElementsByClassName('Full')[0].style.animation = "mymove 2.5s ease-out";
        // document.getElementsByClassName('Full')[1].style.animation = "mymove 2.5s ease-out";
        // document.getElementById('grid-foreground').style.opacity = "1";
        document.getElementById('grid-foreground').style.background = "rgba(0, 0, 0, 0.90)";
        document.getElementById('section-2').style.background = "black";
        document.getElementById('line-2').style.background = "whitesmoke";


      }

      //after leaving section 2
      if (origin.index == 1 && direction == 'down') {
        document.getElementsByTagName('video')[0].style.maxHeight = "100vh";
        document.getElementsByTagName('button')[0].style.fontSize = "6vmin";
      }

      //after leaving section 3
      if (origin.index == 2 && direction == 'down') {
        document.getElementsByClassName('Full')[0].style.animation = "mymove 2.5s ease-out";
        document.getElementsByClassName('Full')[1].style.animation = "mymove 2.5s ease-out";
      }


      //after leaving section 3
      if (origin.index == 3 && direction == 'down') {
        document.getElementById('five-1').style.animation = "slide-up 1.25s cubic-bezier(0.65, 0, 0.35, 1) 1s forwards";
        document.getElementById('card-head1').style.animation = "slide-up 1.25s cubic-bezier(0.65, 0, 0.35, 1) 2s forwards";
        document.getElementById('five-22').style.animation = "slide-up 1.25s cubic-bezier(0.65, 0, 0.35, 1) 1s forwards";
        document.getElementById('five-3').style.animation = "slide-up 1.25s cubic-bezier(0.65, 0, 0.35, 1) 1.5s forwards";
        document.getElementById('five-4').style.animation = "slide-up 1.25s cubic-bezier(0.65, 0, 0.35, 1) 1.5s forwards";

      }

      //after leaving section 5
      if (origin.index == 4 && direction == 'down') {
        const obj = document.getElementById("value");
        animateValue(obj, 0, 50, 2000);
      }
    }


  });
})
