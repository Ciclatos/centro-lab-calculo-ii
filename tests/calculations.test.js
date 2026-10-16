const test = require('node:test');
const assert = require('node:assert/strict');

test('E1: centroide del listón uniforme', () => assert.equal(1.8 / 2, 0.9));
test('E2: centro de masa de tres partículas', () => {
  const masses = [{m:2,x:1,y:2},{m:3,x:4,y:1},{m:5,x:2,y:5}];
  const total = masses.reduce((s,p)=>s+p.m,0);
  assert.equal(masses.reduce((s,p)=>s+p.m*p.x,0)/total,2.4);
  assert.equal(masses.reduce((s,p)=>s+p.m*p.y,0)/total,3.2);
});
test('E3: centroide vertical compuesto', () => assert.equal((16*2+6*5)/22,31/11));
test('E4: centro de masa combinado y desplazamiento', () => {
  const x=(3000*3.5+2000*6)/5000; assert.equal(x,4.5); assert.equal(x-3.5,1);
});
test('E5: masa y centro de masa de densidad 3x²', () => { assert.equal(8,8); assert.equal(12/8,1.5); });
test('E6: centro de gravedad con gradiente lineal', () => {
  const k=1e-5,L=200; const z=-k*L**2/12; assert.ok(Math.abs(z+1/30)<1e-12); assert.ok(Math.abs(Math.abs(z)*100-10/3)<1e-12);
});
