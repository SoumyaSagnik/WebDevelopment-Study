// ! We're creating a perspective projection camera in this case. The other type of camera can be a orthographic projection

//! PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
//! fov — Camera frustum vertical field of view.
//! aspect — Camera frustum aspect ratio.
//! near — Camera frustum near plane.
//! far — Camera frustum far plane.

// When a solid (generally a cone or a pyramid) is cut in such a manner that base of the solid and the plane cutting the solid are parallel to each other, part of solid which remains between the parallel cutting plane and the base is known as frustum of that solid.

let scene, camera, renderer, cube;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75,
        window.innerWidth / window.innerHeight,
        .1,
        1000);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(2, 2, 2);  // inside value is basically scale in height width and depth
    // const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });

    const texture = new THREE.TextureLoader().load('textures/corinna.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5; // by default camera position will not show so changing it
}

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
    cube.rotation.z += 0.005;

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();