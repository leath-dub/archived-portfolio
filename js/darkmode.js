const modes = {DARK: 0, LIGHT: 1}

var darkmode =
[
  ["--main-bg", "var(--bg-dark)"],
  ["--font-clr", "var(--nord-ssa)"]
];

var lightmode =
[
  ["--main-bg", "var(--bg-light)"],
  ["--font-clr", "var(--nord-pna)"]
];

/* Initialize theme */
var mod = modes.DARK;
set_theme(darkmode);
mod = modes.LIGHT;

document.
  getElementById("select-theme").
    addEventListener("click", () =>
    {
      switch(mod)
        {
          case modes.DARK:
            set_theme(darkmode);
            mod = modes.LIGHT;
            break;

          case modes.LIGHT:
            set_theme(lightmode);
            mod = modes.DARK;
        }
    });

function set_theme(arr)
{
  const sun = document.querySelector(".dm-sun-icon");
  const moon = document.querySelector(".dm-moon-icon");

  moon.setAttribute("style", "opacity: " + String(mod));
  sun.setAttribute("style", "opacity: " + String((mod + 1) % 2));
  arr.forEach((elem) =>
  {
    document.documentElement.style.setProperty(elem[0], elem[1]);
  });
}
