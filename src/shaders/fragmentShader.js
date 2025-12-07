export const fragmentShader = `
  precision highp float;

  varying vec2 vUv;
  uniform float uTime;

  // Pseudo-random function
  float rand(vec2 n) {
    return fract(sin(dot(n, vec2(12.9898, 78.233))) * 43758.5453);
  }

  // Smooth radial pulse
  float pulse(vec2 uv, vec2 center, float t) {
    float dist = distance(uv, center);
    float radius = 0.2 + 0.1 * sin(t * 2.0);
    return smoothstep(radius, radius - 0.1, dist);
  }

  void main() {
    vec2 uv = vUv;

    vec3 color = vec3(0.0); // black background

    // Make 5 random pulses
    for (int i = 0; i < 5; i++) {
      float fi = float(i);

      // Random center positions animated over time
      vec2 center = vec2(
        rand(vec2(fi, 0.1)) + 0.2 * sin(uTime + fi),
        rand(vec2(fi, 1.7)) + 0.2 * cos(uTime * 0.7 + fi)
      );

      // Pulsing intensity
      float p = pulse(uv, center, uTime + fi * 1.3);

      // Random colors per pulse
      vec3 pulseColor = vec3(
        rand(vec2(fi, 3.0)),
        rand(vec2(fi, 5.0)),
        rand(vec2(fi, 7.0))
      );

      color += p * pulseColor;
    }

    // Subtle fade
    color *= 0.7;

    gl_FragColor = vec4(color, 1.0);
  }
`;
