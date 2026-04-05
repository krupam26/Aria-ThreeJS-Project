#  3D Scroll Interaction Website (Three.js)

An interactive 3D web experience where models respond to page scrolling.
The website displays an animated **lotus model** in the  sections

This project demonstrates how to combine **Three.js**, **GSAP**, and scroll detection to create smooth 3D interactions on a webpage.

---

# ✨ Features

* Interactive **3D models rendered in the browser**
* **Scroll-based animation control**
* Animated **lotus model** in the first two sections
* Smooth motion using **GSAP animation**
* Multiple lighting sources for better 3D visibility
* Transparent WebGL canvas layered with webpage content

---

# 🛠 Technologies Used

* **Three.js** – Rendering 3D models in the browser
* **GSAP** – Smooth animations and transitions
* **GLTFLoader** – Loading `.glb` / `.gltf` models
* **JavaScript (ES6)** – Logic and interactions
* **HTML & CSS** – Page layout and styling

---

# 📂 Project Structure

```
project-folder
│
├── public/
│   ├── lotus.glb
│   
│
├── src/
│   ├── main.js
│── index.css
│── index.html
│
└── README.md
```

---

# ⚙️ How It Works

### 1. Scene Setup

A **Three.js scene** is created with a camera and WebGL renderer.

```
const camera = new THREE.PerspectiveCamera(
  15,
  window.innerWidth / window.innerHeight,
  13,
  1000
);
```

---

### 2. Model Loading

Model is loaded:

* `lotus.glb` (animated)


```
loader.load('/lotus.glb', function(gltf){
  lotus = gltf.scene;
});
```

---

### 3. Scroll Detection

The script checks which **section of the page is visible**.

```
const sections = document.querySelectorAll('.section');
```

Each section has an ID:

* `first`
* `second`
* `third`

---

### 4. Model Transition

| Section | Model Displayed                  |
| ------- | -------------------------------- |
| First   | Lotus model                      |
| Second  | Lotus moves position             |
| ..      | ...                              |

The transition happens inside the `modelMove()` function.

---

### 5. Animation Loop

The render loop continuously updates the scene.

```
requestAnimationFrame(reRender3d);
renderer.render(scene, camera);
```

---

# 💡 Lighting Setup

Multiple lights improve the look of the models:

* Ambient Light
* Directional Light
* Rim Light
* Fill Light

This helps create **depth and realistic shading**.

---

# 🚀 Running the Project

1. Install dependencies (if using a build tool)

```
npm install
```

2. Run the development server

```
npm run dev
```

3. Open the site in your browser.

---

# 🎯 Possible Improvements

* Smooth scroll using a scroll library
* Fade transition between models
* Scroll-based camera movement
* Model loading progress indicator
* Responsive camera adjustment on window resize

---

# 📸 Preview Idea

The page contains multiple vertical sections.
As the user scrolls, the 3D model animates and transitions between states.

---

# 👩‍💻 Author

**Krupa**

Creative designer and AI/ML student exploring interactive 3D web experiences using modern WebGL tools.

---
