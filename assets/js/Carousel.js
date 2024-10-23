const MathUtil = {
    lerp: (a, b, n) => (1 - n) * a + n * b
};

let winsize;
const calcWinsize = () => (winsize = { width: window.innerWidth, height: window.innerHeight });
calcWinsize();
window.addEventListener('resize', calcWinsize);

class GalleriaItem {
    constructor(el) {
        this.el = el;
        this.isCentered = false;
    }

    setCenterState(isCentered) {
        if (isCentered && !this.isCentered) {
            this.el.style.transform = "scale(1.2)";
            this.el.style.zIndex = "10";
            this.el.style.transition = "transform 0.3s ease, z-index 0.3s ease";
        } else if (!isCentered && this.isCentered) {
            this.el.style.transform = "scale(1)";
            this.el.style.zIndex = "1";
            this.el.style.transition = "transform 0.3s ease, z-index 0.3s ease";
        }
        this.isCentered = isCentered;
    }
}

class Galleria {
    constructor(el) {
        this.el = el;
        this.inner = this.el.querySelector('.galleria__inner');
        this.innerWidth = 0;
        this.items = [];
        [...this.el.querySelectorAll('.galleria__item')].forEach((item) => {
            const galleryItem = new GalleriaItem(item);
            this.items.push(galleryItem);
            this.innerWidth += item.getBoundingClientRect().width;
        });
        this.isDragged = false;
        this.currentX = 0;
        this.initialX = 0;
        this.xOffset = 0;
        this.pervPosition = 0;
        this.maxDrag = this.innerWidth - winsize.width;
        this.intervalId = undefined;
        this.init();
        this.initEvents();
    }

    init() {
        this.inner.style.width = this.innerWidth + 'px';
        this.render = () => {
            this.intervalId = undefined;
            this.pervPosition = MathUtil.lerp(this.pervPosition, this.currentX, 0.1);

            // Loop infinito para mover as imagens
            if (this.pervPosition < -this.maxDrag) {
                this.pervPosition = 0;
                this.currentX = 0;
            } else if (this.pervPosition > 0) {
                this.pervPosition = -this.maxDrag;
                this.currentX = -this.maxDrag;
            }

            this.inner.style.transform = 'matrix(1, 0, 0, 1, ' + this.pervPosition + ', 0)';

            // Atualiza os itens e destaca o item central
            this.updateCenterItem();

            if (!this.intervalId) {
                this.intervalId = requestAnimationFrame(() => this.render());
            }
        };
        this.intervalId = requestAnimationFrame(() => this.render());
    }

    updateCenterItem() {
        const centerX = winsize.width / 2;

        this.items.forEach((item, index) => {
            const itemRect = item.el.getBoundingClientRect();
            const itemCenterX = itemRect.left + itemRect.width / 2;
            const distanceToCenter = Math.abs(centerX - itemCenterX);

            const isCentered = distanceToCenter < itemRect.width / 2;
            item.setCenterState(isCentered);
        });
    }

    onDragStart(e) {
        this.isDragged = true;
        this.initialX = this.unify(e).clientX - this.xOffset;
    }

    onDragMove(e) {
        if (!this.isDragged) return;
        e.preventDefault();
        this.currentX = this.unify(e).clientX - this.initialX;
    }

    onDragEnd() {
        if (this.currentX > 0) {
            this.currentX = -this.maxDrag;
        } else if (this.currentX < -this.maxDrag) {
            this.currentX = 0;
        }

        this.isDragged = false;
        this.xOffset = this.currentX;
    }

    initEvents() {
        if (window.PointerEvent) {
            // Eventos para Pointer
            this.inner.addEventListener('pointerdown', (e) => {
                this.onDragStart(e);
            });
            this.inner.addEventListener('pointermove', (e) => {
                this.onDragMove(e);
            });
            this.inner.addEventListener('pointerup', (e) => {
                this.onDragEnd();
            });
        } else {
            // Eventos para Mouse
            this.inner.addEventListener('mousedown', (e) => {
                this.onDragStart(e);
            });
            this.inner.addEventListener('mouseleave', (e) => {
                this.onDragEnd();
            });
            this.inner.addEventListener('mouseup', (e) => {
                this.onDragEnd();
            });
            this.inner.addEventListener('mousemove', (e) => {
                this.onDragMove(e);
            });

            // Eventos para Touch
            this.inner.addEventListener('touchstart', (e) => {
                this.onDragStart(e);
            });
            this.inner.addEventListener('touchmove', (e) => {
                this.onDragMove(e);
            });
            this.inner.addEventListener('touchend', (e) => {
                this.onDragEnd();
            });
        }

        this.unify = (e) => {
            return e.changedTouches ? e.changedTouches[0] : e;
        };
    }
}

// Inicializa a galeria
var galleria = document.querySelectorAll('.galleria');
if (galleria.length > 0) {
    for (let i = 0; i < galleria.length; i++) {
        new Galleria(galleria[i]);
    }
}