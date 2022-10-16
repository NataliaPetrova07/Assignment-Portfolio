"use strict";

import { animate, scroll, stagger, timeline, inView } from "https://cdn.skypack.dev/motion";

animate("header h1", { opacity: [0, 1] }, { duration: 5 });

document.querySelectorAll("#p1_cover").forEach((image) => {
  const header = image.querySelector("#p1_cover img");
  scroll(animate(header, { y: ["-1rem", "1rem"] }), {
    target: header,
  });
});

const items = document.querySelectorAll(".project");
scroll(
  animate(".projects_grid", {
    transform: ["translateX(-80rem)", "translateX(0)"],
  }),
  { target: document.querySelector("#projects") }
);

inView(
  "#conclusion",
  ({ target }) => {
    animate(target.querySelector("h2"), { opacity: 1, transform: "none" }, { delay: 0.2, duration: 1, easing: "ease-in-out" });
  },
  { amount: 0.15 }
);
