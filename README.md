# Projekt wykonany w ramach GISDay 2020.

#### [_18 Listopada 2020_](https://www.facebook.com/events/1237160989985193?active_tab=about) | [Youtube](https://www.youtube.com/channel/UCsL3Nj52LgV9aY3j7MoYISA) | [**Link do aplikacji**](https://moonshroom.github.io/GISDay2020_Blender_X_ThreeJS_AR/)

---

## Blender

Model wykorzystany na potrzeby projektu został wykonany za pośrednictwem oprogramowaia [ Blender 2.90.1 ](https://www.blender.org/).

![model_image](https://raw.githubusercontent.com/Moonshroom/GISDay2020_Blender_X_ThreeJS_AR/master/img/model.PNG)

---

## ThreeJS

Aplikacja została stworzaona w oparciu o biblioteke WebGL [Three JS](https://threejs.org/).

Kontent AR jest możliwy po zainstalowaniu wtyczki [WebXR Emulator Extension AR support](https://chrome.google.com/webstore/detail/webxr-api-emulator/mjddjgeghkdijejnciaefnkjmkafnnje) w przypadku nie posiadania urządzenia pozwalającego na dostęp do rozszerzonej rzeczywistości.
![WebXR Emulator Extension AR support](https://raw.githubusercontent.com/Moonshroom/GISDay2020_Blender_X_ThreeJS_AR/master/img/WebXREmulator.PNG)

---

## Opis zawartości repozytorium

- **fonts** - folder
  - _gentilis_regular.typeface_ - plik .json czionka
  - _readme.txt_ - opis pliku
- **img** - folder
  - _model.PNG_ - screenshot modelu
  - _WebXREmulator.PNG_ - screenshot środowiska emulatora AR
- **model** - folder
  - _gisday_rysy.gltf_ - medel w formacie GLTF
- **three_js** - folder
  - _ARButton.js_ - skrypt umożliwiający wejście do środowiska AR [DOCS](https://threejs.org/docs/index.html#manual/en/introduction/How-to-create-VR-content)
  - _DRACOLoader.js_ - kompresja i dekompresja siatek 3D [DOCS](https://threejs.org/docs/index.html#examples/en/loaders/DRACOLoader)
  - _GLTFLoader.js_ - skrypt pozwalający na załadowanie modelu 3D w formacie .GLTF / .GLB [DOCS](https://threejs.org/docs/index.html#examples/en/loaders/GLTFLoader)
  - _OrbitControls.js_ - nawigacja po scenie Three JS [DOCS](https://threejs.org/docs/index.html#examples/en/controls/OrbitControls)
  - _readme.txt_ - opis
  - _three.module.js_ - biblioteka threeJS [DOCS](https://github.com/mrdoob/three.js/)
- **index.html** - plik .html inicjujący stronę internetową
- **main_AR.js** - plik .js zawierający kontent AR (podpięty domyślnie)
- **main.js** - plik .js zawierający kontent w środowisku WebGL. W celu załączniea należy podmienić w pliku _index.html_

```CSS
<script type="module" src="main_AR.js"></script>
                      na
<script type="module" src="main.js"></script>
```

- **README.md** - plik markdown

---

title: GISDay 2020
author: Mateusz Orylski
date: 15.10.2020

---
