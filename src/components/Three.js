import React, {Component} from 'react';
import * as THREE from 'three';

export default class Three extends Component {
    componentDidMount() {
        const planeDefinition = 100;
        const planeSize = 1245000;
        const bgColor =  "#252934";
        const meshColor = "#5d6166";

        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(bgColor, 1, 300000);
        this.camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 400000);
        this.camera.position.z = 10000;
        this.camera.position.y = 10000;

        this.planeGeo = new THREE.PlaneGeometry(planeSize, planeSize, planeDefinition, planeDefinition);
        this.plane = new THREE.Mesh(this.planeGeo, new THREE.MeshBasicMaterial({
            color: meshColor,
            wireframe: true
        }));

        this.plane.rotation.x -= Math.PI * .5;

        this.scene.add(this.plane);

        this.renderer = new THREE.WebGLRenderer({alpha: false});
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(bgColor, 1);
        this.renderer.setPixelRatio(window.devicePixelRatio || 1);

        this.mount.appendChild(this.renderer.domElement);
        this.count = 0;
        this.updatePlane();
        this.start();
    }

    updatePlane = () => {
        let vertexHeight = 15000;
        for (let i = 0; i < this.planeGeo.vertices.length; i++) {
            this.planeGeo.vertices[i].z += Math.random() * vertexHeight - vertexHeight;
            this.planeGeo.vertices[i]._myZ = this.planeGeo.vertices[i].z;
        }
    }

    start = () => {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }

    animate = () => {
        let x = this.camera.position.x;
        let z = this.camera.position.z;

        this.camera.position.x = x * Math.cos(0.001) + z * Math.sin(0.001) - 10;
        this.camera.position.z = z * Math.cos(0.001) - x * Math.sin(0.001) - 10;
        this.camera.lookAt(new THREE.Vector3(0, 8000, 0));

        for (let i = 0; i < this.planeGeo.vertices.length; i++) {
            let z = +this.planeGeo.vertices[i].z;
            this.planeGeo.vertices[i].z = Math.sin((i + this.count * 0.00001)) * (this.planeGeo.vertices[i]._myZ - (this.planeGeo.vertices[i]._myZ * 0.6));
            this.plane.geometry.verticesNeedUpdate = true;
            this.count += 0.1;
        }
        this.renderScene();
        window.requestAnimationFrame(this.animate);
        window.addEventListener('resize', this.onWindowResize, false);     
    }

    renderScene = () => {
        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize = () => {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    render(){
        return(
        <section id="home">
            <div className="canvas" ref={(mount) => { this.mount = mount }}/>
        </section>
        )
    }
}