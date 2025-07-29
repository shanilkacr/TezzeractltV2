import React, { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";

const cn = (...classes) => classes.filter(Boolean).join(' ');

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[147, 197, 253]],
  containerClassName,
  dotSize,
  showGradient = true,
}) => {
  return (
    <div className={cn("h-full relative bg-white w-full", containerClassName)}>
      <div className="h-full w-full">
        <DotMatrix
          colors={colors ?? [[0, 255, 255]]}
          dotSize={dotSize ?? 3}
          opacities={
            opacities ?? [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1]
          }
          shader={`
              float animation_speed_factor = ${animationSpeed.toFixed(1)};
              float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2) * 0.01 + (random(st2) * 0.15);
              opacity *= step(intro_offset, u_time * animation_speed_factor);
              opacity *= clamp((1.0 - step(intro_offset + 0.1, u_time * animation_speed_factor)) * 1.25, 1.0, 1.25);
            `}
          center={["x", "y"]}
        />
      </div>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
      )}
    </div>
  );
};

const DotMatrix = ({
  colors = [[0, 0, 0]],
  opacities = [0.04, 0.04, 0.04, 0.04, 0.04, 0.08, 0.08, 0.08, 0.08, 0.14],
  totalSize = 4,
  dotSize = 2,
  shader = "",
  center = ["x", "y"],
}) => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const materialRef = useRef(null);
  const animationIdRef = useRef(null);

  const uniforms = useMemo(() => {
    let colorsArray = [
      colors[0],
      colors[0],
      colors[0],
      colors[0],
      colors[0],
      colors[0],
    ];
    if (colors.length === 2) {
      colorsArray = [
        colors[0],
        colors[0],
        colors[0],
        colors[1],
        colors[1],
        colors[1],
      ];
    } else if (colors.length === 3) {
      colorsArray = [
        colors[0],
        colors[0],
        colors[1],
        colors[1],
        colors[2],
        colors[2],
      ];
    }

    return {
      u_colors: {
        value: colorsArray.map((color) => [
          color[0] / 255,
          color[1] / 255,
          color[2] / 255,
        ]),
      },
      u_opacities: {
        value: opacities,
      },
      u_total_size: {
        value: totalSize,
      },
      u_dot_size: {
        value: dotSize,
      },
      u_time: {
        value: 0,
      },
      u_resolution: {
        value: new THREE.Vector2(800, 600),
      },
    };
  }, [colors, opacities, totalSize, dotSize]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ 
      canvas, 
      alpha: true,
      antialias: true 
    });
    
    renderer.setSize(rect.width, rect.height);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create shader material
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision mediump float;
      varying vec2 vUv;
      uniform float u_time;
      uniform float u_opacities[10];
      uniform vec3 u_colors[6];
      uniform float u_total_size;
      uniform float u_dot_size;
      uniform vec2 u_resolution;
      
      float PHI = 1.61803398874989484820459;
      
      float random(vec2 xy) {
        return fract(tan(distance(xy * PHI, xy) * 0.5) * xy.x);
      }
      
      void main() {
        vec2 st = vUv * u_resolution;
        ${center.includes("x") ? "st.x -= abs(floor((mod(u_resolution.x, u_total_size) - u_dot_size) * 0.5));" : ""}
        ${center.includes("y") ? "st.y -= abs(floor((mod(u_resolution.y, u_total_size) - u_dot_size) * 0.5));" : ""}
        
        float opacity = step(0.0, st.x);
        opacity *= step(0.0, st.y);
        
        vec2 st2 = vec2(int(st.x / u_total_size), int(st.y / u_total_size));
        
        float frequency = 5.0;
        float show_offset = random(st2);
        float rand = random(st2 * floor((u_time / frequency) + show_offset + frequency) + 1.0);
        opacity *= u_opacities[int(rand * 10.0)];
        opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.x / u_total_size));
        opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.y / u_total_size));
        
        vec3 color = u_colors[int(show_offset * 6.0)];
        
        ${shader}
        
        gl_FragColor = vec4(color, opacity);
        gl_FragColor.rgb *= gl_FragColor.a;
      }
    `;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        u_colors: { value: uniforms.u_colors.value.map(c => new THREE.Vector3(...c)) },
        u_opacities: { value: uniforms.u_opacities.value },
        u_total_size: { value: uniforms.u_total_size.value },
        u_dot_size: { value: uniforms.u_dot_size.value },
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2(rect.width * 2, rect.height * 2) }
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    materialRef.current = material;

    // Create geometry and mesh
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Animation loop
    const clock = new THREE.Clock();
    let lastTime = 0;
    const maxFps = 60;
    const frameInterval = 1 / maxFps;

    const animate = () => {
      const currentTime = clock.getElapsedTime();
      
      if (currentTime - lastTime >= frameInterval) {
        material.uniforms.u_time.value = currentTime;
        renderer.render(scene, camera);
        lastTime = currentTime;
      }
      
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const newRect = canvas.getBoundingClientRect();
      renderer.setSize(newRect.width, newRect.height);
      material.uniforms.u_resolution.value.set(newRect.width * 2, newRect.height * 2);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [uniforms, shader, center]);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />;
};

// Demo component
