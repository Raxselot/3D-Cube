class SceneInitializer {
    constructor() {
      this.scene = new THREE.Scene();
      this.camera = this.createCamera();
      this.renderer = this.createRenderer();
      this.light = this.createLight();
      this.controls = this.createControls();
      this.cube = this.createCube();
  
      this.loadModels();
      this.WindowResizeHandler();
      this.animate();
    }
  
    createCamera() {
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;
      return camera;
    }
  
    createRenderer() {
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.getElementById('viewer').appendChild(renderer.domElement);
      return renderer;
    }
  
    createLight() {
      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(0, 1, 1).normalize();
      this.scene.add(light);
      return light;
    }
  
    createControls() {
      const controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.25;
      controls.enableZoom = true;
      return controls;
    }
  
    createCube() {
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      this.scene.add(cube);
      return cube;
    }
  
    loadModels() {
      const loader = new THREE.GLTFLoader();
      loader.load('model/cube.gltf', (gltf) => {
        this.scene.add(gltf.scene);
      }, undefined, (error) => {
        console.error('Ein Fehler ist aufgetreten beim Laden des Modells:', error);
      });
    }
  
    WindowResizeHandler() {
      window.addEventListener('resize', () => {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
      });
    }
  
    animate() {
      requestAnimationFrame(() => this.animate());
  
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
  
      this.controls.update();
  
      this.renderer.render(this.scene, this.camera);
    }
  }
  
  new SceneInitializer();
  
