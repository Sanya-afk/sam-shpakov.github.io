export class Cube {
  constructor(data) {
    this.sidesName = [
      "Vanilla JS",
      "Vue",
      "React",
      "TypeScript",
      "Angular",
      "Cube for development",
    ];

    this.fps = data.fps;
    this.sensivity = data.sensivity;
    this.sensivityFade = data.sensivityFade;
    this.touchSensivity = data.touchSensivity;
    this.speed = data.speed;

    this.lastX = 0;
    this.lastY = 0;
    this.mouseX = 0;
    this.mouseY = 0;
    this.distanceX = 0;
    this.distanceY = 0;
    this.positionX = 1122;
    this.positionY = 136;
    this.torqueX = 0;
    this.torqueY = 0;

    this.down = false;
    this.upsideDown = false;

    this.previousPositionX = 0;
    this.previousPositionY = 0;

    this.currentSide = 0;
    this.calculatedSide = 0;
  }

  createCube() {
    this.viewport = this.createDomNode(this.viewport, "div", "viewport");
    this.cube = this.createDomNode(this.cube, "div", "cube");

    this.styleCube = this.createDomNode(this.cube, "style");
    this.coef = 0.2;
    this.sidesName.forEach((element, index) => {
      const side = this.createDomNode(side, "div", "side");
      if (index === 5) {
        const sideContent = this.createDomNode(
          sideContent,
          "div",
          "side-content",
          "active"
        );
        sideContent.innerHTML = element;
        side.append(sideContent);
      } else {
        const sideContent = this.createDomNode(
          sideContent,
          "div",
          "side-content"
        );
        sideContent.innerHTML = element;
        side.append(sideContent);
      }
      this.cube.append(side);
    });

    this.sides = this.cube.children;
    this.bindEvents();

    this.appendCubeElement();
    setInterval(this.animate.bind(this), this.fps);

    return this.viewport;
  }

  createDomNode(node, element, ...classes) {
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }

  appendCubeElement() {
    this.viewport.append(this.cube);
  }

  bindEvents() {
    this.viewport.addEventListener("mousedown", (event) => {
      this.down = true;
    });

    this.viewport.addEventListener("touchstart", (event) => {
      this.down = true;
      event.touches ? (event = event.touches[0]) : null;
      this.mouseX = event.pageX / this.touchSensivity;
      this.mouseY = event.pageY / this.touchSensivity;
      this.lastX = this.mouseX;
      this.lastY = this.mouseY;
    });

    document.addEventListener("mousemove", (event) => {
      this.mouseX = event.pageX;
      this.mouseY = event.pageY;
    });
    document.addEventListener("touchmove", (event) => {
      if (event.touches.length == 1) {
        event.touches ? (event = event.touches[0]) : null;

        this.mouseX = event.pageX / this.touchSensivity;
        this.mouseY = event.pageY / this.touchSensivity;
      }
    });

    document.addEventListener("mouseup", (event) => {
      this.down = false;
    });
    document.addEventListener("touchend", (event) => {
      this.down = false;
    });
  }

  animate() {
    this.distanceX = this.mouseX - this.lastX;
    this.distanceY = this.mouseY - this.lastY;

    this.lastX = this.mouseX;
    this.lastY = this.mouseY;
    if (this.down) {
      this.torqueX =
        this.torqueX * this.sensivityFade +
        (this.distanceX * this.speed - this.torqueX) * this.sensivity;
      this.torqueY =
        this.torqueY * this.sensivityFade +
        (this.distanceY * this.speed - this.torqueY) * this.sensivity;
    }

    if (Math.abs(this.torqueX) > 1.0 || Math.abs(this.torqueY) > 1.0) {
      if (!this.down) {
        this.torqueX *= this.sensivityFade;
        this.torqueY *= this.sensivityFade;
      }

      this.positionY -= this.torqueY;

      if (this.positionY > 360) {
        this.positionY -= 360;
      } else if (this.positionY < 0) {
        this.positionY += 360;
      }

      if (this.positionY > 90 && this.positionY < 270) {
        this.positionX -= this.torqueX;

        if (!this.upsideDown) {
          this.upsideDown = true;
          this.doUpsideDown();
        }
      } else {
        this.positionX += this.torqueX;

        if (this.upsideDown) {
          this.upsideDown = false;
          this.doUpsideDown();
        }
      }

      if (this.positionX > 360) {
        this.positionX -= 360;
      } else if (this.positionX < 0) {
        this.positionX += 360;
      }

      if (
        !(this.positionY >= 46 && this.positionY <= 130) &&
        !(this.positionY >= 220 && this.positionY <= 308)
      ) {
        if (this.upsideDown) {
          if (this.positionX >= 42 && this.positionX <= 130) {
            this.calculatedSide = 3;
          } else if (this.positionX >= 131 && this.positionX <= 223) {
            this.calculatedSide = 2;
          } else if (this.positionX >= 224 && this.positionX <= 314) {
            this.calculatedSide = 5;
          } else {
            this.calculatedSide = 4;
          }
        } else {
          if (this.positionX >= 42 && this.positionX <= 130) {
            this.calculatedSide = 5;
          } else if (this.positionX >= 131 && this.positionX <= 223) {
            this.calculatedSide = 4;
          } else if (this.positionX >= 224 && this.positionX <= 314) {
            this.calculatedSide = 3;
          } else {
            this.calculatedSide = 2;
          }
        }
      } else {
        if (this.positionY >= 46 && this.positionY <= 130) {
          this.calculatedSide = 6;
        }

        if (this.positionY >= 220 && this.positionY <= 308) {
          this.calculatedSide = 1;
        }
      }

      if (this.calculatedSide !== this.currentSide) {
        this.currentSide = this.calculatedSide;
        this.doSideChange();
      }
    }
    this.cube.style["transform"] =
      "rotateX(" + this.positionY + "deg) rotateY(" + this.positionX + "deg)";

    if (
      this.positionY != this.previousPositionY ||
      this.positionX != this.previousPositionX
    ) {
      this.previousPositionY = this.positionY;
      this.previousPositionX = this.positionX;

      this.doRotateSides();
    }
  }

  doRotateSides() {
    if (this.positionY > 90 && this.positionY < 270) {
      this.sides[0].querySelector(".side-content").style["transform"] =
        "rotate(" + (this.positionX + this.torqueX) + "deg)";
      this.sides[5].querySelector(".side-content").style["transform"] =
        "rotate(" + -(this.positionX + 180 + this.torqueX) + "deg)";
    } else {
      this.sides[0].querySelector(".side-content").style["transform"] =
        "rotate(" + (this.positionX - this.torqueX) + "deg)";
      this.sides[5].querySelector(".side-content").style["transform"] =
        "rotate(" + -(this.positionX + 180 - this.torqueX) + "deg)";
    }
  }

  doUpsideDown() {
    let deg = this.upsideDown == true ? "180deg" : "0deg";
    let i = 5;

    while (i > 0 && --i) {
      this.sides[i].querySelector(".side-content").style["transform"] =
        "rotate(" + deg + ")";
    }
  }

  doSideChange() {
    for (let i = 0; i < this.sides.length; ++i) {
      this.sides[i].querySelector(".side-content").className = "side-content";
    }
    this.sides[this.currentSide - 1].querySelector(".side-content").className =
      "side-content active";
  }
}
