class Header {
  openCloseNav() {
    const drawer = document.getElementById("Drawer");
    drawer.style.display === "none" ? drawer.style.display = "flex" : drawer.style.display = "none";
  }
}

export { Header };