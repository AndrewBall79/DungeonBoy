// import Map from "../../features/map";
//
// const c = Map;
//
// class Projectile {
//     constructor(x, y, radius, color, velocity) {
//         this.x = x;
//         this.y = y;
//         this.radius = radius;
//         this.color = color;
//         this.velocity = velocity
//     }
//
//     draw() {
//         c.beginPath();
//         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
//         c.fillStyle = this.color;
//         c.fill()
//     }
//
//     update() {
//         this.draw();
//         this.x = this.x + this.velocity.x;
//         this.y = this.y + this.velocity.y
//     }
// }
//
//
// let projectiles = [];
// let particles = [];
//
// function init() {
//     particles = [];
// }
//
//
// let animationId;
//
// function animate() {
//     animationId = requestAnimationFrame(animate);
//     c.fillStyle = 'rgba(0,0,0,.1)';
//     projectiles.forEach((projectile, index) => {
//         projectile.update();
//
//         // remove projectiles
//         if (
//             projectile.x + projectile.radius < 0 ||
//             projectile.x - projectile.radius > Map.width ||
//             projectile.y + projectile.radius < 0 ||
//             projectile.y - projectile.radius > Map.height
//         ) {
//             setTimeout(() => {
//                 projectiles.splice(index, 1);
//             }, 0);
//         }
//     });
// }
//
//
// window.addEventListener('click', (event) => {
//     const angle = Math.atan2(event.clientY - Map.height / 2,
//         event.clientX - Map.width / 2);
//     const velocity = {
//         x: Math.cos(angle) * 5,
//         y: Math.sin(angle) * 5
//     };
//
//     projectiles.push(new Projectile(
//         Map.width / 2,
//         Map.height / 2, 5,
//         'white',
//         velocity
//     ))
// });
//
// init();
// animate();
//
//
// export default Projectile;