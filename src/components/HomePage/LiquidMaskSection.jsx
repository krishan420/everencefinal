import { useRef, useEffect } from "react";
import * as THREE from "three";

const LiquidMaskSection = ({ targetRef }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const section = targetRef.current;
    if (!section) return;

    /* ---------- Renderer ---------- */
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0xffffff, 0);
    section.appendChild(renderer.domElement);

    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.zIndex = "1";
    renderer.domElement.style.pointerEvents = "none";

    /* ---------- Scene ---------- */
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    /* ---------- Resize ---------- */
    const resize = () => {
      const rect = section.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height);
    };
    resize();
    window.addEventListener("resize", resize);

    /* ---------- Shaders ---------- */
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform vec2 uVelocity;
      uniform float uTime;
      varying vec2 vUv;

      float hash(vec2 p){
        return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453123);
      }

      float noise(vec2 p){
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f*f*(3.0-2.0*f);
        return mix(
          mix(hash(i),hash(i+vec2(1.0,0.0)),u.x),
          mix(hash(i+vec2(0.0,1.0)),hash(i+vec2(1.0,1.0)),u.x),
          u.y
        );
      }

      float fbm(vec2 p){
        float v = 0.0;
        v += noise(p*1.0)*0.5;
        v += noise(p*2.0)*0.25;
        v += noise(p*4.0)*0.125;
        return v;
      }

      void main(){
        vec2 uv = vUv;

        vec2 flow =
          vec2(
            fbm(uv * 2.5 + uTime * 0.05),
            fbm(uv * 2.5 - uTime * 0.05)
          ) - 0.5;

        flow += uVelocity * 1.2;
        uv += flow * 0.06;

        float density = fbm(uv * 5.0 + uTime * 0.1);
        float alpha = 0.55 + density * 0.2;

        gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
      }
    `;

    /* ---------- Uniforms ---------- */
    const uniforms = {
      uTime: { value: 0 },
      uVelocity: { value: new THREE.Vector2(0, 0) },
    };

    /* ---------- Mesh ---------- */
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
    });

    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));

    /* ---------- Mouse (ON SECTION) ---------- */
    let last = { x: 0, y: 0 };

    const onMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      uniforms.uVelocity.value.set(
        (x - last.x) * 0.8,
        (y - last.y) * 0.8
      );

      last = { x, y };
    };

    section.addEventListener("mousemove", onMouseMove);

    /* ---------- Loop ---------- */
    const animate = () => {
      uniforms.uTime.value += 0.016;
      uniforms.uVelocity.value.multiplyScalar(0.9);
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      section.removeEventListener("mousemove", onMouseMove);
      renderer.dispose();
      section.removeChild(renderer.domElement);
    };
  }, [targetRef]);

  return null;
};

export default LiquidMaskSection;
