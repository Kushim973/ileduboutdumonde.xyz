function toggle_lights() {
  if (document.documentElement.getAttribute("data-theme") === "dark") {
    set_theme("light")
  } else if (document.documentElement.getAttribute("data-theme") === "light") {
    set_theme("gray")
  } else if (document.documentElement.getAttribute("data-theme") === "gray") {
    set_theme("dark")
  } else {
    set_theme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "light" : "dark")
  }
}

function set_theme(theme) {
  document.documentElement.setAttribute("data-theme", theme)
  set_giscus_theme(theme)
  localStorage.setItem("theme", theme)
}

function clear_theme_override() {
  document.documentElement.removeAttribute("data-theme");
  set_giscus_theme("preferred_color_scheme")
  localStorage.removeItem("theme")
}

function set_giscus_theme(theme) {
  let comment_form = document.querySelector("iframe.giscus-frame");
  if (comment_form != null) {
    comment_form.contentWindow.postMessage({
      giscus: { setConfig: { theme: theme } }
    }, "https://giscus.app")
  }
}