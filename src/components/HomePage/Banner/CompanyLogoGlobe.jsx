import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const CompanyLogoGlobe = () => {
  const mountRef = useRef(null);
  const [deviceType, setDeviceType] = useState("desktop"); // 'mobile', 'laptop', or 'desktop'

const companyLogos = [
    { name: "React", logoPath: "/globeLogos/react.png", link: "/demo/react" },
    { name: "HTML5", logoPath: "/icons/html.svg", link: "/demo/html5" },
    { name: "AWS", logoPath: "/globeLogos/aws-colorpng.png", link: "/demo/aws" },
    { name: "C", logoPath: "/globeLogos/c.png", link: "/demo/c" },
    { name: "C++", logoPath: "/globeLogos/cpp.png", link: "/demo/cpp" },
    { name: "MySQL", logoPath: "/globeLogos/mysql.png", link: "/demo/mysql" },
    { name: "Kubernetes", logoPath: "/globeLogos/kubernates.png", link: "/demo/kubernetes" },
    { name: "Docker", logoPath: "/globeLogos/docker.png", link: "/demo/docker" },
    { name: "Node.js", logoPath: "/globeLogos/nodejs.png", link: "/demo/nodejs" },
    { name: "Express", logoPath: "/globeLogos/express.png", link: "/demo/express" },
    { name: "Java", logoPath: "/globeLogos/java.png", link: "/demo/java" },
    { name: ".NET", logoPath: "/globeLogos/dotnet.png", link: "/demo/dotnet" },
    { name: "C#", logoPath: "/globeLogos/csharp.png", link: "/demo/csharp" },
    { name: "Python Full Stack", logoPath: "/icons/python-fullstack.png", link: "/demo/python-fullstack" },
    { name: "ASP.NET", logoPath: "/globeLogos/aspnet.png", link: "/demo/aspnet" },
    { name: "JavaScript", logoPath: "/globeLogos/javascript.png", link: "/demo/javascript" },
    { name: "CSS3", logoPath: "/globeLogos/css.png", link: "/demo/css3" },
    { name: "GitHub", logoPath: "/globeLogos/github.png", link: "/demo/github" },
    { name: "AI", logoPath: "/globeLogos/ai.png", link: "/demo/ai" },
    { name: "Excel", logoPath: "/globeLogos/excel.png", link: "/demo/excel" },
    { name: "DevOps", logoPath: "/globeLogos/devops.png", link: "/demo/devops" },
    { name: "Bootstrap", logoPath: "/globeLogos/bootstrap.png", link: "/demo/bootstrap" },
    { name: "Django", logoPath: "/globeLogos/django.png", link: "/demo/django" },
    { name: "Spring", logoPath: "/globeLogos/spring.png", link: "/demo/spring" },
    { name: "Hibernate", logoPath: "/globeLogos/hibernate.png", link: "/demo/hibernate" },
    { name: "Tableau", logoPath: "/globeLogos/tableau.png", link: "/demo/tableau" },
];

  // Set globe radius based on device type
  const getGlobeRadius = () => {
    switch (deviceType) {
      case "mobile":
        return 1.1;
      case "laptop":
        return 1.2;
      case "desktop":
      default:
        return 1.3;
    }
  };

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setDeviceType("mobile");
      } else if (width > 768 && width <= 1024) {
        setDeviceType("laptop");
      } else {
        setDeviceType("desktop");
      }
    };
    
    checkDeviceType();
    window.addEventListener("resize", checkDeviceType);
    return () => window.removeEventListener("resize", checkDeviceType);
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;
    const mount = mountRef.current;
    let scene, renderer, camera, controls, globe, wireframe, logoGroup;
    let animationFrameId;

    const initScene = () => {
      // scene + renderer
      scene = new THREE.Scene();
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setClearColor(0x000000, 0);
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      mount.appendChild(renderer.domElement);

      // Set camera position based on device type
      const getCameraPosition = () => {
        switch (deviceType) {
          case "mobile":
            return 5;
          case "laptop":
            return 4.5;
          case "desktop":
          default:
            return 4;
        }
      };

      camera = new THREE.PerspectiveCamera(
        50,
        mount.clientWidth / mount.clientHeight,
        0.1,
        1000
      );
      camera.position.set(0, 0, getCameraPosition());

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
      controls.autoRotate = true;
      
      // Set rotation speed based on device type
      controls.autoRotateSpeed = 
        deviceType === "mobile" ? 0.8 : 
        deviceType === "laptop" ? 1.0 : 
        1.2;
        
      controls.minPolarAngle = 0;
      controls.maxPolarAngle = Math.PI;
      controls.minAzimuthAngle = -Infinity;
      controls.maxAzimuthAngle = Infinity;

      // Enhanced lighting setup
      scene.add(new THREE.AmbientLight(0xffffff, 0.5));

      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
      hemiLight.position.set(0, 1, 0);
      scene.add(hemiLight);

      const dirLight = new THREE.DirectionalLight(0xffffff, 1);
      dirLight.position.set(5, 5, 5);
      dirLight.castShadow = true;
      dirLight.shadow.mapSize.width = 1024;
      dirLight.shadow.mapSize.height = 1024;
      dirLight.shadow.camera.near = 0.1;
      dirLight.shadow.camera.far = 20;
      scene.add(dirLight);

      const pointLight = new THREE.PointLight(0xa5b4fc, 0.8, 10);
      pointLight.position.set(-3, -2, -4);
      scene.add(pointLight);

      const pointLight2 = new THREE.PointLight(0x6c63ff, 0.5, 8);
      pointLight2.position.set(3, 1, 2);
      scene.add(pointLight2);

      // Create globe with appropriate radius
      globe = new THREE.Mesh(
        new THREE.SphereGeometry(getGlobeRadius(), 64, 64),
        new THREE.MeshStandardMaterial({
          color: "#6C63FF",
          emissive: "#a5b4fc",
          emissiveIntensity: 0.4,
          roughness: 0.3,
          metalness: 0.5,
          transparent: true,
          opacity: 0.95,
        })
      );
      globe.castShadow = true;
      globe.receiveShadow = true;
      scene.add(globe);

      // Wireframe
      wireframe = new THREE.Mesh(
        new THREE.SphereGeometry(getGlobeRadius() + 0.002, 64, 64),
        new THREE.MeshBasicMaterial({
          color: 0xffffff,
          wireframe: true,
          opacity: 0.15,
          transparent: true,
        })
      );
      scene.add(wireframe);

      // Glow effect
      const glowGeometry = new THREE.SphereGeometry(getGlobeRadius() + 0.05, 64, 64);
      const glowMaterial = new THREE.ShaderMaterial({
        uniforms: {
          glowColor: { type: "c", value: new THREE.Color(0xa5b4fc) },
          viewVector: { type: "v3", value: camera.position },
        },
        fragmentShader: `
          uniform vec3 glowColor;
          varying float intensity;
          void main() {
            vec3 glow = glowColor * intensity;
            gl_FragColor = vec4(glow, 0.3);
          }
        `,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true,
      });
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      scene.add(glow);

      // group for logos
      logoGroup = new THREE.Group();
      scene.add(logoGroup);
    };

    const createTexture = (path) => {
      const loader = new THREE.TextureLoader();
      const texture = loader.load(path);
      texture.encoding = THREE.sRGBEncoding;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      return texture;
    };

    const placeLogos = () => {
      const total = companyLogos.length;
      const radius = getGlobeRadius();
      
      // Set logo size based on device type
      const size = 
        deviceType === "mobile" ? 0.45 : 
        deviceType === "laptop" ? 0.42 : 
        0.4;
        
      const offset = size * 0.6;

      for (let i = 0; i < total; i++) {
        const { name, logoPath } = companyLogos[i];
        const phi = Math.acos(-1 + (2 * i) / total);
        const theta = Math.sqrt(total * Math.PI) * phi;
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        const texture = createTexture(logoPath);
        const geom = new THREE.PlaneGeometry(size, size * 0.8);
        const mat = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          side: THREE.DoubleSide,
        });
        const logo = new THREE.Mesh(geom, mat);

        const normal = new THREE.Vector3(x, y, z).normalize();
        logo.position.copy(normal.multiplyScalar(radius + offset));

        logo.userData.up = new THREE.Vector3(0, 1, 0);
        logo.lookAt(camera.position);
        logo.up.copy(logo.userData.up);

        logoGroup.add(logo);
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      controls.update();
      logoGroup.children.forEach((logo) => {
        logo.lookAt(camera.position);
        logo.up.copy(logo.userData.up);
      });
      renderer.render(scene, camera);
    };

    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    initScene();
    placeLogos();
    animate();
// returning all objects after all functions on globe
    return () => {
      window.removeEventListener("resize", onResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (mount.contains(renderer.domElement))
        mount.removeChild(renderer.domElement);
      scene.traverse((obj) => {
        if (obj.isMesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material))
            obj.material.forEach((m) => m.dispose());
          else obj.material.dispose();
        }
      });
    };
  }, [deviceType]);
// actual rendering in screen
  return (
    <div
      ref={mountRef}
      className="w-full h-[400px] md:h-[500px] bg-transparent md:-mt-3 -mt-8"
    />
  );
};

export default CompanyLogoGlobe;
