interface Shape {
  kind: 'square' | 'circle';
  // kind: string;
  radius?: number;
  sideLength?: number;
}

function area(s: Shape): number {
  if (s.kind === 'square') {
    return s.sideLength! ** 2;
  } else {
    return Math.PI * s.radius! ** 2;
  }
}

area({ kind: 'circle', sideLength: 10 });
