import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, MeshBuilder } from '@babylonjs/core';
// HTML의 캔버스 요소를 가져옵니다.
const canvas = document.getElementById('renderCanvas');
// Babylon.js 엔진과 씬 초기화
const engine = new Engine(canvas, true);
const scene = new Scene(engine);
// 카메라 설정
const camera = new ArcRotateCamera('camera', Math.PI / 2, Math.PI / 2, 5, Vector3.Zero(), scene);
camera.attachControl(canvas, true);
// 조명 설정
const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);
// 구체 생성
const sphere = MeshBuilder.CreateSphere('sphere', { diameter: 2 }, scene);
// 엔진 실행 루프
engine.runRenderLoop(() => {
    scene.render();
});
// 창 크기 변경에 대응
window.addEventListener('resize', () => {
    engine.resize();
});
